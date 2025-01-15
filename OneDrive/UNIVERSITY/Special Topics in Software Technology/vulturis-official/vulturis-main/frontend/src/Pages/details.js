import React , {useEffect , useState } from 'react'  //Page with details for the product 
import {useParams} from 'react-router-dom'
import {products} from './Cart/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../StoredGlobalData/cart'

const Detail = () =>{
    
    const { slug } = useParams();
    const [detail, setDetail ] = useState([]);
//creating a state named quantity to display the value the user wants to add to the cart 
    const [quantity , setQuantity] = useState(1);

    useEffect(() => {//i'll find the position of the product in the product list  whose slug value matches the slug on the link 
        const findDetail  = products.filter(product => product.slug === slug )
        if (findDetail.length>0) //if it exists 
        {
            setDetail(findDetail[0]);  // set the details with the product we just found 
        }else { //iff link (entered by user ) doesn't match any product 
            window.location.href = '/'; //being redirected to home  page --> or we could create Error 404 to inform it does not exist 
        }
    }, 
    [slug])
//functions to increase/decrease product quantity on the cart (unleess it is less than 1)
const handleMinusQuantity =()=>{

    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
}
const handlePlusQuantity= () =>{

    setQuantity(quantity + 1 );
}

const handleAddToCart=()=>
{//we need useDispatch for this 
    dispatchEvent(addToCart({
        productId: detail.id , 
        quantity: quantity   //to add arbiitry quantities to the cart 
     }));
}

    return (
//using tailwind 
//displaying product on the screen 
 //content divided into 2 columns
 // left col displays images and the right one information
 //creating two buttuns for this page 
<div>   
    <h2 className = 'text-3xl text-center'>PRODUCT DETAIL</h2>  
    <div className = 'grid grid-cols-2 gap-5 mt-5'>
        <div>
            <img src= { detail.image} alt =" " className = 'w-full'  > </img> 
        </div>
        <div className = 'flex flex-col gap-5 ' >
            <h1 className = 'text-4xl uppercase font-bold '> {detail.name }</h1>
            <p className = 'font-bold  text-3xl '>
                ${detail.price}
            </p>
            <div className = 'flex gap-5'>
                <div className = 'flex-gap-2 justify-center items-center '>
                    <button className = 'bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick = {handleMinusQuantity}>-</button>
                        <span className = 'bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                    <button className = 'bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick = {handlePlusQuantity}>+</button>
                </div>
                    <button className = 'bg-slate-900 text-white px-7 py-3  rounded-xl shadow-2xl' onClick ={handleAddToCart}>
                        Add To Cart 
                    </button>
            </div>
            <p>
                {detail.description}
            </p>
        </div>
    </div>
</div>
    )

}

export default Detail;