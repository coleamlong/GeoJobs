import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const jobs = [
  {   
  description: "Your Job As a Software Engineering Leader, you will craft a long-term technology vision, deliver high quality software.",
  title: "Software Engineer",
  salary: "$100000",
  company: "Amazon",
  contract_time: "Full-time",
  },

  {   
    description: "The IT Engineer will be responsible for managing and maintaining ConnectOne Bank’s Network Security program. This includes helping in the design, development, and maintenance of the bank’s network security infrastructure to ensure it is in-line with current industry best standards and practices. The IT Security Engineer will also provide mentoring, training, and leadership to the IT Security team.",
    title: "IT Engineer",
    salary: "$80000",
    company: "Indeed",
    contract_time: "Full-time",
  },

  {   
    description: "Your Job As a Software Engineering Leader, you will craft a long-term technology vision, deliver high quality software,",
    title: "Software Engineer",
    salary: "$100000",
    company: "Amazon",
    contract_time: "Full-time",
  },
]

const Job = () => {
  const { id }  = useParams();
  return (
    <Paper
      sx={{
        p: 13,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {jobs[id - 1].name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Desciption: {jobs[id - 1].description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Title: {jobs[id - 1].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Company: {jobs[id - 1].company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contract Time: {jobs[id - 1].contract_time}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <li>
                <Link to={`/apartment/${id}`}>Find Apartment In City</Link>
              </li>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <li>
                <Link to={`/city/${id}`}>Find Out More About City</Link>
              </li>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              Salary: {jobs[id - 1].salary}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Job