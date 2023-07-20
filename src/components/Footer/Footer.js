import React from 'react'
import './footer.css';
import logo from '../../accets/images/logo.png'
import nft from '../../accets/images/NFT Marketplace.png'
import icon from '../../accets/images/Discord icon.png'
import twitter from '../../accets/images/YoutubeLogo.png'
import youtube from '../../accets/images/TwitterLogo.png'

import insta from '../../accets/images/InstagramLogo.png'
export default function Footer() {
    return (
        <>
            <div className="container-fluid  container-footer ">
                <div className="container px-5 py-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <ul className='list'>
                                <li><img src={logo} alt="" />&nbsp; &nbsp; <img src={nft} alt="" /></li>
                                <br />
                                <br />
                                <li className='fs-5'>NFT marketplace UI created <br />with Anima for Figma.</li>
                                <br />
                                <li>Join our community</li>
                                <li className='mt-2'><img src={icon} alt="" className='img-fluid mx-1' /> <img src={youtube} alt="" className='img-fluid mx-1' />
                                    <img src={twitter} alt="" className='img-fluid mx-1' /> <img src={insta} alt="" className='img-fluid mx-1' /></li>
                            </ul>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <ul className='list'>
                                <li className='fw-bold fs-4'>Explore</li>
                                <br />
                                <br />
                                <li className='fs-5'>Marketplace</li>
                                <br />
                                <li>Rankings</li>
                                <br />
                                <li className='mt-2'>Connect a wallet</li>
                            </ul>

                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <ul className='list'>
                                <li className='fw-bold fs-4'>Join our weekly digest</li>
                                <br />
                                <br />
                                <li className='fs-5'>Get exclusive promotions & updates <br /> straight to your inbox.</li>
                                <br />
                                <li>
                                    <div className='d-flex'>
                                        <input type="email" className='form-control p-2  input-email' placeholder='Enter Your Email here' /><button className='btn-footer m'>Subscribe</button>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
