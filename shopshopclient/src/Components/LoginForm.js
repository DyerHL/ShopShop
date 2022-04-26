import React, { useState } from 'react'

const initialState = {
    username: '',
    password: '',
}

export default function LoginForm() {
    const [formInput, setFormInput] = useState(initialState);

    const handleChange = (e) => {
        setFormInput((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.warn(formInput);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
            Username:
            <input type='text' id='username' value={formInput.username || ''} onChange={handleChange} />
        </label>
        <label htmlFor='password'>
            Password:
            <input type='text' id='password' value={formInput.password || ''} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}
