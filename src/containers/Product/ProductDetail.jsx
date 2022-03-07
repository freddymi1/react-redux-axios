/**
 * @author Freddy Michel
 * @description import all dependancies and function
 */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProducts, selectedProducts } from '../../redux/actions/productActions';
import { baseUrl } from '../../services/services';
import img from "../../assets/imgs/img.png";
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function ProductDetail() {
    /**
     * @author Freddy Michel
     * @description declare all constants and variables
    */
    const {id} = useParams();

    const product = useSelector(state => state.product);

    const dispatch = useDispatch();

    console.log(product);

    const {name, picture, category, price, description} = product;

    useEffect(()=>{
        getOneProduct();
        return ()=> dispatch(removeSelectedProducts())
    }, [id])

    /**
     * @author Freddy Michel 
     * @description get single product
     */
    const getOneProduct = async() => {
        const response = await axios.get(baseUrl+`/articles/${id}`).catch(err=>{
            console.log("Error", err)
        });
        dispatch(selectedProducts(response.data));
    }

    return (
        <div className='container'>
            {
                Object.keys(product).length === 0 ?
                <div>
                    <h2>Loading...</h2>
                </div>
                :
                <div>
                    <h3 className='p-2 uppercase'>Detail du produit <em>{name}</em></h3>

                    <div className="card">
                        <div className='row'>
                            <div className="col-12 col-sm-6">
                            {
                                picture ? 
                                <div className="_img">
                                    <img className='img_' src={picture} alt={name} />    
                                </div>
                                :
                                <div className="_img">
                                    <img className='img_' src={img} alt="Images articles" />    
                                </div>
                            }
                            </div>
                            <div className="col-12 col-sm-6 position-relative">
                                <div className="card-header">
                                    <div className="_header">
                                        <h5>{name}</h5>
                                        <p className='price_'>{price} <sup>Ar</sup> </p> 
                                    </div>
                                </div>
                                <div className="card-body p-2">
                                    <p>
                                        {description}
                                    </p>
                                </div>
                                <div className="card-footer w-100 pl-0 position-absolute right-2 bottom-0">
                                    <div className="_footer w-100">
                                        <div className="category">
                                            <p>{category}</p>    
                                            
                                        </div>
                                        <button className='btn btn-warning d-flex'>
                                            <AiOutlineShoppingCart size="1.5em" className=''/>
                                            Add to cart
                                        </button> 
                                    </div>    
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            } 
        </div>
    )
}
