import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <Form className='container shadow p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Usuario" />
        <Form.Text className="text-muted ps-2">
          No comparta su usuario con nadie
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar" />
      </Form.Group>
      <Nav className='flex justify-content-center'>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Nav>
    </Form>
  );
}

export default LoginForm;