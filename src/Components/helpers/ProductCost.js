import Products from '../../Data/Products.json'


function productsCost(name){
    for (const item in Products) {
        if (Object.hasOwnProperty.call(Products, item)) {
            const element = Products[item];
            if (element.productName === name) {
                return element.price
            }
        }
    }
}

export default productsCost
