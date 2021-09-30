import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../components/sub_header/SubHeader";
function Contact() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SubHeader name="Contact" />
        <section className="py-4">
          <div className="container">
            <h3 className="d-none">Google Map</h3>
            <div className="contact-map p-3 bg-light rounded-0 shadow-none">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126678.17629394858!2d3.2963686638558953!3d7.161444985244263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4bf6995dfc7f%3A0x6734fcf62892478d!2sAbeokuta!5e0!3m2!1sen!2sng!4v1632572269127!5m2!1sen!2sng"
                className="w-100"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="p-3 bg-light">
                  <form>
                    <div className="form-body">
                      <h6 className="mb-0 text-uppercase">Drop us a line</h6>
                      <div className="my-3 border-bottom"></div>
                      <div className="mb-3">
                        <label className="form-label">Enter Your Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Enter Email</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          rows="4"
                          cols="4"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <button className="btn btn-dark btn-ecomm">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-3 bg-light">
                  <div className="address mb-3">
                    <h6 className="mb-0 text-uppercase">Address</h6>
                    <p className="mb-0 font-12">
                      37, Tejumola Estate, Abeokuta, Ogun State
                    </p>
                  </div>
                  <div className="phone mb-3">
                    <h6 className="mb-0 text-uppercase">Phone</h6>
                    <p className="mb-0 font-13">Mobile : +234 91-26906902</p>
                  </div>
                  <div className="email mb-3">
                    <h6 className="mb-0 text-uppercase">Email</h6>
                    <p className="mb-0 font-13">lasisihabeeb67@gmail.com</p>
                  </div>
                  <div className="working-days mb-3">
                    <h6 className="mb-0 text-uppercase">WORKING DAYS</h6>
                    <p className="mb-0 font-13">Mon - FRI / 9:30 AM - 6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
