import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { addToDb } from '../../utils/AddToDB';

const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        axiosSecure('/products')
        .then(res => setProducts(res.data))
    }, [axiosSecure])

    const handleShowDetails = (product) => {
        Swal.fire({
            title: `${product.name}`,
            html: `
            <p>Price: $${product.price}</p>
            <p>Manufacturer: ${product.seller}</p>
            <p>Rating: ${product.ratings}</p>
            `,
            imageUrl: `${product.img}`,
            imageWidth: 350,
            imageHeight: 250,
            imageAlt: 'Product image',
        })
    }

    const handleAddToCart = (product) => {
        addToDb(product.id)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${product.name} added to cart!`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div>
            <h3 className='text-center text-2xl font-semibold pb-2'>Total Products {products.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2'>
                {
                    products.map(product => <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className='h-72'><img src={product.img} alt="Image not found" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleShowDetails(product)} className="btn btn-primary">Show Details</button>
                                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductsList;