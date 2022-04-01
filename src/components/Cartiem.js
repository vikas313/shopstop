import React from 'react'

const Cartiem = (props) => {
    return (
        <section className='cartparent' >
            <div className='cartitem' >
                <img src={props.data.image} height="100" width="100" />
                <section>
                    <p>{props.data.title}</p>
                    <p>rating :{props.data.rating.rate}</p>
                    <p>customers bought :{props.data.rating.count}</p>
                    <h1>price-{props.data.price}</h1>
                    <button className='bnow'  onClick={()=>props.removeitem(props.data)} >Remove Item</button>
                </section>
            </div>
          
        </section>
    )
}

export default Cartiem
