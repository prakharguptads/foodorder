import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="">
      <div className="">
        

        <div className="home__row">
          <Product
            id="12321341"
            title="Zucchipakoda"
            price={11.96}
            rating={5}
            image="/assets/images/zucchipakoda.png"
          />
          <Product
            id="49538094"
            title="Uthappizza"
            price={239.0}
            rating={4}
            image="/assets/images/uthappizza.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Vadonut"
            price={199.99}
            rating={3}
            image="/assets/images/vadonut.png"
          />
          <Product
            id="23445930"
            title="Elaicheesecake"
            price={98.99}
            rating={5}
            image="/assets/images/elaicheesecake.png"
          />
          <Product
            id="3254354345"
            title="Vadonut"
            price={598.99}
            rating={4}
            image="/assets/images/vadonut.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Elaicheesecake"
            price={1094.98}
            rating={4}
            image="/assets/images/elaicheesecake.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
