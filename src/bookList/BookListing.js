import React from 'react'

export default function BookListing(props) {
    const { title, id, authors, imgURL, price, description } = props
    const prependPrice = price === 'Not for Sale' ? '' : 'Price: $'
    const authorList = authors.map((author, i) => <li key={i}>{author} </li>)
    return (
        <li id={id} className="bookList__item">
            <h3>{title}</h3>
            <div>{prependPrice}{price}</div>
            <h4>Author(s):</h4>
            <ul className="authors">{authorList}</ul>
            <img src={imgURL} alt={title}/>
            <p>{description}</p>
        </li>

    )
}
