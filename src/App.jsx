import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {Container} from "react-bootstrap"

const App = () => {
  return (
    <>
      <Menu></Menu>
      <Container className='mainPage'></Container>
      <Footer></Footer>
    </>
  );
};

export default App;