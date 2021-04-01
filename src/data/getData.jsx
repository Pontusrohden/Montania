import React, {useEffect, useState} from "react";

const JSONurl = "https://dev14.ageraehandel.se/sv/api/product";

fetch(JSONurl)
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })

  function getData() {
    const [inventoryData, setInventoryData] = useState({});

    useEffect(() => {
      getInventoryWithFetch = () => {

      }
    });

    return 

    
  }