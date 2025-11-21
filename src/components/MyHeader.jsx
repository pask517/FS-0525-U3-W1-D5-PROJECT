import { Container, Navbar, Nav } from "react-bootstrap"
import { BellFill, Search, ChevronDown } from "react-bootstrap-icons"
const MyHeader = () => {
  return (
    <header className="d-flex">
      <Navbar collapseOnSelect expand="lg" className="bg-dark w-100">
        <Container className="mx-0">
          <Navbar.Brand href="#home">
            <img src="../src/myassets/logo.png" width="150px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light fs-5" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light fs-5" href="#tvshows">
                Tv Shows
              </Nav.Link>
              <Nav.Link className="text-light fs-5" href="#movies">
                Movies
              </Nav.Link>
              <Nav.Link className="text-light fs-5" href="#recentlyadded">
                Recently added
              </Nav.Link>
              <Nav.Link className="text-light fs-5" href="#mylist">
                My List
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-light fs-5" href="#search">
                <Search />
              </Nav.Link>
              <Nav.Link className="text-light fs-5" eventKey={2} href="#kids">
                KIDS
              </Nav.Link>
              <Nav.Link className="text-light fs-5" href="#notifications">
                <BellFill />
              </Nav.Link>
              <Nav.Link className="text-light fs-5" href="#notifications">
                <img src="https://placebear.com/40/40" alt="" />
              </Nav.Link>
              <Nav.Link className="text-light fs-5" href="#notifications">
                <ChevronDown />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default MyHeader
