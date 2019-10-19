import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Logo from '../image/logo.png';
import Typo from '../image/typo.png';
import styled from 'styled-components';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Love from '../image/love.svg';
import Compass from '../image/compass.svg';
import User from '../image/user.svg';

const Logoo = styled.div`
	cursor: pointer;
	:active {
		opacity: 0.5;
	}
`;

const Img = styled.img`
	cursor: pointer;
	:active {
		opacity: 0.5;
	}
`;
const Search = styled.input`
	font-family: FontAwesome;
	border-radius: 3px;
	border: 1px solid #ddd;
	box-sizing: border-box;
	text-align: center;
	padding: 0px 7px;
	:focus {
		text-align: start;
	}
`;

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<img
			appear={false}
			direction="down"
			in={!trigger}
			height="40px"
			width="109px"
			src={Typo}
			alt="typo"
			style={{ paddingLeft: '12px', display: trigger ? 'none' : 'block', transition: 'display 2s' }}
		/>
	);
}
function HideOnScroll1(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<img
			height="26px"
			width="26px"
			src={Logo}
			alt="logo"
			style={{ paddingRight: '12px', borderRight: trigger ? 'none' : '1.3px solid black' }}
		/>
	);
}

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will defaul:t to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: 0,
		style: {
			color: 'black',
			background: 'white',
			padding: trigger ? '11px 0px' : '15px 0px',
			transition: 'padding 0.4s',
			borderBottom: '1px solid #ddd',
		},
	});
}

export default function Nav(props) {
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar style={{ padding: '0px 30px' }}>
					{' '}
					<Container maxWidth="md">
						<Grid container alignItems="center">
							<Grid xs="4">
								<Logoo style={{ display: 'flex', alignItems: 'center' }}>
									<HideOnScroll1 />
									<HideOnScroll />
								</Logoo>
							</Grid>
							<Grid xs="4">
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<Search placeholder="&#61442; Search" style={{ width: '215px', height: '28px' }} />
								</div>
							</Grid>
							<Grid xs="4">
								<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
									<Img height="28px" width="28px" src={Compass} alt="love" />
									<Img
										height="28px"
										width="28px"
										src={Love}
										alt="love"
										style={{ marginLeft: '18px' }}
									/>
									<Img
										height="28px"
										width="28px"
										src={User}
										alt="love"
										style={{ marginLeft: '18px' }}
									/>
								</div>
							</Grid>
						</Grid>
					</Container>
				</AppBar>
			</ElevationScroll>\
			<Toolbar />
		</React.Fragment>
	);
}
