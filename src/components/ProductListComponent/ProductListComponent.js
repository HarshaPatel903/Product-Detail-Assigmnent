import React from 'react';


const ProductListComponent = (props) =>{
    const {title,price,varianceTitle} = props;
    return (
    
        <div id={"SingleProductMainDiv"} key={props.key}>
             <img src={props?.img} style={{height:'100px',width:'100px'}}/>
             <div> title : {title}</div>
             <div> variance title : {varianceTitle}</div>
             <div> title : {price}</div>
        </div>

    );
}

export default ProductListComponent;