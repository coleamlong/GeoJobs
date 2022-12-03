import Container from "react-bootstrap/Container";
import JobsPerCategory from "../components/visualizations/JobsPerCategory";
import AvgCityAparmentPrice from "../components/visualizations/AvgCityApartmentPrice"
import AvgCategoryMinSalary from "../components/visualizations/AvgCategoryMinSalary"
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
            <AvgCityAparmentPrice></AvgCityAparmentPrice>
            <AvgCategoryMinSalary />
        </Container>
    )
    
}

export default Visualizations;