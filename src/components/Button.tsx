import { useState } from "react";

type ButtonProps = {
  text?: string;
  children?: string;
}

export function Button(props: ButtonProps) {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  )
}