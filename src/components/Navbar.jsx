import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CartContext';

function Navbar() {
    const { cart } = useCart(); 

    
    const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const formattedTotal = new Intl.NumberFormat('en-US').format(total);

    const token = false; 

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#e3f2fd' }}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link nav-btn home-btn" to="/">🍕 Home</Link>
                </li>
                {token ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link nav-btn profile-btn" to="/profile">🔓 Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-btn logout-btn" to="/logout">🔒 Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link nav-btn login-btn" to="/login">🔐 Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-btn register-btn" to="/register">🔐 Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-btn profile-btn" to="/profile">👤 Profile</Link>
                        </li>
                    </>
                )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link nav-btn total-btn" to="/cart">🛒 Total: ${formattedTotal}</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
}

export default Navbar;