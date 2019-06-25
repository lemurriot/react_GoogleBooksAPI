import React from 'react'

export default function BookType(props) {
    const options = ['ebooks', 'free-ebooks', 'full', 'paid-ebooks', 'partial']
    const optionsList = options.map((option, i) => <option key={i} value={option} id={option}>{option}</option>)
    return (
        <form action="">
            <label htmlFor="booktype_options">Filter Book Types</label>
            <select name="booktype_options" id="booktype_options" value={props.bookType} onChange={e => props.onBookTypeChange(e.target.value)}>
                <option value="">All Books</option>
                {optionsList}
            </select>
        </form>
    )
}
