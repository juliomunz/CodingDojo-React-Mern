import React, {useState} from "react";

const BoxForm = (props) => {
  const { boxes, setBoxes } = props;
  

  const[color,setColor]=useState();

  const onSubmit = (e) => {
    e.preventDefault();
      setBoxes([...boxes,color]);
  }

  return (
    <div>
      <form onSubmit={onSubmit}  >
        <div className="form-group">
          <label htmlFor="box">Pincha un color: </label>
          <input type="color" name="box" onChange={ (e) => setColor(e.target.value) }></input>
        </div>
        <div className="form-group">
          <input type="submit" value='Agrégalo'></input>
        </div>
      </form>
    </div>
  );
};

export default BoxForm;