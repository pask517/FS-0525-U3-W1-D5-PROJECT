import { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
const LordOfTheRingsUrl =
  "https://www.omdbapi.com/?apikey=c3583535&s=Lord Of The Rings"
class MyLordOfTheRingsFilmList extends Component {
  state = {
    films: [],
  }
  fetchFilms = () => {
    fetch(LordOfTheRingsUrl)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nella chiamata")
        }
      })
      .then((data) => {
        this.setState({
          films: data.Search.slice(0, 6),
        })
      })
      .catch((err) => {
        console.log("Errore", err)
      })
  }
  componentDidMount() {
    this.fetchFilms()
  }

  render() {
    return (
      <>
        <h3 className="text-light ms-4">Lord Of The Rings Saga</h3>
        <Container className="text-light pb-4" fluid>
          <Row xs={2} md={3} lg={6}>
            {this.state.films.map((film) => {
              return (
                <Col className="mb-3" key={film.imdbID}>
                  <Card className="p-0 border-0 h-100">
                    <Card.Img
                      variant="top"
                      src={film.Poster}
                      className="h-100"
                    />
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}
export default MyLordOfTheRingsFilmList
