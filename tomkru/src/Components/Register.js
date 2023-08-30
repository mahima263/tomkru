import React from 'react'
import image from '../Images/register.png'
import '../App.css'

const Register = () => {
  return (
    <>
        <section style={{ background: "#2A3254" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center text-white py-2">
                            <h3>WELCOME TO OUR <span style={{ color: "#FAFF00" }}>WORLD!!</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ background: "var(--secondary, #111421)" }}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <div className="col-9 py-5" style={{border:"5px solid #FAFF00"}}>
                            <div className="row px-3 py-5" >
                                <div className="col-5 pt-2 px-3" style={{background:"rgba(25, 30, 50, 1)"}}>
                                    <div className='text-white text-center h3 pb-2 mb-5' style={{borderBottom:"3px solid #FAFF00"}}>
                                        SIGN UP
                                    </div>
                                    <div>
                                        <form>
                                            <div class="mb-1">
                                                <label for="Email" class="form-label text-white">User Name <span style={{color:"red"}}>*</span></label>
                                                <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" style={{background:"rgba(255, 255, 255, 0.05)"}}/>
                                            </div>
                                            <div class="mb-1">
                                                <label for="Password" class="form-label text-white">Password <span style={{color:"red"}}>*</span></label>
                                                <input type="password" class="form-control" id="Password" style={{background:"rgba(255, 255, 255, 0.05)"}}/>
                                            </div>
                                            <div class="mb-1">
                                                <label for="Password2" class="form-label text-white">Confirm Password <span style={{color:"red"}}>*</span></label>
                                                <input type="password" class="form-control" id="Password2" style={{background:"rgba(255, 255, 255, 0.05)"}}/>
                                            </div>
                                            <div class="mb-1">
                                                <label for="Currency" class="form-label text-white">Choose Currency <span style={{color:"red"}}>*</span></label>
                                                <input type="password" class="form-control" id="Currency" style={{background:"rgba(255, 255, 255, 0.05)"}}/>
                                            </div>
                                            <div class="mb-1">
                                                <label for="referral" class="form-label text-white">Referral Code</label>
                                                <input type="password" class="form-control" id="referral" style={{background:"rgba(255, 255, 255, 0.05)"}}/>
                                            </div>
                                            <div className='text-center mt-3 mb-4'>
                                            <button className="btn btn-sm text-dark px-4" style={{background:"#FAFF00",borderRadius:"0"}}>Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <img src={image} height="447" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Register