
import React, { useState,useEffect } from 'react';
import ProductListComponent from '../../components/ProductListComponent/ProductListComponent.js';

function ProductListingPage() {
    const[productListData, setProductListData] = useState([]);
useEffect(()=>{
    async function getProductsApi(){
          let url =   "https://servicereminder.el.r.appspot.com/supertailsProductsAssignment";
          const response = await fetch(url);
          let productList = await response.json();
        setProductListData(productList?.products ?? []);
    };
    getProductsApi();
  },[]);


  function sortBy(param) {
    if(param == "price"){
      let sortedByPrice = productListData.sort(function(a,b){return a.variants[0]?.price - b.variants[0]?.price});
      setProductListData(sortedByPrice);
      sortedByPrice.map((a)=>console.log(a.variants[0]?.price));
      console.log(productListData);
    }
    else if(param == "price-dsc"){
      let sortedByPrice = productListData.sort(function(a,b){return b.variants[0]?.price - a.variants[0]?.price});
          console.log(sortedByPrice);
          sortedByPrice.map((a)=>console.log(a.variants[0]?.price));
          setProductListData(sortedByPrice);
    }
    else if(param == "name"){
     let sortedByName = productListData.sort((a,b)=>{
        const titlea = a.title.toUpperCase();
        const titleb = b.title.toUpperCase();
        if(titlea < titleb){
        return -1
        }
        else{
          return 1
        }
      });
      sortedByPrice.map((a)=>console.log(a.variants[0]?.price));

      console.log(sortedByName);
    }
    else if(param == "name-dsc"){
      let sortedByNameDesc = productListData.sort((a,b)=>{
        const titlea = a.title.toUpperCase();
        const titleb = b.title.toUpperCase();
        if(titleb < titlea){
        return -1
        }
        else{
          return 1
        }
      });
      sortedByNameDesc.map((a)=>console.log(a.title));

      console.log(sortedByNameDesc);
    }
    
  }

  return (
    <div>
      <div> sortBy </div>
      <div onClick={()=>{sortBy("price")}}> price asc</div>
      <div onClick={()=>{sortBy("price-dsc")}}> price dsc</div>
      <div onClick={()=>{sortBy("name")}}> name </div>
      <div onClick={()=>{sortBy("name-dsc")}}> name desc</div>
      { productListData.map((product,index) =>(
        <ProductListComponent key={product.id}
        img = {product?.image?.src ?? ""}
        title = {product?.title ?? ""}
        variance-title = {product?.variants[0]?.title ?? ""}
        price = {product?.variants[0]?.price ?? ""} />
       ))}

    </div>
  );
}

export default ProductListingPage;
