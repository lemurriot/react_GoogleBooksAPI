import React from 'react'
import SearchBar from './searchBar/SearchBar.js'
import BookType from './bookType/BookType.js'
import PrintType from './printType/PrintType.js'

export default function SearchAndFilter(props) {
    return (
        <div>
            <SearchBar />
            <div className="filter__forms">
                <BookType />
                <PrintType />
            </div>
        </div>
    )
}

