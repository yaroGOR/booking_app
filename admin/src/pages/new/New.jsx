import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import axios from "axios";

const New = ({inputs, title}) => {

  const [file, setFile] = useState("")

  const [info, setInfo] = useState({})

  const handleChange = e => {
    setInfo(prev=>({...prev, [e.target.id]: e.target.value}))
    console.log(info)
  }
  const handleClick = async  e => {
    e.preventDefault()   // some
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "upload")
    try{
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/di8bkj1ix/image/upload", data)
      console.log(uploadRes)
      const {url} = uploadRes.data


      const newUser = {
        ...info, img: url,
      }
      console.log(newUser)

      await axios.post("http://localhost:8800/auth/register", newUser)
    }catch(err) {
      console.log(err)
    }


  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">Image: <FileUploadIcon className="icon" /></label>
                <input type="file" id="file" onChange = {e=>{setFile(e.target.files[0])}}  style={{display:"none"}}/>
              </div>
              {inputs.map(input => { 
                return (
              <div className="formInput" key={input.id}>
                <label htmlFor="">{input.label}</label>
                <input id={input.id} onChange = {handleChange} type={input.type} placeholder={input.placeholder} />
              </div>
                )
              })}
              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
