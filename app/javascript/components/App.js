import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
// import Footer from "./pages/Footer";
import Home from "./pages/Home";
import New from "./pages/New";
import mockApartments from "./MockApartments";
import Notfound from "./pages/Notfound";
import { Nav, NavItem } from "reactstrap";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import Show from "./pages/Show";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			apartments: mockApartments,
// 		};
// 	}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apartments: mockApartments,
		};
	}

	createNewApartment = (apartment) => {
		console.log(apartment);
	};

	editApartment = (apartment, id) => {
		console.log(apartment, id);
	};

	deleteApartment = (id) => {
		console.log(id);
	};

	render() {
		const {
			logged_in,
			current_user,
			sign_in_route,
			sign_out_route,
			sign_up_route,
		} = this.props;
		const { apartments } = this.state;
		console.log("logged_in:", logged_in);
		console.log("current user:", current_user);
		console.log("apartments:", apartments);
		return (
			<Router>
				<Header
					logged_in={logged_in}
					sign_in_route={sign_in_route}
					sign_out_route={sign_out_route}
				/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						path='/index'
						render={(props) => <Index apartments={apartments} />}
					/>
					<Route
						path='/show/:id'
						render={(props) => {
							let id = +props.match.params.id;
							let apartment = apartments.find((a) => a.id === id);
							return <Show apartment={apartment} />;
						}}
					/>
					{logged_in && (
						<Route
							path='/apartments'
							render={(props) => {
								let myApartments = apartments.filter(
									(apartment) => apartment.user_id === current_user.id
								);
								return (
									<MyApartmentIndex
										myApartments={myApartments}
										deleteApartment={this.deleteApartment}
									/>
								);
							}}
						/>
					)}
					{logged_in && (
						<Route
							path='/new'
							render={(props) => (
								<ApartmentNew
									createNewApartment={this.createNewApartment}
									current_user={current_user}
								/>
							)}
						/>
					)}
					{
						<Route
							path='/Edit/:id'
							render={(props) => {
								let apartment = apartments.find(
									(apartment) => apartment.id === +props.match.params.id
								);
								return (
									<Edit
										editApartment={this.editApartment}
										current_user={current_user}
										apartment={apartment}
									/>
								);
							}}
						/>
					}
					<Route path='/Notfound' component={Notfound} />
				</Switch>
			</Router>
		);
	}
}

export default App;

// 	createNewApt = (newapt) => {
// 		fetch("http://localhost:3000/apartments", {
// 			body: JSON.stringify(newapt),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			method: "POST",
// 		})
// 			.then((response) => {
// 				console.log(response);
// 				if (response.status === 422) {
// 					alert("something went wrong with your submission.");
// 				}
// 				return response.json();
// 			})
// 			.then((payload) => {
// 				console.log("yo");
// 				console.log(payload);
// 			})
// 			.catch((errors) => {
// 				console.log("create errors:", errors);
// 			});
// 	};

// 	render() {
// 		const {
// 			logged_in,
// 			current_user,
// 			new_user_route,
// 			sign_in_route,
// 			sign_out_route,
// 		} = this.props;

// 		return (
// 			<>
// 				<Header
// 					logged_in={logged_in}
// 					sign_in_route={sign_in_route}
// 					sign_out_route={sign_out_route}
// 				/>
// 				<Router>
// 					<Switch>
// 						<Route
// 							path='/new/'
// 							render={(props) => {
// 								return <New createNewApt={this.createNewApt} />;
// 							}}
// 						/>
// 						<Route
// 							path='/home/:id'
// 							render={(props) => {
// 								const id = +props.match.params.id;
// 								const foundapt = this.state.apartments.find(
// 									(apt) => apt.id === id
// 								);
// 								console.log(id);
// 								return <Home apt={foundapt} />;
// 							}}
// 						/>
// 						<Route
// 							exact
// 							path='/'
// 							render={() => <Home apartments={this.state.apartments} />}
// 						/>
// 						<Route component={NotFound} />
// 					</Switch>
// 					<Footer />
// 				</Router>
// 			</>
// 		);
// 	}
// }
// export default App;
