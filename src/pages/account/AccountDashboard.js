import React from "react";
import SubHeader from "../../components/sub_header/SubHeader";
import { Link } from 'react-router-dom';
function AccountDashboard(){
    return(
        <div className="page-wrapper">
			<div className="page-content">
                <SubHeader name="Dashboard"/>
                <section className="py-4">
					<div className="container">
						<h3 className="d-none">Account</h3>
						<div className="card">
							<div className="card-body">
								<div className="row">
									<div className="col-lg-4">
										<div className="card shadow-none mb-3 mb-lg-0 border rounded-0">
											<div className="card-body">
												<div className="list-group list-group-flush">	
                                                    <Link to="/account-dashboard" className="list-group-item active d-flex justify-content-between align-items-center">Dashboard <i class='bx bx-tachometer fs-5'></i></Link>
													<Link to="/account-order" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i class='bx bx-cart-alt fs-5'></i></Link>
													<Link to="/account-details" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i class='bx bx-user-circle fs-5'></i></Link>
													<Link to="/" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i class='bx bx-log-out fs-5'></i></Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-8">
										<div className="card shadow-none mb-0">
											<div className="card-body">
												<p>Hello <strong>user</strong> (not <strong>user?</strong>  <Link to="/">Logout</Link>)</p>
												<p>From your account dashboard you can view your Recent Orders, manage your shipping and billing addesses and edit your password and account details</p>
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

    )
}

export default AccountDashboard;