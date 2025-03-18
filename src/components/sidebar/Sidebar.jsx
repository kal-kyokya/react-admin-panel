import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
    return (
	<div className='sidebar'>
	    <div className='sidebarWrapper'>
		<div className='sidebarMenu'>
		    <h3 className='sidebarTitle'>Dashboard</h3>
		    <ul className='sidebarList'>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
		    </ul>
		</div>
		<div className='sidebarMenu'>
		    <h3 className='sidebarTitle'>Dashboard</h3>
		    <ul className='sidebarList'>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
		    </ul>
		</div>
		<div className='sidebarMenu'>
		    <h3 className='sidebarTitle'>Dashboard</h3>
		    <ul className='sidebarList'>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
			<li className='sidebarListItem'>
			    <HomeIcon className='icon' />
			    Home
			</li>
		    </ul>
		</div>
	    </div>
	</div>
    );
}

export default Sidebar;
