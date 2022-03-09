import React from "react";
import { connect } from "react-redux";
import "./main.scss";
import { removeItem } from "../../redux/reducer.jsx";
import TodoItem from "../cardItem/CardItem.jsx";
import { AnimatePresence } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeItem(id)),
  };
};


function Main(props) {
  return (
    <div className="main">
      
      <div className="container">
      <h3 className="main-title">Board</h3>
        <ul className="main-ul">
          <AnimatePresence>
            {props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                />
              )
            })
            }
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
