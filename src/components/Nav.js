import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();

  const titleBtn = () => {
    navigate("/title");
    console.log("Title Page");
  };
  const detailBtn = () => {
    navigate("/detail");
    console.log("Detail Page");
  };
  const useErrorBtn = () => {
    navigate("/*");
    console.log("Error!!!");
  };
  const goMain = () => {
    navigate("/");
    console.log("Main Page");
  };

  return (
    <>
      <button onClick={titleBtn}>Title</button>
      <button onClick={detailBtn}>Detail</button>
      <button onClick={goMain}>Go Main</button>
      <button onClick={useErrorBtn}>UseError</button>
    </>
  );
}

export default Nav;
