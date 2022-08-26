import React, {useState} from "react";
// import "Style.css";
import "./Style.css"


function App() {

    const [count, setCount] = useState(0) // boshlangich qiymat (0)

    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }

    return(
        <>
       <h2>Count: {count}</h2>
       <button onClick={inc} className="btn btn-success">INCR</button>
       <button onClick={dec} className="btn btn-danger">DECR</button>
        </>
    );
}

export default App;