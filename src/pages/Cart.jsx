import React from 'react';
import { useCart } from '../components/CartContext';
import '../assets/css/Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, addToCart, removeFromCart, decreaseQuantity } = useCart();

    const increaseQuantity = (id) => {
        addToCart(cart.find(pizza => pizza.id === id));
    };

    const totalAmount = cart.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map(pizza => (
                        <div key={pizza.id} className="cart-item">
                            <img src={pizza.img} alt={pizza.name} />
                            <h3>{pizza.name}</h3>
                            <hr />
                            <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
                            <p>Precio: ${pizza.price}</p>
                            <p>Cantidad: {pizza.quantity}</p>
                            <button onClick={() => increaseQuantity(pizza.id)} className='btn-mas'>+</button>
                            <button onClick={() => decreaseQuantity(pizza.id)} className='btn-menos'>-</button>
                        </div>
                    ))
                ) : (
                    <p>El carrito está vacío 🛒.</p>
                )}
            </div>
            <h3>Total: ${totalAmount}</h3>
            <button className="pay-btn" onClick={() => alert("Compra exitosa")}>Pagar</button>
            <Link to="/" className="link-btn">Volver a Inicio</Link>
        </div>
    );
};

export default Cart;
