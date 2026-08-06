/* <div id = "parent">
    <div id = "child">
        <h1>I am an h1 tag </h1>
    </div>
</div> */



const parent = React.createElement("div" , {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
       [ React.createElement("h1", {} , "I am an H1 tag"),
         React.createElement("h1", {} , "this i an another h1 (sibling of upper h1)")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
