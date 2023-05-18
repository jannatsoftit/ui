import React, { useState } from 'react';

const Users = () => {
    const [value, setValue] = useState<Record<string, string>>({ name: '' });

    const handleChange = (event: any) => {
        setValue({ [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/users', {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then(response => response.json())
            .then(console.log);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                onChange={handleChange}
                type="text"
                value={value.name}
            />
            <button type="submit">
                Submit
            </button>
        </form>
    );
};

export default Users;
