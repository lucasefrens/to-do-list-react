import './styles.css'

const SearchField = ({ search, setSearch }) => {
    return (
        <div className="search-field">
            <h2>Pesquisar:</h2>
            <input 
                type="text" 
                name="search" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder='Digite para pesquisar'/>
        </div>
    );
}

export default SearchField;