import React, { useContext } from "react";

import Modal from "react-bootstrap/Modal";
import { NavBarContext } from "../contexts/navBarContext";

export function InfoPopUp() {
  const { setShow, show } = useContext(NavBarContext);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> How to play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Guess the Wordle in 4 tries.</p>
          <p>
            {" "}
            Each guess must be a valid 5-letter word, The color of the tiles
            will change to show how close your guess was to the word,
          </p>{" "}
          <p>
            if the letter is in the word and in the right spot it will be marked
            in green{" "}
          </p>
          <p>
            if the letter is in the word but <strong>not</strong> in the right
            spot it will be marked in yellow{" "}
          </p>
          <p>if the letter is not in the word at all it wiil marked in gray </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
