import Contact from "../contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map((contactItem) => (
        <Contact
          key={contactItem.id}
          name={contactItem.name}
          number={contactItem.number}
          handleDelete={() => handleDelete(contactItem.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
