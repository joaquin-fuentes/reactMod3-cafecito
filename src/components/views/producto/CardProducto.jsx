import { Card, Col, Button } from "react-bootstrap"
import cafe1 from "../../../assets/cafeNoseNombre.jpg"

const CardProducto = () => {
    return (
        <Col xs={8} md={4} lg={3}>
            <Card className="m-1">
                <Card.Img variant="top" src={cafe1} className="imgCafe" />
                <Card.Body>
                    <Card.Title>Nombre del cafe</Card.Title>
                    <Card.Text>
                        $800,00
                    </Card.Text>
                    <Button variant="primary">Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;