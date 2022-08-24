
import './App.css';
import useJobs from "./hooks/useJobs"
import Details from './components/Details';
import SearchBar from './components/SearchBar';
import MapBox from './components/Mapbox';

function App() {

 
  const [{jobs, isLoading,error}, search] = useJobs("Software Developer", "10036")

  return (
    <div className="App">
     <h1>Job search</h1>
     <SearchBar onFormSubmit = {search} />
     <MapBox jobs={jobs} isLoading={isLoading} error={error} />
  

     
    </div>
  );
}

export default App;
