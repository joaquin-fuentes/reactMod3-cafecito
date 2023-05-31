import {Container, Nav, Navbar} from "react-bootstrap"

const Menu = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="/">Cafecito</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/registro">Registro</Nav.Link>
                    <Nav.Link href="/administrador">Administrador</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;