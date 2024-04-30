import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./utils/redux/action";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((storeData) => storeData.user);

  return (
    <>
      <button style={{ marginLeft: "48%" }}
        onClick={() => {
          dispatch(FetchData());
        }}
      >
        GET DATA
      </button>
      {users.map((e, i) => (
        <fieldset key={i}>
          <legend>{e.username}</legend>
          <p>{e.name}</p>
          <p>{e.email}</p>
        </fieldset>
      ))}
    </>
  );
}

export default App;