const { useState } = React;

function PaymentForm() {
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulazione invio dati al server
        const response = await fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div className="payment-form">
            <h2>Pagamento Online</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome sulla Carta</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Numero di Carta</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Data di Scadenza (MM/AA)</label>
                    <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Paga</button>
            </form>
        </div>
    );
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
