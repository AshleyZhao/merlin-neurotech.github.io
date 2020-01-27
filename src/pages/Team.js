import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import fullteam from '../assets/headshots/team.jpg';
import lukas from '../assets/headshots/lukas.jpg';
import julia from '../assets/headshots/julia.jpg';
import abby from '../assets/headshots/abby.jpg';
import shawn from '../assets/headshots/shawn.jpg';
import sam from '../assets/headshots/sam.jpg';
import cam from '../assets/headshots/cam.jpg';


function Team() {
    return (
        <div>
            <Header title="Our Team"/>
            <section className="team-members">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img src={abby} className="img-fluid" />
                      <h3>Abigail Holland</h3>
                      <p>President</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img src={julia} className="img-fluid" />
                      <h3>Julia Maine</h3>
                      <p>Director of Operations</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img src={lukas} className="img-fluid" />
                      <h3>Lukas Bauer</h3>
                      <p>Director of Education</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="group-photo">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <img src={fullteam} className="img-fluid" />
                  </div>
                </div>
              </div>
            </section>
            <section className="team-members">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img src={shawn} className="img-fluid" />
                      <h3>Shawn Carere</h3>
                      <p>Backend Development Lead</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img src={sam} className="img-fluid" />
                      <h3>Sam White</h3>
                      <p>Backend Development Lead</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img src={cam} className="img-fluid" />
                      <h3>Cam McKay</h3>
                      <p>Backend Development Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
    )
}
export default Team;
