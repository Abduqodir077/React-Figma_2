import sec2_img1 from "../img/sec 2 img1.png"
import sec2_img2 from "../img/sec 2 img2.png"
import vector_1 from "../img/Vector_1.png"
import Vector_2 from "../img/Vector (2).png"
import Vector_3 from "../img/Vector (2_1).png"
import Vector_4 from "../img/Vector (3).png"
import Vector_5 from "../img/Vector (5).png"

function Section_2(){
    return(
        <>
         <section className="section2">
                <div className="sec2_top">
                    <div className="sec2_top_img">
                        <img src={sec2_img1} alt="" className="img1" />
                        <img src={sec2_img2} alt="" className="img2" />
                    </div>
                    <div className="sec2_top_text">
                        <p>Новый образ жизни</p>
                        <span>Став частью нашей команды, вы сможете изменить <br /> привычный ритм жизни и сделать каждый свой день <br /> особенным, а формат наших тренировок позволит <br /> вам раскрыть потенциал вашего тела на 100%.</span>
                        <button>Получить консультацию</button>
                    </div>
                </div>
                <div className="sec2_bottom">
                    <div className="sec2_b1">
                        <img src={vector_1} alt="" />
                        <p>Полностью <br /> укомплектованный зал</p>
                    </div>
                    <div className="sec2_b1">
                        <img src={Vector_2} alt="" className="img2" />
                        <p>Профессиональное <br /> оборудование</p>
                    </div>
                    <div className="sec2_b1">
                        <img src={Vector_3} alt="" />
                        <p>Удобное расположение <br /> в центре города</p>
                    </div>
                    <div className="sec2_b1">
                        <img src={Vector_4} alt="" />
                        <p>Доступная <br /> стоимость занятий</p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Section_2;