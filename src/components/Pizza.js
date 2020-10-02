import React from "react";

const Pizza = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => {
            props.setTopping(props.topping);
            props.setSize(props.size);
            {
              props.vegetarian
                ? props.setIsVegetarian({ veg: true })
                : props.setIsVegetarian({ notVeg: true });
            }
          }}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
