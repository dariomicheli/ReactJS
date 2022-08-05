import './NotFound.css';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const NotFound = () => {

  const navigate = useNavigate();

  const handleBtnHome = () =>
    navigate('/');

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <SentimentVeryDissatisfiedIcon color="disabled" sx={{ fontSize: 300 }}/>
        <h2>Upss!</h2>
        <p>No hemos podido encontrar la página que buscabas</p>
        <Button onClick={handleBtnHome}>Ir al inicio</Button>
      </Stack>
    </Box>
  )
}

export default NotFound;