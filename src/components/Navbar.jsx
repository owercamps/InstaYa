import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import ButtonSave from './Buttons';

function NavBarHeader() {
  return (
    <>
      <Navbar bg="primary justify-content-end" variant="dark">
        <Container>
          <Nav className="w-100 justify-content-between">
          <Image src='src\assets\img\logo.svg' width={ 30 } height={ 30 } className="mt-1 ml-2" />
            <ButtonSave />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarHeader;