import {useSelector,useDispatch} from "react-redux";
import { incNumber,decNumber } from "./actions";

function App() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{myState}</h1>

      <button onClick={()=>dispatch(incNumber())}>+</button>

      <button onClick={()=>dispatch(decNumber())}>-</button>

    </div>
  );
}

export default App;
