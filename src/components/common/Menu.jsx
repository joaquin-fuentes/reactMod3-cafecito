import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"


const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {



    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Cafecito</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink end to={"/"} className={"nav-item nav-link"} >Inicio</NavLink>
                        <NavLink end to={"/registro"} className={"nav-item nav-link"}>Registro</NavLink>
                        {
                          usuarioLogueado.email?
                          <>                          
                            <NavLink end to={"/administrador"} className={"nav-item nav-link"}>Administrador</NavLink>
                            <Button variant="dark">Logout</Button>
                          </>
                          :
                          <NavLink end to={"/login"} className={"nav-item nav-link"}>Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;