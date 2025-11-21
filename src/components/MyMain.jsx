import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap"

const MyMain = () => {
  return (
    <main className="bg-dark">
      <Container className="text-light mx-0 " width="100%">
        <Row className="align-items-center">
          <Col>
            <h1>TV Shows</h1>
            <DropdownButton
              id="dropdown-basic-button"
              title="Genres"
              variant="danger"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
export default MyMain
