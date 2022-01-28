import React from "react";
import PropTypes from "prop-types";
import s from "./PhoneList.module.css";
import IconButton from "../IconButton/Iconbutton";
import { ReactComponent as DeleteButton } from "../icons/close.svg";

const PhoneList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{number}</p>
        <IconButton
          onClick={() => onDeleteContact(id)}
          aria-label="Удалить контакт"
        >
          <DeleteButton width="30" height="30" />
        </IconButton>
        {/* <button
          className={s.deleteBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button> */}
      </li>
    ))}
  </ul>
);

PhoneList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default PhoneList;
