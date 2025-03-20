import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const columns = [
  { field: 'id', headerName: 'ID', width: 91 },
  { field: 'username', headerName: 'Username', width: 143, renderCell: (params) => {
      return (
	  <div className='userListCell'>
	      <img className='profile' src={ params.row.picture } alt='Profile Pic'/>
	      { params.row.username }
	  </div>
      );}
  },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age', headerName: 'Age', width: 90,
    type: 'number',
  },
  {
    field: 'fullName', headerName: 'Full name', width: 160, sortable: false,
    description: 'This column has a value getter and is not sortable.',
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
    {
	field: 'manage', headerName: 'Manage', width: 91, renderCell: () => {
	    return (
		<div className='manageUser'>
		    <button className='manageUserButton'>Edit</button>
		    <DeleteOutlineIcon className='deleteIcon' />
		</div>
	    );
	}
    },
];

const rows = [
  { id: 0, username: 'OG-User', lastName: 'Vie', firstName: 'Dems', age: 26, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 1, username: 'User1', lastName: 'Snow', firstName: 'Jon', age: 35, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 2, username: 'User2', lastName: 'Lannister', firstName: 'Cersei', age: 42, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 3, username: 'User3', lastName: 'Lannister', firstName: 'Jaime', age: 45, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 4, username: 'User4', lastName: 'Stark', firstName: 'Arya', age: 16, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 5, username: 'User5', lastName: 'Targaryen', firstName: 'Daenerys', age: null, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 6, username: 'User6', lastName: 'Melisandre', firstName: null, age: 150, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 7, username: 'User7', lastName: 'Clifford', firstName: 'Ferrara', age: 44, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 8, username: 'User8', lastName: 'Frances', firstName: 'Rossini', age: 36, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 9, username: 'User9', lastName: 'Roxie', firstName: 'Harvey', age: 65, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 1, username: 'User1', lastName: 'Snow', firstName: 'Jon', age: 35, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 2, username: 'User2', lastName: 'Lannister', firstName: 'Cersei', age: 42, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 3, username: 'User3', lastName: 'Lannister', firstName: 'Jaime', age: 45, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 4, username: 'User4', lastName: 'Stark', firstName: 'Arya', age: 16, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 5, username: 'User5', lastName: 'Targaryen', firstName: 'Daenerys', age: null, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 6, username: 'User6', lastName: 'Melisandre', firstName: null, age: 150, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 7, username: 'User7', lastName: 'Clifford', firstName: 'Ferrara', age: 44, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 8, username: 'User8', lastName: 'Frances', firstName: 'Rossini', age: 36, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 9, username: 'User9', lastName: 'Roxie', firstName: 'Harvey', age: 65, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
  { id: 0, username: 'OG-User', lastName: 'Vie', firstName: 'Dems', age: 26, picture: 'https://raw.githubusercontent.com/kal-kyokya/react-admin-panel/refs/heads/main/public/profile1.JPG' },
];

const paginationModel = { page: 0, pageSize: 10 };

const UserList = () => {
    return (
	<div className='userList'>
	    <Paper sx={{ height: '100%', width: '100%' }}>
		<DataGrid
		    rows={rows} columns={columns}
		    initialState={{ pagination: { paginationModel } }}
		    pageSizeOptions={[10, 15]}
		    checkboxSelection
		    sx={{ border: 0 }}
		/>
	    </Paper>
	</div>
    );
};

export default UserList;
