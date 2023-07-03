import { useEffect, useState } from "react";
import "./App.css";
import Directlogin from "./components/Directlogin";
import Logedin from "./components/Logedin";
import { auth } from "./configs/firebase";
import { db } from "./configs/firebase";
import { getDocs, collection } from "firebase/firestore";
import Login from "./components/Login";
import { signOut } from "firebase/auth";
const App = () => {
  const [login, setlogin] = useState(false);
  const [products, setProducts] = useState([]);
  const productsRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productsRef);
        const filteredData = data.docs.map((doc=>({...doc.data(),id:doc.id})))
        console.log(filteredData)
        setProducts(filteredData)
      } catch (err) {
        console.log(err);
      }
    };
    getProducts()
  },[]);
  const handlelogout = async () => {
    try {
      await signOut(auth);
      await setlogin(false);
    } catch (err) {
      alert(err);
    }
  };

  // method for home page when localstaroge is true or not
  const handledirectlogin = () => {
    // if (localStorage.getItem('data')) {
    //   let pass = prompt(`enter password for ${ JSON.parse(localStorage.getItem('data')).name}`,'*********');
    //   if( JSON.parse(localStorage.getItem('data')).password ==pass){
    //   setstorage(localStorage.getItem('data'))
    // setlogin(true);
    //   }else{
    //     alert(`wrong password for account ${ JSON.parse(localStorage.getItem('data')).email}`)
    //   }
    // }
    // else {
    //   alert('you havent signed up')
    // }
  };

  return (
    <div className="App">
      {!login ? (
        <Login setLogIn={setlogin} login={handledirectlogin} />
      ) : (
        <Logedin logout={handlelogout} />
      )}
    </div>
  );
};
export default App;
