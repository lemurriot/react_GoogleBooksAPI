import React, {Component } from 'react'

export default class SearchBar extends Component {

    handleSubmit(e){
        e.preventDefault()
        this.props.handleSearchTermSubmit()
    }
    render(){
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="search_bar">Search:</label>
                <input type="text" name="search_bar" id="search_bar" value={this.props.searchTerm} onChange={e => this.props.updateSearchTerm(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
