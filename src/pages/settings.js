import React, { useState, useEffect } from 'react'
import {storage} from "../firebase/"

export default function Settings () {
const [image, setImage] = useState()
const [url, setURL] = useState("")

//Component Did mount
  useEffect(() => {
    console.log("Entered Here")
    setURL("https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png")
  }, [])

  const handleChange = e => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on('state_changed',
    (snapshot)=>{
      //Progress function
    },
    (error) => {
      //Error function
      console.log(error)
    },
  ()=>{
    //Complete function
    storage.ref('images').child(image.name).getDownloadURL()
    .then(url => {
      setURL(url)
    })
  })
  }

  return (
    <section className="container home">
      <div className="row">
          <h2>Change Image</h2>
          <img src={url} alt="Uploaded Icon" width={144} height={144}/>
          <br/ >
          <input type="file" onChange={handleChange}/>
          <button onClick={handleUpload}>Upload</button>
      </div>
    </section>
  )
}
