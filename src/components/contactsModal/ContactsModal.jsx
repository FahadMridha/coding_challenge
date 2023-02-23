import React from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ContactsModal = ({ hello }) => {
  const { show2, handleClose2, area, contacts, setContacts } = hello;

  const handlerEvenContacts = (evenContacts) => {
    // console.log(evenContact);
    const EvenContacts = evenContacts.filter((contact) => contact.id % 2 === 0);
    // console.log(EvenContacts);
    setContacts(EvenContacts);
  };
  const textColor = area == "All Contacts" ? "#46139f" : "#ff7f50";

  return (
    <div>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: textColor }}>{area}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {contacts.map((contact, index) => (
            <p key={index}>{contact.phone}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <InputGroup>
            <InputGroup.Text>Only even</InputGroup.Text>
            <InputGroup.Checkbox
              onClick={() => handlerEvenContacts(contacts)}
            />
          </InputGroup>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactsModal;
