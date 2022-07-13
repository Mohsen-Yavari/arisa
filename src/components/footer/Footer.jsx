import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <div className="container footer bg-nav ">
            <div className="row">
                <h1>پیمانی</h1>
            </div>
            <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-4   ">
                    <h5>دانلود اپلیکیشن اندروید</h5>
                    <h5>دانلود اپلیکیشن ios</h5>
                    <h5>دانلود اپلیکیشن نسخه وب</h5>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4   ">
                   <h5>لورم ایپسوم متن ساختگی</h5>
                   <h5>لورم ایپسوم متن ساختگی</h5>
                   <h5>لورم ایپسوم متن ساختگی</h5>
                   <h5>لورم ایپسوم متن ساختگی</h5>
                   <h5>لورم ایپسوم متن ساختگی</h5>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4   ">
                    <h5><i class="ri-map-pin-line "></i> تهران-خیابان نلسون ماندلا-چهارراه تسگری ساختمان 93</h5>
                    <h5>info@bimani.com <i class="ri-mail-line"></i></h5>
                    <h5>شبکه های اجتماعی</h5>
                    <div className="social">
                        <a href="#"><i class="ri-instagram-line"></i></a>
                        <a href="#"><i class="ri-telegram-line"></i></a>
                        <a href="#"><i class="ri-whatsapp-line"></i></a>
                        <a href="#"><i class="ri-linkedin-box-fill"></i></a>
                        <a href="#"><i class="ri-twitter-line"></i></a>
                    </div>
                </div>
    
               
            </div>
        </div>
    );
};

export default Footer;