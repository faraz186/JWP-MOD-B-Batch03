import Button from "./components/butn";
import Input from "./components/input";
import Selet from "./components/selet";
import Table from "./components/Table";
import Card from "./components/card";
import "./App.css";

function App() {
  let seletData = [
    {
      select: "MOBILE",
      option1: "IPHONE",
      option2: "VIVO",
      option3: "MOTO",
      option4: "SAMSANG",
    },

    {
      select: "BAKREY",
      option1: "NIMCO",
      option2: "CAKES",
      option3: "SWEETS",
      option4: "ICE CREAM",
    },
    {
      select: "SCHOOL",
      option1: "PRINCIPAL",
      option2: "TEACHER",
      option3: "STUDENTS",
      option4: "LOWER STAFF",
    },
    {
      select: "OFFICE",
      option1: "CEO",
      option2: "MANAGER",
      option3: "EMPLOY",
      option4: "OWNER",
    },
  ];

  let sel = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>this is button commponent</h1>

      <Button
        btnClick={() => {
          alert("hello");
        }}
        btnLabel={"world"}
      />

      <Button
        btnClick={() => {
          alert("this is  loading");
        }}
        btnLabel={"loading"}
      />

      <Button
        btnClick={() => {
          alert("this is  click here button");
        }}
        btnLabel={"click here"}
      />

      <Button
        btnClick={() => {
          alert("this is  call now button");
        }}
        btnLabel={"call now"}
      />

      <h1>this is a input component</h1>

      <Input
        change={(e) => {
          console.log(e);
          console.log(e.target.value);
        }}
        place="enter your name"
        type={Text}
        value={Text}
      />

      <Input
        change={(e) => {
          console.log(e);
          console.log(e.target.value);
        }}
        place="enter your email"
        type={String}
      />
      <Input
        change={(e) => {
          console.log(e);
          console.log(e.target.value);
        }}
        place="enter your phone number"
        type={Number}
        value={Number}
      />

      <h1>this is a selet component</h1>

      {seletData.map((x, i) => {
        return (
          <Selet
            key={i}
            sel={(e) => {
              alert(e.target.value);
            }}
            selected={x.select}
            opt1={x.option1}
            opt2={x.option2}
            opt3={x.option3}
            opt4={x.option4}
          />
        );
      })}

      <h1>this is a table component</h1>

      {seletData.map((x, i) => {
        return (
          <Table
            id={i}
            tableH={x.select}
            table1={x.option1}
            table2={x.option2}
            table3={x.option3}
            table4={x.option4}
          />
        );
      })}

      <h1>this is a card component</h1>

      {seletData.map((x, i) => {
        return (
          <Card
            head={x.select}
            p1={x.option1}
            p2={x.option2}
            p3={x.option3}
            p4={x.option4}
          />
        );
      })}
    </>
  );
}

export default App;
