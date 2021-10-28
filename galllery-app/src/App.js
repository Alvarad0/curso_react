import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormSearch from './components/FormSearch'
import Container from "./components/Container"

function App() {
  const [search, setSearch] = useState("")
  const [isLoading, setLoading] = useState(false)

  return (
    <div>
      <div className="header">
        <h1 className="container">Gallery App</h1>
      </div>

      <FormSearch setSearch={setSearch} isLoading={isLoading}/>
      <Container search={search} setLoading={setLoading} />
    </div>
  )
}

export default App
