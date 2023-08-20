import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data=[
        {
            id:0,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price:12,
            desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumsuspendisse ultrices gravida. Risus commodo viverra maecenas accumsanlacus vel facilisis labore et dolore magna aliqua. Quis ipsum"

        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price:12,
           desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumsuspendisse ultrices gravida. Risus commodo viverra maecenas accumsanlacus vel facilisis labore et dolore magna aliqua. Quis ipsum"


        },
    ]
  return (
    <div className='cart'>
     <h1>Products in your cart</h1>
     {data?.map((item)=>{
        return <div className='item' key={item.id}>
            <img src={item.img} alt=''/>
            <div className='details'>
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>{/*This code is taking the desc property of the item object and extracting a substring that starts at index 0 and goes up to, but doesn't include, index 100. This effectively 
                extracts the first 100 characters of the desc string */}
                <div className='price'> 1 x ${item.price}</div>

            </div>
              <DeleteOutlinedIcon className='delete'/>
        </div>
     })}

     <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>

    <button>PROCEED TO CHECKOUT</button>
    <span className='reset'>Reset Cart</span>
   
    </div>
  )
}

export default Cart
