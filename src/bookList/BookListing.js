import React from 'react'

export default function BookListing(props) {
    const { title, id, authors, imgURL } = props
    return (
        <li className="bookList__item">
            <h3>{title}</h3>
            <div className="authors">{authors}</div>
            <img src={imgURL} alt="book image"/>
        </li>

    )
}
