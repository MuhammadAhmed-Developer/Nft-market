import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import '../styles/Home.css';
import Button from '../components/Button/Button';
import Card from '../components/Homecard/Card';
import Collection from '../components/Collection/Collection';
import '../pages/home.css'
import collection1 from '../accets/images/trendingCollection1.png'
import collectionmin1 from '../accets/images/collectmin1.png'
import collectionmin2 from '../accets/images/collectmin2.png'
import collectionmin3 from '../accets/images/collectmin3.png'
import minpic from '../accets/images/min-colection.png'
import mashroom from '../accets/images/mashroomcard.png'
import mashoommin from '../accets/images/mashrommin1.png'
import mashroommini from '../accets/images/mashroomminpic.png'
import mencard from '../accets/images/mencard.png'
import men1 from '../accets/images/mencard1.png'
import men2 from '../accets/images/mencard2.png'
import minimen from '../accets/images/menmini.png'
import Outlinebtn from '../components/btnoutline/btnoutline'
import TopCreators from '../components/TopCreators/TopCreators';
import topimg1 from '../accets/images/Topcreator1.png'
import topimg2 from '../accets/images/top2.png' 
import topimg3 from '../accets/images/top3.png'
import topimg4 from '../accets/images/top4.png'



export default function Home() {
  return (
    <>
      <Navbar />
      <main className='main-sec'>
        {/* ============================= Discover digital art & Collect NFTs=============== */}
        <section>
          <div className="container mt-5 p-5">
            <div className="row mt-5 px-5">
              <div className="col-lg-6 col-md-12 col-sm-2 mt-4">
                <h1 className='heading'>Discover <br /> digital art & <br />Collect NFTs</h1>
                <p className='paragraph'>NFT marketplace UI created with Anima for <br />Figma. Collect, buy and sell art from more<br /> than 20k NFT artists.</p>
                <br />
                <Button title='Get Started' class='bi bi-rocket-takeoff fs-5 me-3'/>
                <br />
                <br />
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
              <div className="col-lg-6 col-md-12 col-sm-12">

                <Card />
              </div>
            </div>
          </div>
        </section>

        {/* ============================Trending Collection=============================== */}

        <section>
          <div className="container mt-5 px-5">
            <div className="row">
              <div className='px-5 mt-5'>
                <h1 className='mt-5 fw-bold trending mt-4'>Trending Collection</h1>
                <p className='checked'>Checkout our weekly updated trending collection.</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                <Collection mainImg={collection1} small1={collectionmin1} small2={collectionmin2} small3={collectionmin3} name='DSGN Animals' minImg={minpic} imgname='MrFox' />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                <Collection mainImg={mashroom} small1={mashoommin} small2={mashoommin} small3={collectionmin3} name='Magic Mushrooms' minImg={mashroommini} imgname='Shroomie' />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                <Collection mainImg={mencard} small1={men1} small2={men2} small3={collectionmin3} name='Disco Machines' minImg={minimen} imgname='BeKind2Robots' />
              </div>
            </div>
          </div>
        </section>

{/* ====================================Top Creators==================================== */}

  <section>
    <div className="container mt-5 px-5 mb-5">
      <div className="row px-4">
         <div className="col-9">
         <h1 className='mt-5 fw-bold trending mt-4'>Top Creators</h1>
         <p className='checked'>Checkout Top Rated Creators on the NFT Marketplace</p>
         </div>
         <div className="col-3 mt-5">
           <Outlinebtn title='View Ranking' class='bi bi-rocket-takeoff rocket fs-5 me-3 '/>
         </div>
           <div className="row mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                <TopCreators image={topimg1} number='1' name='Keepitreal'/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                <TopCreators image={topimg2} number='2' name='DigiLab'/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                <TopCreators image={topimg3} number='3' name='GravityOne'/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                <TopCreators image={topimg4} number='4' name='Juanie'/>
            </div>
           </div>
      </div>
    </div>
  </section>


      </main>
      <Footer />
    </>
  )
}
