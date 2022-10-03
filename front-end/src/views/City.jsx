import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ExternalLink } from 'react-external-link';

const cities = [
  {   
  name: "Austin",
  activities: "Charming, Foodie, Nightlife, Performing Arts, Music, College-town, Outdoorsy, Wineries, Shopping",
  walk_score: "https://www.walkscore.com/TX/Austin",
  average_rating: "4.27",
  budget: "7 out of 8",
  safety_score: "5 out of 5",
  img: "https://cdn.roadgoat.com/uploads/photo/image/382/large_travel-guide-of-austin-tx-usa-original.jpg"
  },

  {   
  name: "Ney York",
  activities: "Charming, Foodie, Nightlife, Architecture, History, Museums, Performing Arts, Posh, LGBT Scene, Diversity, Shopping",
  walk_score: "https://www.walkscore.com/NY/New_York",
  average_rating: "4.31",
  budget: "8 out of 8",
  safety_score: "4 out of 5 ",
  img: "https://cdn.roadgoat.com/uploads/photo/image/608/large_travel-guide-of-new-york-ny-usa-original.jpg"
  },

  {   
    name: "San Francisco",
    activities: "Charming, Foodie, Nightlife, Architecture, Hipster, Hippie, LGBT Scene, Diversity ,Shopping",
    walk_score: "https://www.walkscore.com/CA/San_Francisco",
    average_rating: "4.47",
    budget: "8 out of 8",
    safety_score: "4 out of 5 ",
    img: "https://cdn.roadgoat.com/uploads/photo/image/692/large_travel-guide-of-san-francisco-ca-usa-original.jpg"
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
              <Typography variant="body2" color="text.secondary">
                Known For: {cities[id - 1].activities}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Rating: {cities[id - 1].average_rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Safety Score: {cities[id - 1].safety_score}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Budget Score: {cities[id - 1].budget}
              </Typography>
            </Grid>
            <Grid item>
            <Typography variant="body2" color="text.secondary">
              <li>
                  <ExternalLink href={cities[id - 1].walk_score}>
                    <span>Walk Score</span>
                  </ExternalLink>
              </li>
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
              <Typography variant="body">
                  <img style={{ width: 800, height: 600 }} src={cities[id - 1].img}/>
              </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default City