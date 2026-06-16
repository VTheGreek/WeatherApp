function SearchBar({value, onChange, onSubmit}) {
    return(
        <>
        <input value={value} onChange={onChange} />
        <button onClick={onSubmit}>Search</button>
        </>
    )
}

export default SearchBar