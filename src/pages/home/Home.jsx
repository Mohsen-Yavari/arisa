import React from 'react';
import phone_picture from "../../img/Progresive app-cuate 1.png";
import Qr from "../../img/Qr.jpg";
import "./home.scss";
import 'animate.css';

import img1 from "../../img/Group 1317604.png";
import img2 from "../../img/Group 1317603.png";
import img3 from "../../img/Group 1317605 (1).png";
import img4 from "../../img/Group 1317601 (1).png";
import img5 from "../../img/Group 1317602.png";
import img6 from "../../img/CRS Automotive Blog.jfif"

const Home = () => {
    return (
        <div className="container ">
            <div className="row home__title">
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="home__title-text mt-5 ">
                        <h1 >با <span>پیمانی </span>در کمترین کمترین زمان به خسارتت برس</h1>
                        <p>بدون سردرگمی و از خونت میتونی به خسارت تصادفت برسی فقط کافیهد اپلیگیشن رو نصب کنی</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-center justify-content-center">
                    <div className="text-center">
                    <img src={phone_picture} alt="" className="home__title-img p-2"  />
                    <img src={Qr} alt="" className="home__title-img2 p-2"  />
                    
                    <p>دانلود اپلیکیشن اسکن</p>
                    </div>
                </div>
            </div>

            <div className="row home__part2">
                <div className="col text-center home__part2">
                    <h1>پیمانی</h1>
                    <h2>خدمات نوین برای تسهیل خسارت از بیمه</h2>
            
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </div>
            </div>

            <div className="row  home__part3 d-flex align-items-center justify-content-center">
            <div className="col-md-6 mt-5 mb-5">
                <div className="row d-flex justify-content-cente home__part3-img">
                    <div className="col-sm-6 col-md-6 col-lg-6 ">
                    <img src={img1}  alt=""  sify/>
                    <img src={img2}  alt=""  sify/>
                    <img src={img3} alt=""  className="home__part3-peymani"/>
                   
                    </div>
                
                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        
                    <img src={img4} alt=""  sify/>
                    <img src={img5}  alt=""  sify/>
                    </div>
                  
                    
                 
                 
                 
                </div>

                

            </div>
            
            </div>
            <div className="row  home__part4 mt-5">
                    <div className="col-md-12 mb5 d-flex align-items-center justify-content-between">
                        <h1>بلاگ</h1>
                        <h1>بیشتر</h1>
                    </div>
             </div>
             <div className="row home__part5">       
                    <div className="col-sm-12 col-md-5 col-lg-4 w-100   d-flex align-items-center justify-content-between">
                        <div className="home__part5-box">
                            <img src={img6}  alt="" />
                        </div>
                        <div className="home__part5-box">
                            <img src={img6}  alt="" />
                        </div>
                        <div className="home__part5-box">
                            <img src={img6}  alt="" />
                        </div>
                    </div>

                    <div className="col mt-5">
                        <h1>سوالات متداول</h1>
                    </div>

                </div>

                <div className="row home__part6">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           چجوری میتونم یه اپلیکیشن دانلود کنم
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        چجوری میتونم یه اپلیکیشن دانلود کنم

                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        چجوری میتونم یه اپلیکیشن دانلود کنم

                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</div>
                        </div>
                    </div>
                    </div>


                </div>
            
        </div>
    );
};

export default Home;