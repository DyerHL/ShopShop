import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateAgent } from '../Data/AgentsData';

const initialState = {
    name: '',
    email: '',
    phone: '',
    imgUrl: '',
}

export default function CreateAgentForm({uid, editItem}) {
    const [formInput, setFormInput] = useState(initialState);
    const navigation = useNavigate();

    useEffect(() => {
        setFormInput(editItem);
    }, []);

    const resetForm = () => {
        setFormInput(initialState);
      };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAgent(uid, formInput).then(() => {
            resetForm();
            navigation(`/agentHome/${uid}`);
        });
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='imgUrl'>
                Img Url:
                <input type='text' id='imgUrl' value={formInput.imgUrl || ''} onChange={handleChange} />
            </label>
            <label htmlFor='name'>
                Name:
                <input type='text' id='name' value={formInput.name || ''} onChange={handleChange} />
            </label>
            <label htmlFor='phone'>
                Phone Number:
                <input type='text' id='phone' value={formInput.phone || ''} onChange={handleChange} />
            </label>
            <label htmlFor='email'>
                Email:
                <input type='text' id='phoneNum' value={formInput.email|| ''} onChange={handleChange} />
            </label>
                <input type="submit" value="Submit" />
        </form>
      )
    }
