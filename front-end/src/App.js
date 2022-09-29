import React, { useState, useEffect } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";

import GroupInfo from "./components/GroupInfo";

const client = axios.create({
  baseURL: "https://gitlab.com/api/v4/",
  headers: {'Authorization': 'Bearer glpat-MweTEhPuWf9NugsqWnQy'}
})

const App = () => {
  const [numCommits, setNumCommits] = useState(0)
  
  useEffect(() => {
    client.get('projects/39707042/repository/commits').then((response) => {
      console.log(response.data)
      setNumCommits(Object.keys(response.data).length)
    });
  }, []);

  return (
    <div className="App">
      <Stack>
        <h1 className="d-flex justify-content-center">Purpose of Site</h1>
        <p className="d-flex justify-content-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse sollicitudin ante sit amet auctor ullamcorper.
        </p>
        <h1 className="d-flex justify-content-center">Explanation of the interesting result of integrating disparate data</h1>
        <p className="d-flex justify-content-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse sollicitudin ante sit amet auctor ullamcorper.
        </p>
        <GroupInfo />
        <Modal.Dialog>
          <Modal.Title>Overall Stats</Modal.Title>
          <Modal.Body>
            <p>Total Commits: {numCommits}</p>
            <p>Total Issues: 000</p>
            <p>Total Unit Tests: 000</p>
          </Modal.Body>
        </Modal.Dialog>
      </Stack>
    </div>
  );
}

export default App;
