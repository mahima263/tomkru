import React from 'react'
import '../App.css'


const About = () => {
    return (
        <div>
            <section style={{background:"#2A3254"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center text-white py-2">
                        <h3>WELCOME TO OUR <span style={{color:"#FAFF00"}}>INFO CENTRE</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{background:"var(--secondary, #111421)"}}>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-12 text-center mb-5">
                        <h1 style={{color:"#FAFF00"}}>About Us</h1>
                        </div>
                    </div>
                </div>
                <div className="container mb-5" style={{ background: "rgba(25, 30, 50, 0.36)", borderTopLeftRadius: "50px", borderBottomRightRadius: "40px",boxShadow:"0px 4px 20px 2px rgba(0, 0, 0, 0.25)" }}>
                    <div className="row py-5 text-white mt-5 px-3 mb-5">
                        <div className="col-12 py-4 mb-4 px-5">
                            <h5>
                                Tomkru World (MCW) is a leading online gaming website, offering sports betting, online
                                casino, and online games. We have been serving the Asia Pacific market since 2015. We
                                are fully licensed and regulated in various jurisdictions as stated in the Terms and
                                Conditions and MCW operates strictly within these regulations. <br />
                                The safe and private environment and the integrity of our products are the fundamental
                                drivers of the MCW online gaming experience. We have the most advanced security measures
                                available and are continually auditing our games and processes to ensure a totally safe
                                and fair internet gambling experience. We keep all your information confidential, and
                                we will never share it or sell it to third parties, except in accordance with our Privacy
                                Policy. <br />
                                We strive to offer the best prices whilst covering a wide variety of sporting markets and
                                other worldwide sporting events. We provide a wide variety of live games and slot games
                                in our casino. At MCW we promise you will enjoy the highest class of online gaming
                                entertainment of the world. <br />
                                With 24 hour live customer support available 7 days per week, our highly trained and
                                friendly staff will ensure that any queries are dealt with and resolved quickly, politely,
                                and efficiently. <br />
                                Our mission is to provide the best online gambling experience for responsible players, please
                                feel free to contact us by phone or email with your comments or suggestions. <br />
                                We offer a variety of secure and easy payment methods for your convenience. We adhere to “know
                                your customer (KYC)” and anti-money laundering (AML) policies and cooperate with the third party
                                financial and regulatory authorities to ensure the highest standards of compliance. <br />
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 pb-5">
                    <div className="row " >
                        <div className="col-12 text-center text-white mt-5 py-4" style={{borderTop:"1px solid white",borderBottom:"1px solid white"}}>
                        <h5>Tomkru World <span style={{color:"#FAFF00"}}>©</span> 2023 All Rights Reserved.</h5>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About