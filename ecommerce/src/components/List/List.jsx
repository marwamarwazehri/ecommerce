import React from 'react'
import './List.scss'
import Card from '../Card/Card'



const List = () => {

     const data = [
        {
            id:0,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price:12,

        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price:12,

        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price:12,

        },
        {
            id:3,
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
             title:"Hat",
              isNew:true,
            oldPrice:19,
            price:12,

        },

        
     
];
  return (
    <div className='list'>
        {data?.map((item)=>{
            return <Card item={item} key={item.id}/>
        })}
      
    </div>
  )
}

export default List
