
function regex(item, returnType){
    if (returnType === 'name') {
        let re = /[a-z A-Z]+/g
        let match = [...item.matchAll(re)]
        return match[0]

    }else if (returnType === 'amount') {
        let re = /[-]+([\d]+)/g
        let match = [...item.matchAll(re)]
        return match[1]
    }

}

export default regex