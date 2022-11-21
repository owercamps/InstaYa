import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from "./components/Navbar";
import { Container, Nav } from 'react-bootstrap';
import LoginForm from './components/FormLogin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorSchemesExample />
    <Nav className='container p-4 mt-5'>
      <Container>
        <LoginForm />
      </Container>
    </Nav>
  </React.StrictMode>
)
