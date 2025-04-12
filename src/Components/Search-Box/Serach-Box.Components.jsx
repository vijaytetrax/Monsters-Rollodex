import './Search-Box.Style.css'


const SearchBox = ({ placeholder, handleChange, className }) => {
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


export default SearchBox;