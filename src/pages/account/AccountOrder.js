import React from "react";
import { Link } from 'react-router-dom';
import SubHeader from "../../components/sub_header/SubHeader";
function AccountOrder(){
    return(
        <div className="page-wrapper">
      <div className="page-content">
		  <SubHeader name="Account Order"/>
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
                                                    <Link to="/account-dashboard" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className='bx bx-tachometer fs-5'></i></Link>
													<Link to="/account-order" className="list-group-item d-flex active justify-content-between align-items-center ">Orders <i className='bx bx-cart-alt fs-5'></i></Link>
													<Link to="/account-details" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i className='bx bx-user-circle fs-5'></i></Link>
													<Link to="/" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i className='bx bx-log-out fs-5'></i></Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-8">
										<div className="card shadow-none mb-0">
											<div className="card-body">
												<div className="table-responsive">
													<table className="table">
														<thead className="table-light">
															<tr>
																<th>Order</th>
																<th>Date</th>
																<th>Status</th>
																<th>Total</th>
																<th>Actions</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>#800</td>
																<td>Novermber 15, 2021</td>
																<td>
																	<div className="badge rounded-pill bg-success w-100">Completed</div>
																</td>
																<td>N100.00 for 1 item</td>
																<td>
																	<div className="d-flex gap-2">	<a href="javascript:;" className="btn btn-dark btn-sm rounded-0">View</a>
																	</div>
																</td>
															</tr>
															
														</tbody>
													</table>
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

    )
}

export default AccountOrder;