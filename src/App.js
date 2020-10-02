import React, { Component, Fragment, useState } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
function App() {
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState(null);
  const [isVegetarian, setIsVegetarian] = useState({
    veg: null,
    notVeg: null,
  });

  const handleChange = (e) => {
    setTopping(e.target.value);
  };

  return (
    <Fragment>
      <Header />
      <PizzaForm
        setTopping={setTopping}
        setSize={setSize}
        setIsVegetarian={setIsVegetarian}
        topping={topping}
        size={size}
        isVegetarian={isVegetarian}
      />
      <PizzaList
        setTopping={setTopping}
        setSize={setSize}
        setIsVegetarian={setIsVegetarian}
      />
    </Fragment>
  );
}

export default App;
