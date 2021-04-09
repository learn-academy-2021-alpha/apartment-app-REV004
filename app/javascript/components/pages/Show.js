import React, { Component } from "react";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";

class Show extends Component {
	render() {
		const { apartment } = this.props;
		console.log(apartment);
		return (
			<>
				<h3>Apartment Features</h3>
				<div className='show-card-container'>
					<div className='show-card'>
						<h4>Location</h4>
						<h5>{apartment.street}</h5>
						<h5>
							{apartment.city}, {apartment.state}
						</h5>

						<h4>Manager Info</h4>
						<h5>{apartment.manager}</h5>
						<h5>{apartment.email}</h5>

						<h4>Details</h4>
						<h5>{apartment.price} per month</h5>
						<h5>Bedrooms: {apartment.bedrooms}</h5>
						<h5>Bathrooms: {apartment.bathrooms}</h5>
						<h5>Pets Allowed: {apartment.pets}</h5>
					</div>
				</div>
			</>
		);
	}
}
export default Show;
