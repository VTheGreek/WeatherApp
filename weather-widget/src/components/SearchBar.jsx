function SearchBar({value, onChange, onSubmit}) {
    
    return(
        <>
        <h1 className="text-4xl font-bold text-white mb-8">
           Weather App
        </h1>
        
        <div className="flex gap-2">
        <input
        className="w-80 rounded-lg px-4 py-2 outline-none bg-white text-black placeholder-gray-500"
        value={value} 
        onChange={onChange} 
        onKeyDown={(event) => {
        if(event.key === "Enter") {
            onSubmit();
        }
        } }
        />
        <button
         className="bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-800 transition duration-300"
         onClick={onSubmit}>Search
         </button>
        
        </div>
        
        </>
    )
}

export default SearchBar