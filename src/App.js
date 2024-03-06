import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Create from "./Create";
import { Routes, Route } from "react-router-dom";
// import Create from "./Create";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <Button>
        {/* <Routes>
          <Route path="/create" element={<Create />} />
        </Routes> */}
      </Button>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">수정</Button>
        </Card.Body>
      </Card> */}

      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="제목을 입력하세요"
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />

            <Button
              onClick={e => {
                alert(title);
              }}
            >
              확인
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
