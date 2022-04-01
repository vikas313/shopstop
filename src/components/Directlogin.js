import React, {  useState } from 'react'
import Logedin from './Logedin';

const Directlogin = (props) => {
    let [pval, setpval] = useState('');
    const [dlogin, setdlogin] = useState(false);
    const handlepchange = e => {
        setpval(e.target.value)
    }
    const handlelogin = e => {
        if (pval == JSON.parse(localStorage.getItem('data')).password) {
            console.log('login successfull');
            setdlogin(true);
        }
        else {
            alert('password didnt match');
        }

    }


    return (
        
            
                !dlogin ? <div>
                    <input type="text" readOnly value={JSON.parse(localStorage.getItem('data')).name} />
                    <input type="password" onChange={handlepchange} value={pval} />
                    <button onClick={handlelogin} >login</button>
                </div>
                    :
                   <Logedin />
            
        
    )
}

//export default Directlogin;
