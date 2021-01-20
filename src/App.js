import DynamicText from './DynamicText';
import { useRef, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const ref = useRef(null);
	const [inputState, setInputState] = useState('');

	useEffect(() => {
		ref.current.changeText(inputState);
	}, [inputState]);

	return (
		<div className='App'>
			<input type='text' value={inputState} onChange={(e) => setInputState(e.target.value)} />
			<DynamicText ref={ref} />
		</div>
	);
}

export default App;
