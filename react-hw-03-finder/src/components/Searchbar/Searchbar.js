import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleFormSubmite = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    const { onSubmite } = this.props;
    onSubmite(searchQuery);
    this.formReset();
  };
  formReset = () => {
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleFormSubmite}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChangeForm}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
