import React, { useState } from 'react';
import { data } from './Apidata';
let images = ['https://rb.gy/fsynjp', 'https://rb.gy/h52l2l', 'https://rb.gy/uwayq2', 'https://rb.gy/7vv4nd', 'https://rb.gy/gcri4j', 'https://rb.gy/9pbo7f', 'https://rb.gy/olgni6', 'https://rb.gy/uvm5k8', 'https://rb.gy/nz4bck', 'https://rb.gy/fzedvz', 'https://rb.gy/lalhhg', 'https://rb.gy/k9ycbu', 'https://rb.gy/bevvpi', 'https://thumbs.dreamstime.com/z/crocodile-leather-fashion-products-24710342.jpg', 'https://rb.gy/cqd2af']
const Imagesarr = (props) => {

    let [count, setcount] = useState(0)
    let [secount, setsecount] = useState(5)
    const handlefront = () => {
        if (secount < images.length) {
            setcount(secount);
            setsecount(prev => prev + 5);
            console.log('front clicked')
        }
    }
    const handlebackbtn = () => {
        if (count >= 5) {
            setcount(prev => prev - 5);
            setsecount(prev => prev - 5);
        }
    }
    return (
        <>
            <span className='previous' onClick={handlebackbtn} ><i class="uil uil-previous"></i></span>
            <div className='imagearr' >

                {
                    images.slice(count, secount).map((v, id) => <img key={id} className='imgarr' alt='img' src={v} height="200" width="200" />)
                }
            </div>
            <span className='next' onClick={handlefront} ><i class="uil uil-step-forward"></i></span>
        </>
    )
}

export default Imagesarr;

