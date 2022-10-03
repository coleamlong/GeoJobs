import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ExternalLink } from 'react-external-link';

const jobs = [
  {   
  description: "As a Software Engineering Leader, you will craft a long-term technology vision, deliver high quality software, help your team members to grow, and help create a world class advertising system. You will actively partner with Product Managers (PM) and other stakeholders to create and prioritize the product roadmap and to help refine and enhance the business strategy. You should share our passions for helping people find jobs, growing a rich, vibrant business, and managing the career development and satisfaction of your team.",
  title: "Director, Software Engineering, Advertising",
  salary: "$196000 - 284000",
  company: "Indeed",
  yes: "yes",
  contract_time: "Full-time",
  url: "https://www.adzuna.com/land/ad/3545948945?se=oIEPNdFC7RGlmr6G-Q4-9g&utm_medium=api&utm_source=20ebdf36&v=D4A7BDF19776C4838F6A217865A320B0CC0E737B"
  },

  {   
    description: "n this role, you will be responsible for the overall development and implementation of front and back-end software applications. Your responsibilities will extend from designing system architecture to high-level programming, performance testing, and systems integration.To ensure success as a full stack engineer, you should have advanced programming skills, experience with application development, and excellent troubleshooting skills. Top-rated full stack engineers create and implement advanced software systems that perfectly meet the needs of the company.",
    title: "Software Engineer",
    salary: "$120000 - 160000",
    company: "Obran Cooperatove",
    contract_time: "Full-time",
    url: "https://www.adzuna.com/land/ad/3463111425?se=6N9KR9NC7RGGbu8bNysYfw&utm_medium=api&utm_source=20ebdf36&v=23FA8A2C41C5CF639CC8A8631C674B109AAB8B13"
  },

  {   
    description: "Working to create quality code on the Front End and Back End. Collaborate with the founder & CTO to make the most efficient possible technology. Help grow our company to the next level of technology",
    title: "Software Engineer",
    salary: "$120000 - 200000",
    company: "CyberCoders",
    contract_time: "Full-time",
    url: "https://www.adzuna.com/land/ad/3533361279?se=LISfktJC7RGGbu8bNysYfw&utm_medium=api&utm_source=20ebdf36&v=725F796E860B8D4FDFE31F769FBB103AE95DDB3F"
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
              <Typography variant="body">
              <li>
                  <ExternalLink href={jobs[id - 1].url}>
                    <span>Job URL</span>
                  </ExternalLink>
              </li>
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