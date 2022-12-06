import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Breads, cereals, fastfood,grains",
        total: 15
    },
    {
        name: "Dairy products",
        total: 15
    },
    {
        name: "Drinks,Alcohol, Beverages",
        total: 2
    },
    {
        name: "Fats, Oils, Shortenings",
        total: 8
    },
    {
        name: "Fish, Seafood",
        total: 17
    },
    {
        name: "Fruits A-F",
        total: 13
    },
    {
        name: "Fruits G-P",
        total: 17
    },
    {
        name: "Fruits R-Z",
        total: 6
    },
    {
        name: "Jams, Jellies",
        total: 3
    },
    {
        name: "Meat, Poultry",
        total: 14
    },
    {
        name: "Seeds and Nuts",
        total: 9
    },
    {
        name: "Soups",
        total: 1
    },
    {
        name: "Vegetables A-E",
        total: 21
    },
    {
        name: "Vegetables F-P",
        total: 11
    },
    {
        name: "Vegetables R-Z",
        total: 11
    }
]

const ProviderFoodCategoryCount = () => {
    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Number of Foods Tracked in Each Food Category</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="total"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={200}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default ProviderFoodCategoryCount;