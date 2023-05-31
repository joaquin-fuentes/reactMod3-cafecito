import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Administrador from "./components/views/Administrador";
import Registro from "./components/views/Registro"
import Login from "./components/views/Login"


const App = () => {
  return (

    <BrowserRouter>
      <Menu></Menu>
      <Routes> <Route exact path="/" element={<Inicio></Inicio>} ></Route></Routes>
      <Routes> <Route exact path="/registro" element={<Registro></Registro>} ></Route></Routes>
      <Routes> <Route exact path="/login" element={<Login></Login>} ></Route></Routes>
      <Routes> <Route exact path="/administrador" element={<Administrador></Administrador>} ></Route></Routes>
      <Routes> <Route exact path="/administrador/crear" element={<CrearProducto></CrearProducto>} ></Route></Routes>
      <Routes> <Route exact path="/administrador/editar" element={<EditarProducto></EditarProducto>} ></Route></Routes>
      <Routes> <Route exact path="/detalleProducto" element={<DetalleProducto></DetalleProducto>} ></Route></Routes>
      <Routes> <Route path="*" element={<Error404></Error404>} ></Route></Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
};

export default App;