import React, { useReducer } from "react";
import Drawer from "../Drawer";
import NavBar from "../NavBar";

const initialState = { drawer: false };

function reducer(state, action) {
  switch (action.type) {
    case "drawerOpen":
      return { ...state, drawer: true };
    case "drawerClose":
      return { ...state, drawer: false };
    default:
      throw new Error("default layout reducer error");
  }
}

const DefaultLayout = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Layout">
      <NavBar state={state} dispatch={dispatch} />
      <div className="Content">{props.children}</div>
      <Drawer state={state} dispatch={dispatch} />
    </div>
  );
};

export default DefaultLayout;
