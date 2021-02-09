import React from "react";
import PopulateBeginerDrone from "./PopulateBeginnerDrone";
import PopulateAmateurDrone from "./PopulateAmateurDrone";
import PopulateProfesionalDrone from "./PopulateProfesionalDrone";


import Slider from "./Slider";

function Landpage() {
  return (
    <>
      <div className="container">
        <header>
          <Slider />
        </header>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Principiantes
            </a>
            <a
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Aficionados
            </a>
            <a
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Profesionales
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-home-tab">
            <PopulateBeginerDrone
              className="card-deck mb-3 text-center py-3"
              id="nav-films"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            />
	    		</div>

          <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-home-tab">
            <PopulateAmateurDrone
              className="card-deck mb-3 text-center py-3"
              id="nav-films"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            />
	    		</div>

          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <PopulateProfesionalDrone
              className="tab-pane fade show active"
              id="nav-films"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default Landpage;
