import Vector_5 from "../img/Vector (5).png"
import sec4_line from "../img/sec4_line.png"
import sec4_line1 from "../img/sec4_line1.png"
import sec4_line2 from "../img/sec4_line2.png"

function Section_4(){
    return(
        <>
         <section className="section4">
                <div className="sec4_1">
                    <p>Абонементы</p>
                    <div className="sec4_1_1" id="sec4_1_tbl">
                        <p>Кол-во занятий</p>
                        <b> 1 тренировка</b>
                        <b> 4 тренировки</b>
                        <b>8 тренировок</b>
                        <span>12 тренировок</span>
                    </div>
                    <hr />
                    <div className="sec4_1_2" id="sec4_1_tbl">
                        <p>Персональный тренинг <br />
                            с инструктором</p>
                        <p>700 руб.</p>
                        <p>2600 руб. <br />
                            (действителен в <br /> течении 3 недель)</p>
                        <p>5200 руб. <br />
                            (действителен в <br />
                            течении 6 недель)</p>
                        <b>
                            7200 руб. <br />
                            (действителен в <br />
                            течении 10 недель)
                        </b>
                    </div>
                    <div className="sec4_1_2" id="sec4_1_tbl">
                        <b>
                            Самостоятельные <br /> тренировки <br />
                            в тренажерном зале
                        </b>
                        <p>250 руб.</p>
                        <p>__</p>
                        <p>1500 руб. <br />
                            (действителен в <br /> течении 30 дней)</p>
                        <p>2000 руб. <br />
                            (действителен в <br />
                            течении 30 дней)</p>
                    </div>
                    <div className="sec4_1_2" id="sec4_1_tbl">
                        <b>
                            Зал групповых <br /> программ
                        </b>
                        <p>300 руб.</p>
                        <p>__</p>
                        <p>2000 руб. <br />
                            (действителен в <br />
                            течении 30 дней)</p>
                        <p>2750 руб. <br />
                            (действителен в <br /> течении 45 дней)</p>
                    </div>
                    <div className="sec4_line">
                        <img src={sec4_line} alt="" />
                    </div>
                </div>

                <div className="sec4_2">
                    <p>Абонемент по времени</p>
                    <div className="sec4_1_1" id="sec4_1_tbl">
                        <b>Тип карты</b>
                        <p> 	12 месяцев</p>
                        <p> 6 месяцев</p>
                        <p>3 месяца</p>
                        <p>1 месяц</p>
                    </div>
                    <hr />
                    <div className="sec4_1_2 sec4_4" id="sec4_1_tbl">
                        <p>Индивидуальная, <br />
                            полная без ограничения <br />
                            в посещении / 8:00 – 23:00</p>
                        <b>18000 <br />
                            (+200 мин. солярия)</b>
                        <b>12000</b>
                        <b>
                            7000
                        </b>
                        <b>2500</b>
                    </div>
                    <div className="sec4_1_2 sec4_4" id="sec4_1_tbl">
                        <p>
                            Индивидуальная, <br />
                            дневная / 8:00 – 17:00
                        </p>
                        <b>__</b>
                        <b>9500</b>
                        <b>5500 </b>
                        <b>2000</b>
                    </div>
                    <div className="sec4_line1_2">
                        <img className="img1" src={sec4_line1} alt="" />
                        <img className="img2" src={sec4_line2} alt="" />
                    </div>
                </div>

                <div className="sec4_3">
                    <p>Разовые тренировки</p>

                    <div className="sec4_3_box">
                        <div className="sec4_3_1">
                            <p>Самостоятельные тренировки <br /> в тренажерном зале</p>
                            <span>8:00 – 23:00</span>
                            <img src={Vector_5} alt="" />
                            <b>250₽</b>
                            <span>1 тренировка</span>
                            <button>Узнать</button>
                        </div>
                        <div className="sec4_3_1">
                            <p>Персональный тренинг <br />
                                с инструктором</p>
                            <span>8:00 – 23:00</span>
                            <img src={Vector_5} alt="" />
                            <b>700₽</b>
                            <span>1 тренировка</span>
                            <button>Узнать</button>
                        </div>
                        <div className="sec4_3_1">
                            <p>Зал групповых <br /> программ</p>
                            <span>график занятий уточняйте <br /> у администратора</span>
                            <img src={Vector_5} alt="" />
                            <b>300₽</b>
                            <span>1 тренировка</span>
                            <button>Узнать</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_4;