<template>
  <div class="pageContainer please-flip">
    <img
      class="backgroundImage"
      src="./Images/NowInSpaceBackgroundWide.png"
      alt="Space Station Background"
    />
    <div class="ContentsContainer">
      <div class="header">
        <p onmousedown="speak(this);">MEET THE ASTRONAUTS NOW IN SPACE</p>
      </div>

      <div class="NASALogo">
        <a href="https://www.nasa.gov/" target="_blank">
          <img src="./Images/Branding/NASALogo.png" alt="Nasa Meatball" />
        </a>
        <select id="select"></select>
      </div>
      <div class="kidsClub">
        <a href="https://www.nasa.gov/kidsclub/" target="_blank">
          <img
            src="./Images/Branding/NASAKidsClub.png"
            alt="Nasa Kids Club Logo"
          />
        </a>
      </div>
      <div class="spaceships">
        <a data-bs-toggle="modal" href="#spaceX-modal">
          <img
            id="Ship1"
            src="./Images/SpacecraftSpaceXDragon.png"
            alt="Space X Dragon"
          />
        </a>
        <a data-bs-toggle="modal" href="#soyuz-modal">
          <img
            id="Ship2"
            src="./Images/SpacecraftSoyuz.png"
            alt="Soyuz Capsule"
          />
        </a>
      </div>

      <div class="expeditionMonitors">
        <div class="monitor" id="MonitorLeft">
          <a data-bs-toggle="modal" href="#spacex4-modal">
            <img
              src="./Images/NowInSpaceMonitorLeft.png"
              alt="SpaceX Crew 4 Computer Monitor"
            />
            <div class="patch iOS-visbility-hotfix" id="PatchLeft">
              <img
                src="./Images/Expedition/SpaceXCrew.jpeg"
                alt="SpaceX Crew 4"
              />
            </div>
          </a>
        </div>
        <div class="monitor" id="MonitorMiddle">
          <a data-bs-toggle="modal" href="#ex68-modal">
            <img
              src="./Images/NowInSpaceMonitorMiddle.png"
              alt="Expedition 68 Computer Monitor"
            />
            <div class="patch iOS-visbility-hotfix" id="PatchMiddle">
              <img
                src="./Images/Expedition/68Patch.png"
                alt="Expedition 68 patch"
              />
            </div>
          </a>
        </div>
        <div class="monitor" id="MonitorRight">
          <a data-bs-toggle="modal" href="#soyuxms21-modal">
            <img
              src="./Images/NowInSpaceMonitorRight.png"
              alt="Soyuz MS-21 Computer Monitor"
            />
            <div class="patch iOS-visbility-hotfix" id="PatchRight">
              <img
                src="./Images/Expedition/68Patch.png"
                alt="Expedition 68 patch"
              />
            </div>
          </a>
        </div>
      </div>

      <!--Astronaut Carousel -->
      <div class="carousel">
        <main id="swiper-contain">
          <swiper id="swiper-carousel"
            :modules="modules"
            :direction="horizontal"
            :slides-per-view="4"
            :slides-per-group="4"
            :centeredSlides="false"
            :space-between="25"
            :speed="500"
            :preloadImages="false"
            :lazy="{
              loadPrevNext: true,
              loadOnTransitionStart: true,
              loadPrevNextAmount: 2,
            }"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            :preventClicks="true"
            :preventClicksPropagation="true"
            :touchMoveStopPropagation="true"
            :watchSlidesProgress="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <div></div>
                <a data-bs-toggle="modal" href="#josh-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="First slide"
                    />
                    <div class="AstroImage josh CardCrop3"></div>
                    <div class="AstronautName">Josh Cassada</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <div></div>
                <a data-bs-toggle="modal" href="#anna-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Second slide"
                    />
                    <div class="AstroImage anna CardCrop3"></div>
                    <div class="AstronautName">Anna Kikina</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#nicole-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Third slide"
                    />
                    <div class="AstroImage nicole CardCrop3"></div>
                    <div class="AstronautName">Nicole Mann</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#dmitry-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Fourth slide"
                    />
                    <div class="AstroImage dmitry CardCrop3"></div>
                    <div class="AstronautName">Dmitry Petelin</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#sergey-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Fifth slide"
                    />
                    <div class="AstroImage sergey CardCrop3"></div>
                    <div class="AstronautName">Sergey Prokopyev</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#francisco-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Sixth slide"
                    />
                    <div class="AstroImage francisco CardCrop3"></div>
                    <div class="AstronautName">Francisco Rubio</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#koichi-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Seventh slide"
                    />
                    <div class="AstroImage koichi CardCrop3"></div>
                    <div class="AstronautName">Koichi Wakata</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            ...
          </swiper>
        </main>
      </div>

      <!--End of Carousel-->
    </div>
    <!--End of Contents Container-->

    <!--Modals -->

    <!--Ship Modals-->
    <div
      class="portfolio-modal modal"
      id="spaceX-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content modal-ship-circle-clip ship-modal">
          <div class="modal-ship-background-circle modal-ship-circle-clip-two">
            <div class="modal-ship-background-circle-two"></div>
          </div>
          <div class="modal-header">
            <img
              class="modal-ship-img"
              src="./Images/SpacecraftSpaceXDragon.png"
            />
            <span class="modal-ship-name"> SpaceX Crew Dragon </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-ship-details">
              <p>
                The SpaceX spacecraft that carries people to space is called the
                Crew Dragon. It is launched on top of a Falcon 9 rocket. The
                Crew Dragon launches from NASA’s Kennedy Space Center in
                Florida. For NASA missions, the Crew Dragon carries four
                astronauts. When it returns from space, it parachutes to a water
                landing off the coast of Florida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="soyuz-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content modal-ship-circle-clip ship-modal">
          <div class="modal-ship-background-circle modal-ship-circle-clip-two">
            <div class="modal-ship-background-circle-two"></div>
          </div>
          <div class="modal-header">
            <img class="modal-ship-img" src="./Images/SpacecraftSoyuz.png" />
            <span class="modal-ship-name"> Soyuz Spacecraft </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-ship-details">
              <p>
                The Russian spacecraft that carries people to space is called
                the Soyuz. It is launched on top of a rocket that is called
                Soyuz, too. The Soyuz spacecraft launches from the Baikonur
                Cosmodrome in Kazakhstan. The Soyuz carries three people at a
                time. When it returns from space, it uses parachutes and small
                rockets to make a safe landing in the grassy plains of
                Kazakhstan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Crew Modals -->

    <div
      class="portfolio-modal modal"
      id="spacex4-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content crew-modal">
          <div class="modal-crew-body">
            <img
              class="modal-crew-img modal-crew-img-pos2"
              src="./Images/Expedition/SpaceXCrew.jpeg"
            />
            <button
              type="button"
              class="btn-close modal-crew-button-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-crew-details">
              <p>
                <span class="modal-crew-name">SpaceX Crew-4</span>
                <br />
                <span class="modal-bold">Launch Date: </span>April 27, 2022
                <br />
                <span class="modal-bold">Launched From: </span>Kennedy Space
                Center in Florida
                <br />
                <span class="modal-bold">Spacecraft: </span>Crew Dragon named
                “Freedom”
                <br />
                <span class="modal-bold">Crew Members: </span
                ><span class="modal-crew-flavor">(In order from the left)</span>
                Bob Hines, Samantha Cristoforetti, Jessica Watkins, Kjell
                Lindgren
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="ex68-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="crew-modal modal-content">
          <div class="modal-crew-body">
            <img
              class="modal-crew-img modal-crew-img-pos2"
              src="./Images/Expedition/68Patch.png"
            />
            <button
              type="button"
              class="btn-close modal-crew-button-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-crew-details modal-crew-small-text">
              <p>
                Each mission on the space station has its own patch. The Expedition 68 crew planned what would be on its patch. Then, artists designed it.
                <br/><br/>
                This round mission patch shows the space station soaring above Earth. The Sun shines brightly in the distance. The Moon peeks over Earth’s horizon and a red Mars is seen nearby.This represents NASA’s mission to send astronauts to the Moon and on to Mars. The number 68 is seen in the sky with seven bright stars. These stars represent the members of the crew.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="soyuxms21-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content crew-modal">
          <div class="modal-crew-body">
            <img
              class="modal-crew-img"
              src="./Images/Expedition/SoyuzMS21Crew.jpg"
            />
            <button
              type="button"
              class="btn-close modal-crew-button-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-crew-details">
              <p>
                <span class="modal-crew-name">Soyuz MS-21 Crew</span>
                <br />
                <span class="modal-bold">Launch Date: </span>March 18, 2022
                <br />
                <span class="modal-bold">Launched From: </span>Baikonur
                Cosmodrome in Kazakhstan
                <br />
                <span class="modal-bold">Spacecraft: </span>Soyuz
                <br />
                <span class="modal-bold">Crew Members: </span
                ><span class="modal-crew-flavor">(In order from the left)</span>
                Sergey Korsakov, Oleg Artemyev, Denis Matveev
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Astronaut Modals -->

    <div
      class="portfolio-modal modal"
      id="josh-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Josh Cassada"
                />
                <div class="AstroImage josh CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Josh Cassada
                </div>
              </div>
            </div>
            <span class="modal-astro-name" onmousedown="speak(this);"> Josh Cassada </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details long-astro-details">
              <p onmousedown="speak(this);">
                <span class="modal-bold">Birthday: </span>July 18, 1973.
                <br />
                <span class="modal-bold">Born: </span>San Diego, California.
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 68/69.
                <br />
                <span class="modal-bold">Fun Fact: </span>Josh has worked in mission control as a CAPCOM, the person who talks to the crew on the space station. 
                <br />
                <br />
                Astronaut Josh Cassada is a flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station.
                <br><br>
                Before becoming an astronaut, Josh studied physics in college. Physics is the study of matter and energy. Josh also was a pilot in the U.S. Navy. He tested new airplane designs and taught other pilots how to fly. This is his first trip to space.

              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#example-modal">
              <div class="modal-prev-astro modal-hide-arrow">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#anna-modal">
              <div class="modal-next-astro">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div
      class="portfolio-modal modal"
      id="anna-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Anna Kikina"
                />
                <div class="AstroImage anna CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Anna Kikina
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Anna Kikina </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details">
              <p>
                <span class="modal-bold">Birthday: </span>Aug. 27, 1984
                <br />
                <span class="modal-bold">Born: </span>Novosibirsk, Russia
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 68/69
                <br />
                <span class="modal-bold">Fun Fact: </span>Anna is the first Russian cosmonaut to fly on the SpaceX Crew Dragon.
                <br />
                <br />
                Cosmonaut Anna Kikina is a flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station.
                <br><br>
                This is Anna’s first trip to space.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#josh-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#nicole-modal">
              <div class="modal-next-astro">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div> 

    <div
      class="portfolio-modal modal"
      id="nicole-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Nicole Mann"
                />
                <div class="AstroImage nicole CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Nicole Mann
                </div>
              </div>
            </div>
            <span class="modal-astro-name" @mouseover="SpeakPreGen('Nicole Mann')"> Nicole Mann </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details long-astro-details">
              <p>
                <span class="modal-bold">Birthday: </span>June 27, 1977
                <br />
                <span class="modal-bold">Born: </span>Petaluma, California
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 68/69
                <br />
                <p @mouseover="SpeakPreGen('Nicole Mann 2')"><span class="modal-bold">Fun Fact: </span>Nicole is the first indigenous woman from NASA to go to space. She is registered with the Wailacki of the Round Valley Indian Tribes.</p>
                <br />
                <p @mouseover="SpeakPreGen('Nicole Mann 3')">Astronaut Nicole Mann is a flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station.</p>
                <br>
                <p @mouseover="SpeakPreGen('Nicole Mann 4')">Before becoming an astronaut, Nicole was a pilot in the military. She has flown more than 2,500 hours in 25 different types of aircraft. This included taking off and landing on giant aircraft carrier ships at sea. This is her first trip to space.</p>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#anna-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#dmitry-modal">
              <div class="modal-next-astro">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="dmitry-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Dmitry Petelin"
                />
                <div class="AstroImage dmitry CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Dmitry Petelin
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Dmitry Petelin </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details">
              <p>
                <span class="modal-bold">Birthday: </span>July 10, 1983
                <br />
                <span class="modal-bold">Born: </span>Kustanai, Kazakhstan
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 67/68
                <br />
                <br />
                Cosmonaut Dmitry Petelin is a flight engineer. A flight engineer
                has many jobs. These can include performing experiments, doing
                spacewalks, and fixing things on the space station.
                <br /><br />
                This is Dmitry’s first trip to space.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#nicole-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#sergey-modal">
              <div class="modal-next-astro">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="sergey-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Sergey Prokopyev"
                />
                <div class="AstroImage sergey CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Sergey Prokopyev
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Sergey Prokopyev </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details">
              <p>
                <span class="modal-bold">Birthday: </span>Feb. 19, 1975
                <br />
                <span class="modal-bold">Born: </span>Yekaterinburg, Russia
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 56/57,
                Expedition 67/68
                <br />
                <br />
                Cosmonaut Sergey Prokopyev is the commander for Expedition 68. The commander is in charge of the mission and makes sure it is a success.
                <br /><br />
                This is Sergey’s second stay on the space station. He spent 196
                days in space on his first mission in 2018.
                <br /><br />
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#dmitry-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#francisco-modal">
              <div class="modal-next-astro">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="francisco-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Francisco Rubio"
                />
                <div class="AstroImage francisco CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Francisco Rubio
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Francisco Rubio </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details">
              <p>
                <span class="modal-bold">Birthday: </span>Dec. 11, 1975
                <br />
                <span class="modal-bold">Born: </span>Los Angeles, California
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 67/68
                <br />
                <span class="modal-bold">Fun Fact: </span>Francisco lived in El
                Salvador when he was a kid.
                <br />
                <br />
                Astronaut Francisco Rubio is a flight engineer. A flight
                engineer has many jobs. These can include performing
                experiments, doing spacewalks, and fixing things on the space
                station.
                <br /><br />
                Francisco grew up in Miami, Florida. Before becoming an
                astronaut, he was a helicopter pilot in the Army, a parachute
                Jumpmaster, and a family doctor and flight surgeon. This is his
                first trip to space.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#sergey-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#koichi-modal">
              <div class="modal-next-astro">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="koichi-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Koichi Wakata"
                />
                <div class="AstroImage koichi CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Koichi Wakata
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Koichi Wakata </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details long-astro-details">
              <p>
                <span class="modal-bold">Birthday: </span>Aug. 1, 1963
                <br />
                <span class="modal-bold">Born: </span>Saitama, Japan
                <br />
                <span class="modal-bold">Spaceflights: </span>STS-72, STS-92, Expedition 18/19/20, Expedition 38/39, Expedition 68/69
                <br />
                <span class="modal-bold">Fun Fact: </span>Koichi has flown to the space station on three different spacecraft: the space shuttle, Soyuz, and SpaceX Crew Dragon.
                <br />
                <br />
                Astronaut Koichi Wakata is a flight engineer. A flight engineer has many jobs. These can include performing experiments, doing spacewalks, and fixing things on the space station.
                <br><br>
                Koichi is is flying for the Japan Aerospace Exploration Agency (JAXA). This is his fifth trip to space and his second long-term stay on the space station. He has spent more than 345 days in space. 
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#francisco-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#jessica-modal">
              <div class="modal-next-astro modal-hide-arrow">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="portfolio-modal modal"
      id="example-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content astronaut-modal">
          <div class="modal-header">
            <div class="Cards modal-card">
              <div class="astronaut-container">
                <img
                  class="d-inline"
                  src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                  alt="Example Name"
                />
                <div class="AstroImage CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Example Name
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Example Name </span>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-astro-details">
              <p>
                First Section for astronaut text. Information about their job?
                <br /><br />
                Second Section for astronaut text.
                <br /><br />
                Possible Third Section
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#bob-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#example-modal">
              <div class="modal-next-astro">
                <img src="./Images/CarouselArrowRight.png" />
                <p class="modal-astro-arrows-next">NEXT ASTRONAUT</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!--End Of Page Container -->
  </div>

  <div class="flip-notice">
    <div class="message">
      <p>Please rotate your phone to landscape view.</p>
    </div>
    <div class="phone"></div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./css/style.css";

import "./css/page.css";

export default {
  name: "astro-carousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', './src/SpeechSynth.js')
    document.head.appendChild(externalScript)
  },
  setup() {

    var swiperVar = [];
    
    const slideFocus = (e) => {
      if (e.key === 'Tab') {

          var focusEl = document.activeElement.closest('.swiper-slide');
          if (null != focusEl && !focusEl.classList.contains('swiper-slide-active')) {
              var slideIndex = Array.prototype.indexOf.call(focusEl.parentNode.children, focusEl);
              swiperVar.slideTo(slideIndex);
          }
      }
    };
    
    const onSwiper = (swiper) => {
      swiperVar = swiper;
      swiper.el.addEventListener('keydown', slideFocus);
    };
    

    return {
      
      slideFocus,
      
      onSwiper,
      
      modules: [Navigation, Pagination],
    };
  },
  methods : {
    SpeakPreGen(filename) {
      var voice = new Audio("./src/audio/" + filename + ".wav");

      voice.play();
    },
  }
};


</script>