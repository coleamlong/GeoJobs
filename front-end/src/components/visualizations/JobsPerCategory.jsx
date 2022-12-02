import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Accounting & Finance Jobs",
        count: 21
    },
    {
        name: "Admin Jobs",
        count: 37
    },
    {
        name: "Consultancy Jobs",
        count: 2
    },
    {
        name: "Creative & Design Jobs",
        count: 7
    },
    {
        name: "Customer Services Jobs",
        count: 25
    },
    {
        name: "Domestic help & Cleaning Jobs",
        count: 3
    },
    {
        name: "Energy, Oil & Gas Jobs",
        count: 14
    },
    {
        name: "Engineering Jobs",
        count: 19
    },
    {
        name: "HR & Recruitment Jobs",
        count: 10
    },
    {
        name: "Healthcare & Nursing Jobs",
        count: 47
    },
    {
        name: "Hospitality & Catering Jobs",
        count: 34
    },
    {
        name: "IT Jobs",
        count: 36
    },
    {
        name: "Legal Jobs",
        count: 3
    },
    {
        name: "Logistics & Warehouse Jobs",
        count: 377
    },
    {
        name: "Maintenance Jobs",
        count: 19
    },
    {
        name: "Manufacturing Jobs",
        count: 7
    },
    {
        name: "Other/General Jobs",
        count: 4
    },
    {
        name: "PR, Advertising & Marketing Jobs",
        count: 11
    },
    {
        name: "Property Jobs",
        count: 2
    },
    {
        name: "Retail Jobs",
        count: 5
    },
    {
        name: "Sales Jobs",
        count: 89
    },
    {
        name: "Scientific & QA Jobs",
        count: 3
    },
    {
        name: "Social work Jobs",
        count: 4
    },
    {
        name: "Teaching Jobs",
        count: 109
    },
    {
        name: "Trade & Construction Jobs",
        count: 16
    },
    {
        name: "Travel Jobs",
        count: 96
    }
];

const JobsPerCategory = () => {
    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Number of Jobs in Each Job Category</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default JobsPerCategory;