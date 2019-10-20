import React from 'react';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Post from './Post';

function Home() {
	return (
		<div>
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Post />
					<Grid md={4} xs={12} spacing={2}>
						<div>tusher</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Home;
