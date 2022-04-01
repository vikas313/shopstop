import { useState } from 'react';
import './App.css'
import Directlogin from './components/Directlogin';
import Logedin from './components/Logedin';
import Login from './components/Login';
const App = () => {
  // const [storage, setstorage] = useState(localStorage.getItem('data') || null);
  const [storage, setstorage] = useState( null);

  const [login, setlogin] = useState(false);



  const [loggedin, setloggedin] = useState(localStorage.getItem('logout') || null);


  function local(fields) {
    setstorage(fields);

    console.log('executed')

  }


  // const [afterlogout, setafterlogout] = useState(false);

  const handlelogout = () => {
   // localStorage.setItem('logout', 'true');
    // setafterlogout(true)
    setstorage(null);
    //localStorage.removeItem('data');

  }
  // method for home page when localstaroge is true or not
  const handledirectlogin = () => {
    console.log("clicked")
    if (localStorage.getItem('data')) {
      let pass = prompt(`enter password for ${ JSON.parse(localStorage.getItem('data')).name}`,'*********');
      if( JSON.parse(localStorage.getItem('data')).password ==pass){
      setstorage(localStorage.getItem('data'))
      setlogin(true);
      }else{
        alert(`wrong password for account ${ JSON.parse(localStorage.getItem('data')).email}`)
      }



    }
    else {
      alert('you havent signed up')
    }
  }

  return (
    // <>

    //   {
    //     !login ?
    //       <div className="App" >
    //         {!storage ? <Login store={local} login={handledirectlogin} /*logedin={setloggedin}*/ /> :
    //           <>
    //             {
    //               !afterlogout ? <Logedin logout={handlelogout} /> : <Login login={handledirectlogin} />
    //             }


    //           </>
    //         }


    //       </div> :
    //       <Directlogin />

    //   }


    // </>
    <div className='App'>
      {(!storage) ? <Login store={local} login={handledirectlogin} /*logedin={setloggedin}*/ /> : <Logedin logout={handlelogout} />}
    </div>
  )
}
export default App;
