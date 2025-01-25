import logo from './logo.svg';
import './App.css';

import PersonaComponentProps from './Componentes/PersonaComponentProps.tsx';

function App() {

 {/* let nombre='Jessica'
  let ocupacion='Ingeniera'
  let pais='Honduras' */}


  const personas = [
    { nombre: "Jessica", ocupacion: "Shef", pais: "Honduras" },
    { nombre: "Carlos", ocupacion: "Diseñador", pais: "México" },
    { nombre: "Ana", ocupacion: "Desarrolladora", pais: "España" },
  ];


  return (
    <div className="App">
      <header className="App-header">

      <h1>Lista de Personas</h1>

      {personas.map((persona, index) => (
          <PersonaComponentProps
            key={index} 
            nombre={persona.nombre}
            ocupacion={persona.ocupacion}
            pais={persona.pais}
          />
        ))}

      </header>
    </div>
  );
}

export default App;
