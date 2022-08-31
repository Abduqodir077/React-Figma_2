import React from "react";
import "./Style.css";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";
import Section_5 from "./components/Section_5";
import Section_6 from "./components/Section_6";
import Section_7 from "./components/Section_7";
import Footer from "./components/Footer";

function App() {

    // let data = [
    //     {
    //         name: "Илья Панченко",
    //         span1: "Персональный тренер",
    //         span2: "Инструктор тренажерного зала",
    //         span3: "Опыт работы — 4 года"
    //     },
    //     {
    //         name2: "Екатерина Сосина-Нуньес",
    //         span4: "Фитнес-тренер",
    //         span5: "Опыт работы — 4 года"
    //     }
        
    // ]

    

    return (
        <>
            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4 />
            <Section_5 />
            <Section_6 />
            <Section_7 />
            <Footer />
        </>
    );
}

export default App;