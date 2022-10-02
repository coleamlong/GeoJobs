import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const apartments = [
    
  {   
  name: "The Vaughan",
  location: "Austin, TX",
  price: "$1643 - 2664",
  number_of_bedrooms: "1-3 Bed",
  type: "Apartment",
  rating: "4 Stars",
  move_in: "October"
  },

  {   
  name: "EOS",
  location: "New York, NY",
  price: "$4555 - 7345",
  number_of_bedrooms: "Studio-2 Bed",
  type: "Apartment",
  rating: "4.9 Stars",
  move_in: "October"
  },

  {  
  name: "ZEN Hollywood",
  location: "Los Angeles, CA",
  price: "$4125 - 8500",
  number_of_bedrooms: "1-3 Bed",
  type: "Apartment",
  rating: "5 Stars",
  move_in: "October"
  }
]

const Apartment = () => {
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
                {apartments[id - 1].name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Move in Date: {apartments[id - 1].move_in}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {apartments[id - 1].type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number of bedrooms: {apartments[id - 1].number_of_bedrooms}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {apartments[id - 1].rating}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <li>
                <Link to={`/city/${id}`}>Explore City</Link>
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
              Price: {apartments[id - 1].price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
  
}; 


export default Apartment