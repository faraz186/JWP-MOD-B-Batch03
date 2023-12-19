function InputVal(prosf){
    
return <input type={prosf.inputType} placeholder={prosf.placeholder} onChange={(events)=>prosf.onChange(events.target.value)}/>
}

export default InputVal