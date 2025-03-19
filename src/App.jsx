import './app.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Insights from './pages/insights/Insights';

function App() {
    return (<div>
		<Topbar />
		<div className='container'>
		    <Sidebar />
		    <Home />
		</div>
	    </div>);
}

export default App;
