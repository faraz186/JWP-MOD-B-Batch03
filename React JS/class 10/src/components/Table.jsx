import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Table(props) {
    const { name, fName, age, rollNo, class1, inst } = props
    return (
            <table className='table mt-4 text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>F Name</th>
                        <th>Age</th>
                        <th>Roll No</th>
                        <th>Class</th>
                        <th>Institute</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{fName}</td>
                        <td>{age}</td>
                        <td>{rollNo}</td>
                        <td>{class1}</td>
                        <td>{inst}</td>
                    </tr>
                </tbody>
            </table>
        
    )
}

export default Table