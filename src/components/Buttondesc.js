function Buttondesc(props){
    return (
        <>
       <span onClick ={()=>props.handledesccr(props.desc)}>viewmore</span><br/>
        </>
    )
}
export default Buttondesc;