function Selet(props){


    return(

<select onChange={props.sel}>
    <option selected>{props.selected}</option>
    <option value={props.opt1}>{props.opt1}</option>
    <option value={props.opt2}>{props.opt2}</option>
    <option value={props.opt3} >{props.opt3}</option>
    <option value={props.opt4} >{props.opt4}</option>


</select>

    )
}
export default Selet;