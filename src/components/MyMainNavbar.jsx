import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap"
import { CardList, ViewList } from "react-bootstrap-icons"

const MyMainNavbar = () => {
  return (
    <Container className="text-light mb-4" fluid>
      <Row className="align-items-center">
        <Col>
          <div className="d-flex align-items-center ms-2">
            <h1 className="me-3 ms-2">TV Shows</h1>
            <DropdownButton
              title="Genres"
              variant="outline-light"
              className="bg-black d-inline-block"
            >
              <Dropdown.Item href="#horror">Horror</Dropdown.Item>
              <Dropdown.Item href="#action">Action</Dropdown.Item>
              <Dropdown.Item href="#romance">Romance</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
        <Col className="text-end">
          <div className="me-2">
            <CardList className="fs-3 " />
            <ViewList className="fs-3 " />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default MyMainNavbar
