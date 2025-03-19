import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import InsightsIcon from '@mui/icons-material/Insights';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';

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
			    <InsightsIcon className='icon' />
			    Insights
			</li>
			<li className='sidebarListItem'>
			    <QueryStatsIcon className='icon' />
			    Statistics
			</li>
		    </ul>
		</div>
		<div className='sidebarMenu'>
		    <h3 className='sidebarTitle'>Manage</h3>
		    <ul className='sidebarList'>
			<li className='sidebarListItem'>
			    <PlaylistPlayIcon className='icon' />
			    Lists
			</li>
			<li className='sidebarListItem'>
			    <PeopleIcon className='icon' />
			    Users
			</li>
			<li className='sidebarListItem'>
			    <VideoLibraryIcon className='icon' />
			    Videos
			</li>
		    </ul>
		</div>
		<div className='sidebarMenu'>
		    <h3 className='sidebarTitle'>More</h3>
		    <ul className='sidebarList'>
			<li className='sidebarListItem'>
			    <InfoIcon className='icon' />
			    About
			</li>
			<li className='sidebarListItem'>
			    <AccountCircleIcon className='icon' />
			    Account
			</li>
			<li className='sidebarListItem'>
			    <HelpIcon className='icon' />
			    Help & Support
			</li>
		    </ul>
		</div>
	    </div>
	</div>
    );
}

export default Sidebar;
