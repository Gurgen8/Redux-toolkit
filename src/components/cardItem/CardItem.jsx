import { motion } from "framer-motion";
import React from "react";
import { IoClose } from "react-icons/io5";
import "./cardItem.scss";

export default function TodoItem(props) {
  const { item, removeTodo } = props;
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      className="card"
    >
      <div className="btn-div">
        <button className="remove-btn" onClick={() => removeTodo(item.id)} >
          <IoClose />
        </button>
      </div>
      <span className="card-id">{item.id}</span>
      {item.info ? <span className="info-span"> info:<b>{item?.info}</b> </span> : null}
    </motion.li>
  );
};
