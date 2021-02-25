import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';
import SearchBar from './components/SearchBar.jsx';
import ListOfArtists from './components/ListOfArtists.jsx';
import fileSaver from 'file-saver';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: []
    }
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload(event) {
    fileSaver.saveAs(event.target.value, 'image.jpg');
  }

  //this function to post the input text to the post route in the server
  handleInputSearch(inputText) {
    axios.post('/items', {
      data: inputText
    })
      .then((retreivedData) => {
        //update state with retreivedData from server
        console.log('SUCCESSFUL POST WITH AXIOS', retreivedData.data)
        this.setState({artworks: retreivedData.data});
      })
      .catch((err) => {
        console.log('FAILED POST: ', err)
      })
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       console.log('SUCESS CLIENT SIDE')
  //       this.setState({
  //         artworks: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }


  render () {
    return (<div>
      <h1>The Rijksmuseum Archives</h1>
      < ListOfArtists />
      < SearchBar handleInputSearch={this.handleInputSearch} />
      < List handleDownload={this.handleDownload} artworks={this.state.artworks} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));