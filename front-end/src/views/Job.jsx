import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "react-external-link";


const Job = () => {
  const { id } = useParams();
  let [jobs, setJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setJob(null);
      await axios.get(
        `https://api.geojobs.me/jobs/${id}` 
      );
      let data = response.data["data"];
      setJob(data["jobs"]);
    };
    fetchData();
  }, [jobs]);

  return (
    <Container
      className="page-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: (jobs ?? []).length === 0 ? "100%" : "none",
      }}
    >
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
      >
      Jobs
      </Typography>
      {jobs !== null && (
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
                {jobs.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Desciption: {jobs.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {jobs.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Salary Minimum: {jobs.salary_min}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Salary Maximum: {jobs.salary_max}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Company:{jobs.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Created:{jobs.created}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <img
                  style={{ width: 400, height: 200 }}
                  src={jobs.img}
                />
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <div><iframe
                    width="600"
                    height="450"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${jobs.longitude} ${jobs.latitude}`}>
                  </iframe></div>
              </Typography>
              <Typography variant="body">
                <li>
                  <ExternalLink href={jobs.url}>
                    <span>Job URL</span>
                  </ExternalLink>
                </li>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <li>
                  <Link to={`/apartment/${id}`}>Find Apartment In City</Link>
                </li>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <li>
                  <Link to={`/city/${id}`}>Find Out More About City</Link>
                </li>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    )}
    </Container>
  );
};

export default Job;
