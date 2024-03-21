import "./Product.css";
import Price from "./Price";

function Product( { title, idx }) {
   let oldPrices = ["12,495", "11,900", "15,99", "599"];
   let newPrices = ["8,999", "9,199", "899", "299"];
   let description = [
        ["8,000 DPI", " 5 Programmable buttons"], 
        ["intutive surface","designed for iPad pro"], 
        ["designed for iPad pro","intutive surface"], 
        ["wireless", "optical Orientation"],
    ];
    return(
        <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
   
}

export default Product; 