import React from 'react';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Post from './Post';
import Right from './Right';

function Home() {
	return (
		<div style={{ background: '#FAFAFA' }}>
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Grid md={8} sm={12} style={{ marginBottom: '30px', background: 'white' }}>
						<Post />
						<Post />
					</Grid>
					<Grid
						md={4}
						xs={12}
						spacing={2}
						style={{
							paddingLeft: '20px',
							boxSizing: 'border-box',
							height: '85vh',
							background: 'red',
							position: 'sticky',
							top: ' 8%',
						}}
					>
						<Right />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Home;
