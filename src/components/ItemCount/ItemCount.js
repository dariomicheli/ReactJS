import {useState} from 'react';
import './ItemCount.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

function ItemCount({stock,onAdd,buyItems}) {
    
    const [amount,setAmount] = useState(1);

    return (
        <>
            <Stack direction="row" alignItems="center">
                <span>Cantidad:</span>
                <Tooltip title="Quitar">
                    <span>
                        <IconButton 
                        disabled={amount<=1}
                        onClick={()=>setAmount(amount - 1)}
                        color="primary"
                        >
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <span>{amount}</span>
                <Tooltip title="Agregar">
                    <span>
                        <IconButton
                        disabled={amount>=stock} 
                        onClick={()=>setAmount(amount + 1)}
                        color="primary"
                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                {stock===0 ? <span className="sinStock">¡Sin stock!</span> : <span className="stock">({stock} disponibles)</span>}
            </Stack>
            <Button variant="contained" disabled={stock<=0} onClick={()=>buyItems(amount)}>Comprar</Button>
            <Button variant="outlined" disabled={stock<=0} onClick={()=>onAdd(amount)}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;