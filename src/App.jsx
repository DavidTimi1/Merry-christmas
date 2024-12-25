import './App.css'
import './palette.css'
import Home from './components/Home'
import { daysSinceLastChristmas } from './components/More'

function App() {

	return (
		<Home />
	)
}


export const christmasDay = daysSinceLastChristmas();

export default App
