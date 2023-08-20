import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'


const Products = () => {
  const id=parseInt(useParams().id); /*id hon 3am ykoun string 
  3shen hek 3am 7awlo la Int */
  const [maxPrice,setMaxprice]=useState();
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  
  return (
    <div className='products'>
       <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type='checkbox' id="1" value={1}/>
            <label htmlFor='1'>Shoes</label> {/* ma tense eno la eno 7atet bel
            label  htmlFor='1' 7tyna equal 1 la eno bel input id equal 1 so be hyde 
            tare2a bseer kamen eza kbaset 3ala label byn3mal check bel box mesh 
            bas eza kbaset 3ala lbox */}

          </div>
               <div className='inputItem'>
            <input type='checkbox' id="2" value={1}/>
            <label htmlFor='1'>Skirts</label> {/* ma tense eno la eno 7atet bel
            label  htmlFor='1' 7tyna equal 1 la eno bel input id equal 1 so be hyde 
            tare2a bseer kamen eza kbaset 3ala label byn3mal check bel box mesh 
            bas eza kbaset 3ala lbox */}

          </div>

               <div className='inputItem'>
            <input type='checkbox' id="3" value={1}/>
            <label htmlFor='1'>Coats</label> {/* ma tense eno la eno 7atet bel
            label  htmlFor='1' 7tyna equal 1 la eno bel input id equal 1 so be hyde 
            tare2a bseer kamen eza kbaset 3ala label byn3mal check bel box mesh 
            bas eza kbaset 3ala lbox */}

          </div>

        </div>
          <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxprice(e.target.value)}/>
             <span>{maxPrice}</span>
          </div>

        </div>

          <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' name='price' onChange={(e)=>setSort("asc")}/>
            <label htmlFor='asc'>Price (Lowest first)</label>

          </div>
             <div className='inputItem'>
            <input type='radio' id='desc' name='price' onChange={(e)=>setSort("desc")}/>
            <label htmlFor='desc'>Price (Highest first)</label>

          </div>
          

        </div>

      
    </div>

     <div className='right'>
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""

        />

        <List maxPrice={maxPrice} sort={sort}/>
    </div>
    </div>
  )
}

export default Products
