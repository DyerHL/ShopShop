import React, { useState } from 'react'

const initialState = {
    picture: '',
    name: '',
    phone: '',
    email: '',
    username: '',
    password: '',
}

export default function AgentProfileForm() {
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
        <form className='form-body' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className='form-label' htmlFor='picture'>
                    Img Url:
                </label>
                <input type='text' id='picture' className='form-input' value={formInput.imgUrl || ''} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='name'>
                    Name:
                </label>
                <input type='text' id='name' className='form-input' value={formInput.name || ''} onChange={handleChange} />

            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='phone'>
                    Phone Number:
                </label>
                <input type='text' id='phone' className='form-input' value={formInput.phone || ''} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='email'>
                    Email:
                </label>
                <input type='text' id='phoneNum' className='form-input' value={formInput.email|| ''} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='email'>
                    Username:
                </label>
                <input type='text' id='email' className='form-input' value={formInput.username || ''} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label className='form-label' htmlFor='password'>
                    Password:
                </label>
                <input type='text' id='password' className='form-input' value={formInput.password || ''} onChange={handleChange} />
            </div>
            <input type="submit" className='form-btn' value="Submit" />
        </form>
      )
    }
