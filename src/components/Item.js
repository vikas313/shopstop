
import Buttondesc from "./Buttondesc";
function Item(props) {

  return (
    <div className="vikas">
      <>
        <img src={props.details.image} height="200" alt='img' width='200' /><br />
        <span>{props.details.title}</span><br />
        <span>{props.details.price}$</span><br />
        {/* <span className="hoveringtext" >{props.details.description}</span> */}
        <Buttondesc handledesccr={props.handledescr} desc={props.details} /><br />

        <button className="add-to-cart" 
        onClick={() => props.incrcount(props.details)}
        >Add to Cart</button>
      </>

    </div>
  );
}
export default Item;
