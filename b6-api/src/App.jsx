import { useState } from 'react'
import './App.css'
import searchImages from './components/api'
import SearchHeader from './components/SearchHeader'
import ImageList from './components/ImageList'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    
    debugger;
    setImages(result);
    debugger;
  }

  return (
    <>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </>
  )
}

export default App
