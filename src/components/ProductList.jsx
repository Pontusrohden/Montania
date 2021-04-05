import React, { useState } from 'react';
import product from "../data/product.json";
import './ProductList.css';

export default function ProductList() {

    const [categories] = useState(["SERVETT", "LYKTOR", "LJUS", "PORSLIN", ]);
    const [cheapest, setCheapest] = useState(99999999);
    const [mostExpensive, setMostExpensive] = useState(0);
   
    function findCheapest(){
        product.products.forEach(item => 
            {if(item.pris < cheapest) {
                setCheapest(item.pris);
            }}
            );
            return cheapest;
    } 
    function findMostExpensive() {
        product.products.forEach(item => 
            {if(item.pris > mostExpensive) {
                setMostExpensive(item.pris);
            }}
            );
            return mostExpensive;
    }
    var amount = product.products.length;
    var List = categories.map(item => 
        <div>
            <h3>{item}</h3>
            {product.products.map((product, index) => (
                product.artikelkategorier_id === item
            ?<div className="ListItem">
                <ul key={index} className="Item">
                    <li>Artikel: {product.artiklar_benamning}</li>
                    <li>Variant {product.artiklar_variant}</li>
                    <li>I lager: {product.lagersaldo}</li>
                    <li>Pris Inklusive moms: {product.pris + (product.pris + product.momssats / 100) +"kr"}</li>
                </ul>
            </div>
                :null
                ))}
        </div>
    );
    return (
        <div className="Container">
            <div className="List">
                {List}
            </div>
            <div className="InfoContainer">
                <p>Antal artiklar i listan: {amount}</p>
                <p>Högsta artikelpris: {findMostExpensive()}kr</p>
                <p>Lägsta artikelpris: {findCheapest()}kr</p>
            </div>
        </div>
    );
}