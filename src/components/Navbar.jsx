import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TypesExample from './Buttons';
import LoginForm from './FormLogin';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary justify-content-end" variant="dark">
        <Container>
          <Nav className="justify-content-end w-100">
            <TypesExample />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;