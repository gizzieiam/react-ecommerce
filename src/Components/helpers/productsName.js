import Products from '../../Data/Products.json'


function productsNames(name){
    for (const item in Products) {
        if (Object.hasOwnProperty.call(Products, item)) {
            const element = Products[item];
            if (element.productName === name) {
                return element;
            }else{
                return "Not found"
            }
        }
    }
}

export default productsNames