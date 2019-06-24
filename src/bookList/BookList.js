import React from 'react'
import BookListing from './BookListing'

export default function BookList(props) {
    const listings = props.bookList.map((item, i )=> <BookListing 
        key={i}
        id={`book-${i}`}
        title={item.volumeInfo.title} 
        authors={item.volumeInfo.authors}
        description={item.volumeInfo.description}
        imgURL={item.volumeInfo.imageLinks.thumbnail}
        price={item.saleInfo.retailPrice ? item.saleInfo.retailPrice.amount : 'Not for Sale'}
        />)
    return (
        
            <ul className="bookList__container">
                {listings}
            </ul>
    )
}
