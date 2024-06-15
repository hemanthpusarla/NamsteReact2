// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello React"
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//  const heading = React.createElement(
//     "h1",
//     "{",
//     "heelo react prac"
//  );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div",
//      {id: "parent"},
//     React.createElement("div",{id: "child"}, [
//     React.createElement("h1",{},"im an h1tag"),
//     React.createElement("h2",{},"im an h2 tag"),
// ]) 
// );
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("parent"));
// root.render(parent);

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
