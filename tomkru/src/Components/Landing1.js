import React from 'react'
import '../App.css'
import image_1 from '../Images/Vector.png'
import image_2 from '../Images/book-outline.png'
import Scroll from './Scroll'

const Landing1 = () => {
    return (
        <>
            <section className='py-5' style={{ background: "var(--secondary, #111421)" }}>
                <Scroll/>
                <div className="container mt-5" style={{ background: "var(--header-color, #191E32)", borderTopRightRadius:"50px",borderBottomLeftRadius:"50px"}}>
                    <div className="row pt-5 mx-3">
                        <div className="col-lg-3 col-md-6 text-white">
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img src={image_1} width="51" height="51" className="rounded-circle" alt=''></img>
                                <div className="d-flex flex-column pl-2 ms-3" style={{ textAlign: "start" }}>
                                    <div class="" style={{ fontSize: "1.4rem" }}>Customer support 24/7</div>
                                    <p class="" style={{ fontSize: ".6rem" }}>have a question ? Speak to our agent online
                                        <br />
                                        <span style={{ color: "#FAFF00", fontSize: ".7rem" }}>Contact Us</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-white">
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img src={image_2} width="51" height="51" className="rounded-circle" alt=''></img>
                                <div className="d-flex flex-column pl-2 ms-3" style={{ textAlign: "start" }}>
                                    <div class="" style={{ fontSize: "1.4rem" }}>New Member Guide</div>
                                    <p class="" style={{ fontSize: ".6rem" }}>Check out FAQ and guides
                                        <br />
                                        <span style={{ color: "#FAFF00", fontSize: ".7rem" }}>Check now
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-white">
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img src={image_1} width="51" height="51" className="rounded-circle" alt=''></img>
                                <div className="d-flex flex-column pl-2 ms-3" style={{ textAlign: "start" }}>
                                    <div class="" style={{ fontSize: "1.4rem" }}>Customer support 24/7</div>
                                    <p class="" style={{ fontSize: ".6rem" }}>have a question ? Speak to our agent online
                                        <br />
                                        <span style={{ color: "#FAFF00", fontSize: ".7rem" }}>Contact Us</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-white">
                            <div className="d-flex flex-row profile pt-4 mt-auto">
                                <img src={image_1} width="51" height="51" className="rounded-circle" alt=''></img>
                                <div className="d-flex flex-column pl-2 ms-3" style={{ textAlign: "start" }}>
                                    <div class="" style={{ fontSize: "1.4rem" }}>Affiliates Program</div>
                                    <p class="" style={{ fontSize: ".6rem" }}>You send us Business, we send
                                        you Money
                                        <br />
                                        <span style={{ color: "#FAFF00", fontSize: ".7rem" }}>Find Out More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-white mt-3 px-3 mb-5">
                        <div className="col-12 Tomukruworld mb-5" id='Tomukruworld'>
                            <h5 style={{color: "#FAFF00"}}>Tomkru World: Cricket Exchange & Casino Sites in India 2022</h5>
                            <div className='h5'>
                            The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
                                but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling
                                website will suit your needs most effectively.
                            </div>
                            <div className='h5'>
                            The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
                                but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling
                                website will suit your needs most effectively.
                            </div>
                            <div className='h5'>
                            The challenge of choosing the best betting site in India is made more difficult for novices. There are many sites that offer you bonus money if you register,
                                but this does not make them better than other casinos because it's only one factor among many others to consider when looking at which gambling
                                website will suit your needs most effectively.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing1