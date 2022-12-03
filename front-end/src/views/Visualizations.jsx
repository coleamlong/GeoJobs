import Container from "react-bootstrap/Container";
import JobsPerCategory from "../components/visualizations/JobsPerCategory";
import AvgCityAparmentPrice from "../components/visualizations/AvgCityApartmentPrice"
import AvgCategoryMinSalary from "../components/visualizations/AvgCategoryMinSalary"
import ProviderFoodCategoryCount from "../components/visualizations/ProviderFoodCategoryCount"
import ProviderAvgFoodCategorySold from "../components/visualizations/ProviderAvgFoodCategorySold"
import ProviderMarketsPerState from "../components/visualizations/ProviderMarketsPerState"
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
            <Typography
            variant="h3"
            sx={{ textAlign: "center" }}
            style={{
                padding: "15px"
            }}>
                Provider Visualizations
            </Typography>
            <ProviderFoodCategoryCount />
            <ProviderAvgFoodCategorySold />
            <ProviderMarketsPerState />
        </Container>
    )
    
}

export default Visualizations;