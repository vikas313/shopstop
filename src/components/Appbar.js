
import { auth } from "../configs/firebase";
export default function Appbar(props) {
    return (
      <  >
      <h2 className="h2" >welcome {auth.currentUser.email}</h2>
        
      </>
     
    );
  }