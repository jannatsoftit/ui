import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    
    const handleDelete = (id) => {
        fetch(`http://localhost:8000/api/users/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(console.log);
    };

    useEffect(() => {
        fetch('http://localhost:8000/api/users')
            .then(response => response.json())
            .then(setUsers);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: any) => (
                    <tr key={user.id}>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                        <th>
                            <button
                                onClick={() => {
                                    console.log('Edit', user.id);
                                }}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                type="button"
                            >
                                Delete
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Users;
