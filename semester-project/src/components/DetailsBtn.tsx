import React from "react";

type DetailsBtnProps = {
  handleShowModal: (projectId: string) => void;
  id: string;
};

const DetailsBtn = ({ handleShowModal, id }: DetailsBtnProps) => {
  return (
    <button className="app__modal-btn" onClick={() => handleShowModal(id)}>
      Details
    </button>
  );
};

export default DetailsBtn;
