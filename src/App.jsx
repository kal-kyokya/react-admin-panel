import './app.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Insights from './pages/insights/Insights';
import UserList from './pages/userList/UserList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
	<Router>
	    <Topbar />
	    <div className='container'>
		<Sidebar />
		<Routes>
		    <Route path='/' element={<Home />} />
		    <Route path='/users' element={<UserList />} />
		    <Route path='/insights' element={<Insights />} />
		</Routes>
	    </div>
	</Router>
    );
}

export default App;
