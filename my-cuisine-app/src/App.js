import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <nav>
            <ul className="topNavigation">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Order Now</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://i.imgur.com/yxzVxBL.png"
                    className="topNavImg one"
                  />
                </a>
              </li>
              <a href="#">
                <img
                  src="https://i.imgur.com/5CJSd6J.png"
                  className="topNavImg"
                />
              </a>
            </ul>
          </nav>
          <span className="logo"> Cuisine Restaurant </span>
          <section className="mainText">
            <h1>
              Welcome <br />
              To Our Cuisine Restaurant
            </h1>
            <form className="searchButton" action="#">
              <input
                type="text"
                placeholder="Search for nearby locations"
                name="location"
              />
              <button type="submit">
                <i className="fa fa-search">Location</i>
              </button>
            </form>
            <section className="socialMedia">
              <section className="social">
                <img
                  src="https://i.imgur.com/1dZyYxo.png"
                  className="socialIcons"
                />
                <span>252k</span>
              </section>
              <section className="social">
                <img
                  src="https://i.imgur.com/pVV4LdA.png"
                  className="socialIcons"
                />
                <span>62k</span>
              </section>
              <section className="social">
                <img
                  src="https://i.imgur.com/XaXdCzP.png"
                  className="socialIcons"
                />
                <span>55k</span>
              </section>
            </section>
          </section>
        </header>
        <main>
          <section className="sectionFirst main">
            <section className="contentConatiainer">
              <section className="mainText">
                <h2>About Us</h2>
                <h3>
                  Discover Our <br />
                  Restaurant Story
                </h3>
              </section>
              <p>
                Cuisine is a team work of Cuisine Restaurant Cafe, we aim at
                promoting the foodstuff industry through the branches. We
                establish and through the new dishes, and integrate between
                different cultes. There are some other things that we are pretty
                well known for. but if you want to actually find out more, then
                you'll have to keep reading this paragraph. Well it looks like
                the paragraph is going ot end soon.
              </p>
              <p>
                I hope you learned something important about our business.
                Because it looks like we have run out of room again to tell you
                more properly about who we are and what we do. Maybe you'll
                learn if you read the other sections though!
              </p>
              <button className="btnDiscover">
                Discover Menu
                <img
                  src="https://i.imgur.com/mdtAg35.png"
                  className="btnArrow"
                />
              </button>
            </section>
          </section>
          <section className="sectionSecond main">
            <section className="mainText">
              <h2>Order Online Now</h2>
              <h3>Our Speciality Cuisine</h3>
            </section>
            <nav className="menu">
              <ul>
                <li className="menuTime">
                  <a href="#">Breakfast</a>
                </li>
                <li className="menuTime">
                  <a href="#">Lunch</a>
                </li>
                <li className="menuTime">
                  <a href="#">Dinner</a>
                </li>
                <li className="menuTime">
                  <a href="#">Dessert</a>
                </li>
                <li className="menuTime">
                  <a href="#">Shake</a>
                </li>
              </ul>
              <section className="imgRow main">
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/5hsMiPn.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$12.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Mushroom Bolognese</span>
                    <button>Order Now</button>
                  </div>
                </section>
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/rZrnjTc.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$10.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Bruschetta Chicken Orecchiette</span>
                    <button>Order Now</button>
                  </div>
                </section>
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/Z0s181x.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$12.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Beef and Broccoli Pasta</span>
                    <button>Order Now</button>
                  </div>
                </section>
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/GOOtEhS.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$10.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Creamy Pappardelle</span>
                    <button>Order Now</button>
                  </div>
                </section>
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/wAdICQA.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$10.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Bacon and Leek Pasta</span>
                    <button>Order Now</button>
                  </div>
                </section>
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/nEFiAQb.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$14.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Creamy Shrimp Alfredo</span>
                    <button>Order Now</button>
                  </div>
                </section>
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/ndaBb7Y.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$13.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Lemon Crab Spaghetti</span>
                    <button>Order Now</button>
                  </div>
                </section>
                <section className="imgContainer">
                  <img
                    src="https://i.imgur.com/jBeLHBI.png"
                    className="menuImg"
                  />
                  <div className="imgOverlay">
                    <span className="money">$12.00</span>
                    <img
                      src="https://i.imgur.com/aK6bp2S.png"
                      className="iconStarOrange"
                    />
                    <span className="name">Mushroom Bolognese</span>
                    <button>Order Now</button>
                  </div>
                </section>
              </section>
            </nav>
          </section>
          <section className="sectionThird main">
            <section className="contentContainer">
              <section className="mainText">
                <h2>Book Table</h2>
                <h3>Opening Hours</h3>
              </section>
              <section className="sectionCall">
                <img
                  src="https://i.imgur.com/87ZuSMn.png"
                  className="iconPhone"
                />
                <span>Call Now</span>
                <address>
                  <a href="tel:+12345678910">+12345 678 910</a>
                </address>
              </section>
              <section className="openingHours">
                <span>Monday to Tuesday</span>
                <h5>09:00 am - 22:00 pm</h5>
              </section>
              <section className="openingHours">
                <span>Friday to Sunday</span>
                <h5>11:00 am - 20:00 pm</h5>
              </section>
              <section className="videoContainer">
                <img src="https://i.imgur.com/o03jsCM.png" className="arrow" />
                <img src="https://i.imgur.com/Cm4UJUP.jpg" className="video" />
                <img src="https://i.imgur.com/nSDBrd2.png" className="arrow" />
              </section>
            </section>
          </section>
          <section className="sectionFourth main">
            <section className="contentConatiainer">
              <section className="mainText">
                <h2>Testimonials</h2>
                <h3>Customers Say</h3>
              </section>
              <section className="customer">
                <img
                  src="https://i.imgur.com/rxoeccE.jpg"
                  className="customerImg"
                />
                <h5>Mr John Smith</h5>
                <h6>Art Director</h6>
                <img
                  src="https://i.imgur.com/n0Euwfk.png"
                  className="iconStarYellow"
                />
                <p>
                  Delicious boneless, skinless chicken breasts and fresh
                  mushrooms in garlic and white winesauce. Cuisine is a team
                  work of Cuisine Restaurant cafe, we aim at promoting the
                  foodstuff industry through the branches, we establish and
                  through the new dishes.
                </p>
                <img
                  src="https://i.imgur.com/wjw6RHR.png"
                  className="dotScroll"
                />
                <div className="footer">
                  <p>
                    Created by{" "}
                    <a href="https://www.rembertdesigns.co/" target="_blank">
                      Richard Rembert
                    </a>
                  </p>
                </div>
              </section>
            </section>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
