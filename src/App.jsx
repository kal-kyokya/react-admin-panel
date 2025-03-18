import './app.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    return (<div>
		<Topbar />
		<div className='container'>
		    <Sidebar />
		    <div className='main'></div>
		</div>
	    </div>);
}

export default App;
