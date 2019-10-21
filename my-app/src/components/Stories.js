import React from 'react';

function Stories(props) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
			<div
				style={{
					width: '44px',
					height: '44px',
					borderRadius: '50%',
					overflow: 'hidden',
					padding: '2px',
					marginRight: '8px',
					boxSizing: 'border-box',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: 'linear-gradient(324deg, rgba(251,173,80,1) 0%, rgba(188,42,141,1) 100%)',
				}}
			>
				<div
					style={{
						borderRadius: '50%',
						height: '100%',
						width: '100%',
						overflow: 'hidden',
						boxSizing: 'border-box',
						background: 'white',
						padding: '2px',
					}}
				>
					<img
						src={props.img}
						alt="avatar"
						style={{
							borderRadius: '50%',
							height: '100%',
							width: '100%',
						}}
					/>
				</div>
			</div>
			<div style={{ paddingLeft: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<p style={{ fontSize: '14px', color: '#262626', fontWeight: 'bold' }}>jaan_Tusher</p>
				<p style={{ fontSize: '12px', color: '#999999' }}>6 HOUR AGO</p>
			</div>
		</div>
	);
}

export default Stories;
