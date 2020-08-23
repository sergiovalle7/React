import React from 'react';
import { Switch, Route} from 'react-router';
import { NavLink,useHistory   } from 'react-router-dom';
import './App.css';
import NestedGrid from './Productos.js';
import ButtonBases from './Home.js';
import AdaptingHook from './About.js';
import MediaCard  from './Vehiculos.js';
import MediaCard2  from './Motos.js';
import SimpleAlerts from './footer.js'

const navjson = [{ text: "Home", link: "/" }, { text: "Acerca De esta página", link: "/about" },{ text: "Productos", link: "/productos" },{ text: "Vehiculos", link: "/Vehiculos" },{ text: "Motos", link: "/Motos" }];


const Navbar = () => {
  return (
      <nav>
        <ul>
          {navjson.map((item, i) =><li key={i}><NavLink to={item.link} exact  activeClassName="activa">{item.text}</NavLink></li>)}
        </ul>
      </nav> 
    )
  }


const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Compra lo que quieras</h1>
        </header>
        
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/Vehiculos" component={Vehiculos} />
          <Route exact path="/Motos" component={Motos} />
          <Route path="*" component={Error404} />
        </Switch>
        <footer><SimpleAlerts/></footer>
      </div>
    );  
}

const Home = () => {
    return (
      <section>
        <h2> Home</h2>
        <ButtonBases/>
      </section>
    );
}

const About = () => {
    return (
      <section>
        <h2>Sobre nosotros</h2>
        <AdaptingHook/>
      </section>
    );
}

const Productos = () => {
    return (
      <section>
        <h2>Prueba Grids</h2>
        <NestedGrid/>
      </section>
    );  
}
const Vehiculos = () => {
  return (
    <section>
      <h2>Los Vehiculos</h2>
      <MediaCard/>
    </section>
  );  
}
const Motos = () => {
  return (
    <section>
      <h2>Las mejores Motos</h2>
      <MediaCard2/>
    </section>
  );  
}
const Error404 = () => {
  return (
    <section>
      <h2>Página no encontrada</h2>
      <HomeButton/>
    </section>
  );
}

const HomeButton = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Regresar a la Home
    </button>
  );
}

export default App;