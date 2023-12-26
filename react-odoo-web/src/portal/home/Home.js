import React from 'react';
import { Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import deliveryOrderImg from '../../static/images/delivery_order_img.jpg'
const Home = () => {
	return (
		<React.Fragment>
			<Container style={{'display': 'flex','flexFlow': 'wrap','justifyContent': 'space-between'}}>
				<Link to="/deliveryorders" style={{textDecoration: 'none','padding':'10px'}}>
					<Card style={{ width: '18rem',marginTop:'70px' }}>
						<Card.Img variant="top" src = {deliveryOrderImg} />
							<Card.Body>
								<Card.Title>Delivery Orders</Card.Title>
								<Card.Text>
									Click to process delivery orders.
								</Card.Text>
							</Card.Body>
					</Card>
				</Link>
				{/* Check B2B Products and Sync to B2B Magento */}
				<Link to="/stockchecking" style={{textDecoration: 'none','padding':'10px'}}>
					<Card style={{ width: '18rem',marginTop:'70px' }}>
						<Card.Img variant="top" src = {deliveryOrderImg} />
							<Card.Body>
								<Card.Title>Stock checking</Card.Title>
								<Card.Text>
									Click here to check stock.
								</Card.Text>
							</Card.Body>
					</Card>
				</Link>
				{/* View real time product stock in wh-h and wh-v */}
				<Link to="/realtimestock" style={{textDecoration: 'none','padding':'10px'}}>
					<Card style={{ width: '18rem',marginTop:'70px' }}>
						<Card.Img variant="top" src = {deliveryOrderImg} />
							<Card.Body>
								<Card.Title>Real Time Stock</Card.Title>
								<Card.Text>
									View  Real Time Stock.
								</Card.Text>
							</Card.Body>
					</Card>
				</Link>

				{/* Odoo15 Product Lables*/}
				<Link to="/productlable" style={{textDecoration: 'none','padding':'10px'}}>
					<Card style={{ width: '18rem',marginTop:'70px' }}>
						<Card.Img variant="top" src = {deliveryOrderImg} />
							<Card.Body>
								<Card.Title>Product Lable</Card.Title>
								<Card.Text>
									View/Print Product Lable
								</Card.Text>
							</Card.Body>
					</Card>
				</Link>

			</Container>
		</React.Fragment>
	)
}

export default Home;