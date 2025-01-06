import './App.css'
import './palette.css'
import Home from './components/Home'
import { daysSinceLastChristmas } from './components/More'
import { ChristmasDayContext } from './contexts.js';
import { useState } from 'react'

function App() {
	const [christmasDay, setChristmasDay] = useState(isChristmasDay)

	return (
		<ChristmasDayContext.Provider value={{value: christmasDay, ignore: ignoreDate}}>
			<Home />
		</ChristmasDayContext.Provider>
	)

	function ignoreDate(){
		setChristmasDay(lastChristmas % 12);
	}
}


const lastChristmas = daysSinceLastChristmas();
const isChristmasDay = lastChristmas < 12 && lastChristmas;

export default App
