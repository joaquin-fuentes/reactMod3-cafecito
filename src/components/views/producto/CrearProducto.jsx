import { Button, Form, Container } from "react-bootstrap"

const CrearProducto = () => {
    return (
        <Container className="my-4">
            <h2>Nuevo producto</h2>
            <hr />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Producto*</Form.Label>
                    <Form.Control type="text" placeholder="El: Cafe" />
                    {/* <Form.Text className="text-muted">
                       
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control type="number" placeholder="Ej:50" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="">Seleccione una opcion</option>
                        <option value="1">opcion 1</option>
                        <option value="2">opcion 2</option>
                        <option value="3">opcion 3</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                   <Form.Label>Descripcion*</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Ingrese una descripcion del producto"
                        style={{ height: '100px' }}
                        // onChange={(e) => setDescripcion(e.target.value)}
                        // value={descripcion}
                    />

                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default CrearProducto;