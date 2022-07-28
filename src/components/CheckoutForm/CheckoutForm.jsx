import './CheckoutForm.css';

const CheckoutForm = ({handleSubmit,handleChange}) => {
    return (
        <>
            <h2>Finalizar la Compra</h2>
            <h3>Datos Personales</h3>
            <form
                className='form-container' 
                onSubmit={handleSubmit}
                onChange={({target}) => handleChange(target)}
            >
                <label htmlFor="email">Correo</label>
                <input type="email" name="email" id="email" required />

                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="surname">Apellido</label>
                <input type="text" name="surname" id="surname" required />

                <label htmlFor="phone">Teléfono / Móvil</label>
                <input type="tel" name="phone" id="phone" required />

                <input className='form-btn' type="submit" value="Comprar" />
            </form>
        </>
    )
}

export default CheckoutForm;