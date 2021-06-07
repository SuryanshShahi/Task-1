import React, { useState } from "react";
import "./App.css";
import web from "./images/img.gif";
import Credential from "./Data/Credentials";
import { CircleProgress } from "react-gradient-progress";
import { Label, ProgressBar } from "react-bootstrap";
import { Line, Doughnut } from "react-chartjs-2";
import { NavLink } from "react-router-dom";

function Home() {
  const [user] = useState(Credential);

  return (
    <section className="section">
      <div className="px-2">
        <div className="row mr-1">
          <div className="col-sm-auto position-fixed bg-dark sticky-top pt-4 pl-2 gx-0">
            <NavLink
              title=""
              data-bs-toggle="tooltip"
              activeClassName="menu_active"
              className="nav-link text-white pb-5"
              to="/h"
            >
              <div className="fa fa-bank text-white fa-2x"></div>
            </NavLink>
            <ul className="nav flex-sm-column  mb-auto  text-center align-items-center ">
              <li className="nav-item">
                <NavLink
                  title="Home"
                  activeClassName="menu_active"
                  exact
                  className="nav-link active mb-4"
                  aria-current="page"
                  to="/"
                  data-bs-toggle="tooltip"
                >
                  <div className="fa fa-home fa-2x"></div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  title="Stats"
                  activeClassName="menu_active"
                  className="nav-link mb-4"
                  to="/a"
                  data-bs-toggle="tooltip"
                >
                  <div className="fa fa-bar-chart fa-2x"></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  title="Camera"
                  data-bs-toggle="tooltip"
                  activeClassName="menu_active"
                  className="nav-link mb-4"
                  to="/b"
                >
                  <div className="fa fa-camera fa-2x"></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="Files"
                  data-bs-toggle="tooltip"
                  activeClassName="menu_active"
                  className="nav-link mb-4"
                  to="/c"
                >
                  <div className="fa fa-folder fa-2x"></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="Contacts"
                  data-bs-toggle="tooltip"
                  activeClassName="menu_active"
                  className="nav-link mb-4"
                  to="/d"
                >
                  <div className="fa fa-address-book fa-2x"></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="Profile"
                  data-bs-toggle="tooltip"
                  activeClassName="menu_active"
                  className="nav-link mb-4"
                  to="/e"
                >
                  <div className="fa fa-user fa-2x"></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="Messeges"
                  data-bs-toggle="tooltip"
                  activeClassName="menu_active"
                  className="nav-link mb-4"
                  to="/f"
                >
                  <div className="fa fa-comment fa-2x"></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="Logout"
                  data-bs-toggle="tooltip"
                  activeClassName="menu_active"
                  className="nav-link mb-4"
                  to="/g"
                >
                  <div className="fa fa-sign-out fa-2x"></div>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-sm p-0 min-vh-100 ml-4 pl-5">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
              <div className="row">
                <div className="col-8">
                  <div className="container-fluid align-items-center d-flex">
                    <NavLink className="navbar-brand pl-5 py-3" to="/">
                      <h3 className="font-weight-bold">Dashboard</h3>
                      <h6 className="text-white font-weight-bold">
                        Monday,{" "}
                        <span className="text-info font-weight-bold">
                          &nbsp;02 July 2020
                        </span>
                      </h6>
                    </NavLink>
                  </div>
                </div>
                <div className="col-4">
                  <div className="container  px-5">
                    <div className="col-12">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center d-flex justify-content-end">
                        <li className="nav-item">
                          <div className="fa fa-bell fa-2x text-white pr-4"></div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <h5 className="text-white px-2">John Bayer</h5>
                          </a>
                          <ul
                            className="dropdown-menu bg-dark"
                            aria-labelledby="navbarDropdown"
                          >
                            <li>
                              <a className="dropdown-item bg-dark" href="#">
                                <div className="text-white px-2">
                                  &nbsp;View Profile
                                </div>
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item bg-dark" href="#">
                                <div className="fa fa-sign-out fa-lg text-white px-2">
                                  &nbsp;Logout
                                </div>
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item bg-dark" href="#">
                                <div className="fa fa-user-plus fa-sm text-white px-2">
                                  &nbsp;Add Account
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="row align-items-center text-white d-flex">
                      <div className="col-6">
                      <div className="btn btn-primary align-items-center text-white d-flex justify-content-center float-right"><h4 className="add font-weight-bold d-flex align-items-center mt-1 pt-1 px-1">+ Add</h4></div>
                      </div>
                      <div className="col-6">
                      <form className=" align-items-center text-white d-flex">
                        <div className="fa fa-search text-white border-0 fa-lg px-2 position-absolute text-white"></div>
                        <input
                          className=" form-control border-0 py-3 position-relative bg-dark"
                          type="search"
                          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for Application here"
                          aria-label="Search"
                        />
                      </form>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="pl-3 pr-1">
              <div className="row pt-3">
                <div className="col-9">
                  <div className="row">
                    <div className="col-4">
                      <div className="card py-4 rounded  border-0 text-white bg-dark">
                        <div className="container">
                          <div className="row">
                            <div className="col-6">
                              <h5>Total Application</h5>
                              <h4 className="font-weight-bold">7956</h4>
                              <div className="color">
                                <div className="fa fa-arrow-up fa-rotate-45 fa-lg font-weight-lighter pt-1"></div>
                                <h6 className="px-4 pt-1">+0.6%</h6>
                              </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <CircleProgress
                                percentage={70}
                                className="progress"
                                width="70"
                                primaryColor={["#cb7adb", "#cb7adb"]}
                                secondaryColor="#676568"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card py-4 rounded  border-0 text-white bg-primary">
                        <div className="container">
                          <div className="row ">
                            <div className="col-6 ">
                              <h5>Total Application</h5>
                              <h4 className="font-weight-bold">4658</h4>
                              <div className="">
                                <div className="fa fa-arrow-up fa-rotate-45 fa-lg font-weight-lighter text-white pt-1"></div>
                                <h6 className="px-4 pt-1">+0.6%</h6>
                              </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <CircleProgress
                                percentage={60}
                                className="progress"
                                width="70"
                                primaryColor={["white", "white"]}
                                secondaryColor="#16c0eb"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card py-4 rounded  border-0 text-white bg-dark">
                        <div className="container">
                          <div className="row">
                            <div className="col-6">
                              <h5>Total Application</h5>
                              <h4 className="font-weight-bold">1501</h4>
                              <div className="color1">
                                <div className="fa fa-arrow-up fa-rotate-45 fa-lg  font-weight-lighter pt-1"></div>
                                <h6 className="px-4 pt-1">+0.6%</h6>
                              </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <CircleProgress
                                percentage={60}
                                className="progress"
                                width="70"
                                primaryColor={["#f75363", "#f75363"]}
                                secondaryColor="#676568"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row pt-4">
                    <div className="col-8">
                      <div className="card rounded minH border-0 bg-dark text-white">
                        <nav className="navbar rounded navbar-expand-lg navbar-light bg-dark ">
                          <div className="container-fluid">
                            <a className="navbar-brand text-white">
                              Applications Received
                            </a>

                            <ul className="navbar-nav">
                              <li className="nav-item">
                                <a
                                  className="nav-link active text-white"
                                  aria-current="page"
                                  href="#"
                                >
                                  This Year
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                  This Week
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                  Today
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link disabled"
                                  href="#"
                                  tabindex="-1"
                                  aria-disabled="true"
                                >
                                  Disabled
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                        <div className="container">
                          <Line
                            className="chart"
                            data={{
                              labels: [
                                "jan",
                                "feb",
                                "mar",
                                "apr",
                                "may",
                                "jun",
                                "jul",
                              ],
                              datasets: [
                                {
                                  label: "sales",
                                  data: [1.5, 3, 3.2, 2.3, 4, 4.5, 3],
                                  borderColor: ["rgba(194, 44, 44, 0.87)"],
                                  backgroundColor: ["rgba(197, 60, 60, 0.596)"],
                                  pointBackgroundColor: [
                                    "rgba(194, 44, 44, 0.87)",
                                    "rgba(194, 44, 44, 0.87)",
                                    "rgba(194, 44, 44, 0.87)",
                                    "rgba(194, 44, 44, 0.87)",
                                    "white",
                                  ],

                                  fontColor: ["White"],
                                  fill: {
                                    target: "origin",
                                    above: "rgba(197, 60, 60, 0.596)",
                                  },
                                },
                                {
                                  label: "sales 2019",

                                  data: [3, 2.2, 2.7, 3.4, 2.5, 3.5, 3],
                                  borderColor: ["rgba(161, 223, 17, 0.568)"],
                                  backgroundColor: [
                                    "rgba(161, 223, 17, 0.568)",
                                  ],
                                  pointBackgroundColor: [
                                    "rgba(161, 223, 17, 0.568)",
                                    "rgba(161, 223, 17, 0.568)",
                                    "rgba(161, 223, 17, 0.568)",
                                    "rgba(161, 223, 17, 0.568)",
                                    "white",
                                  ],
                                },
                              ],
                              fontColor: "white",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card rounded  border-0 bg-dark text-white">
                        <div className="container-fluid">
                          <div className="row minH py-lg-4 pt-4">
                            <h5 className="font-weight-bold">
                              Total Application
                            </h5>
                            <div className="row py-4">
                              <div className="col-lg-3 col-12 py-lg-4 py-1">
                                <h6 className="float-left">
                                  <span className="bg-primary text-secondary px-1 mr-2">
                                    .
                                  </span>
                                  Application
                                </h6>
                              </div>
                              <div className="pb-1 col-9 col-md-9 col-sm-12 col-lg-9 py-lg-4">
                                <ProgressBar
                                  className="ml-4"
                                  variant="blue"
                                  now={40}
                                />
                              </div>
                              <div className="col-lg-3 col-12 py-lg-4 py-1">
                                <h6 className="float-left">
                                  <span className="bg-info text-info px-1 mr-2">
                                    .
                                  </span>
                                  Shortlisted
                                </h6>
                              </div>
                              <div className="pb-1 col-9 col-md-9 col-sm-12 col-lg-9 py-lg-4">
                                <ProgressBar
                                  className="ml-4"
                                  variant="info"
                                  now={80}
                                />
                              </div>

                              <div className="col-lg-3 col-12 py-lg-4 py-1">
                                <h6 className="float-left">
                                  <span className="bg-danger text-danger px-1 mr-2">
                                    .
                                  </span>
                                  Rejected
                                </h6>
                              </div>
                              <div className="pb-1 col-9 col-md-9 col-sm-12 col-lg-9 py-lg-4">
                                <ProgressBar
                                  className="ml-4"
                                  variant="danger"
                                  now={35}
                                />
                              </div>
                              <div className="col-lg-3 col-12 py-lg-4 py-1">
                                <h6 className="float-left">
                                  <span className="bg-white text-white px-1 mr-2">
                                    .
                                  </span>
                                  On hold
                                </h6>
                              </div>
                              <div className="pb-1 col-9 col-md-9 col-sm-12 col-lg-9 py-lg-4">
                                <ProgressBar
                                  className="ml-4"
                                  variant="white"
                                  now={10}
                                />
                              </div>
                              <div className="col-lg-3 col-12 py-lg-4 py-1">
                                <h6 className="float-left">
                                  <span className="bg-warning text-warning px-1 mr-2">
                                    .
                                  </span>
                                  Accepted
                                </h6>
                              </div>
                              <div className="pb-1 col-9 col-md-9 col-sm-12 col-lg-9 py-lg-4">
                                <ProgressBar
                                  className="ml-4"
                                  variant="warning"
                                  now={85}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row py-4 gy-5">
                    <div className="col-8">
                      <div className="card rounded  border-0 bg-dark text-white pt-2 py-4 lower">
                        <div className="container py-3">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="font-weight-bold">
                                Referals and Campaign Stats
                              </h5>
                            </div>
                            <div className="col-6">
                              <div className="row">
                                <div className=" justify-content-end d-flex align-items-center float-right">
                                  <div className="fa fa-location-arrow text-danger px-3 fa-2x"></div>
                                  <h5 className="text-danger font-weight-bold">
                                    40 Campaigns sent in Total<br></br>
                                    <span className="text-white font-weight-normal A">
                                      4 Campaigns sent in last month
                                    </span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row py-4 pb-5">
                            <div className="col-lg-3 col-md-6 pt-4 col-sm-6 col-6">
                              <div className="card rounded border-0 justify-content-center d-flex  cards pb-4 text-white text-center bg-dark">
                                <div className="card-header font-weight-bold py-3">
                                  <h5 className="font-weight-bold">
                                    {" "}
                                    User Reached
                                  </h5>
                                </div>
                                <h7 className="text-info font-weight-bold pt-4">
                                  +3.59%
                                </h7>
                                <h5 className="pt-3 font-weight-bold">7956</h5>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 pt-4 col-sm-6 col-6">
                              <div className="card rounded  border-0 justify-content-center d-flex cards pb-4 text-white text-center bg-dark">
                                <div className="card-header font-weight-bold py-3">
                                  <h5 className="font-weight-bold">
                                    {" "}
                                    Referals
                                  </h5>
                                </div>
                                <h7 className="text-info font-weight-bold pt-4">
                                  +3.59%
                                </h7>
                                <h5 className="pt-3 font-weight-bold">0662</h5>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 pt-4 col-sm-6 col-6">
                              <div className="card rounded  border-0 justify-content-center d-flex cards pb-4 text-white text-center bg-dark">
                                <div className="card-header font-weight-bold py-3">
                                  <h5 className="font-weight-bold"> Shares</h5>
                                </div>
                                <h7 className="text-info font-weight-bold pt-4">
                                  +3.59%
                                </h7>
                                <h5 className="pt-3 font-weight-bold">1478</h5>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 pt-4 col-sm-6 col-6">
                              <div className="card rounded  border-0 justify-content-center d-flex cards pb-4 text-white text-center bg-dark">
                                <div className="card-header font-weight-bold py-3">
                                  <h5 className="font-weight-bold">
                                    {" "}
                                    Applications
                                  </h5>
                                </div>
                                <h7 className="text-info font-weight-bold pt-4">
                                  +3.59%
                                </h7>
                                <h5 className="pt-3 font-weight-bold">0564</h5>
                              </div>
                            </div>
                          </div>
                          <div className="row py-2 cardbtn">
                            <div className="col-6 text-center">
                              <div className="btn btn-info d-flex align-items-center justify-content-center py-auto">
                                <h5 className="align-items-center d-flex pt-2">
                                  Start a new Campaign now
                                </h5>
                              </div>
                            </div>
                            <div className="col-6 text-center">
                              <div className="btn btn-danger d-flex align-items-center justify-content-center py-auto">
                                <h5 className="align-items-center d-flex pt-2">
                                  Pause All Running Campaign
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card rounded border-0 text-white bg-dark py-4 lower1">
                        <div className="container">
                          <h5 className="font-weight-bold">
                            Open Positions By Department
                          </h5>
                          <Doughnut
                            className="doughnut justify-content-center d-flex pb-2 gx-0 my-auto"
                            data={{
                              datasets: [
                                {
                                  label: "My First Dataset",
                                  data: [45, 30, 25],

                                  backgroundColor: [
                                    "purple",
                                    "#dc3545",
                                    "rgba(13, 124, 228, 0.808)",
                                  ],
                                  hoverOffset: 4,
                                },
                              ],
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card rounded border-0 text-white bg-dark py-4 minH2">
                    <div className="text-center font-weight-bold">
                      <h5>
                        Hello John Bayer<br></br>You have & New Application
                        Today!
                      </h5>
                    </div>
                    <img src={web} alt="img-fluid"></img>

                    <div className="container">
                      <br></br>
                      <div className="row">
                        <div className="col-10">
                          <h5 className="font-weight-bold pt-3 pb-4">
                            New Applicants
                          </h5>
                        </div>
                        <div className="col-2">
                          <div className="btn font-weight-bold pt-3 fa fa-angle-right text-white fa-lg float-right"></div>
                        </div>
                      </div>
                      {user.map((elem) => {
                        const { id, name, image, status } = elem;
                        return (
                          <div className="row sidecard py-4">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center float-right">
                              <div className="fa fa-user-circle fa-3x px-3"></div>
                              <h6 className="font-weight-bold name">
                                {name}
                                <br></br>
                                <span className="text-white font-weight-normal">
                                  Application {status}
                                </span>
                              </h6>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 py-lg-0 py-4 faitems justify-content-center justify-content-lg-end align-items-center d-flex">
                              <div className="fa fa-envelope fa-sm mx-2 px-2 py-2 text-center"></div>
                              <div className="fa fa-phone fa-sm mx-2 px-2 py-2 text-center"></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
