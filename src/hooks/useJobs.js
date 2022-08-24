import axios from "axios"
import { useEffect, useState } from "react"

const KEY = "3ff480da2759b9a0bedd22e01684c03b"
const ID = "3b33acab"


const useJobs = (defaultTitle, defaultLoc) => {
    const [jobs, setJobs] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        search(defaultTitle, defaultLoc)
    }, [defaultTitle, defaultLoc])

    const search = async (title, location) => {
        setLoading(true)
        try{
            const response = await axios.get(`http://api.adzuna.com:80/v1/api/jobs/us/search/1?app_id=${ID}&app_key=${KEY}&results_per_page=20&what=${title}&where=${location}&content-type=application/json`)
            setJobs(response.data.results)   
            console.log(response.data.results) 
        } catch(error){
            setError(error.message)
        }
        setLoading(false)    
    }
    return [{jobs, isLoading, error}, search]
}

export default useJobs

