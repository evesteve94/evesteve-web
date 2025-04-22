import React from "react";
import styles from "./styles.module.css";

const PriceTable = () => {
  return (
    <div className={styles.packages}>
      <h3>
        prispaketen vi erbjuder<span>:</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th>
              <span>"</span>den lille<span>"</span>
            </th>
            <th>
              <span>"</span>den lagome<span>"</span>
            </th>
            <th>
              <span>"</span>den store<span>"</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 995:-</td>
            <td>7 995:-</td>
            <td>9 995:-</td>
          </tr>
          <tr>
            <td>
              1-3 undersidor
              <br />
              2 features
              <br />
              2 revisioner
              <br />
              PDF guide
              <br />2 månaders support
            </td>
            <td>
              4-6 undersidor
              <br />
              3 features
              <br />
              3 revisioner
              <br />
              PDF guide
              <br />3 månaders support
            </td>
            <td>
              7-10 undersidor
              <br />
              4 features
              <br />
              3 revisioner
              <br />
              PDF guide
              <br />4 månaders support
              <br />
              Bloggfunktion
            </td>
          </tr>
        </tbody>
      </table>
      <p className={styles.extras}>
        Alla paktet är inkl. moms och kan utökas med extra tillägg, features,
        eller tjänster.
      </p>
    </div>
  );
};

export default PriceTable;
