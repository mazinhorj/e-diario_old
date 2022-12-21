import './App.css';
import ButtonPadrao from './components/ButtonPadrao';
import Footer from './components/Footer';
import Logo from './components/Logo';


function App() {
  return (
    <>
      <div className="App">
        <h1>E-Diário 2023</h1>
        <Logo />
        <ButtonPadrao id={"login"} text={"Login"} action={(e) => console.log("testou")}/>
      </div>
      <>
        <Footer />
      </>
    </>
  )
}

export default App
