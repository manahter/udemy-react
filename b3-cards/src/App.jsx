import { useState } from "react";
import "./App.css";
import Angular from "./assets/images/angular.jpg";
import Bootstrap from "./assets/images/bootstrap5.png";
import Ccsharp from "./assets/images/ccsharp.png";
import KompleWeb from "./assets/images/kompleweb.jpg";

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap";

import Card from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container fluid className="bg-primary text-light mb-5" style={{ height: "100px" }}>
        <Container className="h-100 ">
          <Row className="align-items-center h-100">
            <h2 className="fw-bold">Kurslarım</h2>
          </Row>
        </Container>
      </Container>
      <Container className="mb-5">
        <Row className="gap-3">
          <Card
            image={Angular}
            title="Angular"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque consequuntur voluptatum quo beatae, assumenda, laboriosam sapiente incidunt minima maxime, eveniet unde? Dolor velit numquam voluptatum magni, voluptas aspernatur quia." />
          <Card
            image={Bootstrap}
            title="Bootstrap"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque consequuntur voluptatum quo beatae, assumenda, laboriosam sapiente incidunt minima maxime, eveniet unde? Dolor velit numquam voluptatum magni, voluptas aspernatur quia." />
          <Card
            image={Ccsharp}
            title="Ccsharp"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque consequuntur voluptatum quo beatae, assumenda, laboriosam sapiente incidunt minima maxime, eveniet unde? Dolor velit numquam voluptatum magni, voluptas aspernatur quia." />
          <Card
            image={KompleWeb}
            title="KompleWeb"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque consequuntur voluptatum quo beatae, assumenda, laboriosam sapiente incidunt minima maxime, eveniet unde? Dolor velit numquam voluptatum magni, voluptas aspernatur quia." />
        </Row>
      </Container>
    </>
  );
}


export default App;
