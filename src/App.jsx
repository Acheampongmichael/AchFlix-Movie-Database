import { useState } from 'react'
import './App.css'
import Search from './Search'
import axios from 'axios'
import Results from './Results'



function App() {

  const [state,setState] = useState({
    s:'',
    results:[],
    selected:{}
  })

  const url = "http://www.omdbapi.com/?apikey=6337d08b"

  const search = (e)=>{
    if(e.key === 'Enter'){
      axios(url + "&s=" + state.s).then(({data}) =>{
        let results = data.Search

        setState(prevState =>{
          return {...prevState, results:results}
        })
      })
    }
  }

  const handleInput = (e) =>{
    let s = e.target.value

    setState(prevState => {
      return {...prevState, s:s}
    })

  }

  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results = {state.results}/>
      </main>
    </div>
  )
}

export default App
