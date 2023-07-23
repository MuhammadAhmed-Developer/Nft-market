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
import Outlinebtn from '../components/btnoutline/Btnoutline'
import TopCreators from '../components/TopCreators/TopCreators';
import topimg1 from '../accets/images/Topcreator1.png'
import topimg2 from '../accets/images/top2.png'
import topimg3 from '../accets/images/top3.png'
import topimg4 from '../accets/images/top4.png'
import topimg5 from '../accets/images/top5.png'
import topimg6 from '../accets/images/top6.png'
import topimg7 from '../accets/images/top7.png'
import topimg8 from '../accets/images/top8.png'
import topimg9 from '../accets/images/top9.png'
import topimg10 from '../accets/images/top10.png'
import topimg11 from '../accets/images/top11.png'
import topimg12 from '../accets/images/top12.png'
import BrowseCards from '../components/BrowseCards/BrowseCards';
import browse1 from '../accets/images/browse1.png';
import browse2 from '../accets/images/browse2.png';
import browse3 from '../accets/images/browse3.png';
import browse4 from '../accets/images/browse4.png';
import browse5 from '../accets/images/browse5.png';
import browse6 from '../accets/images/browse6.png';
import browse7 from '../accets/images/browse7.png';
import browse8 from '../accets/images/browse8.png';
import brush from '../accets/images/brush.png'
import collection from '../accets/images/collecion.png'
import music from '../accets/images/music.png'
import photo from '../accets/images/photo.png'
import video from '../accets/images/video.png'
import utility from '../accets/images/utility.png'
import sport from '../accets/images/sport.png'
import world from '../accets/images/world.png'
import Btnoutline from '../components/btnoutline/Btnoutline'
import DiscoverNft from '../components/DiscoverNft/DiscoverNft';
import dicover1 from '../accets/images/discoverNft1.png'
import dicover2 from '../accets/images/discoverNft2.png'
import dicover3 from '../accets/images/discoverNft3.png'
import mini1 from '../accets/images/nftmin1.png'
import mini2 from '../accets/images/nftmin2.png'
import mini3 from '../accets/images/nftmin3.png'
import bigmashroom from '../accets/images/bigMashroom.png'
import HowWork from '../components/HowWork/HowWork';
import work1 from '../accets/images/howwork1.png'
import work2 from '../accets/images/howwork2.png'
import work3 from '../accets/images/howwork3.png'
import spacemen from '../accets/images/spacemen.png'





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
                <Button title='Get Started' class='bi bi-rocket-takeoff fs-5 me-3' />
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

        <section id='top'>
          <div className="container mt-5 px-5 mb-5">
            <div className="row px-4">
              <div className="col-9">
                <h1 className='mt-5 fw-bold trending mt-4'>Top Creators</h1>
                <p className='checked'>Checkout Top Rated Creators on the NFT Marketplace</p>
              </div>
              <div className="col-3 mt-5">
                <Outlinebtn title='View Ranking' class='bi bi-rocket-takeoff rocket fs-5 me-3 ' />
              </div>
              <div className="row mt-5">
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg1} number='1' name='Keepitreal' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg2} number='2' name='DigiLab' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg3} number='3' name='GravityOne' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg4} number='4' name='Juanie' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg5} number='5' name='BlueWhale' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg6} number='6' name='mr fox' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg7} number='7' name='Shroomie' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg8} number='8' name='robotica' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg9} number='9' name='RustyRobot' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg10} number='10' name='animakid' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg11} number='11' name='Dotgu' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
                  <TopCreators image={topimg12} number='12' name='Ghiblier' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ++++++++++++++++++++++Browse Catagories======================================= */}

        <section className='mt-5' id='browser'>
          <div className="container mt-5 px-5">
            <div className="row">
              <h2 className='fw-bolder mt-5'>Browse Categories</h2>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse1} name="Art" hoverImg={brush} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse2} name="Collectibles" hoverImg={collection} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse3} name="Music" hoverImg={music} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse4} name="Photography" hoverImg={photo} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse5} name="Video" hoverImg={video} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse6} name="Utility" hoverImg={utility} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse7} name="Sport" hoverImg={sport} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <BrowseCards img={browse8} name="Virtual Worlds" hoverImg={world} />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================Discover More NFTS =============================*/}

        <section>
          <div className="container mt-5">
            <div className="row">
              <div className='col-8 mt-4'>
                <div className='mx-4'>
                  <h2 className='fw-bold'>Discover More NFTs</h2>
                  <p className='mt-3 fs-5 '>Explore new trending NFTs</p>
                </div>
              </div>
              <div className="col-4 mt-4">
                <Btnoutline title='See All' class='bi bi-eye rocket me-3 fs-6' />
              </div>
            </div>
            <div className="row">
              <DiscoverNft image={dicover1} name='Distant Galaxy' dp={mini1} price='1.63' bid='0.33' />
              <DiscoverNft image={dicover2} name='Distant Galaxy' dp={mini2} price='1.63' bid='0.33' />
              <DiscoverNft image={dicover3} name='Distant Galaxy' dp={mini3} price='1.63' bid='0.33' />
            </div>
          </div>
        </section>

        {/* Big MAshroom Background IMage */}

        <section className='mt-5'>
          <img src={bigmashroom} alt="" className='img-fluid back-img' />
        </section>

        {/* =======================================How It Works ================ */}


        <section>
          <div className="container mt-5">
            <div className="row">
              <div className='mx-4'>

                <h1 className='fw-bod'>How it Works</h1>
                <p>Find out how to get started</p>
              </div>
              <div className="row">
                <HowWork picture={work1} title='Setup Your wallet' detail='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.' />
                <HowWork picture={work2} title='Create Collection' detail='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.' />
                <HowWork picture={work3} title='Start Earning' detail='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.' />
              </div>
            </div>
          </div>
        </section>

        {/* =====================Join OUR ============================================================== */}

        <section id='join-section'>
          <div className="container my-5">
            <div className="row join-cont p-5">
              <div className="col-5">
                <img src={spacemen} alt="" className='img-fluid' />
              </div>
              <div className="col-6 join-colm  ">
                <h1 className='fw-bold join'>Join Our Weekly<br /> Digest</h1>
                <br />
                <p>Get exclusive promotions & updates <br /> straight to your inbox.</p>
                <br />
                <div className='d-flex'>
                  <input type="email" className='form-control p-2  input-email' placeholder='Enter Your Email here' /><button className='btn-footer m'><i className='bi bi-envelope me-1'></i> Subscribe</button>
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
