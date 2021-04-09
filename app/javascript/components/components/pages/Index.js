import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Index extends Component {
	render() {
		return (
			<>
				<h2>Index</h2>
				<ul>
					{this.props.apartments.map((apartment) => {
						return (
							<li key={apartment.id}>
								<NavLink to={`/apartment/${apartment.id}`}>
									{apartment.city}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</>
		);
	}
}
export default Index;
