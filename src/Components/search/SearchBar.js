import React, { useState } from 'react'
import Search from './Search';

function SearchBar(props){

    const [show, setShow] = useState([{classN: 'hide'}])

    const [userInput, setUserInput] = useState([
        {
            input: 'default',
            option: 'Name'
        }
    ])

    const handleChange = (e) =>{
        setUserInput([...userInput, {
            input: e.target.value,
            option: userInput[userInput.length-1].option
        }])
    }

    const handleSelect = (e) =>{
        setUserInput([...userInput, {
            input: userInput[userInput.length-1].input,
            option: e.target.value
        }])
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setShow([...show, {
            classN: "show"
        }])
    }
    return(
        <>
            <form method='POST'>
                <select onChange={handleSelect}>
                    <option>Name</option>
                    <option>Id</option>
                    <option>Category</option>

                </select>
                <input onChange={handleChange} />
                <button onClick={handleSubmit}>Search</button>
            </form>
            <div className={show[show.length-1].classN}>
                <Search searchItem={userInput[userInput.length-1].input} searchBy={userInput[userInput.length-1].option} />
            </div>
        </>

    )
}

export default SearchBar