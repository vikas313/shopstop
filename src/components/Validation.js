// import { useState } from "react";

// const Validation=(props)=>{
//     const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     const [toggle,setToggle] = useState(true)

// function isEmailAddress(str) {

//     return str.match(pattern);

// }
//     const signUpFormValidation = (formData) => {
//         const error = {}
//         const fields = ['email', 'password', 'name','vpassword','mobile']
//         fields.forEach(field => {
//             if (!formData[`${field}`]) {
//                 error[[field]] = `${field} not present`
//             }
//         })
        
//         if (formData.name && (formData.name.length < 3 || formData.name.length > 20)) {
//             error['name'] = 'Name should be atleast 4 chars and less than 20 chars'
//         }
//         if (formData.mobile && (formData.mobile.length < 3 || formData.mobile.length > 20)) {
//             error['mobile'] = 'mobile should be atleast 4 chars and less than 20 chars'
//         }
//         if (formData.password && (formData.password.length < 6 || formData.password.length > 30)) {
//             error['password'] = 'Password should be atleast 6 chars and less than 30 chars'
//         }
//         if (formData.vpassword && (formData.password !== formData.vpassword)) {
//             error['password'] = 'Password not match'
//         }
    
//         if (formData.email && isEmailAddress(formData.email) === null) {
//             error['email'] = 'Not a valid email'
//         }
//         if (Object.keys(error).length === 0) return null
//         return error
//     }

//     let result = signUpFormValidation(props.data);
   
  
//     const handleerrors=()=>{
//         console.log('clicked')
//         setToggle(false)
//     }
//     return (
//         <>
//         {result ? 
//         <><input type="submit" value="Login"   onClick={handleerrors} /> <br/>
//         {  !toggle ? result.name:null}<br/>
        
//         {/* {  !toggle ? result.email:null}<br/>
//         {  !toggle ? result.mobile:null}<br/>
//         {  !toggle ? result.password:null}<br/>
//         {  !toggle ? result.vpassword:null}<br/> */}
//          </>
//         :
//         <input type="submit" value="Login"  onClick={props.validate}/>}
       
//         </>
//     )
// }
// export default Validation;