// modelo de crud (controller) * Service = nome do objetivo

const { Service: ServiceModel } = require('../models/Service');

const serviceController = {

  // inserir dados no banco - C do CRUD
  create: async (req, res) => {
    try {
      const service = {
        // campos de acordo com o model correspondente
        name: req.body.name,
        description: req.body.description,
      };

      const response = await ServiceModel.create(service);
      res.status(201).json({ response, msg: "Serviço registrado com sucesso!" });
    } catch (error) {
      console.log(`Xiiii... Não foi dessa vez: ${error}`);
    };
  },

  // resgatar todos os dados - R do CRUD
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log(`Xiiii... Não sei de nada: ${error}`)
    };
  },

  // resgatar com filtro - R do CRUD
  get: async (req, res) => {
    try {
      // id => URL === GET
      const id = req.params.id
      const service = await ServiceModel.findById(id);
      if (!service) {
        res.status(404).json({ msg: "Não achei o que você procura" });
        return;
      };
      res.json(service);
    } catch (error) {
      console.log(`Xiiii... Tem certeza: ${error}`)
    };
  },

  // deletar do banco - !!! FAZER VALIDAÇÕES NO FRONT !!! NÃO TEM CTRL+Z !!! D do CRUD
  delete: async (req, res) => {
    try {
      const id = req.params.id
      const service = await ServiceModel.findById(id);
      if (!service) {
        res.status(404).json({ msg: "Não achei o que você procura para deletar" });
        return;
      };
      const deleteService = await ServiceModel.findByIdAndDelete(id);
      res.status(200).json({deleteService, msg: "Serviço excluído com sucesso"});
    } catch (error) {
      console.log(`Xiiii... Não apagou: ${error}`)
    };
  },

  // atualizar registro - ASSIM COMO MO INSERT, RESPEITAR O MODEL - U do CRUD
  update: async (req, res) => {
    const id = req.params.id
    const service = {
      name: req.body.name,
      description: req.body.description,
    };
    const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
    if (!updatedService) {
      res.status(404).json({ msg: "Não achei o que você procura para editar" });
      return;
    };
    res.status(200).json({service, msg: "Atualizado com sucesso"});
  }
};

module.exports = serviceController;