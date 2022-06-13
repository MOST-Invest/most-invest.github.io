import React from "react";
import * as styles from "./home.module.css";
import Panel from "../../common/Panel";
import Content from "../../Layout/Content";
import globe from "./globe.png";
import flag from "./flagga.png";

const Home = () => {
  return (
    <>
      <Content>
        <Panel
          firstContent={
            <div className={styles.panelContent}>
              <h2>Uniting The World</h2>
              <p>
                In the past, online shopping has become bigger and bigger over
                the years and will be bigger in the years to come. The internet
                has brought us together and given us an opportunity to share
                experiences and cultures with each other. We believe that we can
                learn and help each other when it comes to providing products
                that make the world a better place and provide smart solutions
                to make daily life easier. For that reason, we invest in
                products that have a high demand in other countries and cultures
                and share it with other places around the world.
              </p>
            </div>
          }
          secondContent={
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${globe}` }}
            ></div>
          }
        ></Panel>

        <Panel
          firstContent={
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${flag}` }}
            ></div>
          }
          secondContent={
            <div className={styles.panelContent}>
              <h2>About</h2>
              <p>
                We are founded on a foundation that lays on coolness, fun, and
                eventfulness. Investing should be fun, solution-oriented, and
                make the world a better place and life a little bit easier. With
                our long experience in sales, UI, and product development we use
                our knowledge to meet the demands and requirements that exist on
                the market within a lot of categories and share it with the
                world.
              </p>
            </div>
          }
        ></Panel>
      </Content>
    </>
  );
};

export default Home;
