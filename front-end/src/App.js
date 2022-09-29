import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

const client = axios.create({
  baseURL: "https://gitlab.com/api/v4/"
})

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.get('projects/39707042/repository/commits').then((response) => {
       setPosts(response.data);
    });
  }, []);

  return (
    <div className="App d-flex justify-content-center">
      <Modal.Dialog>
        <Modal.Header className='d-flex justify-content-center'>
          <Modal.Title>Stats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Total Commits: {posts.length}</p>
          <p>Total Issues: </p>
          <p>Total Unit Teteststs: </p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default App;
