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
  componentDidMount(){
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
    const searchTerm = this.state.searchTerm
    // const
    // fetch(url, )
  }

  render(){
    
    return (
      <main className="App">
        <h1>Google Books Search</h1>
        <SearchAndFilter />
        <BookList />
      </main>
    );
  }
}

export default App;
