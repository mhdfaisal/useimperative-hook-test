import React, { useState, useImperativeHandle, use } from 'react';

const DynamicText = React.forwardRef((props, ref) => {
	const changeText = (newText) => {
		setText(newText);
	};

	useImperativeHandle(ref, () => ({
		changeText,
	}));

	const [text, setText] = useState('');
	return <p ref={ref}>{text}</p>;
});

export default DynamicText;
