import { useState, useEffect, useCallback } from "react"
import { Figure } from "react-bootstrap"

const Container = (props) => {
  const {search, setLoading} = props
  const [images, setImages] = useState([])
  const fetchImages = useCallback(async () => {
    let endPoint = search === "" ? "photos/?" : `search/photos/?query=${encodeURI(search)}&`,
    url = `${process.env.REACT_APP_UNSPLASH_URL}${endPoint}${process.env.REACT_APP_UNSPLASH_KEY}`
    
    const res = await fetch(url)
    const data = await res.json()
    setImages(data.results ? data.results : data)
    setLoading(false)
  }, [search, setLoading])

  useEffect(() => {
    setLoading(true)
    fetchImages()
  }, [search, fetchImages, setLoading])

  return (
    <>
      <div className="container">
        {search !== "" && images.length > 0 && <h5>Resultados de {search}</h5>}
        <div className="grid-container">
          {images.length > 0 
            ? images.map((img) => (
              <Figure key={img.id} className="grid-item">
                <Figure.Image src={img.urls.regular}/>
              </Figure>))
            : <h5>No se encontraron resultados</h5>}
        </div>
      </div>
    </>
  )
}

export default Container