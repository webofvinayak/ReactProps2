import React from "react";
import Card from "./card.jsx";
import contacts from "../contacts.js";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      keyValue={contacts.id}
      name={contacts.name}
      image={contacts.imgURL}
      contact={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
