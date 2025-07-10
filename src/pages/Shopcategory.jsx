import React, { useContext } from 'react'
import'./Css/Shopcategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const Shopcategory = (props) => {
  const{all_product} = useContext(Shopcontext)
  return (
    <div className='shop-category'>
      <img  className='shopcategory-banner' src={props.banner} alt=''></img>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=''></img>
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item
            key={i}  
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />

          }
          else{
            return null;
          }
        })}
      </div>

       <div className="shopcategory-loadmore">
          Explore More
       </div>
      
    </div>
  )
}

export default Shopcategory
