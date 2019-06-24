import React from 'react'
import SearchAndFilter from './search/SearchAndFilter'
import BookList from './bookList/BookList'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bookList: [],
      searchTerm: 'George Washington',
      printType: '',
      bookType: ''
    }
  }
  componentDidMount(){
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
    const searchTerm = this.state.searchTerm
    const apiKey = 'AIzaSyA6_w4QEiwd5ILb3-kVFsmTAy0Hp_4d6Wg'
    const url = encodeURI(`${baseURL}${searchTerm}&key=${apiKey}`)
    console.log(url)

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

  render(){
    
    return (
      <main className="App">
        <h1>Google Books Search</h1>
        <SearchAndFilter />
        <BookList bookList={this.state.bookList}/>
      </main>
    );
  }
}

export default App;
