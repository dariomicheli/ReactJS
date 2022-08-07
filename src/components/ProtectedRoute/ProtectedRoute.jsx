import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Progress from '../Progress/Progress';

const ProtectedRoute = ({children}) => {
    const {user,loading} = useAuth();
    
    if(loading) return <Progress />
    
    if(!user) return <Navigate to='/login' />

    return <>{children}</>
}

export default ProtectedRoute;