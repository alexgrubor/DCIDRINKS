const Drinks = () => {
  return (
    <div>
      <div className="search-by-name">
        <input type="text" placeholder="Search by name"/>
        <button>Search</button>
      </div>
      <div className="search-by-ingredient">
        <input type="text" placeholder="Search by ingredient"/>
        <button>Search</button>
      </div>
      <div className="search-by-alcohol">
        <input type="text" placeholder="Search by alcohol"/>
        <button>Search</button>
      </div>
      <div className="results">
        
      </div>
    </div>
  )
}
export default Drinks