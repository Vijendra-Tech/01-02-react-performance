import React from "react";
import { useNavigate } from "react-router-dom";

function LazyComp01() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/lazy-2");
  };
  return (
    <>
      <div>LazyComp01</div>
      <button onClick={handleNext}>Next Spiliting</button>
    </>
  );
}

export default LazyComp01;
