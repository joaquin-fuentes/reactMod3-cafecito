import { Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import Swal from "sweetalert2"

const ItemProducto = ({producto}) => {

    const borrarProducto = ()=>{
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas borrar el producto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                `El producto ${producto.nombreProducto} fue eliminado`,
                'success'
              )
              // aqui tengo que hacer la peticion DELETE 
            }
          })
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