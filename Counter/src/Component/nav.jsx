import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" fixed='top' className="bg-dark">
      <Container>
        <Navbar.Brand className='text-white' href="#">Counter</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;