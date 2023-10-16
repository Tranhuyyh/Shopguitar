import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'
import Footer from './footer'

export default function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    return (
        <div className='products_'>
            <div className='search'>
                <input className="search_text" type="text" placeholder="Search..."/>
                <i className="fa-solid fa-magnifying-glass search_icon"></i>
            </div>
                <div className="products">
                
                    {
                        products.map(product =>(
                                <Link to={`/products/${product._id}`}>
                                <div className="card" key={product._id}>
                        
                                <img src={product.images[0]} alt=""/>
                                    
                                <div className="box">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                                </h3>
                                <p>{product.description}</p>
                                <h4>${product.price}</h4>
                                {/* <button onClick={() => addCart(product._id)}>
                                    Add to cart
                                </button> */}
                                </div>  
                            </div>
                            </Link>
                        ))
                    }


                </div>
                <hr/>
                <Footer/>
        </div>
    )
}
