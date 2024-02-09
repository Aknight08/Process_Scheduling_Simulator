import React from 'react'
import icon from './github.svg'

import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
    return (
        <>
            <div>
                {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
                <div >

                    <footer class="bg-dark bg-gradient text-center text-white">
                        {/* <!-- Grid container --> */}
                        <div class="container p-4 pb-0">
                            {/* <!-- Section: Social media --> */}
                            <section class="mb-4">
                                {/* <!-- Facebook --> */}
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                ><i class="bi bi-youtube"></i></a>

                                {/* <!-- Twitter --> */}
                                <a class="btn btn btn-floating m-1" href="#!" role="button"
                                ><i class="bi bi-twitter-x"></i></a>

                                {/* <!-- Google --> */}
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                ><i class="bi bi-google"></i></a>

                                {/* <!-- Instagram --> */}
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                < i class="bi bi-instagram"></i>
                                </a>

                                {/* <!-- Linkedin --> */}
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>

                                {/* <!-- Github --> */}
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">                                    
                                    <img src={icon} alt="github-icon"></img>
                                </a>
                            </section>
                            {/* <!-- Section: Social media --> */}
                        </div>
                        {/* <!-- Grid container --> */}

                        {/* <!-- Copyright --> */}
                        // Footer component in JSX
                        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            © 2020 Copyright:
                        </div>

                        {/* <!-- Copyright --> */}
                    </footer>

                </div>
                {/* <!-- End of .container --> */}
            </div>
        </>
    )
}
