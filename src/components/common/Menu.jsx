import {Container, Nav, Navbar} from "react-bootstrap"

const Menu = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Cafecito</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Registro</Nav.Link>
                    <Nav.Link href="#pricing">Administrador</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;