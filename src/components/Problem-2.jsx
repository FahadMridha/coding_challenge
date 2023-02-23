import React, { useState } from "react";
import OpenModal from "./openModal/OpenModal";

const Problem2 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [contactsInfo, setContactsInfo] = useState([]);
  const [region, setRegion] = useState("");

  // fetch data from API
  const handlerModal = (contacts) => {
    if (contacts == "us-contacts") {
      fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/?page=1"
      )
        .then((res) => res.json())
        .then((data) => {
          setContactsInfo(data.results);
          handleShow();
        });
      setRegion("United States Contacts");

      return;
    }
    fetch("https://contact.mediusware.com/api/contacts/?page=1")
      .then((res) => res.json())
      .then((data) => {
        setContactsInfo(data.results);
        handleShow();
      });
    setRegion("All Contacts");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => handlerModal("all-contacts")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => handlerModal("us-contacts")}
          >
            US Contacts
          </button>
          {contactsInfo.length > 0 && (
            <OpenModal show={show} handleClose={handleClose} region={region} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Problem2;
