import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import New from "./pages/New";
import mockApartments from "./MockApartments";
import NotFound from "./pages/NotFound";
// import Edit from "./pages/Edit";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apartments: mockApartments,
		};
	}

	createNewApt = (newapt) => {
		fetch("http://localhost:3000/apartments", {
			body: JSON.stringify(newapt),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		})
			.then((response) => {
				console.log(response);
				if (response.status === 422) {
					alert("something went wrong with your submission.");
				}
				return response.json();
			})
			.then((payload) => {
				console.log("yo");
				console.log(payload);
			})
			.catch((errors) => {
				console.log("create errors:", errors);
			});
	};

	render() {
		const {
			logged_in,
			current_user,
			new_user_route,
			sign_in_route,
			sign_out_route,
		} = this.props;

		return (
			<>
				<Header
					logged_in={logged_in}
					sign_in_route={sign_in_route}
					sign_out_route={sign_out_route}
				/>
				<Router>
					<Switch>
						<Route
							path='/new/'
							render={(props) => {
								return <New createNewApt={this.createNewApt} />;
							}}
						/>
						<Route
							path='/home/:id'
							render={(props) => {
								const id = +props.match.params.id;
								const foundapt = this.state.apartments.find(
									(apt) => apt.id === id
								);
								console.log(id);
								return <Home apt={foundapt} />;
							}}
						/>
						<Route
							exact
							path='/'
							render={() => <Home apartments={this.state.apartments} />}
						/>
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</Router>
			</>
		);
	}
}
export default App;
