import {useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [user, setUser] = useState({
        email:'',
        password:''
    });
    const [error, setError] = useState(); 
    const {login}= useAuth();
    const navigate = useNavigate();

    const handleChange = ({name, value}) =>{
        setUser({...user,[name]:value});
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email,user.password);
            navigate('/');
        } catch (err) {
            switch (err.code) {
                case "auth/user-disabled":
                    setError("El usuario ha sido deshabilitado")                    
                    break;
                case "auth/user-not-found":
                    setError("No se ha encontrado un usuario con esta direccion de correo")                    
                    break;
                case "auth/invalid-email":
                    setError("La dirección de correo no es válida.")                    
                    break;
                case "auth/wrong-password":
                    setError("La contraseña es incorrecta")                    
                    break;
                default:
                    break;
            }
        }     
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form 
                onChange={({target}) => handleChange(target)}
                onSubmit={handleSubmit}
            >

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password"  id="password" placeholder='******'/>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login