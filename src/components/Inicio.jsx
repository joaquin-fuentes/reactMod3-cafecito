import imgBanner from "../assets/bannerCafe.avif"
import cafe1 from "../assets/cafeNoseNombre.jpg"
import cafe2 from "../assets/cafeConLeche.jpg"
// import cafe3 from "../assets/cafeConLeche.jpg"


import { Col, Container, Row, Card, Button } from "react-bootstrap"

const Inicio = () => {
    return (
        <>
            <Container fluid className="p-0">
                <Row>
                    <img src={imgBanner} alt="" className="imgBanner" />
                </Row>
            </Container>
            <Container className="my-4">
                <h1>Nuestros Productos</h1>
                <hr />
                <Row className="alineacionProductos">
                    <Col xs={8} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={cafe1} className="imgCafe" />
                            <Card.Body>
                                <Card.Title>Nombre del cafe</Card.Title>
                                <Card.Text>
                                    $800.00
                                </Card.Text>
                                <Button variant="primary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={cafe2} className="imgCafe" />
                            <Card.Body>
                                <Card.Title>Nombre del cafe</Card.Title>
                                <Card.Text>
                                    $800.00
                                </Card.Text>
                                <Button variant="primary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={cafe1} className="imgCafe" />
                            <Card.Body>
                                <Card.Title>Nombre del cafe</Card.Title>
                                <Card.Text>
                                    $800.00
                                </Card.Text>
                                <Button variant="primary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={cafe2} className="imgCafe" />
                            <Card.Body>
                                <Card.Title>Nombre del cafe</Card.Title>
                                <Card.Text>
                                    $800.00
                                </Card.Text>
                                <Button variant="primary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Inicio;