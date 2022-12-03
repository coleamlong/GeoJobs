import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const data = [
    {
        city: "Washington, D.C.",
        avg_price: 4000.0,
        avg_rating: 4.0
    },
    {
        city: "New York",
        avg_price: 4278.8,
        avg_rating: 4.30769
    },
    {
        city: "Jacksonville",
        avg_price: 1923.1,
        avg_rating: 3.66667
    },
    {
        city: "Miami",
        avg_price: 3477.9,
        avg_rating: 3.6
    },
    {
        city: "Atlanta",
        avg_price: 2130.0,
        avg_rating: 3.61111
    },
    {
        city: "Indianapolis",
        avg_price: 1629.4,
        avg_rating: 3.0
    },
    {
        city: "Wichita",
        avg_price: 1159.9,
        avg_rating: 4.0
    },
    {
        city: "Louisville",
        avg_price: 1375.3,
        avg_rating: 3.83333
    },
    {
        city: "Baltimore",
        avg_price: 1592.4,
        avg_rating: 3.47368
    },
    {
        city: "Kansas City",
        avg_price: 1271.1,
        avg_rating: 3.42857
    },
    {
        city: "Charlotte",
        avg_price: 2119.0,
        avg_rating: 3.57143
    },
    {
        city: "Raleigh",
        avg_price: 1946.5,
        avg_rating: 4.14286
    },
    {
        city: "Columbus",
        avg_price: 1535.9,
        avg_rating: 4.0
    },
    {
        city: "Oklahoma City",
        avg_price: 1301.4,
        avg_rating: 3.5
    },
    {
        city: "Tulsa",
        avg_price: 1005.1,
        avg_rating: 3.5
    },
    {
        city: "Philadelphia",
        avg_price: 2007.5,
        avg_rating: 3.77273
    },
    {
        city: "Memphis",
        avg_price: 1804.0,
        avg_rating: 3.0
    },
    {
        city: "Nashville",
        avg_price: 3279.0,
        avg_rating: 4.0
    },
    {
        city: "Arlington",
        avg_price: 2071.8,
        avg_rating: 2.0
    },
    {
        city: "Austin",
        avg_price: 1895.6,
        avg_rating: 4.27273
    },
    {
        city: "Dallas",
        avg_price: 2576.0,
        avg_rating: 3.57143
    },
    {
        city: "Fort Worth",
        avg_price: 2292.5,
        avg_rating: 3.9
    },
    {
        city: "Houston",
        avg_price: 1884.2,
        avg_rating: 2.92857
    },
    {
        city: "San Antonio",
        avg_price: 1520.9,
        avg_rating: 4.0
    },
    {
        city: "Virginia Beach",
        avg_price: 2228.0,
        avg_rating: 3.5
    },
    {
        city: "Chicago",
        avg_price: 1996.4,
        avg_rating: 4.36667
    },
    {
        city: "Boston",
        avg_price: 3969.9,
        avg_rating: 4.23529
    },
    {
        city: "Detroit",
        avg_price: 1108.5,
        avg_rating: 2.625
    },
    {
        city: "Minneapolis",
        avg_price: 1273.4,
        avg_rating: 3.88889
    },
    {
        city: "Omaha",
        avg_price: 1110.2,
        avg_rating: 3.66667
    },
    {
        city: "Milwaukee",
        avg_price: 1402.0,
        avg_rating: 3.25
    },
    {
        city: "Mesa",
        avg_price: 2205.9,
        avg_rating: 3.5
    },
    {
        city: "Phoenix",
        avg_price: 2200.7,
        avg_rating: 4.08333
    },
    {
        city: "Tucson",
        avg_price: 1772.4,
        avg_rating: 3.8
    },
    {
        city: "Bakersfield",
        avg_price: 1949.0,
        avg_rating: 3.0
    },
    {
        city: "Fresno",
        avg_price: 2223.0,
        avg_rating: 0.0
    },
    {
        city: "Long Beach",
        avg_price: 2373.3,
        avg_rating: 4.21429
    },
    {
        city: "Los Angeles",
        avg_price: 2139.3,
        avg_rating: 3.90244
    },
    {
        city: "Oakland",
        avg_price: 2978.3,
        avg_rating: 3.88235
    },
    {
        city: "Sacramento",
        avg_price: 2315.0,
        avg_rating: 3.375
    },
    {
        city: "San Diego",
        avg_price: 3582.5,
        avg_rating: 4.12
    },

    {
        city: "San Francisco",
        avg_price: 3775.9,
        avg_rating: 4.47368
    },

    {
        city: "San Jose",
        avg_price: 3378.9,
        avg_rating: 3.4
    },

    {
        city: "Colorado Springs",
        avg_price: 2077.5,
        avg_rating: 4.4
    },

    {
        city: "Denver",
        avg_price: 2545.9,
        avg_rating: 4.05882
    },

    {
        city: "Albuquerque",
        avg_price: 1426.6,
        avg_rating: 4.0
    },

    {
        city: "Las Vegas",
        avg_price: 1924.4,
        avg_rating: 3.82353
    },

    {
        city: "El Paso",
        avg_price: 1283.5,
        avg_rating: 3.33333
    },

    {
        city: "Portland",
        avg_price: 2333.4,
        avg_rating: 4.46154
    },

    {
        city: "Seattle",
        avg_price: 2325.0,
        avg_rating: 4.38462
    }
]

const AvgCityApartmentPrice = () => {
    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">City Average Apartment Price vs City Average Rating</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart
                            width={400}
                            height={400}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis type="number" dataKey="avg_price" name="City Average Monthly Rent" unit="$" />
                            <YAxis type="number" dataKey="avg_rating" name="City Average Rating" domain={[0, 5]} ticks={[0,1,2,3,4,5]} />
                            <ZAxis dataKey="city" name="City"/>
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="Cities" data={data} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default AvgCityApartmentPrice;