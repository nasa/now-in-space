<template>
  <div class="pageContainer please-flip">
    <img
      class="backgroundImage"
      src="./Images/NowInSpaceBackgroundWide.png"
      alt="Space Station Background"
    />
    <div class="ContentsContainer">
      <div class="header">
        <p>MEET THE ASTRONAUTS NOW IN SPACE</p>
      </div>

      <div class="NASALogo">
        <a href="https://www.nasa.gov/" target="_blank">
          <img src="./Images/Branding/NASALogo.png" alt="Nasa Meatball" />
        </a>
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
                src="https://www.nasa.gov/specials/kidsclub/nowinspace/expedition67-crew4/img/slide_12.png"
                alt="Expedition 67 patch"
              />
            </div>
          </a>
        </div>
        <div class="monitor" id="MonitorMiddle">
          <a data-bs-toggle="modal" href="#ex67-modal">
            <img
              src="./Images/NowInSpaceMonitorMiddle.png"
              alt="Expedition 67 Computer Monitor"
            />
            <div class="patch iOS-visbility-hotfix" id="PatchMiddle">
              <img
                src="./Images/Expedition/67Patch.jpg"
                alt="Expedition 67 patch"
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
                src="https://www.nasa.gov/specials/kidsclub/nowinspace/expedition67-crew4/img/slide_12.png"
                alt="Expedition 67 patch"
              />
            </div>
          </a>
        </div>
      </div>

      <!--Astronaut Carousel -->
      <div class="carousel">
        <main id="swiper-contain">
          <swiper
            :modules="modules"
            :slides-per-view="4"
            :slides-per-group="4"
            :loopedSlides="8"
            :loop="false"
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
            :watchSlidesProgress="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#bob-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="First slide"
                    />
                    <div class="AstroImage bob CardCrop3"></div>
                    <div class="AstronautName">Bob Hines</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#oleg-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Second slide"
                    />
                    <div class="AstroImage oleg CardCrop3"></div>
                    <div class="AstronautName">Oleg Artemyev</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#jessica-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Third slide"
                    />
                    <div class="AstroImage jessica CardCrop3"></div>
                    <div class="AstronautName">Jessica Watkins</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#samantha-modal">
                  <div class="astronaut-container card-shadow">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Fourth slide"
                    />
                    <div class="AstroImage samantha CardCrop3"></div>
                    <div class="AstronautName LongAstronautName">
                      Samantha Cristoforetti
                    </div>
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
                    <div class="AstronautName">Sergey Korsakov</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#denis-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Sixth slide"
                    />
                    <div class="AstroImage denis CardCrop3"></div>
                    <div class="AstronautName">Denis Matveev</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#kjell-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Seventh slide"
                    />
                    <div class="AstroImage kjell CardCrop3"></div>
                    <div class="AstronautName">Kjell Lindgren</div>
                  </div>
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="Cards noselect iOS-visbility-hotfix">
                <a data-bs-toggle="modal" href="#example-modal">
                  <div class="astronaut-container">
                    <img
                      class="d-inline"
                      src="./Images/Astronauts/CardBackgroundBlue585x780.png"
                      alt="Ninth slide"
                    />
                    <div class="AstroImage docbrown CardCrop3"></div>
                    <div class="AstronautName">Dr. Emmet Brown</div>
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
                <a
                  href="https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-the-soyuz-spacecraft-k-4"
                  >Read More</a
                >
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
      id="ex67-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="crew-modal modal-content">
          <div class="modal-crew-body">
            <img
              class="modal-crew-img modal-crew-img-pos2"
              src="./Images/Expedition/67Patch.jpg"
            />
            <button
              type="button"
              class="btn-close modal-crew-button-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-crew-details modal-crew-small-text">
              <p>
                Each mission on the space station has its own patch. The
                Expedition 67 crew planned what would be on its patch. Then,
                artists designed it.
                <br /><br />
                This round mission patch shows the space station soaring above
                Earth. The Sun shines brightly through a big number 67, and
                three large stars shine in the background. These stars represent
                the United States, Russia, and Italy. These countries have crew
                members onboard during the mission.
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
      id="bob-modal"
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
                  alt="Bob Hines"
                />
                <div class="AstroImage bob CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">Bob Hines</div>
              </div>
            </div>
            <span class="modal-astro-name"> Bob Hines </span>
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
                <span class="modal-bold">Birthday: </span>Jan. 11, 1975
                <br />
                <span class="modal-bold">Born: </span>Fayetteville, North
                Carolina
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 67/68
                <br />
                <span class="modal-bold">Fun Fact: </span>Bob attended Space
                Camp when he was 14 years old.
                <br />
                <br />
                Astronaut Bob Hines is a flight engineer. A flight engineer has
                many jobs. These can include performing experiments, doing
                spacewalks, and fixing things on the space station.
                <br /><br />
                Bob grew up in Pennsylvania. He is a research pilot and has
                flown many different types of airplanes. This is his first trip
                to space.
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
            <a data-bs-toggle="modal" href="#oleg-modal">
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
      id="oleg-modal"
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
                  alt="Oleg Artemyev"
                />
                <div class="AstroImage oleg CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Oleg Artemyev
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Oleg Artemyev </span>
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
                <span class="modal-bold">Birthday: </span>Dec. 28, 1970
                <br />
                <span class="modal-bold">Born: </span>Riga, Latvia
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 39/40,
                Expedition 55/56, Expedition 66/67
                <br />
                <br />
                Cosmonaut Oleg Artemyev is the commander for Expedition 67. The
                commander is in charge of the mission and makes sure it is a
                success.
                <br /><br />
                This is Oleg’s third stay on the space station. He has spent
                more than 450 days in space.
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
            <a data-bs-toggle="modal" href="#jessica-modal">
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
      id="jessica-modal"
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
                  alt="Jessica Watkins"
                />
                <div class="AstroImage jessica CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Jessica Watkins
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Jessica Watkins </span>
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
                <span class="modal-bold">Birthday: </span>May 14, 1988
                <br />
                <span class="modal-bold">Born: </span>Gaithersburg, Maryland
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 67/68
                <br />
                <span class="modal-bold">Fun Fact: </span>Jessica played rugby
                on the United States women’s national team.
                <br />
                <br />
                Astronaut Jessica Watkins is a flight engineer. A flight
                engineer has many jobs. These can include performing
                experiments, doing spacewalks, and fixing things on the space
                station.
                <br /><br />
                Jessica grew up in Colorado. Before becoming an astronaut, she
                studied geology. Geology is the study of rocks. She is
                interested in what rocks on the Moon and Mars might be like.
                This is her first trip to space.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#oleg-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#samantha-modal">
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
      id="samantha-modal"
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
                  alt="Samantha Cristoforetti"
                />
                <div class="AstroImage samantha CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Samantha Cristoforetti
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Samantha Cristoforetti </span>
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
                <span class="modal-bold">Birthday: </span>April 26, 1977
                <br />
                <span class="modal-bold">Born: </span>Milan, Italy
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 42/43,
                Expedition 67/68
                <br />
                <span class="modal-bold">Fun Fact: </span>Samantha can speak
                Italian, English, German, French, and Russian.
                <br />
                <br />
                Astronaut Samantha Cristoforetti is a flight engineer. A flight
                engineer has many jobs. These can include performing
                experiments, doing spacewalks, and fixing things on the space
                station.
                <br /><br />
                Samantha is flying for the European Space Agency (ESA). She is
                the first Italian woman to be an astronaut. This is her second
                trip to space. She has spent more than 300 days in space.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#jessica-modal">
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
                  alt="Sergey Korsakov "
                />
                <div class="AstroImage sergey CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Sergey Korsakov
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Sergey Korsakov </span>
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
                <span class="modal-bold">Birthday: </span>Sept. 1, 1984
                <br />
                <span class="modal-bold">Born: </span>Frunze, Kyrgyzstan
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 66/67
                <br />
                <br />
                Cosmonaut Sergey Korsakov is a flight engineer for the mission.
                A flight engineer has many jobs. These can include performing
                experiments, doing spacewalks, and fixing things on the space
                station.
                <br /><br />
                This is Sergey’s first trip to space.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#samantha-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#denis-modal">
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
      id="denis-modal"
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
                  alt="Denis Matveev"
                />
                <div class="AstroImage denis CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Denis Matveev
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Denis Matveev </span>
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
                <span class="modal-bold">Birthday: </span>April 25, 1983
                <br />
                <span class="modal-bold">Born: </span>St. Petersburg, Russia
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 66/67
                <br />
                <br />
                Cosmonaut Denis Matveev is a flight engineer for the mission. A
                flight engineer has many jobs. These can include performing
                experiments, doing spacewalks, and fixing things on the space
                station.
                <br /><br />
                This is Denis’s first trip to space.
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
            <a data-bs-toggle="modal" href="#kjell-modal">
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
      id="kjell-modal"
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
                  alt="Kjell Lindgren"
                />
                <div class="AstroImage kjell CardCrop3"></div>
                <div class="AstronautName modal-astro-card-name">
                  Kjell Lindgren
                </div>
              </div>
            </div>
            <span class="modal-astro-name"> Kjell Lindgren </span>
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
                <span class="modal-bold">Birthday: </span>Jan. 23, 1973
                <br />
                <span class="modal-bold">Born: </span>Taipei, Taiwan
                <br />
                <span class="modal-bold">Spaceflights: </span>Expedition 44/45,
                Expedition 67/68
                <br />
                <span class="modal-bold">Fun Fact: </span>Kjell is an Eagle
                Scout.
                <br />
                <br />
                Astronaut Kjell Lindgren is a flight engineer. A flight engineer
                has many jobs. These can include performing experiments, doing
                spacewalks, and fixing things on the space station.
                <br /><br />
                Kjell was born in Taiwan but spent most of his childhood in
                England. He finished high school in Virginia. Kjell is a medical
                doctor and was part of the parachute team at the U.S. Air Force
                Academy.
                <br /><br />
                This is Kjell’s second stay on the space station. He has spent
                more than 250 days in space.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#denis-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#example-modal">
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
      id="sergey2-modal"
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
                <div class="AstroImage sergey2 CardCrop3"></div>
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
                Cosmonaut Sergey Prokopyev is a flight engineer. A flight
                engineer has many jobs. These can include performing
                experiments, doing spacewalks, and fixing things on the space
                station.
                <br /><br />
                This is Sergey’s second stay on the space station. He spent 196
                days in space on his first mission in 2018.
                <br /><br />
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a data-bs-toggle="modal" href="#denis-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#example-modal">
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
            <a data-bs-toggle="modal" href="#denis-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#example-modal">
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
            <a data-bs-toggle="modal" href="#denis-modal">
              <div class="modal-prev-astro">
                <img src="./Images/CarouselArrowLeft.png" />
                <p class="modal-astro-arrows-prev">PREVIOUS ASTRONAUT</p>
              </div>
            </a>
            <a data-bs-toggle="modal" href="#example-modal">
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
    <p>Please rotate your phone to landscape view.</p>
    <img
      src="https://pic.onlinewebfonts.com/svg/img_13285.png"
      alt="Please rotate your phone to landscape view"
    />
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
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>
