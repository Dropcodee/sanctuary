import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserNav from "../layout/usernav";
class UserAdmin extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <nav className="custom__nav green">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <Link
                  to="/hyvenav"
                  data-target="sidenav-1"
                  className="Left sidenav-trigger show-on-medium-and-up"
                >
                  <i className="material-icons icon__size">menu</i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Page Layout here */}
        <div className="row">
          <div className="col s3">
            <UserNav />
          </div>
          <div className="col s9">
            <div className="container">
              <header>
                <h5 className="center-align">Attendance Update.</h5>
                <div className="divider" />
              </header>
              <div className="row">
                <div className="col s12 m4 l4">
                  <div className="card ">
                    <div className="card-content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias minus explicabo labore, aliquam ad
                        dignissimos placeat, tempore voluptates laborum voluptas
                        rem et delectus at expedita ducimus nemo reiciendis
                        consectetur. Non?
                      </p>
                    </div>
                    <div className="card-action">
                      <h6>Attendance for the week</h6>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="card">
                    <div className="card-content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias minus explicabo labore, aliquam ad
                        dignissimos placeat, tempore voluptates laborum voluptas
                        rem et delectus at expedita ducimus nemo reiciendis
                        consectetur. Non?
                      </p>
                    </div>
                    <div className="card-action">
                      <h6>Attendance for the Month</h6>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="card">
                    <div className="card-content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias minus explicabo labore, aliquam ad
                        dignissimos placeat, tempore voluptates laborum voluptas
                        rem et delectus at expedita ducimus nemo reiciendis
                        consectetur. Non?
                      </p>
                    </div>
                    <div className="card-action">
                      <h6>Attendance for the Semester</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserAdmin;
