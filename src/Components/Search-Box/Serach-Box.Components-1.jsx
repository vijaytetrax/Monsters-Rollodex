import { Component } from 'react'
import './Search-Box.Style.css'

class SearchBox extends Component {

    render() {
        const { placeholder, handleChange, className } = this.props;
        return (
            <input
                type='search'
                className={`search-box ${className}`}
                placeholder={placeholder}
                id='searchField'
                onChange={handleChange}
            />
        )
    }
}

export default SearchBox;