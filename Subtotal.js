import React from 'react';
import "./Subtotal.css";
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{ basket }] = useStateValue();

  // Calculate total amount
  const getTotalAmount = () => {
    return basket.reduce((total, item) => total + item.price, 0);
  };

  // Format total amount as currency
  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(getTotalAmount());

  return (
    <div className='subtotal'>
      <p>
        Subtotal ({basket?.length} items): <strong>{formattedTotal}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;





/*import React from 'react'
import "./Subtotal.css";
import { useStateValue } from './StateProvider';

const value = 0; // value prop

const formattedValue = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(value)
function Subtotal() {
  const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
        <>
            <p>
            Subtotal ({basket?.length} items): <strong>{formattedValue}</strong>
            </p>
            <small className="subtotal_gift">
            <input type="checkbox" /> This order contains gift
            </small>
        </>
        <button>Proceed to Checkout</button>
      
    </div>
  )
}

export default Subtotal*/


/*import React from 'react'
import "./Subtotal.css";

function Subtotal({ basket }) {
    const getBasketTotal = (basket) => {
      return basket.reduce((amount, item) => item.price + amount, 0);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(amount);
      };

}
function subtotal() {
  return (
    <div className='subtotal'>
         <p>
        Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
     <button>Procced to Checkout</button>    
    </div>
  )
}

export default subtotal;

/*
<CurrencyFormat 
renderText = {(value)=>(
    <>
        <p>
            Subtotal({basket.length} items):
            <strong>{'${vlue}'}</strong>
        </p>
        <small className="subtotal_gift">
            <input type="checkbox" /> This order contains gift</small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
    /> 
 */

    /*<CurrencyFormat
        renderText={(value)=>(
            <>
             <p>
                Sunbtotal (0 items):
                <strong>0</strong>
             </p>
             <small className="subtotal_gift">
               <input type="checkbox"/>This order contains a gift
            </small>

            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
     />*/

     /*<CurrencyFormat 
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal (0items): <strong>0</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This order contains gift
                    </small>
                    </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix{"$"}
        />*/