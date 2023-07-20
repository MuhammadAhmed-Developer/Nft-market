import React from 'react';
import logo from '../../accets/images/logo.png';
import nft from '../../accets/images/NFT Marketplace.png';
import './navbar.css';

export default function Navbar() {
    return (
    
        <nav className="navbar navbar-expand-lg bg-transperent text-end mt-4 navbar-dark">
            <div className="container">
                <img src={logo} alt="" width={30} height={30} />
                <a className="navbar-brand" href="#"> &nbsp; &nbsp;<img src={nft} alt=""  /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2   gap-5 fw-bold mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active mt-2" aria-current="page" href="#">Marketplace</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mt-2" href="#">Rankings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mt-2" href="#">Connect a wallet</a>
                        </li>
                        <li className="nav-item">
                            <div className=''>

                            <button className='signUp-btn fw-bold '><i className="bi bi-person fw-bold fs-5"></i> Sign Up</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
