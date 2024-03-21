import { useState } from "react";

import ContactForm from "../contact-form/ContactForm.jsx";
import SearchBox from "../search-box/SearchBox.jsx";
import ContactList from "../contact-list/ContactList.jsx";

// import "./";

const App = () => {
  const contactsList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(contactsList);
  const [inputValue, setInputValue] = useState("");

  const hendleChangeContacts = (query) => {
    setContacts(
      contactsList.filter(
        (contact) =>
          contact.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    hendleChangeContacts(e.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox inputValue={inputValue} onChange={handleChange} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
