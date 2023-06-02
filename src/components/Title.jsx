export default function Title({ newUser, deleteUsers }) {
	const eventAddUser = () => {
	  newUser();
	};
  
	const eventDeleteUsers = () => {
	  deleteUsers();
	};
  
	return (
	  <>
	  	<h1 className='title'>Random Users List</h1>
		<div className='buttons'>
		  <button className='btn btn-add' onClick={eventAddUser}>
			Add user
		  </button>
		  <button className='btn btn-delete' onClick={eventDeleteUsers}>
			Delete all users
		  </button>
		</div>
	  </>
	);
  }
  