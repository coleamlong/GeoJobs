import React from 'react'

const About = () => {
  return (
    <div>
      About
    </div>
  )
}

export default About
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Modal from "react-bootstrap/Modal";
// import Stack from "react-bootstrap/Stack";

// import DeveloperCards from "../components/About/DeveloperCards";

// const client = axios.create({
//   baseURL: "https://gitlab.com/api/v4/",
//   headers: { Authorization: "Bearer glpat-MweTEhPuWf9NugsqWnQy" },
// });

// const About = () => {
//   const [commits, setCommits] = useState([]);
//   const [issues, setIssues] = useState([]);
//   const [unitTests, setUnitTests] = useState([])


//   useEffect(() => {
//     client.get("projects/39707042/repository/commits").then((response) => {
//       console.log(response.data);
//       setCommits(response.data);
//     });
//     client.get("projects/39707042/issues").then((response) => {
//       console.log(response.data);
//       setIssues(response.data);
//     });
//     // client.get("projects/39707042/repository/commits").then((response) => {
//     //   console.log(response.data);
//     //   setCommits(response.data);
//     // });
//   }, []);

//   return (
//     <div>
//       <Stack>
//         <h1 className="d-flex justify-content-center">Purpose of Site</h1>
//         <p className="d-flex justify-content-center">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//           libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse
//           sollicitudin ante sit amet auctor ullamcorper.
//         </p>
//         <h1 className="d-flex justify-content-center">
//           Explanation of the interesting result of integrating disparate data
//         </h1>
//         <p className="d-flex justify-content-center">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//           libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse
//           sollicitudin ante sit amet auctor ullamcorper.
//         </p>
//         <DeveloperCards />
//         <Modal.Dialog>
//           <Modal.Title>Overall Stats</Modal.Title>
//           <Modal.Body>
//             <p>Total Commits: {}</p>
//             <p>Total Issues: {}</p>
//             <p>Total Unit Tests: 000</p>
//           </Modal.Body>
//         </Modal.Dialog>
//       </Stack>
//     </div>
//   );
// };

// export default About;
