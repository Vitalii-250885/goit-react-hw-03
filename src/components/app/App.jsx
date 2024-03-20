import { useState } from "react";

import contactsList from "../../contacts.json";

import ContactForm from "../contact-form/ContactForm.jsx";
import SearchBox from "../search-box/SearchBox.jsx";
import ContactList from "../contact-list/ContactList.jsx";

// import "./";

const App = () => {
  const [contacts, setContact] = useState({
    id: "",
    name: "",
    number: "",
  });

  console.log(contactsList);

  console.log(contacts, setContact);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
