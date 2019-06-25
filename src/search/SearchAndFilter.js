import React from 'react'
import SearchBar from './searchBar/SearchBar.js'
import BookType from './bookType/BookType.js'
import PrintType from './printType/PrintType.js'

export default function SearchAndFilter(props) {
    return (
        <div>
            <SearchBar 
                searchTerm={props.searchTerm}
                handleSearchTermSubmit={props.handleSearchTermSubmit}
                updateSearchTerm={props.updateSearchTerm}
            />
            <div className="filter__forms">
                <BookType 
                    onBookTypeChange={props.onBookTypeChange}
                    bookType={props.bookType}
                />
                <PrintType 
                    onPrintTypeChange={props.onPrintTypeChange}
                    printType={props.printType}
                />
            </div>
        </div>
    )
}

