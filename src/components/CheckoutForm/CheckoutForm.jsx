import './CheckoutForm.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from '../../context/AuthContext';

const CheckoutForm = ({handleSubmit,handleChange}) => {
    
    const {user} = useAuth();

    return (
        <>
            <form
                className='form-container' 
                onSubmit={handleSubmit}
                onChange={({target}) => handleChange(target)}
            >
                <h3>Datos Personales</h3>
                <TextField
                    fullWidth 
                    disabled
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    value={user.email}
                />

                <TextField
                    required
                    id="name"
                    label="Nombre"
                    type="text"
                    name="name"
                />

                <TextField
                    required
                    id="surname"
                    label="Apellido"
                    type="text"
                    name="surname"
                />

                <TextField
                    required
                    id="phone"
                    label="Teléfono / Móvil"
                    type="tel"
                    name="phone"
                />

                <Button variant="contained" type="submit" color="success">Comprar</Button>
            </form>
        </>
    )
}

export default CheckoutForm;