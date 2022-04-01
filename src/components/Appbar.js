

export default function Appbar(props) {
    return (
      <  >
      <h2 className="h2" >welcome {(JSON.parse(localStorage.getItem('data')).name)}</h2>
        
      </>
     
    );
  }