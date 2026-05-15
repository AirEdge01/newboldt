import React from 'react';
import {ArrowRight,ChevronRight,Search,Package,MapPin,Headphones,Menu,Settings,Layers,Globe,Cpu,RotateCcw,Lightbulb,ChevronDown} from 'lucide-react';

const Home = () => {
    return (
        <div className="landing-wrapper">
            {/* --- PREMIUM RESTYLED NAVBAR --- */}
            <nav className="navbar navbar-expand-lg fixed-top premium-glass-navbar py-3" id="main-nav">
                <div className="container">
                    <a className="navbar-brand font-display fw-bold text-brand-dark" href="#">
                        NewBold<span className="text-brand-orange">.</span>
                    </a>

                    <button className="navbar-toggler border-0 shadow-none text-brand-dark" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav">
                        <Menu size={24} />
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="basic-navbar-nav">
                        <ul className="navbar-nav nav-menu-rounded align-items-center">
                            {/* Dropdown 1: Managed Services */}
                            <li className="nav-item dropdown premium-nav-item">
                                <a className="nav-link px-3 d-flex align-items-center gap-1" href="#" id="managedDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Industries <ChevronDown size={14} className="dropdown-arrow-icon" />
                                </a>
                                <ul className="dropdown-menu premium-dropdown border-0 shadow-lg animate-fade-in" aria-labelledby="managedDropdown">
                                    <li><a className="dropdown-item py-2" href="#">Retail</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Dining</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Healthcare</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Warehouse</a></li>
                                </ul>
                            </li>

                            <li className="nav-item premium-nav-item"><a className="nav-link px-3" href="#">Services</a></li>
                           
                            { <li className="nav-item dropdown premium-nav-item">
                                <a className="nav-link px-3 d-flex align-items-center gap-1" href="#" id="techDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products <ChevronDown size={14} className="dropdown-arrow-icon" />
                                </a>
                                <ul className="dropdown-menu premium-dropdown border-0 shadow-lg animate-fade-in" aria-labelledby="techDropdown">
                                    <li><a className="dropdown-item py-2" href="#">Partner Solution</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Shop by Brand</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Accessories</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Development Service</a></li> 
                                    <li><a className="dropdown-item py-2" href="#">Instructional Guides</a></li>
                                </ul>
                            </li> }

                            { <li className="nav-item dropdown premium-nav-item">
                                <a className="nav-link px-3 d-flex align-items-center gap-1" href="#" id="techDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Success Stories <ChevronDown size={14} className="dropdown-arrow-icon" />
                                </a>
                                <ul className="dropdown-menu premium-dropdown border-0 shadow-lg animate-fade-in" aria-labelledby="techDropdown">
                                    <li><a className="dropdown-item py-2" href="#">New Restaurant Openings </a></li>
                                    <li><a className="dropdown-item py-2" href="#">Hardware Maintenance </a></li>
                                    <li><a className="dropdown-item py-2" href="#">Help Desk Support</a></li>
                                    
                                </ul>
                            </li> }

                            { <li className="nav-item dropdown premium-nav-item">
                                <a className="nav-link px-3 d-flex align-items-center gap-1" href="#" id="techDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company <ChevronDown size={14} className="dropdown-arrow-icon"/>
                                </a>
                                <ul className="dropdown-menu premium-dropdown border-0 shadow-lg animate-fade-in" aria-labelledby="techDropdown">
                                    <li><a className="dropdown-item py-2" href="#"> About Us</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Company News</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Community & Philanthropy</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Careers</a></li>
                                    <li><a className="dropdown-item py-2" href="#">Technician Signup</a></li>
                                    <li><a className="dropdown-item py-2" href="#"> NewBold Private Policy</a></li>
                                </ul>
                            </li> }

                            <li className="nav-item premium-nav-item"><a className="nav-link px-3" href="#">Blog</a></li>

                            {/* Navbar Buttons with Sharp, Reduced Border-Radius */}
                            <li className="nav-item ms-lg-4 mt-3 mt-lg-0 d-flex flex-column flex-lg-row gap-2 w-100 w-lg-auto align-items-center">
                                <button className="btn btn-nav-outline d-flex align-items-center justify-content-center px-3 py-2 fw-semibold small">
                                    Consultation
                                </button>
                                <button className="btn btn-nav-primary d-flex align-items-center justify-content-center gap-2 px-3 py-2 fw-semibold small">
                                    Contact Us <ArrowRight size={16} />
                                </button>
                                <div className="nav-item dropdown account-dropdown">
                                    <button className="btn btn-nav-account d-flex align-items-center justify-content-center px-3 py-2 fw-semibold small dropdown-toggle" type="button" id="accountDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </button>
                                    <ul className="dropdown-menu premium-dropdown border-0 shadow-lg animate-fade-in" aria-labelledby="accountDropdown">
                                        <li><a className="dropdown-item py-2" href="#">Sign In</a></li>
                                        <li><a className="dropdown-item py-2" href="#">Sign Up</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main style={{ paddingTop: '84px' }}> {/* Adjusted offset for the restyled navbar */}
                {/* --- SECTION 0: HERO --- */}
                <section className="premium-hero-static">
                    <div className="hero-overlay"></div>
                    <div className="container position-relative z-3 text-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
                        <div className="badge-premium mb-4">Click here to watch our videos</div>
                        <h1 className="hero-title fw-900 mb-3">
                            NEWBOLD<br />
                            <span className="text-gradient-orange">TECHNOLOGIES</span>
                        </h1>
                        <p className="hero-subtitle mb-5 opacity-90">Run seamlessly with NewBold Technologies.
Managed Services & Technology Solutions That Keep You In Motion
 </p>
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <button className="btn-main-primary shadow-lg shimmer-effect d-flex align-items-center justify-content-center">
                                Get Started Now <ChevronRight size={24} className="ms-2" />
                            </button>
                            <button className="btn-outline-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 1: STATS BAR --- */}
                <section className="stats-bar py-5 text-white">
                    <div className="container">
                        <div className="row text-center g-4">
                            {[
                                { val: "1,739", label: "Satisfied Clients & Partners" },
                                { val: "330,714", label: "Sites Integrated & Serviced" },
                                { val: "60,070", label: "Project Work Orders Fulfilled" },
                                { val: "494,574", label: "Service Requests Resolved" },
                                { val: "95%", label: "Average SLAs" }
                            ].map((stat, i) => (
                                <div key={i} className="col-6 col-md">
                                    <div className="fw-900 h2 mb-1">{stat.val}</div>
                                    <div className="small opacity-75">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: TECHNOLOGY HIGHLIGHT --- */}
                <section className="py-5 bg-white">
                    <div className="container py-lg-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <h4 className="text-brand-blue fw-bold mb-1">You handle your business.</h4>
                                <h2 className="text-brand-blue display-6 fw-bold mb-4">We handle your technology.</h2>
                                <div className="text-muted mb-4 pe-lg-5">
                                    <p>When you partner with NewBold Technologies, you get a comprehensive suite of managed services and technology solutions that maximize uptime and optimize operations.</p>
                                </div>
                                <button className="btn btn-brand-primary rounded-pill px-4 py-2 fw-bold">Request a Consultation</button>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-2">
                                    <div className="col-4"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500" className="w-100 h-100 object-fit-cover rounded shadow-sm" alt="S1" /></div>
                                    <div className="col-4"><img src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?w=500" className="w-100 h-100 object-fit-cover rounded shadow-sm" alt="S2" /></div>
                                    <div className="col-4"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500" className="w-100 h-100 object-fit-cover rounded shadow-sm" alt="S3" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: ONE PARTNER GRID --- */}
                <section className="one-partner-section py-5">
                    <div className="container py-lg-5">
                        <div className="row align-items-center text-white">
                            <div className="col-lg-7">
                                <div className="row g-5 text-center">
                                    <div className="col-6">
                                        <div className="partner-icon-box mb-3 mx-auto"><Layers size={48} className="text-info-light" /></div>
                                        <div className="small fw-bold">Full-Service & <br /> Customizable</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="partner-icon-box mb-3 mx-auto"><Settings size={48} className="text-info-light" /></div>
                                        <div className="small fw-bold">Services For Every <br /> Lifecycle Stage</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="partner-icon-box mb-3 mx-auto"><Cpu size={48} className="text-info-light" /></div>
                                        <div className="small fw-bold">Hardware & <br /> OEM Agnostic</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="partner-icon-box mb-3 mx-auto"><Globe size={48} className="text-info-light" /></div>
                                        <div className="small fw-bold">Continental <br /> Coverage</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 ps-lg-5 mt-5 mt-lg-0">
                                <h2 className="fw-bold mb-3 h1">End-to-End</h2>
                                <h2 className="fw-bold mb-3 h1">One Partner</h2>
                                <h2 className="fw-bold h1 text-info-cyan">Multiple Benefits & Solutions</h2>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 4: INDUSTRY SOLUTIONS --- */}
                <section className="py-5 bg-white">
                    <div className="container py-lg-5">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-3">
                                <h2 className="text-brand-blue fw-bold display-6">Your <span className="text-brand-blue-light">solutions</span> are here.</h2>
                            </div>
                            <div className="col-lg-9">
                                <div className="row g-3">
                                    {[
                                        { title: "Retail", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500" },
                                        { title: "Dining", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500" },
                                        { title: "Healthcare", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500" },
                                        { title: "Warehouse", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500" }
                                    ].map((industry, i) => (
                                        <div key={i} className="col-md-3 col-6">
                                            <div className="industry-card position-relative overflow-hidden rounded mb-3 shadow-sm" style={{ height: '280px' }}>
                                                <img src={industry.img} alt={industry.title} className="w-100 h-100 object-fit-cover transition-all" />
                                            </div>
                                            <h6 className="fw-bold text-brand-blue text-center text-md-start">{industry.title}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 5: BRAND LOGOS --- */}
                <section className="py-5 bg-white border-top">
                    <div className="container py-4 text-center">
                        <h5 className="fw-bold text-dark opacity-75 mb-5">Trusted by leading retail and restaurant brands.</h5>
                        <div className="row justify-content-center align-items-center g-5 px-lg-5">
                            <div className="col-6 col-md-4 col-lg-2"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Raising_Cane%27s_Chicken_Fingers_logo.svg/1200px-Raising_Cane%27s_Chicken_Fingers_logo.svg.png" className="w-100 brand-logo" alt="Cane's" /></div>
                            <div className="col-6 col-md-4 col-lg-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/CDW_Logo.svg/2560px-CDW_Logo.svg.png" className="w-100 brand-logo" alt="CDW" /></div>
                            <div className="col-6 col-md-4 col-lg-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/The_Children%27s_Place_logo.svg/1280px-The_Children%27s_Place_logo.svg.png" className="w-100 brand-logo" alt="TCP" /></div>
                            <div className="col-6 col-md-4 col-lg-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dollar_General_logo.svg/2560px-Dollar_General_logo.svg.png" className="w-100 brand-logo" alt="DG" /></div>
                            <div className="col-6 col-md-4 col-lg-2"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1200px-Wendy%27s_full_logo_2012.svg.png" className="w-100 brand-logo" alt="Wendy's" /></div>
                            <div className="col-6 col-md-4 col-lg-2"><img src="https://logos-world.net/wp-content/uploads/2021/02/Zones-Logo.png" className="w-100 brand-logo" alt="Zones" /></div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 6: OEM PARTNERSHIPS --- */}
                <section className="oem-partnerships-section py-5 position-relative">
                    <div className="oem-bg-overlay"></div>
                    <div className="container py-lg-5 position-relative z-1">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="row g-4 align-items-center text-center">
                                    <div className="col-4 col-md-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zebra_Technologies_logo.svg/2560px-Zebra_Technologies_logo.svg.png" className="oem-logo" alt="Zebra" /></div>
                                    <div className="col-4 col-md-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Panasonic_logo.svg/2560px-Panasonic_logo.svg.png" className="oem-logo" alt="Panasonic" /></div>
                                    <div className="col-4 col-md-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png" className="oem-logo" alt="Lenovo" /></div>
                                    <div className="col-4 col-md-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" className="oem-logo" alt="HP" /></div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-5 mt-lg-0 ps-lg-5 text-white">
                                <h2 className="fw-bold h3 mb-2">Strategic OEM Partnerships</h2>
                                <h2 className="text-info-cyan fw-bold h3">Strategic Technology Solutions</h2>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 7: LIFECYCLE INFOGRAPHIC --- */}
                <section className="lifecycle-process-section py-5 text-white">
                    <div className="container py-lg-5">
                        <div className="text-center mb-5 pb-4">
                            <h2 className="fw-bold h1">Our Lifecycle Process</h2>
                            <p className="text-info-light lead">Find the right services for your technology infrastructure.</p>
                        </div>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="lifecycle-infographic mx-auto shadow-lg">
                                    <div className="center-orb"><Lightbulb size={60} className="text-white" /></div>
                                    <div className="orbit-item pos-top"><Search size={30} /><span>Discover & Design</span></div>
                                    <div className="orbit-item pos-right"><Package size={30} /><span>Procure & Configure</span></div>
                                    <div className="orbit-item pos-bottom-right"><MapPin size={30} /><span>Deploy & Integrate</span></div>
                                    <div className="orbit-item pos-bottom-left"><Headphones size={30} /><span>Support & Extend</span></div>
                                    <div className="orbit-item pos-left"><RotateCcw size={30} /><span>Recover & Renew</span></div>
                                    <div className="inner-circle-border"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="mb-4"><h5 className="fw-bold text-info-light">Discover & Design</h5><p className="small opacity-75">Assess your needs and design a solutions plan.</p></div>
                                        <div className="mb-4"><h5 className="fw-bold text-info-light">Procure & Configure</h5><p className="small opacity-75">Source your technology and configure custom settings.</p></div>
                                        <div><h5 className="fw-bold text-info-light">Deploy & Integrate</h5><p className="small opacity-75">Get installation and deployment solutions for your technology.</p></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4"><h5 className="fw-bold text-info-light">Support & Extend</h5><p className="small opacity-75">Extend the life of your technology infrastructure and mitigate future failures.</p></div>
                                        <div><h5 className="fw-bold text-info-light">Recover & Renew</h5><p className="small opacity-75">Safely & securely dispose of your retired or end-of-life devices.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 8: FINAL CTA --- */}
                <section className="py-5 bg-white">
                    <div className="container py-5 text-center">
                        <h2 className="text-brand-blue fw-bold display-6 mb-3">Run seamlessly with NewBold Technologies.</h2>
                        <p className="text-muted lead mb-5">See how we help thousands of operators stay in motion.</p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <button className="btn btn-brand-primary px-5 py-3 fw-bold rounded-pill shadow">Request a Consultation</button>
                            <button className="btn btn-secondary-gray px-5 py-3 fw-bold rounded-pill">About Us</button>
                            <button className="btn btn-secondary-gray px-5 py-3 fw-bold rounded-pill">Our Services</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="footer-extended pt-5 pb-3">
                <div className="container">
                    <div className="row align-items-center g-4 pb-5 border-bottom border-secondary border-opacity-25">
                        <div className="col-lg-3">
                            <div className="footer-logo text-white fw-bold h4 mb-0">NEWBOLD<div className="small text-white-50 letter-spacing-2">TECHNOLOGIES</div></div>
                        </div>
                        <div className="col-lg-3"><div className="text-white-50 small mb-1">Contact Sales</div><div className="text-white">1 (877) 999-7374 Option 2</div></div>
                        <div className="col-lg-3"><div className="text-white-50 small mb-1">Contact Support</div><div className="text-white">1 (864) 675-6635</div></div>
                        <div className="col-lg-3 text-lg-end"><button className="btn btn-info-cyan-outline rounded-pill px-4">Request a Consultation</button></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 small text-white-50">
                        <p className="mb-0">© 2026 NewBold Technologies. All Rights Reserved.</p>
                        <div className="d-flex gap-4 align-items-center mt-3 mt-md-0">
                            <a href="#" className="text-white-50 text-decoration-none">Terms of Use</a>
                            <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a>
                            <div className="d-flex align-items-center gap-2">Follow Us <div className="social-icon-circle">in</div></div>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
                .landing-wrapper { font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; width: 100%; }
                
                /* ==========================================================================
                   FANTASTIC PREMIUM GLASS NAVBAR RE-STYLE
                   ========================================================================== */
                .premium-glass-navbar {
                    background: #ffffff !important;
                    border-bottom: 1px solid rgba(10, 37, 64, 0.08) !important;
                    box-shadow: 0 8px 24px rgba(10, 37, 64, 0.08);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    backdrop-filter: none !important;
                }
                
                .text-brand-dark { color: #0A2540 !important; }
                .text-brand-orange { color: #0D6EFD !important; }

                .nav-menu-rounded {
                    margin-left: auto;
                    gap: 0.5rem;
                }
                @media (min-width: 992px) {
                    .nav-menu-rounded {
                        background: #ffffff;
                        border-radius: 32px;
                        padding: 0.35rem 0.9rem;
                        box-shadow: 0 14px 40px rgba(10, 37, 64, 0.08);
                        align-items: center;
                    }
                }

                /* Hover Line Micro-Interactions */
                .premium-nav-item {
                    position: relative;
                }
                .premium-nav-item .nav-link {
                    font-weight: 500;
                    font-size: 15px;
                    color: #0A2540 !important;
                    transition: color 0.3s ease;
                    position: relative;
                    padding: 0.5rem 0.75rem !important;
                    border-radius: 999px;
                }
                .premium-nav-item .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 1rem;
                    right: 1rem;
                    height: 2px;
                    background-color: #0D6EFD;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .premium-nav-item:hover .nav-link {
                    color: #0D6EFD !important;
                    background: rgba(13, 110, 253, 0.08);
                }
                .premium-nav-item:hover .nav-link::after {
                    transform: scaleX(1);
                    transform-origin: left;
                }
                
                /* Arrow Rotations */
                .dropdown-arrow-icon {
                    transition: transform 0.3s ease;
                }
                .premium-nav-item:hover .dropdown-arrow-icon {
                    transform: rotate(180deg);
                    color: #0D6EFD;
                }

                .account-dropdown .dropdown-toggle {
                    background-color: #ffffff;
                    border: 1.5px solid #0A2540;
                    color: #0A2540;
                    border-radius: 24px !important;
                    min-width: 120px;
                }
                .account-dropdown .dropdown-toggle:hover {
                    background-color: rgba(13, 110, 253, 0.12);
                    color: #0D6EFD;
                }

                /* Dropdown Card Premium Restyle */
                .premium-dropdown {
                    background: rgba(255, 255, 255, 0.95) !important;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(10, 37, 64, 0.05) !important;
                    border-radius: 8px !important; /* Controlled layout matching buttons */
                    padding: 8px;
                    box-shadow: 0 10px 30px rgba(10, 37, 64, 0.08) !important;
                }
                .premium-dropdown .dropdown-item {
                    font-weight: 500;
                    font-size: 14px;
                    color: #0A2540;
                    border-radius: 6px;
                    transition: all 0.2s ease;
                }
                .premium-dropdown .dropdown-item:hover {
                    background-color: rgba(13, 110, 253, 0.08) !important;
                    color: #0D6EFD !important;
                    transform: translateX(4px);
                }

                /* Navbar Utility Buttons with Sharp Geometry Rules */
                .btn-nav-outline {
                    border: 1.5px solid #0A2540;
                    color: #0A2540;
                    background: #ffffff;
                    border-radius: 24px !important;
                    transition: all 0.3s ease;
                }
                .btn-nav-outline:hover {
                    background: rgba(10, 37, 64, 0.04);
                    color: #0A2540;
                }
                .btn-nav-primary {
                    background-color: #0A2540;
                    color: white;
                    border: 1.5px solid #0A2540;
                    border-radius: 24px !important;
                    transition: all 0.3s ease;
                }
                .btn-nav-primary:hover {
                    background-color: #0D6EFD;
                    border-color: #0D6EFD;
                    color: white;
                    box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
                }

                @media (min-width: 992px) {
                    .nav-item.dropdown:hover .dropdown-menu {
                        display: block;
                        margin-top: 8px;
                        opacity: 1;
                        visibility: visible;
                    }
                    .dropdown-menu {
                        display: block;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        transform: translateY(10px);
                    }
                    .nav-item.dropdown:hover .dropdown-menu {
                        transform: translateY(0);
                    }
                }

                .animate-fade-in { animation: fadeIn 0.2s ease-in; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

                /* ==========================================================================
                   REST OF THE COMPONENT BRAND STYLES
                   ========================================================================== */
                .premium-hero-static { 
                    position: relative; 
                    min-height: 100vh; 
                    background-image: url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }
                .hero-overlay { position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)); z-index: 1; }
                .z-3 { z-index: 3; }
                .hero-title { font-size: clamp(2.5rem, 8vw, 4.5rem); letter-spacing: -2px; line-height: 1.1; }
                .text-gradient-orange { background: linear-gradient(to right, #0D6EFD, #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .badge-premium { background: rgba(13, 110, 253, 0.1); border: 1px solid #0D6EFD; color: #0D6EFD; padding: 6px 16px; border-radius: 50px; font-weight: 800; font-size: 12px; letter-spacing: 1px; }

                .stats-bar { background: linear-gradient(90deg, #032d5c 0%, #01162e 100%); }
                .one-partner-section { background: radial-gradient(circle at center, #014c8e 0%, #001a35 100%); }
                .partner-icon-box { width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; }
                
                .brand-logo { max-height: 35px; width: auto !important; object-fit: contain; filter: grayscale(1) opacity(0.6); transition: all 0.3s ease; }
                .brand-logo:hover { filter: grayscale(0) opacity(1); }

                .oem-partnerships-section { 
                    background-image: url('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=1600&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .oem-bg-overlay { position: absolute; inset: 0; background: rgba(10, 22, 34, 0.9); }
                .oem-logo { max-height: 25px; filter: brightness(0) invert(1); opacity: 0.7; }
                
                .lifecycle-process-section { background: radial-gradient(circle at 30% 50%, #003366 0%, #001a35 100%); }
                .lifecycle-infographic { 
                    width: 400px; 
                    height: 400px; 
                    position: relative; 
                    border-radius: 50%; 
                    border: 1px solid rgba(255,255,255,0.1); 
                    background: rgba(255,255,255,0.02); 
                    max-width: 100%;
                }
                .center-orb { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 110px; height: 110px; background: #004c8e; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(0,212,255,0.3); z-index: 5; }
                .orbit-item { position: absolute; width: 60px; height: 60px; background: #002b4d; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translate(-50%, -50%); border: 1px solid rgba(255,255,255,0.2); box-sizing: border-box; }
                .orbit-item span { position: absolute; width: 140px; font-size: 11px; font-weight: bold; text-align: center; top: 65px; opacity: 0.8; }
                .pos-top { top: 0%; left: 50%; } .pos-right { top: 35%; left: 100%; } .pos-bottom-right { top: 85%; left: 85%; } .pos-bottom-left { top: 85%; left: 15%; } .pos-left { top: 35%; left: 0%; }
                .inner-circle-border { position: absolute; inset: 15%; border: 2px dashed rgba(255,255,255,0.1); border-radius: 50%; }

                .footer-extended { background-color: #0A1622; color: white; }
                .social-icon-circle { width: 24px; height: 24px; background: rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; }
                .btn-secondary-gray { background-color: #8E959F; color: white; border: none; }
                .btn-brand-primary { background-color: #0A2540; color: white; border-radius: 100px; }
                .btn-main-primary { background: #0D6EFD; color: white; border: none; padding: 18px 45px; border-radius: 100px; font-weight: 800; position: relative; overflow: hidden; }
                .btn-outline-white { border: 1px solid white; color: white; padding: 18px 45px; border-radius: 100px; background: transparent; font-weight: 600; }
                .btn-info-cyan-outline { border: 1px solid #00d4ff; color: #00d4ff; background: transparent; }
                .letter-spacing-2 { letter-spacing: 2px; }
                .z-1 { z-index: 1; }
                .shimmer-effect::after { content: ''; position: absolute; inset: -50%; background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent); transform: rotate(45deg); animation: shm 4s infinite; }
                @keyframes shm { 0% { transform: translateX(-100%) rotate(45deg); } 100% { transform: translateX(100%) rotate(45deg); } }
            `}</style>
        </div>
    );
};

export default Home;