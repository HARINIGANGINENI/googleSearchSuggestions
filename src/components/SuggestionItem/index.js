// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateInputSearch} = props
  const {suggestion} = {suggestionDetails}

  const onClickInput = () => {
    updateInputSearch(suggestion)
  }

  return (
    <li className="list-item">
      <p className="text">{suggestion}</p>
      <div>
        <button type="button" className="button" onClick={onClickInput}>
          <img
            className="image"
            alt="arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
