import { Col, Button } from "react-bootstrap"
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons"

const MyFooter = () => {
  return (
    <footer className="bg-dark d-flex justify-content-center">
      <Col className="col-5">
        <div className="fs-3 mb-2">
          <a href="https://facebook.com" className="me-2">
            <Facebook />
          </a>
          <a
            className="me-2"
            href="https://instagram.com"
            style={{ color: "purple" }}
          >
            <Instagram />
          </a>
          <a className="me-2" href="https://twitter.com">
            <Twitter />
          </a>
          <a
            className="me-2"
            href="https://youtube.com"
            style={{ color: "red" }}
          >
            <Youtube />
          </a>
        </div>
        <div className="text-secondary mb-2">
          <small className="me-5">Audio And Subtitles</small>
          <small className="me-5">Audio Description</small>
          <small className="me-5">Help Center</small>
          <small className="me-5">Gift Cards</small>
        </div>
        <div className="text-secondary mb-2">
          <small className="me-5">Media Center</small>
          <small className="me-5">Investor Relations</small>
          <small className="me-5">Jobs</small>
          <small className="me-5">Terms Of USe</small>
        </div>
        <div className="text-secondary mb-2">
          <small className="me-5">Privacy</small>
          <small className="me-5">Legal Notices</small>
          <small className="me-5">Cookie Preferences</small>
          <small className="me-5">Corporate Informations</small>
        </div>
        <div className="text-secondary mb-2">
          <small className="me-5">Contact Us</small>
        </div>
        <div className="mb-2">
          <Button variant="outline-secondary">Service Code</Button>
        </div>
        <div className="text-secondary">
          <p>EPICODE-2025</p>
        </div>
      </Col>
    </footer>
  )
}
export default MyFooter
