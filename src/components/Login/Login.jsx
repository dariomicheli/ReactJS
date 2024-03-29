import {useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate,Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import './Login.css';
import Divider from '@mui/material/Divider';
import Progress from '../Progress/Progress';

const Login = () => {

    const [user, setUser] = useState({
        email:'',
        password:''
    });
    const [error, setError] = useState(); 
    const {login,loginWithGoogle,resetPassword}= useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChange = ({name, value}) =>{
        setUser({...user,[name]:value});
    }

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        setError('');
        try {
            await login(user.email,user.password);
            setLoading(false);
            navigate('/checkout');
        } catch (err) {
            switch (err.code) {
                case "auth/user-disabled":
                    setError("El usuario ha sido deshabilitado")
                    setLoading(false)                    
                    break;
                case "auth/user-not-found":
                    setError("No se ha encontrado un usuario con esta direccion de correo") 
                    setLoading(false)                   
                    break;
                case "auth/invalid-email":
                    setError("La dirección de correo no es válida.") 
                    setLoading(false)                   
                    break;
                case "auth/wrong-password":
                    setError("La contraseña es incorrecta")   
                    setLoading(false)                 
                    break;
                default:
                    setLoading(false)
                    break;
            }
        }     
    }

    const handleGoogleSignIn = async () =>{
        try {
            await loginWithGoogle();
            navigate('/checkout'); 
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleResetPassword = async () =>{
        if(!user.email) return setError("Por favor ingresa tu email");

        try {
            await resetPassword(user.email);
            setError("Se ha enviado un email a la dirección indicada");
        } catch (error) {   
            console.log(error.message);
        }
    }

    return (
        <div className="login-container">
            <h2>Acceder</h2>
            <p>Por favor completa los siguientes datos para acceder a tu cuenta</p>
            {error && <Alert variant="outlined" severity="error">{error}</Alert>}
            <form 
                onChange={({target}) => handleChange(target)}
                onSubmit={handleSubmit}
                className="loginForm"
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
                />
                
                {loading
                    ? <Progress />
                    : <Button variant="contained" type="submit">Ingresar</Button>
                }               
                <Button onClick={handleResetPassword}>¿Olvidaste tu contraseña?</Button>
            </form>
            <Divider />
            <Button variant="outlined" startIcon={<GoogleIcon />} onClick={handleGoogleSignIn}>Ingresar con google</Button>
            <p>¿No tenes cuenta? <Link to="/register">registrate acá</Link></p>
        </div>
    )
}

export default Login