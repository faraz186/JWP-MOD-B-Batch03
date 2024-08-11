import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css';


const Product = () => {
    const {id} = useParams();

    let filterData = userdata.filter((e,i)=>{
      return e.id == id
    })

    console.log(filterData)
  return (
    <div>
      <h1>Product Page</h1>

      <div className="card1">
            <img className="card1Img" src={filterData[0].images[0]} alt="" />
            <p className="card1Title">Technology</p>
            <h3 className="card1Heading">{filterData[0].title}</h3>
            <p className="car1Desc">{filterData[0].description.slice(0,199)}</p>
            <img className="card1User" src="https://static.vecteezy.com/system/resources/previews/027/312/306/non_2x/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png" alt="" />
            <span className="card1userTitle">Jane Doe</span>
            <br />
            <span className="card1userTime">2h ago</span>
      </div>

      
    </div>
  )
}

export default Product
