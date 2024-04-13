import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() { 
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src="https://yt3.ggpht.com/Ea3zt90y00Z8icnjWKIWPV7WKIrSIisC_m6P7M7lcgCIOZ5nUiZWkRXV9K5dPkIDsO5HABJa5u4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" />
            <div>
              <h2 className='checkout_title'>Your shopping Cart</h2>
              {basket.map(item =>(
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
              ))}
            </div>    
        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;





/*import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src="https://yt3.ggpht.com/Ea3zt90y00Z8icnjWKIWPV7WKIrSIisC_m6P7M7lcgCIOZ5nUiZWkRXV9K5dPkIDsO5HABJa5u4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" />
            <div>
              <h2 className='checkout_title'>Your shopping Cart</h2>
              {basket.map(item =>(
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
              ))}
            </div>    
        </div>
        <div className='checkout_right'>
            <Subtotal/>
         
        </div>

    </div>
  )
}

export default checkout*/

/*function Checkout() {
  return (
    <div className='checkout'>
      
    </div>
  )
}

export default Checkout
https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/DCC_Amazon1._CB423492668_.jpg
https://m.media-amazon.com/images/G/31/img24/img24/mmf-april/banner/MMF_1500x300_1.CB560016103.jpg
*/
