import React,{useState, Fragment} from 'react';

const Contador = () => {
    const [numero, setNumero] = useState(3);
    const aumentar =()=>{
        setNumero(numero + 1);
    }
    return ( 
        <Fragment>
        <h2>Mi primer componente {numero}</h2>
        <button onClick={aumentar}>automentar</button>
        </Fragment>
        
     );
}
 
export default Contador ;
