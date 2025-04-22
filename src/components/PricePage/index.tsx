// PricePage.tsx
import React, { useState } from "react";
import PriceCalculator from "../PriceCalculator";
import FAQ, { faqData } from "../FAQ";
import styles from "./styles.module.css";
import PriceTable from "../PriceTable";

const PricePage: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleToggleFAQ = (index: number) => {
    setActiveFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pricePage}>
      <h1>Våra Priser</h1>
      <div className={styles.priceTop}>
        <FAQ activeIndex={activeFAQ} onToggle={handleToggleFAQ} />
        <div className={styles.priceLeft}>
          <PriceCalculator
            onInfoClick={(key) => {
              const mapping: Record<string, number> = {
                pages: faqData.findIndex(
                  (q) => q.question === "Vad är en undersida?"
                ),
                features: faqData.findIndex(
                  (q) => q.question === "Vad innebär dynamiska features?"
                ),
                logo: faqData.findIndex(
                  (q) => q.question === "Vad är en logotyp i PNG-format?"
                ),
                content: faqData.findIndex(
                  (q) => q.question === "Vad betyder copywriting per sida?"
                ),
                blog: faqData.findIndex(
                  (q) => q.question === "Vad gör en enkel bloggfunktion?"
                ),
              };
              const idx = mapping[key];
              if (idx >= 0) setActiveFAQ(idx);
            }}
          />
          <PriceTable />
        </div>
      </div>
    </div>
  );
};

export default PricePage;
