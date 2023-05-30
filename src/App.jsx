import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {Container} from "react-bootstrap"
import Error404 from "./components/Error404";
import Inicio from "./components/Inicio";
import DetalleProducto from "./components/DetalleProducto";
import CrearProducto from "./components/CrearProducto";
import EditarProducto from "./components/EditarProducto";
import Administrador from "./components/Administrador";

const App = () => {
  return (
    <>
      <Menu></Menu>
      {/* <Container className='mainPage'> */}
        {/* <Error404></Error404> */}
        {/* <Inicio></Inicio> */}
        {/* <DetalleProducto></DetalleProducto> */}
        {/* <CrearProducto></CrearProducto> */}
        {/* <EditarProducto></EditarProducto> */}
        <Administrador></Administrador>
      {/* </Container> */}
      <Footer></Footer>
    </>
  );
};

export default App;