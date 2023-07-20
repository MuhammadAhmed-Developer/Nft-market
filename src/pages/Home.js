import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import '../styles/Home.css'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className='main-sec'>
     {/* ============================= Discover digital art & Collect NFTs=============== */}
      <section>
        <div className="container mt-5 p-5">
          <div className="row mt-5 px-5">
            <div className="col-lg-6 col-md-12 col-sm-2 mt-4">
                <h1 className='heading'>Discover <br/> digital art & <br/>Collect NFTs</h1>
                <p className='paragraph'>NFT marketplace UI created with Anima for <br/>Figma. Collect, buy and sell art from more<br/> than 20k NFT artists.</p>
                <br/>
                <Button title='Get Started' class= 'bi bi-rocket-takeoff fs-5 me-3'/>
                <br/>
                <br/>
                <div className="row">
                  <div className="col-3">
                    <h3 className='fw-bold'>240K+</h3>
                    <p>Total Sale</p>
                  </div>
                  <div className="col-3">
                    <h3 className='fw-bold'>100K+</h3>
                    <p>Auctions</p>
                  </div>
                  <div className="col-3">
                    <h3 className='fw-bold'>240K+</h3>
                    <p>Artists</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    
    </main>
    <Footer/>
    </>
  )
}
