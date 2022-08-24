import { useState } from "react"

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState({
        title: "Software Developer",
        location: "10036"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(term.title, term.location)

    }
    return(
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job Title</label>
            <input type="text" 
                   class="form-control" 
                   id="exampleFormControlInput1"
                   placeholder={term.title}
                   value = {term.title}
                   onChange={(e)=>{setTerm({...term, title: e.target.value})}}/>

        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Location (post code)</label>
            <input type="text" 
                   class="form-control" 
                   id="exampleFormControlInput1"
                   placeholder={term.location}
                   value = {term.location}
                   onChange={(e)=>{setTerm({...term, location: e.target.value})}}/>

        </div>
        <button type="submit" class="btn btn-primary mb-3">Search</button>
      </form>  
    )

}

export default SearchBar