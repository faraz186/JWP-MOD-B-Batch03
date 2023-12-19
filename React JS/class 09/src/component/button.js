function ChangeBtn(props) {
    return <button onClick={props.click} className={props.class}> {props.buttonvalue}</button>
    
}
export default ChangeBtn
