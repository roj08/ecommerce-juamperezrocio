import { useState } from 'react';
import { Link } from 'react-router-dom';

const InputCount = () => {

    return (
        <>
        <Link to='/cart'>
            <button onClick={()=>console.log('cart')} className="button-primary">
                Terminar Compra
            </button>
        </Link>
        </>
    )
}

const ButtonCount= ({handleInter})=>{
    return <button onClick={handleInter} className="button-primary">Agregar</button>
}

const BuyButton = () => {

    const [inputType, setInputType] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }

    return(
        <div>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                :
                    <InputCount />
            }
        </div>
    )
}

export default BuyButton