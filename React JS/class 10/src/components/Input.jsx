import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Input (props){
    return(
     <div className=' mt-5 my-3'>
        <input  type={props.typeInput} value={props.valueInput} className='w-25  p-2 border rounded bg-light '  onChange={props.onChangeInput}  />
     </div>
     ) 
}

export default Input