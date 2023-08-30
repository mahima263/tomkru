import React from 'react'
import '../App.css'
import image1 from '../Images/image 1.png'
import image2 from '../Images/image 2.png'
import image3 from '../Images/image 3.png'
import image4 from '../Images/image 4.png'
import image5 from '../Images/image 5.png'
import image6 from '../Images/image 6.png'
import image7 from '../Images/image 7.png'
import image8 from '../Images/image 8.png'
import image9 from '../Images/image 9.png'

const Scroll = () => {
    return (
        <div>
            <div className="container">
                <div className="row mb-3" style={{background:"rgba(42, 50, 84, 1)",borderRadius:"15px"}}>
                    <div className="col-1 d-none d-lg-block d-md-block">
                        <div className="lead pt-2" style={{color:"#FAFF00"}}>
                        Slot
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 ms-md-auto pt-2">
                        <ul class="list-inline">
                            <li class="list-inline-item lead ms-3" style={{color:"#FAFF00"}}>JILI</li>
                            <li class="list-inline-item lead text-white ms-3">Net Ent</li>
                            <li class="list-inline-item lead text-white ms-3">PG</li>
                            <li class="list-inline-item lead text-white ms-3">CQ9</li>
                        </ul>
                    </div>
                </div>
                <div className="row games">
                    <div className="col-lg-10 col-12">
                        <div className="row">
                            <div className="col-2 mx-lg-2 mx-auto">
                                <img src={image1} className='img-fluid' alt="" srcset="" />
                            </div>
                            <div className="col-2 mx-lg-2 mx-auto">
                                <img src={image2} className='img-fluid mb-3' alt="" srcset="" />
                                <img src={image6} className='img-fluid' alt="" srcset="" />
                            </div>
                            <div className="col-2 mx-lg-2 mx-auto">
                                <img src={image3} className='img-fluid mb-3' alt="" srcset="" />
                                <img src={image7} className='img-fluid' alt="" srcset="" />
                            </div>
                            <div className="col-2 mx-lg-2 mx-auto">
                                <img src={image4} className='img-fluid mb-3' alt="" srcset="" />
                                <img src={image8} className='img-fluid' alt="" srcset="" />
                            </div>
                            <div className="col-2 mx-lg-2 mx-auto">
                                <img src={image5} className='img-fluid mb-3' alt="" srcset="" />
                                <img src={image9} className='img-fluid' alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 ms-auto mt-2" id='player' style={{height:"250px",overflowY:"auto"}}>
                        <div className='mb-3' style={{background:"#2A3254",borderRadius:"6px"}}>
                            <div className='lead text-white py-2 mx-2 mb-2'>
                                player ****325 <br />
                                Win ₹45142 <br />
                                <button className="btn btn-sm rounded-pill px-3" style={{background:"#FAFF00"}}>Play it</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{background:"#2A3254",borderRadius:"6px"}}>
                            <div className='lead text-white py-2 mx-2 mb-2'>
                                player ****325 <br />
                                Win ₹45142 <br />
                                <button className="btn btn-sm rounded-pill px-3" style={{background:"#FAFF00"}}>Play it</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{background:"#2A3254",borderRadius:"6px"}}>
                            <div className='lead text-white py-2 mx-2 mb-2'>
                                player ****325 <br />
                                Win ₹45142 <br />
                                <button className="btn btn-sm rounded-pill px-3" style={{background:"#FAFF00"}}>Play it</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{background:"#2A3254",borderRadius:"6px"}}>
                            <div className='lead text-white py-2 mx-2 mb-2'>
                                player ****325 <br />
                                Win ₹45142 <br />
                                <button className="btn btn-sm rounded-pill px-3" style={{background:"#FAFF00"}}>Play it</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{background:"#2A3254",borderRadius:"6px"}}>
                            <div className='lead text-white py-2 mx-2 mb-2'>
                                player ****325 <br />
                                Win ₹45142 <br />
                                <button className="btn btn-sm rounded-pill px-3" style={{background:"#FAFF00"}}>Play it</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{background:"#2A3254",borderRadius:"6px"}}>
                            <div className='lead text-white py-2 mx-2 mb-2'>
                                player ****325 <br />
                                Win ₹45142 <br />
                                <button className="btn btn-sm rounded-pill px-3" style={{background:"#FAFF00"}}>Play it</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scroll