import './table.css'
function Table(props){

console.log(props);
return(

<table className="tab">
   
<tr>
    <th>{props.tableH}</th>
    <td>{props.table1} </td>
    <td> {props.table2}</td>
    <td>{props.table3}</td>
    <td>{props.table4}</td>
</tr>


</table>

);
}
export default Table;