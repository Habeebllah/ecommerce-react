import React, { Component } from "react";
import SubHeader from "../../components/sub_header/SubHeader";
import axios from 'axios';
import { Link } from "react-router-dom";
class SignUp extends Component{
	handleSubmit = e => {
		e.preventDefault();
		const data = {
			first_name: this.first_name,
			last_name: this.last_name,
			email: this.email,
			password: this.password,
			confirm_password: this.confirm_password
		}
		axios.post("https://jsonplaceholder.typicode.com/posts", data).then(
			res => {
				console.log(res)
			}
		).catch(
			err => {
				console.log(err)
			}
		)
	}
    render(){
	return(
        <div className="page-wrapper">
			<div className="page-content">
                <SubHeader name="Register"/>
                <section className="py-0 py-lg-5">
					<div className="container">
						<div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
							<div className="row row-cols-1 row-cols-lg-1 row-cols-xl-2">
								<div className="col mx-auto mt-5">
									<div className="card mb-0">
										<div className="card-body">
											<div className="border p-4 rounded">
												<div className="text-center">
													<h3 className="">Sign Up</h3>
													<p>Already have an account? <Link to="/sign-in">Sign in</Link>
													</p>
												</div>
												
												<div className="form-body">
													<form className="row g-3">
														<div className="col-sm-6">
															<label for="inputFirstName" className="form-label">First Name</label>
															<input type="text" className="form-control" id="inputFirstName" placeholder="First name" onChange={e => this.first_name = e.target.value}/>
														</div>
														<div className="col-sm-6">
															<label for="inputLastName" className="form-label">Last Name</label>
															<input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
														</div>
														<div className="col-12">
															<label for="inputEmailAddress" className="form-label">Email Address</label>
															<input type="email" className="form-control" id="inputEmailAddress" placeholder="example@user.com" onChange={e => this.last_name = e.target.value}/>
														</div>
														<div className="col-12">
															<label for="inputChoosePassword" className="form-label">Password</label>
																<input type="password" className="form-control" placeholder="Enter Password" onChange={e => this.password = e.target.value}/> 
															
														</div>
														<div className="col-12">
															<label for="inputChoosePassword" className="form-label">Confirm Password</label>
																<input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirm_password = e.target.value}/> 
															
														</div>
														
														
														<div className="col-12">
															<div className="d-grid">
															<Link to="/sign-in">
																<button type="submit" className="btn btn-dark"><i class='bx bx-user'></i>Sign up</button></Link>
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

    )}
}

export default SignUp;