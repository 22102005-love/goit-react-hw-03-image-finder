import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    searchQuery: '',
  };
  handleAddSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmite={this.handleAddSearchQuery}></Searchbar>
        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
      </div>
    );
  }
}
export default App;
