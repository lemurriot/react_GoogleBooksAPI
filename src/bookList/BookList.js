import React from 'react'
import BookListing from './BookListing'

export default function BookList(props) {
    const listings = props.bookList.map((item, i )=> <BookListing 
        key={i}
        id={`book-${i}`}
        title={item.volumeInfo.title} 
        authors={item.volumeInfo.authors}
        imgURL={item.volumeInfo.imageLinks.thumbnail}
        />)
    return (
        <div>
            BookList
            <ul className="bookList__container">
                {listings}
            </ul>
        </div>
    )
}
