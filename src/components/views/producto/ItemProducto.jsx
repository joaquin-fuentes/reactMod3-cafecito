import { Button } from "react-bootstrap"
const ItemProducto = () => {
    return (
        <tr>
        <td>1</td>
        <td>Mark</td>
        <td>$800,00</td>
        <td>https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1</td>
        <td>Comun</td>
        <td className='text-center'>
            <Button className='m-1' variant="warning">Editar</Button>
            <Button className='m-1' variant="danger">Borrar</Button>
        </td>
    </tr>
    );
};

export default ItemProducto;