import { useCart } from './components/CartContext';

const Cart = () => {
    const { cart, removeFromCart, addToCart } = useCart();

    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleIncreaseQuantity = (item) => {
        addToCart(item); 
    };

    return (
        <div className="cart" style={{ minHeight: 'auto', marginBottom: '200px' }}>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Cart</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        </div>
                    </div>
                </div>
            </div>
            <table className="table" style={{ marginBottom: '50px' }}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                                <span style={{ marginRight: '8px' }}>{item.quantity}</span>
                                <button
                                    className="button"
                                    style={{ padding: '4px 8px', fontSize: '14px', fontWeight: 'bold' }}
                                    onClick={() => handleIncreaseQuantity(item)}
                                >
                                    +
                                </button>
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeFromCart(item._id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-total" style={{ marginBottom: '50px' }}>
                <h4>Total: ${calculateTotal(cart).toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;
