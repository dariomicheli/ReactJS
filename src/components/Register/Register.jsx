import {useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate,Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import './Register.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Progress from '../Progress/Progress';


const Register = () => {
    const [loading,setLoading] = useState(false);
    const [user, setUser] = useState({
        email:'',
        password:''
    });
    const [error, setError] = useState(); 
    const {signup}= useAuth();
    const navigate = useNavigate();

    const handleChange = ({name, value}) =>{
        setUser({...user,[name]:value});
    }

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        setError('');
        try {
            await signup(user.email,user.password);
            setLoading(false);
            navigate('/checkout');
        } catch (err) {
            switch (err.code) {
                case "auth/weak-password":
                    setError("La contraseña ingresada es muy debil. Debe contener al menos 6 caracteres.")                    
                    setLoading(false);
                    break;
                case "auth/email-already-in-use":
                    setError("Ya existe una cuenta con la dirección de correo ingresada.")                    
                    setLoading(false);
                    break;
                case "auth/invalid-email":
                    setError("La dirección de correo no es válida.")                    
                    setLoading(false);
                    break;
                case "auth/operation-not-allowed":
                    setError("La dirección de correo/contraseña no se encuentran habilitadas.")                    
                    setLoading(false);
                    break;
                default:
                    setLoading(false);    
                    break;
            }
        }     
    }

    return (
        <div className="register-container">
            <h2>Registrate</h2>
            <p>Por favor completa los siguientes datos para crear una cuenta</p>
            {error && <Alert severity="error" variant="outlined">{error}</Alert>}
            <form 
                onChange={({target}) => handleChange(target)}
                onSubmit={handleSubmit}
                className="registerForm"
            >
                <TextField
                    fullWidth 
                    required
                    id="outlined-required"
                    label="Email"
                    type="email"
                    name="email"
                />

                <TextField
                    fullWidth 
                    required
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    helperText="La contraseña debe tener un minimo de 6 caracteres"
                />

                {loading
                    ? <Progress />
                    : <Button variant="contained" type="submit">Registrarme</Button>
                }   
            </form>
            <p>¿Ya tenes cuenta? <Link to="/login">inicia sesión</Link></p>
        </div>
    )
}

export default Register