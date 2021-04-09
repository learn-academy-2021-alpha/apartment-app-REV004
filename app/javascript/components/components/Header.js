import React, { useState } from "react";
import {
	Jumbotron,
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<>
			<Jumbotron fluid>
				<Container fluid>
					<Navbar color='faded' light>
						<NavbarToggler onClick={toggleNavbar} className='mr-2' />
						<Collapse isOpen={!collapsed} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink to='/Index'>Look at apartments</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/New'>Add an apartment</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/edit'>Edit</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</Container>
			</Jumbotron>
		</>
	);
};
export default Header;
