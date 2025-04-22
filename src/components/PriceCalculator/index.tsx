// PriceCalculator.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

interface Props {
  onInfoClick: (key: string) => void;
}
interface Package {
  name: string;
  minPages: number;
  maxPages: number;
  features: number;
  revisions: number;
  includesBlog: boolean;
  price: number;
}

const packages: Package[] = [
  {
    name: "den lille",
    minPages: 1,
    maxPages: 4,
    features: 2,
    revisions: 2,
    includesBlog: false,
    price: 5995,
  },
  {
    name: "den lagome",
    minPages: 5,
    maxPages: 7,
    features: 3,
    revisions: 3,
    includesBlog: false,
    price: 7995,
  },
  {
    name: "den store",
    minPages: 8,
    maxPages: 10,
    features: 4,
    revisions: 3,
    includesBlog: true,
    price: 9995,
  },
];

const PriceCalculator: React.FC<Props> = ({ onInfoClick }) => {
  const [pages, setPages] = useState(4);
  const [features, setFeatures] = useState(2);
  const [logo, setLogo] = useState(false);
  const [contentCreation, setContentCreation] = useState(false);
  const [includeBlog, setIncludeBlog] = useState(false);

  // Only match on pages+features, ignore blog here
  const getMatchingPackage = () =>
    packages.find(
      (pkg) =>
        pages >= pkg.minPages &&
        pages <= pkg.maxPages &&
        features <= pkg.features
    );

  const calculatePrice = () => {
    const matching = getMatchingPackage();

    if (matching) {
      let total = matching.price;
      if (logo) total += 1500;
      if (contentCreation) total += pages * 395;
      // Always charge blog as extra unless the package already has it
      if (includeBlog && !matching.includesBlog) total += 1995;
      return total;
    }

    // Custom pricing: pick base by pages
    let base = pages <= 4 ? 5995 : pages <= 7 ? 7995 : 9995;

    // Figure out which package's thresholds to use for extra‑feature pricing
    const refPkg =
      packages.find((p) => pages >= p.minPages && pages <= p.maxPages) ||
      packages[packages.length - 1];

    const extraFeatureCost =
      features > refPkg.features ? (features - refPkg.features) * 1295 : 0;

    const blogCost = includeBlog && !refPkg.includesBlog ? 1995 : 0;
    const contentCost = contentCreation ? pages * 395 : 0;
    const logoCost = logo ? 1500 : 0;

    return base + extraFeatureCost + blogCost + contentCost + logoCost;
  };

  // ... dina prismetoder kvar ...

  return (
    <div className={styles.calculator}>
      <h2>prisräknare</h2>

      <div className={styles.inputGroup}>
        <label>
          Sidor: {pages}
          <button
            className={styles.infoBtn}
            onClick={() => onInfoClick("pages")}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </label>
        <input
          type="range"
          min={1}
          max={10}
          value={pages}
          onChange={(e) => setPages(+e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>
          Dynamiska features: {features}
          <button
            className={styles.infoBtn}
            onClick={() => onInfoClick("features")}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </label>
        <input
          type="range"
          min={0}
          max={10}
          value={features}
          onChange={(e) => setFeatures(+e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>
          <input
            type="checkbox"
            checked={logo}
            onChange={(e) => setLogo(e.target.checked)}
          />
          <span>Logotyp (+1 500:-)</span>
          <button
            className={styles.infoBtnInline}
            onClick={() => onInfoClick("logo")}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </label>
      </div>

      <div className={styles.inputGroup}>
        <label>
          <input
            type="checkbox"
            checked={contentCreation}
            onChange={(e) => setContentCreation(e.target.checked)}
          />
          <span>Copywriting (+395:- per sida)</span>
          <button
            className={styles.infoBtnInline}
            onClick={() => onInfoClick("content")}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </label>
      </div>

      <div className={styles.inputGroup}>
        <label>
          <input
            type="checkbox"
            checked={includeBlog}
            onChange={(e) => setIncludeBlog(e.target.checked)}
          />
          <span>Bloggfunktion (+1 995:-)</span>
          <button
            className={styles.infoBtnInline}
            onClick={() => onInfoClick("blog")}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </label>
      </div>

      <div className={styles.total}>
        Totalpris: {calculatePrice().toLocaleString("sv-SE")} kr
      </div>
    </div>
  );
};

export default PriceCalculator;
