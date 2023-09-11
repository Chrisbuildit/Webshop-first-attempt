import citroenen from "../assets/citroenen.jpeg";
import React from "react";
import {useParams} from "react-router-dom";
import data from "../data/data.json";
import './ProductPage.css'


function ProductPage() {

    const { productId } = useParams();

    const currentData = data.find((value) => {
        return value.id === productId;
    });
    console.log(productId);

    return (
        <>
            <article className="product">
                <img src={citroenen} alt="Citroen"/>
                <h2 className="product-name">{currentData.title}</h2>
                <p className="product-description">{currentData.content}</p>
            </article>
        </>
    )
}

export default ProductPage;