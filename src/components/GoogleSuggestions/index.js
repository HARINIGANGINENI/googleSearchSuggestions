// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateInputSearch = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {SuggestionsList} = this.props
    const searchResults = SuggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-img"
          />
          <div className="search-bar-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input-bar"
                placeholder="SearchGoogle"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  onChangeSearchInput={this.onChangeSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
