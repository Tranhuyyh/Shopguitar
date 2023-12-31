import React,{useContext, useState, useEffect} from 'react'
import {DataContext} from './DataProvider'

import {Link} from 'react-router-dom'

export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])

    const reduction = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("bạn muốn xóa sản phẩm khỏi giỏ hàng?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }


    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Không có sản phẩm</h2>

    return (
        <>
           {
               cart.map(product =>(
                   <div className="details cart" key={product._id}>
                       <div className="img-container" 
                       style={{backgroundImage: `url(${product.images[0]})`}} />

                       <div className="box-details">
                           <h2 title={product.title}>{product.title}</h2>
                           <h3>${product.price}</h3>
                          
                           <p>{product.description}</p>
                           <p>{product.content}</p>
                           <p className="ship">{product.ship}</p>
                           
                           <div className="amount">
                               <button className="count" onClick={() => reduction(product._id)}> - </button>
                               <span>{product.count}</span>
                               <button className="count" onClick={() => increase(product._id)}> + </button>
                                
                               <div className="payment"><Link to="/payment" className='color_white'>MUA NGAY</Link></div>
                           </div>
                                
                           <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
                           <h3>Tổng: $ {total}</h3>
                       </div>
                   </div>
               ))
           }
        </>
    )
}
