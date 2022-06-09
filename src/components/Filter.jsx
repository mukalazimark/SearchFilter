import React, { useState } from "react";
import Card from "./Card";
import contacts from "./contacts";

function Filter() {
  const [inputText, setInputText] = useState("");
  const [myContacts, setMyContacts] = useState([]);
  // const [noContact, setNoContact] = useState("");
  function changed(e) {
    const userInput = e.target.value;
    setInputText(userInput);
  }
  function check(e) {
    e.preventDefault();
    setMyContacts(
      contacts.filter((fContact) => {
        // fContact.name !== inputText
        //   ? setNoContact("No contact Found")
        //   : setNoContact("");
        return fContact.name === inputText;
      })
    );
    setInputText("");
  }
  return (
    <div>
      <input
        type="text"
        onChange={changed}
        value={inputText}
        name=""
        placeholder="enter a name"
      />
      <button onClick={check}>check</button>
      {/* <h3>{noContact}</h3> */}
      <div>
        {myContacts.map((contact) => {
          return (
            <Card
              name={contact.name}
              residence={contact.villa}
              tel={contact.tel}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
