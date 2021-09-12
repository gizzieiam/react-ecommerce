import React from 'react'
import Success from './success'

function Address(props){
    let last = props.card.substr(props.card.length-4)
    const [user, serUser] = ([
        {
            'streetNum': 0,
            'streetName': 'none',
            'apt': 1,
            'city': 'none',
            'state': 'none',
            'zip': 0,
        }
    ])
    return render(
        <>
        <Success user={user[user.length-1]} last4={last}/>
        </>
    )
}

export default Address