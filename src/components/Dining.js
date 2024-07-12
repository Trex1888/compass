import React from "react";
import "../styles/Dining.css";

const Dining = () => {
  return (
    <div className="dining-container">
      <div className="dining-header">
        <h1>Restaurants & Dining</h1>
        <p>
          DSM looks forward to serving you at one of our seven food and beverage
          locations the next time you travel through the airport.
        </p>
      </div>
      <div className="dining-section purple">
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Berk%20Bar.jpg"
          alt="Berk & Chesters"
          className="dining-image"
        />
        <div className="dining-content">
          <h2>BERK & CHESTERS Kitchen + Bar</h2>
          <p>
            Pre-security, Berk & Chesters offers travelers an opportunity to
            grab a drink and a light "on the go" snack before or after heading
            through security. With a full-service bar, Berk & Chesters offers a
            selection of tap, bottled, and canned beers, wine, crafty cocktails
            and margaritas. An expansive variety of seating options are
            available to accommodate families, business meetings and sport
            teams. Open 10 a.m. to 7 p.m. daily, excluding Saturday's when it
            closes at 3:30 p.m. *Berk & Chesters currently offers a limited menu
            including a few sandwiches and a salad.
          </p>
        </div>
      </div>
      <div className="dining-section orange">
        <div className="dining-content">
          <h2>FRIEDRICHS COFFEE</h2>
          <p>
            Two high-volume espresso machines provide travelers with an
            opportunity to add a variety of options to their morning - or
            afternoon - coffee. Hungry, too? Made to order breakfast sandwiches
            and a variety of yogurt, salads, fresh fruit and other quick snacks
            gives Friedrichs' customers tasty convenience at their fingertips.
            Plus, Friedrichs has a wide selection of health-conscious smoothies.
            Friedrichs is located on the secure side of the airport terminal,
            immediately after the TSA Checkpoint. It opens daily at 4:00 a.m.
            and closes 30 minutes before the departure of the last flight of the
            day.
          </p>
        </div>
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Friedrichs.jpg"
          alt="Friedrichs Coffee"
          className="dining-image"
        />
      </div>
      <div className="dining-section blue">
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Arugula%20and%20Rye.png"
          alt="Arugula & Rye"
          className="dining-image"
        />
        <div className="dining-content">
          <h2>ARUGULA & RYE</h2>
          <p>
            Arugula & Rye presents travelers a health-forward deli and salad
            bar. The salad bar at Arugula & Rye serves fresh produce daily in
            addition to a variety of snack foods including popcorn, jerky, meat
            sticks, and candy. Additional menu items include fresh and hot
            breakfast items plus flatbreads made to order. Choose from a
            selection of flavored waters from the Barrillitos ® Aguas Frescas
            line. Arugula & Rye also offers a variety of wine and beer on
            display at the deli counter. Arugula & Rye is located on the secure
            side of the airport. Following the TSA Security Checkpoint, it is
            beyond the police security desk to your left. Service begins daily
            at 4:30 a.m. and closes 30 minutes before the departure of the last
            flight of the day.
          </p>
        </div>
      </div>
      <div className="dining-section purple">
        <div className="dining-content">
          <h2>PORTERMILL Craft Food & Beer</h2>
          <p>
            Iowa’s best locally sourced and sustainable ingredients are the
            backbone of Portermill’s menu. Many items are made in-house such as
            the fresh-cut fries, all salad dressings, as well as all bakery
            breads for the freshest sandwiches, burgers, and more! Portermill
            serves gluten-free meals including tacos, nachos, lettuce wrap
            burgers, salads, salmon bowls, and beef tips. Enjoy our expansive
            bar, exclusively featuring a selection of 18 different Iowa-made
            beers on tap, plus a bottle/can list of over 30 more brews from
            Iowa’s very own craft beer scene. Flights are available for those
            who venture to try more than one. Beer not your scene? Portermill
            also offers an extensive wine list, Iowa-crafted cocktails, and one
            of the best Bloody Marys around! Portermill is located on the secure
            side of the airport following the TSA Security Checkpoint straight
            ahead. Portermill opens daily at 5:00 a.m. and closes 30 minutes
            before the departure of the last flight of the day.
          </p>
        </div>
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Arugula%20and%20Rye.png"
          alt="Portermill"
          className="dining-image"
        />
      </div>
      <div className="dining-section blue">
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/The%20Mill.jpg"
          alt="Mill Supply Co."
          className="dining-image"
        />
        <div className="dining-content">
          <h2>MILL SUPPLY CO.</h2>
          <p>
            In a hurry to catch your flight, but you need a quick bite or a
            drink? Mill Supply Co. has you covered! Freshly made sandwiches,
            yogurt parfaits, salads, and yogurt provide travelers with healthy
            and tasty grab-and-go options. Muffins and cookies satisfy your
            sweet tooth, and our selection of bottled beverages provides
            everybody something to quench their thirst! Mill Supply Co. is
            located on the secure side of the airport at the start of the A
            Concourse. It opens daily at 5:00 a.m.
          </p>
        </div>
      </div>
      <div className="dining-section red">
        <div className="dining-content">
          <h2>Coffee & BAR</h2>
          <p>
            Catching a flight in the C Concourse? Pass the lines, head to your
            gate, and grab a drink and quick snack at Coffee & Bar. Coffee & Bar
            offers a limited menu from Portermill along with coffee and canned
            and bottled alcoholic beverages. Alcoholic beverages will be served
            Monday through Saturday 6:00 a.m. to close and on Sundays 8:00 a.m.
          </p>
        </div>
        <img
          src="https://www.flydsm.com/filesimages/AT%20THE%20AIRPORT/Cbar.jpg"
          alt="Coffee & Bar"
          className="dining-image"
        />
      </div>
    </div>
  );
};

export default Dining;
