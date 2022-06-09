// import React, { useState } from "react";

// function Try() {
//   const searched = "hello";
//   const card = ["muka", "eric", "mac", "tom", "josh", "robin", "kim", "junior"];
//   const [uput, setUput] = useState("");
//   const [cards, setCards] = useState([]);
//   function changed(e) {
//     const userIn = e.target.value;
//     setUput(userIn);
//   }
//   function clicked(e) {
//     e.preventDefault();

//     card.filter((lk) => {
//       console.log(lk);
//       console.log(uput);
//       return lk === uput;
//     });
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         name=""
//         onChange={changed}
//         placeholder="enter name"
//         value={uput}
//       />
//       <button onClick={clicked}>search</button>
//       <div>{cards}</div>
//     </div>
//   );
// }

// export default Try;

import React, { useState } from "react";
import Try2 from "./Try2";

function Try() {
  // const l = [{ name: "muka" }, { name: "eric" }];
  // // const tried = l.filter((e) => {
  // //   return e.name;
  // // });
  const aray = [
    { name: "muka", age: 10, home: "lugonjo" },
    { name: "mac", age: 11, home: "kireka" },
    { name: "eric", age: 13, home: "banda" },
  ];
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState([]);
  function changed(e) {
    const newVal = e.target.value;
    setInputText(newVal);
  }
  function tried() {
    console.log(aray);
    const newAray = aray.filter((e) => {
      return e.name === inputText;
    });
    setResults(newAray);
    console.log(newAray);
    setInputText("");
  }

  return (
    <div>
      <input
        type="text"
        name=""
        onChange={changed}
        value={inputText}
        placeholder="enter name to check for details"
      />
      <h1 onClick={tried}>Tap to get Results</h1>
      <p>
        {results.map((r) => {
          return <Try2 name={r.name} age={r.age} home={r.home} />;
        })}
      </p>
    </div>
  );
}

export default Try;
