

function TabelData(prosf){
    const {name,fathername,age}=prosf
  return  <table>
    <tbody>
       
        <tr>
            
            <td>{name}</td>
            <td>{fathername}</td>
            <td>{age}</td>
        </tr>
    </tbody>
  </table>
}



export default TabelData 
