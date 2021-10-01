import React from "react";
import SubHeader from "../../components/sub_header/SubHeader";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SubHeader name="Sign In" />
        <section className="">
          <div className="container">
            <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
              <div className="row row-cols-1 row-cols-xl-2">
                <div className="col mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <div className="border p-4 rounded">
                        <div className="text-center">
                          <h3 className="">Sign in</h3>
                          <p>
                            Don't have an account yet?{" "}
                            <Link to="/sign-up">
                              Sign up here
                            </Link>
                          </p>
                        </div>
                        
                        <div className="form-body">
                          <form className="row g-3">
                            <div className="col-12" >
                              <label
                                for="inputEmailAddress"
                                className="form-label"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmailAddress"
                                placeholder="Email Address"
                              />
                            </div>
                            <div className="col-12">
                              <label
                                for="inputChoosePassword"
                                className="form-label"
                              >
                                Enter Password
                              </label>
                              
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Enter Password"
                                />
                            </div>
                            <div className="col-md-6">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  
                                />
                                <label
                                  className="form-check-label"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 text-end">
                              {" "}
                              <span>
                                Forgot Password ?
                              </span>
                            </div>
                            <div className="col-12">
                              <div className="d-grid">
                              <Link to="/account-dashboard" style={{color:"white", textDecoration:"none"}}>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="bx bxs-lock-open"></i>Sign in
                                </button>
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
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

export default SignIn;
