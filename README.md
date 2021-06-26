# React-Practice-code
React practice code. 

```
import React from "react";

const MyComponent = () => <h1>My Component</h1>;
const SecondComponent = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
    aspernatur!
  </p>
);

class App extends React.Component {
  render() {
    const obj = {
      title: "This is Arif",
      style: {
        color: "red",
        background: "black",
        padding: "10px",
      },
    };

    const name = "Arif Uz Zaman";
    const bio = (
      <div>
        <h1>My name is {name}</h1>
        <p {...obj}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
          totam.
        </p>
      </div>
    );
    return (
      <>
        <h1 {...obj}>My name is {name}</h1>
        <MyComponent />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          quos?
        </p>
        <p>{new Date().getFullYear()}</p>
        <SecondComponent />
        {bio}
      </>
    );
  }
}
export default App;

```
