import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ExternalLink } from 'react-external-link';

const apartments = [
    
  {   
  name: "Chelsea On Lamar Apartments",
  location: "5106 N Lamar Blvd, Austin, TX 78751",
  price: "$1643 - 2664",
  number_reviews: "15",
  type: "Apartment",
  rating: "4.5",
  phone: "(512) 494-4216",
  yelp: "https://www.yelp.com/biz/chelsea-on-lamar-apartments-austin?adjust_creative=rwhM1JhUkzSVVIH6ED_qaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rwhM1JhUkzSVVIH6ED_qaQ",
  img: "https://s3-media2.fl.yelpcdn.com/bphoto/OmpI-xAGXmvIyGGUr32yhQ/o.jpg"
  },
  {  
    name: "City Wide Apartments",
    location: "555 Eighth Ave, Ste 2310, New York, NY 10018",
    number_reviews: "102",
    type: "Apartment",
    rating: "4.5",
    phone: "(212) 695-4360",
    yelp:"https://www.yelp.com/biz/city-wide-apartments-new-york-2?adjust_creative=rwhM1JhUkzSVVIH6ED_qaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rwhM1JhUkzSVVIH6ED_qaQ",
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/ieLA3JCzPTp8fDsSPDJqdA/o.jpg"
  },

  {   
    name: "Lakewood Apartments At Lake Merced",
    location: "511 John Muir Dr, San Francisco, CA 94132",
    number_reviews: "62",
    type: "Apartment",
    rating: "3.0",
    phone: "(833) 640-1001",
    yelp:"https://www.yelp.com/biz/lakewood-apartments-at-lake-merced-san-francisco?adjust_creative=rwhM1JhUkzSVVIH6ED_qaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rwhM1JhUkzSVVIH6ED_qaQ",
    img: " https://s3-media1.fl.yelpcdn.com/bphoto/cx_m4qsKi3Xzk9W1m-bgzA/o.jpg"
  },
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
        <Grid item xs={100} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {apartments[id - 1].name}
              </Typography>
              <Typography variant="body">
                <img style={{ width: 200, height: 200 }} src={apartments[id - 1].img}/>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: {apartments[id - 1].location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {apartments[id - 1].type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number of Reviews: {apartments[id - 1].number_reviews}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {apartments[id - 1].rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <li>
                  <ExternalLink href={apartments[id - 1].yelp}>
                    <span>Yelp Review</span>
                  </ExternalLink>
              </li>
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
              phone: {apartments[id - 1].phone}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
  
}; 


export default Apartment