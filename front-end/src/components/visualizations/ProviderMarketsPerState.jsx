import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';

const data = [
    {
        state: "AK",
        count: 2
    },
    {
        state: "AL",
        count: 2
    },
    {
        state: "AR",
        count: 3
    },
    {
        state: "AZ",
        count: 4
    },
    {
        state: "IA",
        count: 3
    },
    {
        state: "CA",
        count: 6
    },
    {
        state: "CO",
        count: 5
    },
    {
        state: "CT",
        count: 4
    },
    {
        state: "DE",
        count: 2
    },
    {
        state: "FL",
        count: 6
    },
    {
        state: "GA",
        count: 6
    },
    {
        state: "HI",
        count: 4
    },
    {
        state: "ID",
        count: 2
    },
    {
        state: "IL",
        count: 6
    },
    {
        state: "IN",
        count: 5
    },
    {
        state: "KS",
        count: 4
    },
    {
        state: "KY",
        count: 4
    },
    {
        state: "LA",
        count: 4
    },
    {
        state: "MD",
        count: 4
    },
    {
        state: "MA",
        count: 4
    },
    {
        state: "ME",
        count: 4
    },
    {
        state: "MI",
        count: 4
    },
    {
        state: "MN",
        count: 4
    },
    {
        state: "ND",
        count: 3
    },
    {
        state: "MO",
        count: 4
    },
    {
        state: "OR",
        count: 8
    },
    {
        state: "MS",
        count: 2
    },
    {
        state: "MT",
        count: 4
    },
    {
        state: "NC",
        count: 5
    },
    {
        state: "NE",
        count: 4
    },
    {
        state: "NH",
        count: 3
    },
    {
        state: "NJ",
        count: 4
    },
    {
        state: "NM",
        count: 2
    },
    {
        state: "NV",
        count: 3
    },
    {
        state: "NY",
        count: 8
    },
    {
        state: "OH",
        count: 6
    },
    {
        state: "OK",
        count: 3
    },
    {
        state: "PA",
        count: 6
    },
    {
        state: "PR",
        count: 2
    },
    {
        state: "RI",
        count: 5
    },
    {
        state: "SC",
        count: 5
    },
    {
        state: "SD",
        count: 1
    },
    {
        state: "TN",
        count: 5
    },
    {
        state: "TX",
        count: 8
    },
    {
        state: "UT",
        count: 2
    },
    {
        state: "WI",
        count: 5
    },
    {
        state: "VA",
        count: 6
    },
    {
        state: "VT",
        count: 5
    },
    {
        state: "WA",
        count: 4
    },
    {
        state: "WV",
        count: 4
    },
    {
        state: "WY",
        count: 4
    }
];

const ProviderMarketsPerState = () => {
    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Number of Markets in Each State</h3>
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
                            <XAxis dataKey="state" />
                            <YAxis />
                            <ReferenceLine y={52919.29} stroke="#000" />
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

export default ProviderMarketsPerState;