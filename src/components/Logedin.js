import { useState } from 'react';
import Albums from './Albums';
import Appbar from './Appbar';
import './Loged.css';
import Cartiem from './Cartiem';
import Imagesarr from './Imagesarr';


function Logedin(props) {
  let [count, setcount] = useState([]);
  let [toggle, settoggle] = useState(true);
  const incrcount = (x) => {

    // setcount(prev=>prev+1);
    let nedata = {

      val: x
    };
    let data1 = [...count, nedata];

    let fdata = data1.filter((v) => data1.indexOf(v) === data1.lastIndexOf(v))

    setcount([...count, nedata])

  }
  const showcartpros = () => {
    settoggle(false)
  }
  const removeitem = (x) => {
    // let objkeys = Object.keys(x);
    console.log(x)
    let near = count.filter(v => v.val.id !== x.id);
    console.log(near)
    setcount(near)
  }
  const handlegoback = () => {
    settoggle(true)
  }

  return (
    <>
      <div className='header' >
        <Appbar name={props?.name} />


        <input type="text" placeholder='search products' />

        <button className='logout-button'

          onClick={props?.logout}
        >Logout</button>

        <span className='cartlogo' onClick={showcartpros} >my cart<i class="uil uil-shopping-cart"></i>
        </span>
        <span className='count_items' >{count.length}</span>

      </div>


      {toggle ?
        <>
          <section className='logedinback' >
            {/* <img src="" alt='img' /> */}
            <Imagesarr />

          </section>
          <Albums incrcount={incrcount} />
        </>
        :

        <>
          {count.length ?
            <>
              <button className='goback' onClick={handlegoback} >Go Back</button>
              {/* {count.map((v,id)=><img src={v.val.image} height="100" width="100" />)} */}
              {count.map((v, id) => <Cartiem key={id} data={v.val} removeitem={removeitem} />)}
              <section className='totalbill' >
                <h3 >Total Amount-{Math.floor(count.map(v => v.val.price).reduce((total, curr) => total + curr))}</h3>
                <button className='buynow'>{count.length > 1 ? 'Buy all' : 'Buy'}</button>
              </section>
            </>
            :
            // alert('no items')
            <>
              <span className='noitems' >no items in cart</span>
              <button className='gobackwhennoitem' onClick={handlegoback} >Go Back</button>
            </>
          }
        </>
      }

    </>

  )
}
export default Logedin;