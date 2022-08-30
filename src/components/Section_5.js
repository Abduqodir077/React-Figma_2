import sec5_1 from "../img/sec5_1.png"
import sec5_2 from "../img/sec5_2.png"
import sec5_3 from "../img/sec5_3.png"
import sec5_4 from "../img/sec5_4.png"

function Section_5({malumot}){
    return(
        <>
        <section className="section5">
                <div className="sec5_p">
                    <p>Тренеры </p>
                </div>
                
                {
                    malumot.map(item => (
                <div className="sec5_1" id="sec_5">
                    <img src={sec5_1} alt="" />
                    <p>{item.name}</p>
                    <span>{item.span1}</span>
                    <span>{item.span2}</span>
                    <span>{item.span3}</span>
                </div>
                ))
                }


               {/* {
                    malumot.map(item => (
                <div className="sec5_1" id="sec_5">
                    <img src={sec5_2} alt="" />
                    <p>{item.name2}</p>
                    <span>{item.span4}</span>
                    <span>{item.span5}</span>
                </div>
                ))
                } */}


                <div className="sec5_1" id="sec_5_2">
                    <img src={sec5_3} alt="" />
                    <p>Юлия Белова</p>
                    <span>Фитнес-тренер</span>
                    <span>Опыт работы — 4 года</span>
                </div>
                <div className="sec5_1" id="sec_5_3">
                    <img src={sec5_4} alt="" />
                    <p>Михаил А</p>
                    <span>Фитнес-тр</span>
                    <span>Опыт рабо</span>
                </div>
                <div className="pngs">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.375 8.00005C23.375 7.78456 23.2894 7.5779 23.137 7.42553C22.9846 7.27315 22.778 7.18755 22.5625 7.18755H3.39886L8.51274 2.0753C8.58828 1.99976 8.6482 1.91007 8.68909 1.81137C8.72997 1.71267 8.75101 1.60688 8.75101 1.50005C8.75101 1.39322 8.72997 1.28743 8.68909 1.18873C8.6482 1.09003 8.58828 1.00034 8.51274 0.9248C8.43719 0.849257 8.34751 0.789333 8.24881 0.74845C8.15011 0.707566 8.04432 0.686523 7.93749 0.686523C7.83065 0.686523 7.72487 0.707566 7.62616 0.74845C7.52746 0.789333 7.43778 0.849257 7.36224 0.9248L0.862238 7.4248C0.786572 7.50027 0.72654 7.58994 0.68558 7.68865C0.644619 7.78736 0.623535 7.89318 0.623535 8.00005C0.623535 8.10692 0.644619 8.21274 0.68558 8.31145C0.72654 8.41017 0.786572 8.49983 0.862238 8.5753L7.36224 15.0753C7.43778 15.1508 7.52746 15.2108 7.62616 15.2517C7.72487 15.2925 7.83065 15.3136 7.93749 15.3136C8.04432 15.3136 8.15011 15.2925 8.24881 15.2517C8.34751 15.2108 8.43719 15.1508 8.51274 15.0753C8.58828 14.9998 8.6482 14.9101 8.68909 14.8114C8.72997 14.7127 8.75101 14.6069 8.75101 14.5001C8.75101 14.3932 8.72997 14.2874 8.68909 14.1887C8.6482 14.09 8.58828 14.0003 8.51274 13.9248L3.39886 8.81255H22.5625C22.778 8.81255 22.9846 8.72695 23.137 8.57458C23.2894 8.4222 23.375 8.21554 23.375 8.00005Z" fill="white" />
                    </svg>
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.625013 7.99995C0.625013 8.21544 0.710615 8.4221 0.862988 8.57447C1.01536 8.72685 1.22202 8.81245 1.43751 8.81245L20.6011 8.81245L15.4873 13.9247C15.4117 14.0002 15.3518 14.0899 15.3109 14.1886C15.27 14.2873 15.249 14.3931 15.249 14.5C15.249 14.6068 15.27 14.7126 15.3109 14.8113C15.3518 14.91 15.4117 14.9997 15.4873 15.0752C15.5628 15.1507 15.6525 15.2107 15.7512 15.2516C15.8499 15.2924 15.9557 15.3135 16.0625 15.3135C16.1693 15.3135 16.2751 15.2924 16.3738 15.2516C16.4725 15.2107 16.5622 15.1507 16.6378 15.0752L23.1378 8.5752C23.2134 8.49973 23.2735 8.41006 23.3144 8.31135C23.3554 8.21264 23.3765 8.10682 23.3765 7.99995C23.3765 7.89308 23.3554 7.78726 23.3144 7.68855C23.2735 7.58983 23.2134 7.50017 23.1378 7.4247L16.6378 0.924699C16.5622 0.849155 16.4725 0.789231 16.3738 0.748348C16.2751 0.707464 16.1693 0.686422 16.0625 0.686422C15.9557 0.686422 15.8499 0.707464 15.7512 0.748348C15.6525 0.789231 15.5628 0.849155 15.4873 0.924699C15.4117 1.00024 15.3518 1.08992 15.3109 1.18863C15.27 1.28733 15.249 1.39312 15.249 1.49995C15.249 1.60678 15.27 1.71257 15.3109 1.81127C15.3518 1.90997 15.4117 1.99966 15.4873 2.0752L20.6011 7.18745L1.43751 7.18745C1.22202 7.18745 1.01536 7.27305 0.862988 7.42542C0.710615 7.5778 0.625013 7.78446 0.625013 7.99995Z" fill="white" />
                    </svg>

                </div>
            </section>
        </>
    )
}

export default Section_5;