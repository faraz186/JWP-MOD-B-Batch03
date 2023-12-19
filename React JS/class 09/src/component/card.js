function Card(props) {
    const {id,name,age,isactive, category}=props
    return <div className="data">
        <div className="card">
            <h1>Student Data</h1>
            <ul>
                <li>Id:{id}</li>
                <li>name:{name}</li>
                <li>Age:{age}</li>
                <li>IsActive:{isactive}</li>
                <li>Category:{category}</li>
            </ul>
        </div>
    </div>
}

export default Card