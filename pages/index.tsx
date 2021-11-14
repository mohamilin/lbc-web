/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import type { NextPage } from 'next';

const Home: NextPage = function () {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark default">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/logo.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#layouts">Layouts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">Faq</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn btn-primary my-1 me-2" href="#">Buy now</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-secondary my-1" href="#">Demo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-5">
              <h5 className="mt-3 text-white-50 wow fadeInLeft" data-wow-delay="0.2s">Bootstrap 5 Admin Template</h5>
              <h2 className="mt-sm-3 mb-sm-4 text-white wow fadeInLeft" data-wow-delay="0.4s">
                A Premium Dashboard + UI
                KIT

              </h2>
              <p className="mb-sm-4 wow fadeInLeft" data-wow-delay="0.6s">
                Dashboard-kit builds in a way to save your
                time while
                <br />
                {' '}
                designing your backend project.

              </p>
              <div className="my-4 wow fadeInLeft" data-wow-delay="0.8s">
                <a href="#layouts" className="btn btn-primary me-2">
                  <i className="far fa-eye me-2" />
                  Demos
                </a>
                <a href="https://1.envato.market/DM91j" className="btn btn-success" target="_blank" rel="noreferrer">
                  <i
                    className="fas fa-shopping-cart me-2"
                  />
                  Buy now

                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <img
                src="/assets/front/header-mokeup.jpg"
                alt="Dashboard-kit Admin Template"
                className="img-fluid header-img wow fadeInRight"
                data-wow-delay="0.2s"
              />
            </div>
          </div>
        </div>
      </header>
      <section id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-9 title">
              <i className="material-icons-two-tone">card_giftcard</i>
              <h2>
                Our Admins
                {' '}
                <span>Awasome Features</span>
              </h2>
              <p className="m-0">
                Quickly create your stunning backend project with Dashboard-kit, it is made for
                everyone, no matter you are a novice developer, designer, project manager/owner.

              </p>
            </div>
          </div>
          <div className="row g-0 feature-row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-block wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-icon"><i className="material-icons-two-tone">chrome_reader_mode</i></div>
                <h4>200+ Pages</h4>
                <p>
                  Cover almost all possible page which required for any backend application.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-block wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-icon"><i className="material-icons-two-tone">palette</i></div>
                <h4>Professional Design</h4>
                <p>Dashboard-kit design gives your user better UI experience throught out the project.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-block wow fadeInUp" data-wow-delay="0.6s">
                <div className="feature-icon"><i className="material-icons-two-tone">shutter_speed</i></div>
                <h4>High Performance</h4>
                <p>High optimized tested code which gives faster loading experience.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-block wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-icon"><i className="material-icons-two-tone">memory</i></div>
                <h4>Regular Updates</h4>
                <p>Promise to always updated with latest tech. Check out future roadmap.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-block wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-icon"><i className="material-icons-two-tone">support</i></div>
                <h4>Support</h4>
                <p>Support first. Low turn around time to get resolve your techincal query.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-block wow fadeInUp" data-wow-delay="0.6s">
                <div className="feature-icon"><i className="material-icons-two-tone">ondemand_video</i></div>
                <h4>Video Tutorials</h4>
                <p>Installation, Configuration settings, How-to video tutorial series.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="layouts" className="theme-alt-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-9 title">
              <i className="material-icons-two-tone">devices_other</i>
              <h2>
                Our Best
                {' '}
                <span>Layouts</span>
                {' '}
                now in easy & Simple way
              </h2>
              <p className="m-0">
                Each Layout is identical to its way. We have a plan to release more layouts in future
                updates Quickly create your stunning backend project with Dashboard-kit

              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="layout-block wow fadeInUp" data-wow-delay="0.2s">
                <a href="#!" className="layout-img">
                  <img src="assets/front/Layout-1.png" alt="" className="img-fluid" />
                  <span className="overlay-action">
                    <i className="material-icons-two-tone">remove_red_eye</i>
                  </span>
                </a>
                <h4 className="m-0">Master Layout</h4>
                <p className="text-muted">Default Layout</p>
                <p>
                  Cover almost all possible page which required for any backend application.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layout-block wow fadeInUp" data-wow-delay="0.4s">
                <a href="#!" className="layout-img">
                  <img src="assets/front/Layout-2.png" alt="" className="img-fluid" />
                  <span className="overlay-action">
                    <i className="material-icons-two-tone">remove_red_eye</i>
                  </span>
                </a>
                <h4 className="m-0">Collapse</h4>
                <p className="text-muted">Collapse sidebar</p>
                <p>
                  Cover almost all possible page which required for any backend application.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layout-block wow fadeInUp" data-wow-delay="0.6s">
                <a href="#!" className="layout-img">
                  <img src="assets/front/Layout-3.png" alt="" className="img-fluid" />
                  <span className="overlay-action">
                    <i className="material-icons-two-tone">remove_red_eye</i>
                  </span>
                </a>
                <h4 className="m-0">Horizontal</h4>
                <p className="text-muted">Advance Horizontal Menu</p>
                <p>
                  Cover almost all possible page which required for any backend application.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layout-block wow fadeInUp" data-wow-delay="0.2s">
                <a href="#!" className="layout-img">
                  <img src="assets/front/Layout-4.png" alt="" className="img-fluid" />
                  <span className="overlay-action">
                    <i className="material-icons-two-tone">remove_red_eye</i>
                  </span>
                </a>
                <h4 className="m-0">Modern</h4>
                <p className="text-muted">Modern Look</p>
                <p>
                  Cover almost all possible page which required for any backend application.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="layout-block wow fadeInUp" data-wow-delay="0.4s">
                <a href="#!" className="layout-img">
                  <img src="assets/front/Layout-5.png" alt="" className="img-fluid" />
                  <span className="overlay-action">
                    <i className="material-icons-two-tone">remove_red_eye</i>
                  </span>
                </a>
                <h4 className="m-0">Tab</h4>
                <p className="text-muted">Tab style Sidebar</p>
                <p>
                  Cover almost all possible page which required for any backend application.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-sm-4">
            <button className="btn px-sm-5 btn-primary">Show All</button>
          </div>
        </div>
      </section>
      <section className="call-to-action">
        <div className="container">
          <div className="cta-block text-center text-md-start">
            <div className="row justify-content-center">
              <div className="col-md-auto">
                <i className="material-icons-two-tone">card_giftcard</i>
              </div>
              <div className="col-md-7 text-center text-md-start">
                <div className="st_cta_content st_cta_content_v2 st-text-md-center m-md-b-50">
                  <h2 className="">
                    Want trial version of
                    {' '}
                    <strong>Dashboard-kit</strong>
                    ?
                  </h2>
                  <p className=" mb-3 mb-sm-0">
                    Download free version of Dashboard-kit before make your purchase
                    decision.

                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center justify-content-md-end align-items-center">
                <a className="btn btn-primary px-sm-5" href="#">Download Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" className="theme-alt-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-9 title">
              <i className="material-icons-two-tone">mark_chat_unread</i>
              <h2>
                what our
                {' '}
                <span>client says</span>
                !
                {' '}
              </h2>
              <p className="m-0">
                Each Layout is identical to its way. We have a plan to release more layouts in future
                updates Quickly create your stunning backend project with Dashboard-kit

              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="row justify-content-center">
                  <div className="col-md-11 col-xl-10 col-xxl-9">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="testimonial-block wow fadeInUp" data-wow-delay="0.2s">
                              <div className="test-quote">
                                <i className="fas fa-quote-left" />
                              </div>
                              <h4 className="mb-sm-3">Code organization is very powerful</h4>
                              <p className="text-muted mb-sm-4">
                                Amazing template, the view is
                                wonderful the colors make a nice composition and the most
                                important the code organization is very powerful and clean,
                                <strong>
                                  easy to use
                                </strong>
                                every component, I
                                really love it... good Job for your team...
                              </p>
                              <h6 className="mb-0">Mr. Joseph William</h6>
                              <span className="text-muted">Sr. developer</span>
                              <div className="test-img">
                                <img
                                  src="assets/images/user/avatar-2.jpg"
                                  alt="user-image"
                                  className="user-avtar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="testimonial-block wow fadeInUp" data-wow-delay="0.4s">
                              <div className="test-quote">
                                <i className="fas fa-quote-left" />
                              </div>
                              <h4 className="mb-sm-3">FAR the best I have come across</h4>
                              <p className="text-muted mb-sm-4">
                                Amazing template, the view is
                                wonderful the colors make a nice composition and the most
                                important the code organization is very powerful and clean,
                                <strong>
                                  easy to use
                                </strong>
                                every component, I
                                really love it... good Job for your team...
                              </p>
                              <h6 className="mb-0">Mr. Joseph William</h6>
                              <span className="text-muted">Sr. developer</span>
                              <div className="test-img">
                                <img
                                  src="assets/images/user/avatar-1.jpg"
                                  alt="user-image"
                                  className="user-avtar"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="testimonial-block wow fadeInUp" data-wow-delay="0.2s">
                              <div className="test-quote">
                                <i className="fas fa-quote-left" />
                              </div>
                              <h4 className="mb-sm-3">No exceptions using this product</h4>
                              <p className="text-muted mb-sm-4">
                                Amazing template, the view is
                                wonderful the colors make a nice composition and the most
                                important the code organization is very powerful and clean,
                                <strong>
                                  easy to use
                                </strong>
                                every component, I
                                really love it... good Job for your team...
                              </p>
                              <h6 className="mb-0">Mr. Joseph William</h6>
                              <span className="text-muted">Sr. developer</span>
                              <div className="test-img">
                                <img
                                  src="assets/images/user/avatar-3.jpg"
                                  alt="user-image"
                                  className="user-avtar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="testimonial-block wow fadeInUp" data-wow-delay="0.4s">
                              <div className="test-quote">
                                <i className="fas fa-quote-left" />
                              </div>
                              <h4 className="mb-sm-3">Better support!</h4>
                              <p className="text-muted mb-sm-4">
                                Amazing template, the view is
                                wonderful the colors make a nice composition and the most
                                important the code organization is very powerful and clean,
                                <strong>
                                  easy to use
                                </strong>
                                every component, I
                                really love it... good Job for your team...
                              </p>
                              <h6 className="mb-0">Mr. Joseph William</h6>
                              <span className="text-muted">Sr. developer</span>
                              <div className="test-img">
                                <img
                                  src="assets/images/user/avatar-4.jpg"
                                  alt="user-image"
                                  className="user-avtar"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="testimonial-block">
                              <div className="test-quote">
                                <i className="fas fa-quote-left" />
                              </div>
                              <h4 className="mb-sm-3">Code organization is very powerful</h4>
                              <p className="text-muted mb-sm-4">
                                Amazing template, the view is
                                wonderful the colors make a nice composition and the most
                                important the code organization is very powerful and clean,
                                <strong>
                                  easy to use
                                </strong>
                                every component, I
                                really love it... good Job for your team...
                              </p>
                              <h6 className="mb-0">Mr. Joseph William</h6>
                              <span className="text-muted">Sr. developer</span>
                              <div className="test-img">
                                <img
                                  src="assets/images/user/avatar-2.jpg"
                                  alt="user-image"
                                  className="user-avtar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="testimonial-block">
                              <div className="test-quote">
                                <i className="fas fa-quote-left" />
                              </div>
                              <h4 className="mb-sm-3">Code organization is very powerful</h4>
                              <p className="text-muted mb-sm-4">
                                Amazing template, the view is
                                wonderful the colors make a nice composition and the most
                                important the code organization is very powerful and clean,
                                <strong>
                                  easy to use
                                </strong>
                                every component, I
                                really love it... good Job for your team...
                              </p>
                              <h6 className="mb-0">Mr. Joseph William</h6>
                              <span className="text-muted">Sr. developer</span>
                              <div className="test-img">
                                <img
                                  src="assets/images/user/avatar-5.jpg"
                                  alt="user-image"
                                  className="user-avtar"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators test-indicators">
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" />
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1" />
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2" />
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-9 title">
              <i className="material-icons-two-tone">monetization_on</i>
              <h2>
                our
                {' '}
                <span>Pricing Plans</span>
              </h2>
              <p className="m-0">
                Each Layout is identical to its way. We have a plan to release more layouts in future
                updates Quickly create your stunning backend project with Dashboard-kit

              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="price-block wow fadeInUp" data-wow-delay="0.2s">
                <div className="price-head">
                  <i className="material-icons-two-tone price-icon text-danger">card_giftcard</i>
                  <div className="h3">Free</div>
                </div>
                <div className="price-package">
                  <strong>
                    $00
                    <span>monthly</span>

                  </strong>
                </div>
                <ul className="list-unstyled price-list">
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Only 1 User uses
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    10 Projects for individuals
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    5GB of Storage + Unlimited Bandwitch
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Unlimited Data
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Fully Security Suite
                  </li>
                </ul>
                <button className="btn btn-primary "> Order Now </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="price-block active wow fadeInUp" data-wow-delay="0.4s">
                <div className="price-badge">
                  New
                </div>
                <div className="price-head">
                  <i className="material-icons-two-tone price-icon text-white">account_balance</i>
                  <div className="h3">Standard</div>
                </div>
                <div className="price-package">
                  <strong>
                    $100
                    <span>monthly</span>

                  </strong>
                </div>
                <ul className="list-unstyled price-list">
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Only 1 User uses
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    10 Projects for individuals
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    5GB of Storage + Unlimited Bandwitch
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Unlimited Data
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Fully Security Suite
                  </li>
                </ul>
                <button className="btn btn-light "> Order Now </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="price-block wow fadeInUp" data-wow-delay="0.6s">
                <div className="price-head">
                  <i className="material-icons-two-tone price-icon text-success">business</i>
                  <div className="h3">Premium</div>
                </div>
                <div className="price-package">
                  <strong>
                    $600
                    <span>monthly</span>

                  </strong>
                </div>
                <ul className="list-unstyled price-list">
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Only 1 User uses
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    10 Projects for individuals
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    5GB of Storage + Unlimited Bandwitch
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Unlimited Data
                  </li>
                  <li>
                    <i data-feather="check-circle" />
                    {' '}
                    Fully Security Suite
                  </li>
                </ul>
                <button className="btn btn-primary "> Order Now </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="FAQ theme-alt-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-9 title">
              <i className="material-icons-two-tone">help</i>
              <h2>
                Frequently Asked
                {' '}
                <span>Questions</span>
              </h2>
              <p className="m-0">
                Each Layout is identical to its way. We have a plan to release more layouts in future
                updates Quickly create your stunning backend project with Dashboard-kit

              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h5 className="">
                What is
                {' '}
                <u> Dashboard-kit</u>
                ?
              </h5>
              <p>
                Dashboard-kit is premium dashboard template comes with tons of layout options, widgets, ready to
                use
                pages which completely suitable for any simple/complex project.

              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <h5 className="">
                Why
                {' '}
                <u>choose</u>
                {' '}
                Dashboard-kit?
              </h5>
              <p>
                Dashboard-kit is made by Phoenixcodeds experience coders and designers. Well tested bug free
                code, easy
                to use flexible structure makes Dashboard-kit a really differ from other templates. We
                almost cover every possible plugins, components which helps you start immediately on your
                project.

              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <h5 className="">
                What about Item
                {' '}
                <u>Support</u>
                ?
              </h5>
              <p>
                6 month item support for any bugs, design issue in current version of template. We are not
                provide support for any custom work implementation.

              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <h5 className="">
                What is Support
                {' '}
                <u>Turnaround time</u>
                ?
              </h5>
              <p>
                When you comment or submit the ticket for support. Our team takes it seriously and respond it
                within a Half or Full day.

              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <h5 className="">
                Browser
                {' '}
                <u>Support?</u>
              </h5>
              <p className="mb-0">Well tested on IE 11, Edge, Chrome, Mozilla, Safari, Opera</p>
            </div>
            <div className="col-12">
              <h3 className="">
                Final Words -
                <u>Reason to choose Dashboard-kit</u>
                ?
              </h3>
              <p>
                Flexible code structure, easy helper guide (i.e. just copy/paste code with single click UI kit),
                vast amount of components and layouts to choose, live customizer for your easy to choose layout
                setting options make Dashboard-kit a
                really suitable for any level of developers.

              </p>
            </div>
            <div className="col-12">
              <div className="text-center mt-sm-5">
                <h5>Still have any Question?</h5>
                <div className="btn btn-primary">
                  <i data-feather="mail" />
                  {' '}
                  Email us
                </div>
                <div className="btn btn-secondary">
                  <i data-feather="message-square" />
                  {' '}
                  Visite Forum
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-9 title">
            <i className="material-icons-two-tone">map</i>
            <h2>Contact <span>with us</span></h2>
            <p className="m-0">Each Layout is identical to its way. We have a plan to release more layouts in future
                updates Quickly create your stunning backend project with Dashboard-kit</p>
          </div>
        </div>

        <div className="row">
        <div className="col-sm-4">
          <div className="h4 mt-3 mb-4"><i className="material-icons-two-tone text-primary">message</i> Say Hello
          </div>
          <form className="">
          <div className="row">
            <div className="col-sm-6">
                <div className="form-group">
                    <label className="form-label">Enter Your Name</label>
                    <input type="text" name="first_name" className="form-control"/>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="form-group">
                    <label className="form-label">Enter Your Email</label>
                    <input type="email" name="contact_email" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label className="form-label">Enter Message</label>
                        <textarea name="contact_message" className="form-control" rows={5}></textarea>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-primary"><i data-feather="mail"></i> Send</button>
                    </div>
                </div>
            </div>
          </div>           
          </form>
          </div>
          <div className="col-sm-3">
                    
            <div className="h4 mt-3 mb-2"><i className="material-icons-two-tone text-primary">phone_iphone</i> Phone
            </div>
                    <ul className="list-unstyled p-l-30">
                        <li className="my-1">+91 0123456789</li>
                        <li className="my-1">+91 0123456789</li>
                    </ul>
                    <div className="h4 mt-3 mb-2"><i className="material-icons-two-tone text-primary">pin_drop</i> Address</div>
                    <address className="p-l-30">
                        638 Gateway Road,<br/>
                        Portland,<br/>
                        97217
                    </address>
                    
                    <div className="h4 mt-3 mb-2"><i className="material-icons-two-tone text-primary">email</i> Email</div>
                    <a className="link-secondary p-l-30" href="mailto:dummy@mail.com">dummy@mail.com</a>
          </div>

          <div className="col-sm-5">
            <iframe style={{height:"300px", width:"100%"}}>
          
            </iframe>
                </div>
        </div>
      </div>
      </section>
      <div className="footer-top" />
      <footer className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#"><img src="assets/images/logo.svg" alt="logo" /></a>
                </li>
                <li className="mt-3 mb-3">
                  <p>
                    Easy - Flexible - Always updated - makes Dashboard-kit a really powerful backend
                    template.

                  </p>
                </li>
                <li className="mt-3 mb-3 d-flex align-items-center">
                  <div className="fas fa-headset me-2" />
                  <a
                    className="d-inline-block"
                    href="http://phoenixcoded.ticksy.com"
                  >
                    Support by Ticksy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h5>Useful links</h5>
              <ul className="list-unstyled">
                <li className="mt-2 mb-2"><a href="#" target="_blank">Rate Dashboard-kit</a></li>
                <li className="mt-2 mb-2"><a href="#" target="_blank">Collection</a></li>
                <li className="mt-2 mb-2">
                  <a href="#" target="_blank">Themeforest Profile</a>
                  {' '}
                </li>
                <li className="mt-2 mb-2"><a href="#" target="_blank">Portfolio</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h5>Trending Items</h5>
              <ul className="list-unstyled">
                <li className="mt-2 mb-2">
                  <a href="#" target="_blank" className="d-flex align-items-center">
                    Able pro
                    v7.0
                    <span className="badge bg-danger ms-2">Hot</span>
                  </a>
                  {' '}

                </li>
                <li className="mt-2 mb-2">
                  <a href="#" target="_blank" className="d-flex align-items-center">
                    Dash
                    Able
                    <span className="badge bg-primary ms-2">New</span>
                  </a>
                  {' '}

                </li>
                <li className="mt-2 mb-2"><a href="#" target="_blank">Flat Able</a></li>
                <li className="mt-2 mb-2">
                  <a href="#" target="_blank">Mega Able</a>
                  {' '}
                </li>
              </ul>
              <h5 className="mt-4">Follow Us</h5>
              <ul className="list-inline list-unstyled sos-icon">
                <li><a href="#" target="_blank" className="btn-facebook"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" target="_blank" className="btn-twitter"><i className="fab fa-twitter" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="container b-footer">
          <p>
            © 2020 phoenixcoded. Exclusively on
            {' '}
            <a
              href="https://1.envato.market/DM91j"
              target="_blank"
              rel="noreferrer"
            >
              Themeforest
            </a>

          </p>
          <span className="bottom-tag">Phoenixcoded</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
