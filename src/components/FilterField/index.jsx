import './styles.css';

const FilterField = ({ filter, setFilter, filterCategory, setFilterCategory }) => {
    return (
        <div className="filter-field">
            <h2>Filtrar:</h2>
            <div className="options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Complete">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Categoria:</p>
                    <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Pessoal">Pessoal</option>
                        <option value="Estudos">Estudos</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterField;