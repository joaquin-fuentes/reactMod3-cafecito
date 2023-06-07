import { Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

const ItemProducto = ({producto}) => {

    const borrarProducto = ()=>{
        
    }

    return (
     <tr>
        <td>{producto.id}</td>
        <td>{producto.nombreProducto}</td>
        <td>{producto.precio}</td>
        <td>{producto.imagen}</td>
        <td>{producto.categoria}</td>
        <td className='text-center'>
        <Link  to={"/administrador/editar"} className={"btn btn-warning m-1"} >Editar</Link>
        <Button className='m-1' variant="danger" onClick={borrarProducto}>Borrar</Button>
        </td>
    </tr>
    );
};

export default ItemProducto;