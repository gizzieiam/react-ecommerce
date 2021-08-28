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

    const [search, setSearch] = useState([{
        input: 'default',
        option: 'Name'
    }])

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
        setSearch([...search, {
            input: userInput[userInput.length-1].input,
            option: userInput[userInput.length-1].option,
        }])
        setShow([...show, {
            classN: "show"
        }])
    }
    return(
        <>
            <form method='POST'>
                <select onChange={handleSelect} className='col-form-label mt-4'>
                    <option>Name</option>
                    <option>Id</option>
                    <option>Category</option>

                </select>
                <input  className='col-form-label mt-4' onChange={handleChange} />
                <button onClick={handleSubmit} className='btn btn-outline-secondary'>Search</button>
            </form>
            <div className={show[show.length-1].classN}>
                <Search searchItem={search[search.length-1].input} searchBy={search[search.length-1].option} />
            </div>
        </>

    )
}

export default SearchBar