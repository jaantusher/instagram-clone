import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';

export default function Dialogg(props) {
	const { onClose, open } = props;

	const handleClose = () => {
		onClose();
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
			{props.children}
		</Dialog>
	);
}

Dialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};
