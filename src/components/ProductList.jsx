import React, { useState } from 'react';
import product from "../data/product.json";
import './ProductList.css';
import noImage from "../noImage.jpeg";


export default function ProductList() {

    const [stockBalance, setStockBalance] = useState("");
    const [excludingVat, setExcludingVat] = useState("");
    const [includingVat, setIncludingVat] = useState("");
    const [ImgUrl, setImgUrl] = useState("");
    const [categories] = useState(["SERVETT", "LYKTOR", "LJUS", "PORSLIN", ]);
    const [showInfoPressed, setShowInfoPressed] = useState(false);
    
    function showProductInfo(product) {
        setStockBalance(product.lagersaldo);
        setExcludingVat(product.pris);
        setIncludingVat(product.pris + (product.pris + product.momssats / 100));
        setImgUrl(product.bild.url);
        console.log(ImgUrl);
    }
    
    var List = categories.map(item => 
        <div>
            <h3>{item}</h3>
            {product.products.map((product) => (
            product.artikelkategorier_id === item
                ? <div className="ListItem">
                    <li key={product.id}>{product.artiklar_benamning}</li>
                    <button onClick={() => {showProductInfo(product)}}></button>
                </div>
                :null
            ))}
        </div>
    );

    return (
        <div className="ListComponent">
            <div className="List">
                <h1>Produktlista</h1>
                <ul>
                    {List}
                </ul>
            </div>
            <div className="ProductInfo">
                <h1>ProduktInformation</h1>
                <ul>
                    <li>LagerSaldo: {stockBalance}</li>
                    <li>Pris exklusive moms: {excludingVat} kr</li>
                    <li>Pris Inklusive moms: {includingVat}</li>
                    <img src={ImgUrl} alt={noImage}></img>
                </ul>
            </div>
        </div>
    );
}