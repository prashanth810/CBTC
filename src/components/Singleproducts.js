import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Ecommerce.css";

const Singleproducts = () => {
  const [singleproduct, SetSingleproducts] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((resu) => {
        SetSingleproducts(resu);
      });
  }, []);

  console.log(singleproduct);
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  if (singleproduct == null) {
    return <p> Loading... </p>;
  }
  return (
    <div>
      <div className="main">
        <div style={{ backgroundColor: "#081c29" }}>
          <nav className="navbar navbar-expand-lg nav-barlogo">
            <div
              className="container container_nav"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <a
                className="animate__animated animate__bounceInLeft animate__slower navbar-brand text-white"
                href="#"
              >
                <img
                  src="https://cdn-icons-png.freepik.com/512/1351/1351514.png"
                  width="80px"
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="animate__animated animate__lightSpeedInRight animate__slower navbar-nav ms-auto">
                  <Link to="/todo-list" style={{ textDecoration: "none" }}>
                    <span
                      className="nav-link active text-white mx-4"
                      aria-current="page"
                    >
                      Todo-List
                    </span>
                  </Link>
                  <Link to="/portfolio_page" style={{ textDecoration: "none" }}>
                    <span className="nav-link text-white mx-4">Portfolio</span>
                  </Link>
                  <Link to="/ecommerce_page" style={{ textDecoration: "none" }}>
                    <span className="nav-link text-white mx-4">E-commerce</span>
                  </Link>
                  <Link to="/wether" style={{ textDecoration: "none" }}>
                    <span className="nav-link text-white mx-2">
                      Weather-Application
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 first_div">
              <div className="first_div_image">
                <img
                  src={singleproduct.thumbnail}
                  width="100%"
                  height="500px"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 second_div">
              <div className="second_heading">
                <h1>{singleproduct.title}</h1>
              </div>
              <div className="row mt-3">
                <div className="rating-stack d-flex my-1">
                  <div className="col-md-6">
                    <h5>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "orange" }}
                      />
                      {singleproduct.rating} rating
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <p className="fw-bold">Stock : {singleproduct.stock}</p>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-6">
                    <p>
                      Price : ₹
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {singleproduct.price}/-
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      DiscoutPrice :
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {singleproduct.discountPercentage} %
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-6">
                    <p>
                      Weight :
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {singleproduct.weight}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Category :
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {singleproduct.category}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="add-tocard w-100">
                    <button className="w-100 my-3 p-2"> Add To card </button>
                  </div>
                </div>
                <div className="row">
                  <div className="waranty col-md-6">
                    <p>
                      Waranty :
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {singleproduct.warrantyInformation}
                      </span>
                    </p>
                  </div>
                  <div className="returnpolicy col-md-6">
                    <p>
                      Return policy :
                      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {singleproduct.returnPolicy}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="delivery-time col-md-6">
                    <p>
                      Deligvery Time :
                      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {singleproduct.shippingInformation}
                      </span>
                    </p>
                  </div>
                  <div className="stack-availability col-md-6">
                    <p>
                      Stack Availability :
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {singleproduct.availabilityStatus}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="description">
                    <h3 className="mt-2 mb-3"> Description : </h3>
                    <p> {singleproduct.description}</p>
                  </div>
                </div>
                <div className="row rating_page">
                  <div className="rating_div col-md-6 w-100">
                    <div className="review_border">
                      <div className="p-1 mt-3 mb-1">
                        <h3> Reviews </h3>
                        <p> Filter By Rating </p>
                      </div>
                      {singleproduct.reviews.map((review, index) => (
                        <div className="rating_reviews d-flex w-100">
                          <div className="w-50">
                            <p className="">
                              <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "orange" }}
                              />
                              {review.rating}
                            </p>
                            <p style={{ fontWeight: "bold" }}>
                              {review.reviewerName}
                            </p>
                            <p>Date: {formatDate(review.date)}</p>
                          </div>

                          <div className="w-50">
                            <h5 key={index}>{singleproduct.title}</h5>
                            <p> {review.comment} </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproducts;
