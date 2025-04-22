import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faPhone } from "@fortawesome/free-solid-svg-icons";
import PriceTable from "../PriceTable";
import { Link } from "react-router-dom";
import CardComponent from "../CardComponent";

const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.information}>
        <img className={styles.screens} src="screens-blue.png" alt="" />
        <div className={styles.intro}>
          <h1 className={styles.bigTitle}>
            evesteve web<span>.</span>
          </h1>
          <h2 className={styles.title}>
            den <span>lille</span> skånska webbyrån{" "}
          </h2>
          {/* <p className={styles.subtitle}>småföretag hjälper småföretag</p> */}
          <p>
            Hos oss får du en modern, snabb och trygg hemsida – utvecklad i
            React – till ett förutsägbart fast pris. Vi vet att varje krona
            räknas när man driver eget, och därför har vi gjort det enkelt att
            komma igång, med priser från{" "}
            <span style={{ fontWeight: "bold" }}>5 995:-</span> inkl.moms.
          </p>
          <br />
          <p>
            Vi kallar oss den lille skånska webbyrån – för det är precis vad vi
            är. Bakom tangenterna sitter jag, Eva, som glatt bygger hemsidor,
            och bredvid mig ligger min fyrbenta kollega Stevie, som står för
            stämningen och pauserna. Här får du personlig kontakt, snabba svar
            och en lösning som är anpassad för just dig.
          </p>
          <div className={styles.btns}>
            <Link to={"/priser"}>
              <button className={styles.buttons}>
                Beräkna ditt pris{"   "}
                <FontAwesomeIcon icon={faCalculator} />
              </button>
            </Link>
            <Link to={"/kontakt"}>
              <button className={styles.buttons}>
                Ta kontakt <FontAwesomeIcon icon={faPhone} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CardComponent />

      <div className={styles.price}>
        <div>
          <PriceTable />
          <div className={styles.btns}>
            <Link to={"/priser"}>
              <button className={styles.buttons}>
                Beräkna ditt pris{"   "}
                <FontAwesomeIcon icon={faCalculator} />
              </button>
            </Link>
            <Link to={"/kontakt"}>
              <button className={styles.buttons}>
                Ta kontakt <FontAwesomeIcon icon={faPhone} />
              </button>
            </Link>
          </div>
        </div>
        <img className={styles.theTeam} src="evesteve.png" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
/*
          <div className={styles.btns}>
            <Link to={"/priser"}>
              <button className={styles.buttons}>
                beräkna ditt pris{"   "}
                
                  <FontAwesomeIcon icon={faCalculator} />
                
              </button>
            </Link>
            <Link to={"/kontakt"}>
              <button className={styles.buttons}>
                ta kontakt{" "}
                
                  <FontAwesomeIcon icon={faPhone} />
                
              </button>
            </Link>
          </div>

*/
