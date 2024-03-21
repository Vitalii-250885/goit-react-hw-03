import Contact from "../contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contactItem) => (
        <Contact
          key={contactItem.id}
          name={contactItem.name}
          number={contactItem.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
