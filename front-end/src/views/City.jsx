import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const cities = [
  {   
  name: "Austin",
  transit: "Good",
  walk_score: "80",
  average_rating: "Good",
  budget: "Expensive",
  safety_score: "4 Stars" 
  },

  {   
  name: "Ney York",
  transit: "Excellent",
  walk_score: "80",
  average_rating: "Good",
  budget: "Expensive",
  safety_score: "4 Stars" 
  },

  {   
    name: "Los Angeles",
    transit: "Good",
    walk_score: "80",
    average_rating: "Good",
    budget: "Expensive",
    safety_score: "4 Stars" 
    },
]

const City = () => {
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
                {cities[id - 1].name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Transit: {cities[id - 1].transit}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Walk Score: {cities[id - 1].walk_score}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Rating: {cities[id - 1].average_rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Safety Score: {cities[id - 1].safety_score}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <li>
                <Link to={`/apartment/${id}`}>Find Apartment</Link>
              </li>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <li>
                <Link to={`/job/${id}`}>Find Job</Link>
              </li>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              Budget Score: {cities[id - 1].budget}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default City