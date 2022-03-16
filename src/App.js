import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';// importo componente NavBar.js


//para llamar al componente uso etiqueta dentro de return
function App() {
  return (
    <div className="conteiner">
      <header>
        <NavBar/>
      </header>
        
    </div>
  );
}

export default App;
