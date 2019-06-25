import React from 'react'
import SearchAndFilter from './search/SearchAndFilter'
import BookList from './bookList/BookList'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bookList: [],
      searchTerm: '',
      printType: '',
      bookType: ''
    }
  }

  fetchData(){
    console.log('fetching data')
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
    const searchTerm = this.state.searchTerm
    const apiKey = 'AIzaSyCzQ4YnQ6IpTnnZxkMsZBsR8MQEvZ1c9Mw'
    const url = encodeURI(`${baseURL}${searchTerm}&key=${apiKey}`)
  
    fetch(url)
      .then(response => {
        if (!response.ok){
          throw new Error('Something went wrong')
        }
        return response.json()
      }).then(data => {
        this.setState({
          bookList: data.items
        })
      }).catch(err => {
        console.log(err)
        this.setState({
          error: err.message
        })
      })
  }
  updateSearchTerm(searchTerm){
    this.setState({
      searchTerm
    })
}

  onSearchTermSubmit(){
      this.fetchData()
  }

  render(){
    
    return (
      <main className="App">
        <h1>Google Books Search</h1>
        <SearchAndFilter 
          searchTerm={this.state.searchTerm}
          handleSearchTermSubmit={term => this.onSearchTermSubmit(term)}
          updateSearchTerm={term => this.updateSearchTerm(term)}
        />
        <BookList bookList={this.state.bookList}/>
      </main>
    );
  }
}

export default App;
