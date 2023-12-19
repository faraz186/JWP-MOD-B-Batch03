import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Table from './components/Table'
import Button from './components/Button'
import Input from './components/Input';
import Card from './components/Card';
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import user4 from './images/user 4.jpeg'
import user5 from './images/user 5.jpeg'

function App() {
  let arr = [
    {
      name: "ABC",
      fName: "XYZ",
      age: 17,
      rollNo: 124,
      class1: 11,
      inst: "SAI"
    },
    {
      name: "DEF",
      fName: "UVW",
      age: 17,
      rollNo: 123,
      class1: 11,
      inst: "SAI"
    },
    {
      name: "GHI",
      fName: "ST",
      age: 16,
      rollNo: 125,
      class1: 11,
      inst: "SAI"
    },
    {
      name: "JKL",
      fName: "PQR",
      age: 16,
      rollNo: 126,
      class1: 11,
      inst: "SAI"
    },
    {
      name: "JKL",
      fName: "MNO",
      age: 17,
      rollNo: 128,
      class1: 11,
      inst: "SAI"
    },
  ]

  let obj = [
    {
      img: <img className='w-100 rounded' src={user4} />,
      id: 1,
      userName: "Adil",
      age: 17,
      institute: "SAI",
      isActive: true,
      category: "ABC"
    },
    {
      img: <img src={user2} className='w-100 rounded'/>,
      id: 2,
      userName: "Haseeb",
      age: 16,
      institute: "SAI",
      isActive: false,
      category: "DEF"
    },
    {
      img: <img src={user3} className='w-100 rounded'/>,
      id: 3,
      userName: "Ali",
      age: 17,
      institute: "SAI",
      isActive: true,
      category: "GHI"
    },
    {
      img: <img src={user1} className='w-100 rounded'/>,
      id: 4,
      userName: "Ahad",
      age: 15,
      institute: "SAI",
      isActive: false,
      category: "JKL"
    },
    {
      img: <img src={user5} className='w-100 rounded'/>,
      id: 5,
      userName: "Sammad",
      age: 21,
      institute: "SAI",
      isActive: true,
      category: "MNO"
    },
  ]

  return (
    <div className="App">

      <Input typeInput="text" valueInput="ABC" onChangeInput={() => { alert("ABC") }} />
      <Input typeInput="number" valueInput="123" onChangeInput={() => { alert("123") }} />
      <Input typeInput="password" valueInput="321" onChangeInput={() => { alert("321") }} />
      <Input typeInput="email" valueInput="XYZ@gamil.com" onChangeInput={() => { alert("XYZ@gamil.com") }} />
      <Input typeInput="date" valueInput="04/30/2006" onChangeInput={() => { alert("04/30/2006") }} />


      <Button ButtonLabel="ABC" ButtonClick={() => { alert("ABC") }} />
      <Button ButtonLabel="DEF" ButtonClick={() => { alert("DEF") }} />
      <Button ButtonLabel="GHI" ButtonClick={() => { alert("GHI") }} />
      <Button ButtonLabel="JKL" ButtonClick={() => { alert("JKL ") }} />
      <Button ButtonLabel="MNO" ButtonClick={() => { alert("MNO") }} />

      {obj.map((x,i) => {
        return(
          <Card img = {x.img} id = {x.id} userName = {x.userName} age = {x.age} inst = {x.institute} isActive = {x.isActive} category = {x.category}/>
        )
      })}

      {arr.map((x, i) => {
        return (
          <div>
            <Table name={x.name} fName={x.fName} age={x.age} rollNo={x.rollNo} class1={x.class1} inst={x.inst} />
          </div>

        )
      })}

     


    </div>
  );
}

export default App;