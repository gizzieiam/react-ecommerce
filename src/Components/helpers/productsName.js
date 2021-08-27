import Products from '../../Data/Products.json'


function productsNames(){
    let names = []
    for (const item in Products) {
        if (Object.hasOwnProperty.call(Products, item)) {
            const element = Products[item];
            names.push(element.productName)
        }
    }
    return names
}

export default productsNames