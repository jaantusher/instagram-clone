import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';

const Div = styled.div`
	position: relative;
	color: black;
	font-family: 'Hind Siliguri', sans-serif;
	a {
		color: #262626;
		text-decoration: none;
		font-weight: bold;
		font-size: 16px;
	}

	.selected {
		::before {
			content: "";
			display: block;
			position: absolute;
			top: -12px;

			left: 20px;
			right: 20px;
			height: 1px;
			background: black;
		}
	}
`;

function ProfileInner() {
	return (
		<div>
			<Router>
				<AppBar
					position="static"
					style={{ background: 'white', boxShadow: 'none', borderTop: '1px solid #ddd' }}
				>
					<Toolbar variant="dense" style={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
						<Div style={{ padding: '0px 40px' }}>
							<NavLink exact to="/profile" activeClassName="selected">
								Post
							</NavLink>
						</Div>
						<Div style={{ padding: '0px 40px' }}>
							<NavLink strict to="/profile/save" activeClassName="selected">
								Save
							</NavLink>
						</Div>
						<Div style={{ padding: '0px 40px' }}>
							<NavLink strict to="/profile/tag" activeClassName="selected">
								Tag
							</NavLink>
						</Div>
					</Toolbar>
				</AppBar>
				<Switch>
					<Route exact path="/profile" component={Post} />
					<Route exact path="/profile/save" component={Save} />
					<Route exact path="/profile/tag" component={Tag} />
				</Switch>
			</Router>
		</div>
	);
}

function Post() {
	return <div>Post</div>;
}

function Save() {
	return <div>Saved</div>;
}
function Tag() {
	return <div>Tag</div>;
}

export default ProfileInner;
