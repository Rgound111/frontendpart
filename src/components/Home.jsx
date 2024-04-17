import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/items/getitems`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>List of Items</h3>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Items To the List</button>
            </div>
            {products &&
                products.map((p) => {
                    return (
                        <>
                            <div key={p._id} style={{ backgroundColor: '#fff', padding: '10px', marginBottom: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                {p?.name}
                            </div>
                        </>)
                })}
        </div>
    );
};

export default Home;
