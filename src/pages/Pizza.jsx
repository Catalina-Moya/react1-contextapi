import React, { useEffect, useState } from 'react';

const Pizza = () => {
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            const response = await fetch(`http://localhost:5000/api/pizzas/p001`);
            if (response.ok) {
                const data = await response.json();
                setPizza(data);
            } else {
                console.error('Error al obtener la pizza');
            }
        };

        fetchPizza();
    }, []);

    if (!pizza) return <div>Pizza no encontrada.</div>;

    return (
        <div className="pizza-detail">
            <h1>{pizza.name}</h1>
            <img src={pizza.img} alt={pizza.name} />
            <p>Precio: ${pizza.price}</p>
            <h3>Ingredientes:</h3>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            {pizza.desc && <p><strong>Descripción:</strong> {pizza.desc}</p>}
        </div>
    );
};

export default Pizza;