import React, {useState, usestate} from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
	const [headerText, setHeaderText] = useState('Name It!');
	const [headerExpanded, setHeaderExpanded] = useState(true);
	const [suggestedNames, setSuggestedNames] = useState([]);

	const handleInputChange = (inputText) => {
		setHeaderExpanded(!inputText);
		setSuggestedNames(inputText ? name(suggestedNames) : []);
	}

	return (
		<div>
			<Header 
				headExpanded = { headerExpanded } 
				headTitle = { headerText } 
			/>
			<SearchBox 
				onInputChange = { handleInputChange } 
			/>
			<ResultsContainer 
				suggestedNames = { suggestedNames }
			/>
		</div>
	);
}

export default App;