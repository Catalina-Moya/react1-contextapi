import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';
import '../assets/css/Home.css';


const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas');
                if (!response.ok) {
                    throw new Error('Error al obtener las pizzas');
                }
                const data = await response.json();
                console.log(data); 
                setPizzas(data);
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };
    
        fetchPizzas();
    }, []);

    const handleAddToCart = (pizza) => {
        addToCart({ ...pizza, quantity: 1 }); 
    };

    return (
        <div>
            <Header />
            <div className="pizza-list">
                <div className='pizza-items'>
                {pizzas.length > 0 ? (
                    pizzas.map((pizza) => (
                        <div key={pizza.id} className="pizza-item">
                            <h2>{pizza.name}</h2>
                            <img src={pizza.img} alt={pizza.name} />
                            <p className='pizza-precio'>Precio: ${pizza.price}</p>
                            <h3>Ingredientes:</h3>
                            <ul>
                                {pizza.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <p><strong>Descripción:</strong> {pizza.desc}</p>
                            <button onClick={() => handleAddToCart(pizza)}>Añadir al carrito</button>
                        </div>
                    ))
                ) : (
                    <p>No hay pizzas disponibles.</p>
                )}
                </div>
            </div>
        </div>
    );
    
};

export default Home;
