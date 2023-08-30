import React from 'react'
import '../App.css'
import image1 from '../Images/carousel1.png'

const Hero = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{ background: "var(--priamry, #2A3254)" }}>
                <div class="container">
                    <a class="navbar-brand text-white" href="/"><i class="fa-solid fa-house"></i></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-auto" id="navbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">Casino</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">Slot</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">Table</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">Lottery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">Arcade</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">Pormotion</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 ps-3" href="/">VIP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ms-5 disabled d-none d-xl-block" href="/">|</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">.</button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={image1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item active">
                            <img src={image1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item active">
                            <img src={image1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Hero