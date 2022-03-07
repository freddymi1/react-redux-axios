import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from "../../redux/actions/productActions";
import img from "../../assets/imgs/img.png";
import { baseUrl } from '../../services/services';
import {AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';

export const ProductLists = () => {
    const products = useSelector(state => state.allProducts.products);

    const dispatch = useDispatch();

    useEffect(()=>{
        getAllArticles();
    },[])

    /**
     * @author Freddy Michel
     * @description get all products
     */
    const getAllArticles = async() => {
        const responses = await axios.get(baseUrl+"/articles").catch(err=>{
            console.log("Error", err)
        });
        dispatch(setProducts(responses.data));
    }

    /**
     * @author Freddy Michel
     * @description Render the lists of articles
     */
    const renderLists = products.map((product) => {
        // const {id, name, picture, category} = product;
        return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2"  key={product.id}>
                <div className="card">
                    <div className="card-header">
                        <div className="_header">
                            <h5>{product.name}</h5>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        {
                            product.picture ? 
                            <div className="_img">
                                <img className='img_' src={product.picture} alt={product.name} />    
                            </div>
                            :
                            <div className="_img">
                                <img className='img_' src={img} alt="Images articles" />    
                            </div>
                        }
                    </div>
                    <div className="card-footer">
                        <div className="_footer">
                            <div className="category">
                                <p>{product.category}</p>    
                                <p className='price_'>{product.price} <sup>Ar</sup> </p> 
                            </div>
                            <div className="price">
                                 
                                <Link to={`/product_detail/${product.id}`} className='btn btn-primary d-flex'>
                                    <AiFillEye size="1.5em" className=''/>
                                    <p className='ml-1'>Detail</p>
                                </Link>  
                            </div>  
                        </div>    
                    </div> 
                </div> 
            </div>
        )
    });

    return (
        <div className='container'>
            <h3 className='p-2 uppercase'>List des produits</h3>
            <div className="row">
                
                {renderLists}
                    
            </div>
        </div>
    )
}
