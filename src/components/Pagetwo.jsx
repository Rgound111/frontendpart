import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Pagetwo = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post(`http://localhost:8080/api/v1/items/additems`, { name: name });
            if (data.success) {
                toast.success(data.message);
                setName('');
                navigate('/');
                localStorage.setItem('item',{name})
            } else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Error while Adding Product');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>You Cannot Add same Product Twice</h2>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button
                onClick={() => handleSubmit()}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }}
            >
                Add Item
            </button>
        </div>
    );
};

export default Pagetwo;
