import React from 'react'
import axios from 'axios'

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = React.useState('');
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }
  
    const handleSubmit = async(event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("Image", selectedFile);
      try {
       axios.post( "some",formData,
          {headers:{"Content-Type": "multipart/form-data"} }
        ).then(res=>{console.log(res)}).catch(err =>{console.log(err)});
      } catch(error) {
        console.log(error)
      }
    }
  return (
    <div >
        <input type="file" className="border border-gray-400 p-2  rounded-lg w-auto placeholder-black text-black" 
        name="upload_file" 
        onChange={handleFileSelect} />
        <div className='pt-4'>
        <button type="submit" className=" bg-[#A68ED4] text-white py-2 px-4 rounded" onClick={handleSubmit}>Profile Picture</button>
        </div>
    </div>
  )
}

export default ImageUpload
