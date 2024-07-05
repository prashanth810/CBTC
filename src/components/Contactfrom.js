import React from "react";
import Icons from "./Icons";
// import Footericons from "./Footericons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contactform = () => {
  return (
    <div>
      <div className="contact_form">
        <div className="container-fluid">
          <div className="container">
            <div className="row contact_headings_row">
              <div className="col-md-6 colsm-12 col-lg-6 ">
                <div className="contact_headings">
                  <h2 className="fs-1 py-5">
                    {/* Contact <span style={{ color: "#0ef" }}>Me</span> */}
                  </h2>
                </div>
                <div className="contactform_body pt-4">
                  <h2 className="text-justify fs-3 py-3">
                    Let's Wprk Together
                  </h2>
                  <p className="text-justify">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>

                  <div className="d-flex py-4">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ color: "#63E6BE" }}
                      />
                    </div>
                    <div className="icon px-2">
                      prashanthuppari1999@gmail.com
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        style={{ color: "#63E6BE" }}
                      />
                    </div>
                    <div className="icon px-2"> 8106124493 </div>
                  </div>
                  <div className="text-start py-4">{/* <Footericons /> */}</div>
                </div>
              </div>
              <div className="col-md-6 colsm-12 col-lg-6">
                <div className="contact_headings">
                  <h2 className="fs-1 py-5">
                    Contact
                    <span className="me_about" style={{ color: "#0ef" }}>
                      Me
                    </span>
                  </h2>
                </div>
                <div className="col-md-6 contactsecondhalf">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="contactform_inputs"
                  />
                </div>
                <div className="col-md-6 my-3 contactsecondhalf">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="contactform_inputs"
                  />
                </div>

                <div className="col-md-6 my-3 contactsecondhalf">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="contactform_inputs"
                  />
                </div>
                <div className="col-md-6 my-3 contactsecondhalf">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="contactform_inputs"
                  />
                </div>
                <div className="contactform_textarea contactsecondhalf">
                  <textarea
                    className="textarea_contact"
                    rows="6"
                    placeholder="Your Message"
                  />
                </div>
                <div className="contactform_btn">
                  <button className="contact_btn"> Send Message </button>
                  {/* <Footericons /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
