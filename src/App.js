import React from "react";
import Available from "./components/Available";
import contacts from "./components/contacts";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <h3>Available contacts</h3>
      <p>
        {contacts.map((contact) => {
          return <Available name={contact.name} />;
        })}
      </p>
      <div>
        <h1>Search for a contact</h1>
        <Filter />
      </div>
    </div>
  );
}

export default App;
