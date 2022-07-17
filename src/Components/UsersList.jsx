import React, { useEffect, useState } from 'react';
import '../css/style.css'

const UsersList = ({ addUsers, userSelected, updateUsers, deselectUsers }) => {

    const [ first_name, setFirst_name ] = useState("");
    const [ last_name, setLast_name ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ birthday, setBirthday] = useState("")

    useEffect(() => {
        if(userSelected !== null){
            setFirst_name(userSelected.first_name);
            setLast_name(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday)
        } else{
            reset();
        }

    }, [userSelected])



    const submit = e => {
        e.preventDefault();
        const newUsers = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }
        if(userSelected !== null){
            newUsers.id = userSelected.id
            updateUsers(newUsers);
            deselectUsers();
        }
        else{
            addUsers(newUsers)
            reset();
        }
        
    }

    const reset = () => {
        setFirst_name("");
        setLast_name("");
        setEmail("");
        setPassword("");
        setBirthday("")
    }

    return (
        <div className='input-card'>
            <div className='input-title'>
                <h1 className='title'>New User</h1>
            </div>
            <form onSubmit={submit} className='form'>
                <div className='inputs'>
                    <label htmlFor="FirstName" className='label'>First Name</label>
                    <input 
                        type="text" id='FirstName' 
                        onChange={e => setFirst_name(e.target.value)} 
                        value={first_name}
                        placeholder='Type your name' 
                        className='input'
                    />
                </div>

                <div className='inputs'>
                    <label htmlFor="LastName" className='label'>Last Name</label>
                    <input 
                        type="text" id='LastName'
                        onChange={e => setLast_name(e.target.value)} 
                        value={last_name} 
                        placeholder='Type your lastname'
                        className='input'
                    />
                </div>

                <div className='inputs'>
                    <label htmlFor="Email" className='label'>Email</label>
                    <input type="text" id='Email'
                     onChange={e => setEmail(e.target.value)} 
                     value={email}
                     placeholder='Type your email'
                     className='input'
                    />
                </div>

                <div className='inputs'>
                    <label htmlFor="Password" className='label'>Password</label>
                    <input type="password" id='Password'
                    onChange={e => setPassword(e.target.value)} 
                    value={password}
                    placeholder='Type your password'
                    className='input'
                />
                </div>
                <div className='inputs'>
                    <label htmlFor="Birthday" className='label'>Birthday</label>
                    <input type="date" id='Birthday'
                    onChange={e => setBirthday(e.target.value)} 
                    value={birthday}
                    className='input'
                />
                </div>
                <button className='button'> {userSelected !== null ? "Update" : "Create"}</button>
                {userSelected !== null && (
                    <button onClick={deselectUsers} type="button" className='clear'>
                        Clear
                    </button>
                )}
            </form>
        </div>
    );
};

export default UsersList;