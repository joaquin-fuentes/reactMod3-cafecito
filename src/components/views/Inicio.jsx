import imgBanner from "../../assets/bannerCafe.avif"
import { Container, Row } from "react-bootstrap"
import CardProducto from "./producto/CardProducto";



const Inicio = () => {
    return (
        <main className="main">
            <Container fluid className="p-0">
                <Row>
                    <img src={imgBanner} alt="" className="imgBanner" />
                </Row>
            </Container>
            <Container className="my-4">
                <h1>Nuestros Productos</h1>
                <hr />
                <Row className="alineacionProductos">
                   <CardProducto></CardProducto>
                   <CardProducto></CardProducto>
                   <CardProducto></CardProducto>
                   <CardProducto></CardProducto>
                </Row>
            </Container>
        </main>
    );
};

export default Inicio;