import { Button, Form, Container } from "react-bootstrap"
import { useForm } from "react-hook-form";


const CrearProducto = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        // reset
    } = useForm();

    const onSubmit = ()=>{
        console.log("paso la validacion")
    }

    return (
        <Container className="my-4">
            <h2>Nuevo producto</h2>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Producto*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Cafe" maxLength={30} {
                                ...register('nombreProducto', {
                                    required: 'El campo es obligatorio',
                                     minLength:{
                                        value:2,
                                        message:"Este campo debe tener como minimo 2 caracteres"
                                      },
                                      maxLength:{
                                        value:30,
                                        message:"Este campo debe tener como maximo 30 caracteres"
                                      },
                                    pattern: {
                                        value: /^.{2,30}$/,
                                        message: "El password debe tener entre 6 y 20 caracteres"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.nombreProducto?.message}
                            </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control type="number" placeholder="Ej:50" maxLength={5} {
                                ...register('precio', {
                                    required: 'El campo es obligatorio',
                                    pattern: {
                                        value: /^(?:[1-9]\d{0,4}|100000)$/,
                                        message: "Debe ingresar un numero entre 1 y 1000000"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.precio?.message}
                            </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"  maxLength={250} {
                                ...register('imagen', {
                                    required: 'El campo es obligatorio',
                                     minLength:{
                                        value:5,
                                        message:"Este campo debe tener como minimo 5 caracteres"
                                      },
                                      maxLength:{
                                        value:250,
                                        message:"Este campo debe tener como maximo 250 caracteres"
                                      },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+\.(png|jpg)$/,
                                        message: "La imagen debe estar en formaro .png o .jpg"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.imagen?.message}
                            </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    {/* CONSULTAR A LOS PROFES DONDE VAN LAS VALIDACIONES EN ESTE CASO */}
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
                        maxLength={500} {
                            ...register('descripcion', {
                                required: 'El campo es obligatorio',
                                 minLength:{
                                    value:5,
                                    message:"Este campo debe tener como minimo 5 caracteres"
                                  },
                                  maxLength:{
                                    value:500,
                                    message:"Este campo debe tener como maximo 500 caracteres"
                                  },
                            })
                        } />
                        <Form.Text className="text-danger">
                            {errors.descripcion?.message}
                        </Form.Text>

                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default CrearProducto;