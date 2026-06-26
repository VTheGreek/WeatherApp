function SearchBar({value, onChange, onSubmit}) {
    
    return(
        <>
        <input value={value} 
        onChange={onChange} 
        onKeyDown={(event) => {
        if(event.key === "Enter") {
            onSubmit();
        }
        } }
        />
        <button onClick={onSubmit}>Search</button>
        </>
    )
}

export default SearchBar