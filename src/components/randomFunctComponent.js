import React from "react";

export const Suma = props => {
  const result = parseInt(props.a) + parseInt(props.b);

  return <h1>La suma es: {result}</h1>;
};

export const Resta = props => {
  const resta = parseInt(props.a) - parseInt(props.b);

  return <h1>La resta es: {resta}</h1>;
};

export const Division = props => {
  const div = parseInt(props.a) / parseInt(props.b);
  return <h1>La division es: {div}</h1>;
};
