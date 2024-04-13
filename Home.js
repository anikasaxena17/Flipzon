import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
            <img className='home_image' /*src="https://image.lexica.art/full_webp/3cb66073-4bc5-4b75-b747-4980174a6663"*/ /*src="https://th.bing.com/th/id/OIG4.EYA8HNJTQl63V.r7WpnA?pid=ImgGn"*/ /*src="https://th.bing.com/th/id/OIG1.9Gz5jya20TJ83MQhwSrN?pid=ImgGn"*/ src="https://th.bing.com/th/id/OIG1.7bAmLKlWQUxHoYbPnxKu?pid=ImgGn" alt='img' />
        <div className='home_row'>
            <Product id={12321341} title={"The Lean Startup : The Million Copy Bestseller Driving Entrepreneurs to Success"} price={349.99} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"} rating={5} />
            <Product id={49538094} title={"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"} price={599.0}rating={4} image={"https://m.media-amazon.com/images/I/71+tbc5GkoL._AC_SY300_SX300_.jpg"}/>
        </div>
        <div className='home_row'>
            <Product id={4903850} title={"boAt Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech"} price={1099}rating={4} image={"https://m.media-amazon.com/images/I/61UNx5wEJpL._SL1500_.jpg"}/>
            <Product id={36738454} title={"NIBOSI Men's Watches Analog Minimalist Black Dial Watches for Men"} price={2999}rating={4} image={"https://m.media-amazon.com/images/I/61Hbj-hU44L._SX679_.jpg"}/>
            <Product id={49537563} title={"Apple iPad Air (5th Generation): with M1 chip, 27.69 cm (10.9″)"} price={54999}rating={5} image={"https://m.media-amazon.com/images/I/71VbHaAqbML._SL1500_.jpg"}/>
        </div>
        <div className='home_row'>
            <Product id={90829332} title={"Samsung 57-inch(144.87cm) Odyssey Neo G9 Dual QHD, 240Hz, 1ms Curved Gaming Monitor, USB Hub, HAS, Quantum Mini LED, HDR1000, Smart TV, AMD FreeSync Premium Pro (LS57CG950NWXXL, Black)"} price={250000}rating={5} image={"https://m.media-amazon.com/images/I/81tgxJSFAgL._SL1500_.jpg"}/>
        </div>
        <div className='home_row'>
            <Product id={66289403} title={"LG 8 Kg 5 Star Inverter Direct Drive Touch Panel Fully Automatic Front Load Washing Machine"} price={34990}rating={5} image={"https://m.media-amazon.com/images/I/71cDdw7Vk7L._SL1500_.jpg"}/>
            <Product id={83259431} title={"Groeien newPT-X3VH-0ZIP 40-Watts Antique Hanging Lamp, Black"} price={823}rating={4} image={"https://m.media-amazon.com/images/I/516gO1a9cnL._SL1500_.jpg"}/>
            <Product id={82289401} title={"Campus Men's North Plus Running Shoes"} price={1099}rating={4} image={"https://m.media-amazon.com/images/I/71p+ffg6+lL._SY695_.jpg"}/>
        </div>
        <div className='home_row'>
            <Product id={13457727} title={"Samsung Galaxy Tab S9 Ultra 36.99 cm (14.6 inch) Dynamic AMOLED 2X Display"} price={114999} image={"https://m.media-amazon.com/images/I/71s-friu8pL._SL1500_.jpg"} rating={5} />
            <Product id={49555729} title={"American Tourister Valex 28 Ltrs Large Laptop Backpack"} price={1399}rating={5} image={"https://m.media-amazon.com/images/I/61rbiJyrcjL._SL1500_.jpg"}/>
        </div>
      </div>
    </div>
  )
}

export default Home
