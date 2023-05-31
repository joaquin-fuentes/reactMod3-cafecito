import React from 'react';
import { Container, Button, Table } from "react-bootstrap"
import ItemProducto from './producto/ItemProducto';

const Administrador = () => {
    return (
        <Container className='my-5'>
            <div className='d-flex justify-content-between '>
                <h3>Productos disponibles</h3>
                <Button variant="primary" href="/administrador/crear">
                    Agregar
                </Button>
            </div>
            <hr />
            <Table striped responsive bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>URL de imagen</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                   <ItemProducto></ItemProducto>
                   <ItemProducto></ItemProducto>
                   <ItemProducto></ItemProducto>
                   <ItemProducto></ItemProducto>

                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;