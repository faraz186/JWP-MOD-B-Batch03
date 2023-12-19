import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Button(props){
    return(
        <button onClick={props.ButtonClick} className='btn btn-dark mx-2 my-3'>{props.ButtonLabel}</button>
    )
}
export default Button
