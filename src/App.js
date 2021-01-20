import DynamicText from './DynamicText';
import { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const ref = useRef(null);
	const [inputState, setInputState] = useState('');

	const onTextInputChange = (e) => {
		const value = e.target.value;
		setInputState(value);
		ref.current.changeText(value);
	};

	return (
		<div className='App'>
			<input type='text' value={inputState} onChange={onTextInputChange} />
			<DynamicText ref={ref} />
		</div>
	);
}

export default App;
