import React from "react";
class App extends React.Component {
  render() {
    return React.createElement("div", { classname: "App" }, [
      React.createElement("h1", null, "This is javaScript"),
      React.createElement(
        "p",
        null,
        "Most prowerfull programming language. React is the popular framework"
      ),
    ]);
  }
}
export default App;

conts = element = {
  type: "div",
  props: {
    className: "test",
    title: "test me",
  },
  children: ["p", "h1", "img"] | "Test" | null,
};
