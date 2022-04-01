import {useState} from 'react'
import Loginpagedata from './Loginpagedata';



function Login(props){

  const [data,setData] = useState({
    name:'',
    email:'',
    mobile:'',
    password:'',
    vpassword:''
  });
  const [error,seterror] = useState('');
  const [iserror,setiserror] = useState(false);
  
  
  const handlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(!data.name && !data.email && !data.password && !data.vpassword && !data.mobile){
      setiserror(true);
      seterror('all fields are required')
    }
    else if(data.name && data.name.length<5){
      setiserror(true);
      seterror('name length is too short')
    }
    else if(!data.email && data.email.includes('@')){
      setiserror(true);
      seterror('enter valid email')
    }
    else if(!data.mobile && data.mobile.length!==10){
      setiserror(true);
      seterror('enter valid mobile without country code')
    }
    else if(!data.password && data.password.length<6){
      setiserror(true);
      seterror('password should be atleast 6 chars');
    }
    else if(data.password!==data.vpassword){
      setiserror(true);
      seterror('passwords didnt match')
    }
    else{
      setiserror(false);
      localStorage.setItem("data",JSON.stringify(data));
      seterror('');
      props.store(data);
     // props.loggedin(true)
     
    }
    
    console.log(data)
      
   
  }
  console.log('iam login.js')
 
  return (
    <>
     <div className='background' ></div>
     <Loginpagedata/>
     <div className='form' >
    { <>
      
    <form onSubmit={handlesubmit} >
    <label htmlFor="name" >Name:</label>
    <input type='text' name='name'  placeholder='enter name' onChange={handlechange}  /> <br/><br/>

    <label htmlFor="email" >Email:</label>
    <input type='text' name='email' placeholder='enter mail' onChange={handlechange}/><br/><br/>

    <label htmlFor="mobile" >Mobile:</label>
    <input type='number' name='mobile' placeholder='enter mobile' onChange={handlechange}/><br/><br/>

    <label htmlFor="password" >password:</label>
    <input type='text' name='password' placeholder='enter password' onChange={handlechange}/><br/><br/>

    <label htmlFor="vpassword" >Vpassword:</label>
    <input type='text' name='vpassword' placeholder='verify password' onChange={handlechange}/><br/><br/>

    <input type="submit" value={'Signup'}/>
    </form>

    {iserror ? error:null}
   <div className='preaccount' >
   <p>Allready have an account?</p>
    <button onClick={props.login} >Login</button>
   </div>
    </>}
    </div>
    </>
  )
}
export default Login;