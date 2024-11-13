import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {

  const [img, setImg] = useState('')

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res)
          setImg(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // fetchPhoto()
    setImg({
      "copyright": "\nTeam ARO\n",
      "date": "2024-11-12",
      "explanation": "How was the Crescent Nebula created?  Looking like an emerging space cocoon, the Crescent Nebula, visible in the center of the featured image, was created by the brightest star in its center.  A leading progenitor hypothesis has the Crescent Nebula beginning to form about 250,000 years ago.  At that time, the massive central star had evolved to become a Wolf-Rayet star (WR 136), shedding its outer envelope in a strong stellar wind, ejecting the equivalent of our Sun's mass every 10,000 years.  This wind impacted surrounding gas left over from a previous phase, compacting it into a series of complex shells, and lighting it up.  The Crescent Nebula, also known as NGC 6888, lies about 4,700 light-years away in the constellation of Cygnus.  Star WR 136 will probably undergo a supernova explosion sometime in the next million years.   Jigsaw Challenge: Astronomy Puzzle of the Day",
      "hdurl": "https://apod.nasa.gov/apod/image/2411/Ngc6888Hoo_Aro_2466.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "NGC 6888: The Crescent Nebula",
      "url": "https://apod.nasa.gov/apod/image/2411/Ngc6888Hoo_Aro_960.jpg"
    })


  }, [])




  return (
    <section>
      <Card title={img.title} text={img.explanation} imageURL={img.hdurl} date={img.date} />
    </section>

  )
}

export default App
