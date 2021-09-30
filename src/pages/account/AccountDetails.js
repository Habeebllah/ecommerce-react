import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../components/sub_header/SubHeader";
function AccountDetails() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SubHeader name="Account Details"/>
        <section className="py-4">
          <div className="container">
            <h3 className="d-none">Account</h3>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card shadow-none mb-3 mb-lg-0 border">
                      <div className="card-body">
                      <div className="list-group list-group-flush">	
                                                    <Link to="/account-dashboard" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i class='bx bx-tachometer fs-5'></i></Link>
													<Link to="/account-order" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i class='bx bx-cart-alt fs-5'></i></Link>
													<Link to="/account-details" className="list-group-item d-flex active justify-content-between align-items-center">Account Details <i class='bx bx-user-circle fs-5'></i></Link>
													<Link to="/" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i class='bx bx-log-out fs-5'></i></Link>
												</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card shadow-none mb-0 border">
                      <div className="card-body">
                        <form className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Habeeb"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Lasisi"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Display Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Habeebllah"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Email address</label>
                            <input
                              type="text"
                              className="form-control"
                              value="lasisihabeeb67@gmail.com"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Current Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value="lifeisGood"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">New Password</label>
                            <input
                              type="text"
                              className="form-control"
                              value="lifeisGood"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Confirm New Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value="lifeisGood"
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="button"
                              className="btn btn-dark btn-ecomm"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
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

export default AccountDetails;
