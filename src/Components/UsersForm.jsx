import React from 'react';
import '../css/style-form.css'

const UsersForm = ({users, deleteUser, selectUser}) => {
    return (
        <ul className='list'>{
                users.map((users) => (
                    
                        <li key={users.id} className='item'>
                            <h3>{users.first_name} {users.last_name}</h3>
                            <h5>{users.email}</h5>
                            <h5>{users.birthday}</h5>
                            <div className='buttons'>
                                <button className='delete' onClick={() => deleteUser(users.id)}>Delete</button>
                                <button className='edit' onClick={() => selectUser(users)}>Edit</button>
                            </div>
                        </li>
                    
                ))
            }
        </ul>
    );
};

export default UsersForm;