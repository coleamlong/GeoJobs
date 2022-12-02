import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import JobsPerCategory from "../components/visualizations/JobsPerCategory";
import Typography from "@mui/material/Typography";


const Visualizations = () => {
    return (
        <Container>
            <Typography
            variant="h2"
            sx={{ textAlign: "center" }}
            style={{
                padding: "15px"
            }}>
                Visualizations
            </Typography>
            <JobsPerCategory></JobsPerCategory>
        </Container>
    )
    
}

export default Visualizations;