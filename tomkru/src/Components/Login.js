import React from 'react'
import '../App.css'
import image from '../Images/signin.png'
import Navbar from './Navbar'

const Login = () => {
    return (
        <>
            <section style={{ background: "#2A3254" }}>
                <Navbar/>
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
                                        Login
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
                                            <div className='text-center mt-3'>
                                            <button className="btn btn-sm text-dark px-4" style={{background:"#FAFF00",borderRadius:"0"}}>LOGIN</button>
                                            </div>
                                            <div className="text-center mt-4">
                                                <a className='text-white link-underline link-underline-opacity-0' href="/">Forget Password?</a><br/>
                                                <br></br>
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

export default Login