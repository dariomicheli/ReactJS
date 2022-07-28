import {useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";


const Register = () => {

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
        e.preventDefault();
        setError('');
        try {
            await signup(user.email,user.password);
            navigate('/');
        } catch (err) {
            switch (err.code) {
                case "auth/weak-password":
                    setError("La contraseña ingresada es muy debil. Debe contener al menos 6 caracteres.")                    
                    break;
                case "auth/email-already-in-use":
                    setError("Ya existe una cuenta con la dirección de correo ingresada.")                    
                    break;
                case "auth/invalid-email":
                    setError("La dirección de correo no es válida.")                    
                    break;
                case "auth/operation-not-allowed":
                    setError("La dirección de correo/contraseña no se encuentran habilitadas.")                    
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

                <button>Registrar</button>
            </form>
        </div>
    )
}

export default Register