import { useState } from "react";

function LikeButton(props) {
  const [count, setCount] = useState(0);
  console.log(props.changeColor);

  /*  const buttonStyles = {
    backgroundColor: "red",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
  }; */

  /*  let colors;

  props.changeColor
    ? (colors = ["purple", "blue", "green", "yellow", "orange", "red"])
    : (colors = ["gray"]); */

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  return (
    <button
      /* className={colors[count % colors.length]} */
      style={{
        backgroundColor: props.changeColor
          ? colors[count % colors.length]
          : "gray",
      }}
      onClick={() => setCount(count + 1)}
    >
      Like {count}
    </button>
  );
}

export default LikeButton;
