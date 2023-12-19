import './card.css'
function Card(props){

    return(

        <div className='card'>
            <h1>{props.head}</h1>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>

        </div>
    )
}
export default Card;