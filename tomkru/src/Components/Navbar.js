import React, { useState } from 'react'
import '../App.css'


const Navbar = () => {

  const [clock, setClock] = useState('')

  function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let time = hour + ":" + min + ":" + sec;

    setClock(time)
  }

  setTimeout(() => {
    currentTime()
  }, 1000);

  
  return (
    <div>
      <section style={{background:"black"}}>
      <div className="container">
        <div className="row py-2">
          <div className="col-3 text-white" style={{fontSize:"12px"}}>
            <div id="clock">
            (GMT+5.5) {clock}
            </div>
          </div>
          <div className="col-4 ms-auto">
            <div style={{textAlign:"right", fontSize:"12px"}}>
            <a className='text-white link-underline link-underline-opacity-0 me-4' href="/">24*7 Support</a>
            <a className='text-white link-underline link-underline-opacity-0 me-4' href="/">Facebook</a>
            <a className='text-white link-underline link-underline-opacity-0' href="/">Email</a>
            </div>
          </div>
        </div>
      </div>
      </section>
      <nav class="navbar navbar-expand-lg" style={{ background: "var(--header-color, #191E32)" }}>
        <div class="container">
          <a class="navbar-brand text-white" href="/"><p className='h2'>TOMKRU</p></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div>
              <a className='text-white link-underline link-underline-opacity-0 h2 me-5 pe-4' href="/login">LOGIN</a>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar