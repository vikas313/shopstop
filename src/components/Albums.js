import { useEffect, useState } from "react";
import axios from 'axios'

import Item from './Item'


function Albums(props) {
    const [posts, setposts] = useState({

        datas: [],
        loading: true
    })
    const [cate, setcate] = useState({

        datas: [],
        loading: true
    });
    let [all, setall] = useState(true)
    const [desc, setdesc] = useState();
    const handledescr = (item) => {
        setdesc(() => item);


    }


    let url = 'https://faketoreapi.com/products'
    useEffect(() => {
        axios.get(url)
            //  .then(p=>console.log(p.data))
            .then(p => setposts({
                datas: p.data,
                loading: false
            }))


        return () => {
            url = null;
        }

    }, [])
    const handlechange = (e) => {
        let filtered = posts.datas.filter(v => v.category === e.target.value);
        setall(false);
        if (e.target.value === 'All') {
            setall(true)
        }
        setcate({
            datas: filtered,
            loading: false

        })
    }
    return (
        <>
            Search by  <select onChange={handlechange} >
                <option value="All" >All</option>
                <option value="men's clothing" >Mens clothing</option>
                <option value="women's clothing">Womens clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
            <div className="Vikas"  >

                {/* {posts.url} */}
                {desc ? <>
                    <div className="descset">
                        <>
                            <img src={desc.image} height="200" alt='img' width='200' /><br />
                            <span>{desc.title}</span><br />
                            <span>{desc.price}$</span><br />
                            <span className="hoveringtext" >{desc.description}</span><br />
                            <button onClick={() => setdesc(null)} >Back</button><br />
                            {/*   <Buttondesc  handledesccr = {props.handledescr}   desc={props.details} /><br/> */}

                            {/* <button className="add-to-cart"  >Add to Cart</button> */}
                        </>

                    </div>
                </> : <>
                    {all ? <> {posts.loading
                        ? "loading"
                        : posts.datas.map((item) => <Item key={item.id} handledescr={handledescr} details={item} incrcount={props.incrcount} />)}</> : <>
                        {cate.loading
                            ? "loading"
                            : cate.datas.map((item) => <Item key={item.id} handledescr={handledescr} details={item} incrcount={props.incrcount} />)}</>}






                </>

                }

            </div>
        </>
    )
}
export default Albums;