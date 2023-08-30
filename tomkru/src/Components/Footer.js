import React from 'react'
import '../App.css'


const Footer = () => {
    return (
        <div>
            <footer class="text-center text-lg-start pt-5" style={{ background: "var(--secondary, #111421)"}}>
                <div class="container" style={{borderTop:"1px solid #FAFF00"}}>
                    <div className="row mt-3">
                        <div className="col-6">
                            <div class="me-5 text-white" style={{ fontSize:"4rem" }}>
                                TOMKRU
                            </div>
                        </div>
                        <div className="col-6" style={{textAlign:"end"}}>
                            <h5 className='me-5' style={{color:"#FAFF00"}}>Responsible Gaming   |  About Us  |</h5>
                            <h5 className='text-white'>© 2023 MCW Copyrights. All Rights Reserved</h5>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer