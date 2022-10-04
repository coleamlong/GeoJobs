import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "react-external-link";

const apartments = [
  {
    name: "Chelsea On Lamar Apartments",
    location: "5106 N Lamar Blvd, Austin, TX 78751",
    price: "$1,445 - $2,395 per month",
    number_reviews: "15",
    type: "Apartment",
    rating: "4.5",
    phone: "(512) 494-4216",
    yelp: "https://www.yelp.com/biz/chelsea-on-lamar-apartments-austin?adjust_creative=rwhM1JhUkzSVVIH6ED_qaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rwhM1JhUkzSVVIH6ED_qaQ",
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/OmpI-xAGXmvIyGGUr32yhQ/o.jpg",
    yes: "yes",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.123721099212!2d-97.73339878447952!3d30.318998512504255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca662f2fd23d%3A0x8fdd02686facba68!2s5106%20N%20Lamar%20Blvd%2C%20Austin%2C%20TX%2078751!5e0!3m2!1sen!2sus!4v1664840985534!5m2!1sen!2sus"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      />
    ),
  },
  {
    name: "City Wide Apartments",
    location: "555 Eighth Ave, Ste 2310, New York, NY 10018",
    price: "$2,650 - $16,950 per month",
    number_reviews: "102",
    type: "Apartment",
    rating: "4.5",
    phone: "(212) 695-4360",
    yelp: "https://www.yelp.com/biz/city-wide-apartments-new-york-2?adjust_creative=rwhM1JhUkzSVVIH6ED_qaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rwhM1JhUkzSVVIH6ED_qaQ",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/PhDoKjaH_E6ImMp3pJatdQ/o.jpg",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.332451784567!2d-73.9942477842867!3d40.75471214293765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ad1c5bcb2b%3A0x298838dd23170b10!2s555%208th%20Ave%20%232310%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1664842910317!5m2!1sen!2sus"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      />
    ),
  },

  {
    name: "Lakewood Apartments At Lake Merced",
    location: "511 John Muir Dr, San Francisco, CA 94132",
    price: "$2,199 - $3,869 per month",
    number_reviews: "62",
    type: "Apartment",
    rating: "3.0",
    phone: "(833) 640-1001",
    yelp: "https://www.yelp.com/biz/lakewood-apartments-at-lake-merced-san-francisco?adjust_creative=rwhM1JhUkzSVVIH6ED_qaQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rwhM1JhUkzSVVIH6ED_qaQ",
    img: " https://s3-media1.fl.yelpcdn.com/bphoto/cx_m4qsKi3Xzk9W1m-bgzA/o.jpg",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.167745494072!2d-122.49972106807502!3d37.71574025863171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7d06d14f090b%3A0x4082438b9629387e!2s511%20John%20Muir%20Dr%2C%20San%20Francisco%2C%20CA%2094132!5e0!3m2!1sen!2sus!4v1664842985593!5m2!1sen!2sus"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      />
    ),
  },
];

const Apartment = () => {
  const { id } = useParams();
  return (
    <Paper
      sx={{
        p: 13,
        margin: "auto",
        maxWidth: 1000,
        flexGrow: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item></Grid>
        <Grid item xs={100} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {apartments[id - 1].name}
              </Typography>
              <Typography variant="body">
                <img
                  alt=""
                  style={{ width: 200, height: 200 }}
                  src={apartments[id - 1].img}
                />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: {apartments[id - 1].location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {apartments[id - 1].type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {apartments[id - 1].price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number of Reviews: {apartments[id - 1].number_reviews}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {apartments[id - 1].rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div>{apartments[id - 1].map}</div>
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
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <li>
                  <Link to={`/city/${id}`}>Explore City</Link>
                </li>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
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

export default Apartment;
