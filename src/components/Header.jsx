import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#333', padding: '10px', marginBottom: '20px' }}>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/" style={addProductStyle}>Home</Link>
                <Link to="/pagetwo" style={addProductStyle}>Add Product</Link>
            </nav>
        </header>
    );
};

const linkStyle = {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
};

const addProductStyle = {
    color: '#fff',
    margin: '0 10px',
    padding: '8px 16px',
    textDecoration: 'none',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
};


export default Header;
