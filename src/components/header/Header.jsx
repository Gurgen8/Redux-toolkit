import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem, removeAll, sorted } from "../../redux/reducer.jsx";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { FaRegTrashAlt,FaSortNumericDown } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri";
import "./header.scss";



const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (obj) => dispatch(addItem(obj)),
        removeAll: (obj) => dispatch(removeAll(obj)),
        sorted: (obj) => dispatch(sorted(obj)),
    };
};

function Header (props) {

    const [info, setInfo] = useState("");
    const handleChange = (e) => {
        setInfo(e.target.value);
    };

    ///add
    const add = () => {
        props.addItem({
            id: Math.floor(Math.random() * 1000),
        });
    };

    ///remove-all
    const remove = () => {
        props.removeAll({});
    }

    ///sorted-minmax
    const sorted = () => {
        props.sorted({})

    }

    ///add-custom
    const addCustomInfo = () => {
        if (info === "") {
            alert("please fill in input");
        } else {
            props.addItem({
                id: Math.floor(Math.random() * 1000),
                info
            });
            setInfo("");
        }
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header-left">
                <motion.button className="add-btn" onClick={() => sorted()} >
                        <FaSortNumericDown />
                    </motion.button>
                    <motion.button className="add-btn" onClick={() => add()} >
                        <GoPlus />
                    </motion.button>
                    <motion.button className="add-btn" onClick={() => remove()} >
                        <FaRegTrashAlt />
                    </motion.button>
                 
                </div>
                <div className="header-right">
                    <input placeholder="write..." maxLength={10} type="text" onChange={(e) => handleChange(e)} className="todo-input" value={info} />
                    <motion.button className="add-btn" onClick={() => addCustomInfo()} >
                        <RiChat1Line />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
