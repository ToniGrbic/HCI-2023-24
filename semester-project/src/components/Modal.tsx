"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import useClickOutside from "@/hooks/custom/useClickOutside";
import { ModalObject } from "@/app/projects/projects";

interface ModalProps extends ModalObject {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
  const { description, title, tags, codeLink, projectLink, setShowModal } =
    props;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setShowModal(false);
  };

  useClickOutside(wrapperRef, handleClickOutside);

  return (
    <div className="app__modal">
      <div className="app__modal-content" ref={wrapperRef}>
        <span className="app__close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h2>{title}</h2>
        <h3>Description: </h3>
        <p>{description}</p>
        {tags && (
          <div>
            <h3>Tech and tools used:</h3>
            <ul>
              {tags?.map((tag: string, index: number) => {
                return <li key={index}>{tag}</li>;
              })}
            </ul>
            {codeLink && (
              <div className="app__modal-links">
                <h3>Links:</h3>
                {projectLink && (
                  <p>
                    <AiFillEye />
                    <a href={projectLink}> Website </a>
                  </p>
                )}
                <p>
                  <AiFillGithub />
                  <a href={codeLink}> GitHub</a>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
