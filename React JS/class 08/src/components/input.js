function Input(props){


    return(

<input 
onChange={props.change}
placeholder={props.place}
type={props.type}
/>
    );
};

export default Input;