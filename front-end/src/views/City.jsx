import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "react-external-link";
import { TwitterTimelineEmbed } from "react-twitter-embed";


const City = () => {
  const { id } = useParams();
  let [cities, setCity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCity(null);
      await axios.get(
        `https://api.geojobs.me/cities/${id}`
      );
      let data = response.data["data"];
      setCity(data["cities"]);
    };
    fetchData();
  }, [cities]);

  return (
    <Container
      className="page-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: (cities ?? []).length === 0 ? "100%" : "none",
      }}
    >
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
      >
      Cities
      </Typography>
      {cities === null}
      {cities !== null && (
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
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {cities.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Known For: {cities.tags}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Rating: {cities.average_rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Safety Score: {cities.safety}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Budget Score: {cities.budget}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Population: {cities.population}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                <li>
                  <ExternalLink href={cities.walkscore_url}>
                    <span>Walk Score</span>
                  </ExternalLink>
                </li>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <li>
                  <Link to={`/apartment/${id}`}>Find Apartment</Link>
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
            <div>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName={cities.police_twitter}
                options={{ height: 400 }}
              />
            </div>
            <Typography variant="body">
              <img
                alt=""
                style={{ width: 800, height: 600 }}
                src={cities.img_url}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    )}
    </Container>
  );
};

export default City;
