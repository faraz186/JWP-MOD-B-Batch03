import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Card(props){
    const {img,id,userName,age,inst,isActive,category} = props
    return(
        <div className='w-25 border rounded text-center my-5'>
          <p>{img }</p>
          <p>Name: {userName}</p>
          <p>Institute: {inst}</p>
          <p>IsActive: {isActive ? "Yes" : "No"}</p>
          <p>Category: {category}</p>
          <p>Age: {age}</p>
          <p>id: {id }</p>
        </div>
    )
}

export default Card