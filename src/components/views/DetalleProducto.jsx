import { Container, Row, Col } from "react-bootstrap"
import cafe1 from "../../assets/cafeNoseNombre.jpg"

const DetalleProducto = () => {
    return (
        <Container >
            <Row className="my-4 border rounded">
                <Col xs={12} md={6} className="text-center bg-dark" >
                    <img src={cafe1} alt="imagen de producto" />
                </Col>
                <Col xs={12} md={6} >
                    <article className="p-2">
                        <h3>Nombre Producto</h3>
                        <hr />
                        <p>Descripcion, Combinacion perfecta entre leche, chocolate,
                            cafe intenso, y un toque de canela. Café con granos 100%
                            de arabica brasileña. Todo en una capsula inteligente.
                        </p>
                        <br />
                        <p className="text-danger">Categoria: <span className="text-dark">Café</span></p>
                        <p className="text-danger">Precio: <span className="text-dark">$800,00</span></p>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default DetalleProducto;