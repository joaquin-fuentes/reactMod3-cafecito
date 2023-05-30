import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {Container} from "react-bootstrap"
import Error404 from "./components/Error404";
import Inicio from "./components/Inicio";

const App = () => {
  return (
    <>
      <Menu></Menu>
      {/* <Container className='mainPage'> */}
        {/* <Error404></Error404> */}
        <Inicio></Inicio>
      {/* </Container> */}
      <Footer></Footer>
    </>
  );
};

export default App;