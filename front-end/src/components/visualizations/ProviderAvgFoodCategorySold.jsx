import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        category: "Fruits A-F",
        count: 5.553990610328638
    },
    {
        category: "Fruits G-P",
        count: 6.713615023474178
    },
    {
        category: "Fruits R-Z",
        count: 2.9342723004694835
    },
    {
        category: "Vegetables A-E",
        count: 11.92018779342723
    },
    {
        category: "Vegetables F-P",
        count: 7.262910798122066
    },
    {
        category: "Vegetables R-Z",
        count: 5.272300469483568
    },
    {
        category: "Drinks,Alcohol, Beverages",
        count: 1.1549295774647887
    },
    {
        category: "Dairy products",
        count: 1.8591549295774648
    },
    {
        category: "Fish, Seafood",
        count: 9.098591549295774
    },
    {
        category: "Breads, cereals, fastfood,grains",
        count: 6.816901408450704
    },
    {
        category: "Jams, Jellies",
        count: 0.6197183098591549
    },
    {
        category: "Seeds and Nuts",
        count: 0.9295774647887324
    },
    {
        category: "Meat, Poultry",
        count: 2.300469483568075
    }
]

const ProviderAvgFoodCategorySold = () => {
    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Average Number of Foods in Each Category Sold per Market</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="category" />
                            <PolarRadiusAxis />
                            <Radar name="Mike" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default ProviderAvgFoodCategorySold;