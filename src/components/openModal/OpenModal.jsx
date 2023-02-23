import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactsModal from "../contactsModal/ContactsModal";

const OpenModal = ({ show, handleClose, region }) => {
  const [contacts, setContacts] = useState([]);
  const [area, setArea] = useState("");

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleSubmit = (para) => {
    if (para === "us-contacts") {
      fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/?page=1"
      )
        .then((res) => res.json())
        .then((data) => {
          setContacts(data.results);
          handleShow2();
        });
      setArea("United States Contacts");
      return;
    }
    fetch(`https://contact.mediusware.com/api/contacts/`)
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.results);
        handleShow2();
      });
    setArea("All Contacts");
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {region === "All Contacts" ? "Modal A" : "Modal B"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            onClick={() => handleSubmit("all-contacts")}
            style={{ backgroundColor: "#46139f" }}
          >
            All Contacts
          </Button>

          <Button
            onClick={() => handleSubmit("us-contacts")}
            style={{ backgroundColor: "#ff7f50", margin: "10px" }}
          >
            US Contacts
          </Button>

          <Button
            style={{
              border: "2px solid #46139f",
              backgroundColor: "white",
              color: "black",
            }}
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <ContactsModal
            hello={{
              show2,
              handleClose2,
              area,
              contacts,
              setContacts,
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OpenModal;
