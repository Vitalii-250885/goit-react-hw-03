import Contact from "../contact/Contact";

const ContactList = ({ contactsList }) => {
  return (
    <>
      <p>ContactList</p>
      <ul>
        {contactsList.map((contactItem) => (
          <Contact
            key={contactItem.id}
            name={contactItem.name}
            number={contactItem.number}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
