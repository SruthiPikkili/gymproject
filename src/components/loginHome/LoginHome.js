import React from 'react';
// import About from './aboutUs/About';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import './LoginHome.css';

function LoginHome() {
  return (
    <div className='bg-dark-subtle'>
      {/* <h1>home</h1> */}


      <div className='bgimg1' >
        <h1 className='text-light bmilink'>TO CHECK YOUR BODY MASS INDEX <Link className='ps-3' to='/bmicalculator'>CLICK HERE</Link></h1>
      </div>
      <div className='secdiv bg-dark-subtle'>

        <div>

          <div className='secdiv'>
            <div className='card hourcard'>
              <div className='card-body'>
                <h2 className='card-title fw-bold'>Opening hours</h2>
                <h3>Monday to Saturday</h3>
                <h5>Morning: 5:00 AM to 10:00 AM</h5>
                <h5>Evening: 6:00 PM to 10:00 PM</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='me-5 pe-5'>

          <h1 className='text-dark fw-bold pb-4 ps-5'>THE BODY ACHIEVES</h1>
          <h1 className='text-dark fw-bold pb-4 ps-5'>WHAT THE MIND</h1>
          <h1 className='text-dark fw-bold pb-5 ps-5'>BELIEVES</h1>
        </div>
        {/* <div>

          <div className='secdiv'>
            <div className='card ms-5' style={{ width: "25rem" }}>
              <div className='card-body'>
                <h2 className='card-title fw-bold'>Opening hours</h2>
                <h3>Monday to Saturday</h3>
                <h5>Morning: 5:00 AM to 10:00 AM</h5>
                <h5>Evening: 6:00 PM to 10:00 PM</h5>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className=' bg-dark-subtle serv'>

        <h1 className='text-dark fw-bold pb-4 ps-5 service'>OUR SERVICES</h1>


      </div>

      <div className='thirddiv bg-dark-subtle pb-5 ps-5'>


        <div className='cardE'>


          <div className='card ms-5 mb-3 ps-3 ' style={{ width: "14rem" }}>
            <div className='card-body'>
              <h5 className='card-title fw-bold ps-3 pe-0 '>EXPRESS CAFE</h5>


            </div>
          </div>

          <div className='card ms-5 mb-3 ps-3 me-5' style={{ width: "14rem" }}>
            <div className='card-body'>

              <h5 className='card-title fw-bold ps-3 pe-0'>MEMBERSHIP</h5>

            </div>
          </div>

          <div className='card ms-5 mb-3 ps-3 me-5' style={{ width: "14rem" }}>
            <div className='card-body'>

              <h5 className='card-title fw-bold ps-3 pe-0'>CORPORATE WELLNESS</h5>
            </div>
          </div>

        </div>

        <div className='cardE'>


          <div className='card ms-5 mb-3 ps-3 me-5' style={{ width: "14rem" }}>
            <div className='card-body'>
              <h5 className='card-title fw-bold mb-2 ps-3 pe-0'>WELLNESS & NUTRITION</h5>

            </div>
          </div>

          <div className='card ms-5 mb-3 ps-3 me-5' style={{ width: "14rem" }}>
            <div className='card-body'>

              <h5 className='card-title fw-bold ps-3 pe-0'>GROUP FITNESS</h5>

            </div>
          </div>

          <div className='card ms-5 mb-3 ps-3 me-5' style={{ width: "14rem" }}>
            <div className='card-body'>

              <h5 className='card-title fw-bold ps-3 pe-0'>WORK OUT</h5>
            </div>
          </div>

        </div>

      </div>



      <div className='bg-dark'>
        <Footer />
      </div>
    </div>
  );
}

export default LoginHome;
