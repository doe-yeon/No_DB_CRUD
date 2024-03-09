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
  const [content, setContent] = useState("");
  const [lists, setLists] = useState([{}]);
  const newList = { title: title, content: content };
  const newLists = [...lists];
  const updatedList = { title: title, content: content };

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/read" element={<ReadPage />} />
      </Routes> */}

      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>글쓰기</Form.Label>
            <Form.Control
              type="text"
              placeholder="제목을 입력하세요"
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
            <Form.Control
              as="textarea"
              placeholder="내용을 입력하세요"
              rows={3}
              onChange={e => {
                setContent(e.target.value);
              }}
            />
            <Button
              onClick={e => {
                alert("title : " + title + "\ncontent : " + content);
              }}
              onChange={e => {
                setContent("");
              }}
            >
              입력
            </Button>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          ></Form.Group>
        </Form>
        <hr />

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <Button variant="primary">수정</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
