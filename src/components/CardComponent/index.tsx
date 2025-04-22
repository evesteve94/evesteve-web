import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faCube,
  faIcons,
  faPenNib,
  faUserPen,
  faHexagonNodes,
  faGlobe,
  faHeadset,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { faComments, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";

interface PitchCard {
  icon: any;
  title: string;
  description: string;
}

const pitchCards: PitchCard[] = [
  {
    icon: faReact,
    title: "Robusta & responsiva hemsidor i React",
    description:
      "Vi bygger din hemsida med React – ett modernt ramverk som används av företag som Netflix och Airbnb. Det ger snabb laddning, sömlös användarupplevelse och enkel vidareutveckling. Din sida fungerar lika bra på mobil, surfplatta och dator. Det är framtidssäkert och helt anpassningsbart efter dina behov.",
  },
  {
    icon: faCube,
    title: "Paketpriser utan dolda kostnader",
    description:
      "Hos oss vet du exakt vad du betalar för – inga oväntade fakturor eller tillägg. Våra paket är tydligt strukturerade för olika behov och budgetar. Det gör det enkelt för dig att välja rätt och känna dig trygg hela vägen. Transparens och ärlighet är en självklarhet i vårt samarbete.",
  },
  {
    icon: faComments,
    title: "Kostnadsfri konsultation",
    description:
      "Vi börjar alltid med ett gratis samtal där vi går igenom dina behov och idéer. Det är helt förutsättningslöst – du får tips, råd och konkreta förslag utan några krav. Vårt mål är att ge dig klarhet i vad som passar just dig. Det är första steget mot en hemsida du är stolt över.",
  },
  {
    icon: faGlobe,
    title: "Hjälp att köpa eller byta domän",
    description:
      "Vi guidar dig genom processen att köpa eller byta domän. Du äger den själv och betalar en årlig avgift direkt till leverantören. Vi ser till att allt tekniskt är rätt från början.",
  },
  {
    icon: faHeadset,
    title: "Support efter lansering",
    description:
      "Alla våra paket innehåller minst 2 månaders support efter lansering. Behöver du hjälp längre fram? Vi finns här — alltid glada att bistå när behov uppstår.",
  },
  {
    icon: faPhotoFilm,
    title: "Optimala bilder & videos",
    description:
      "Vi optimerar allt bild- och videomaterial för webben. Det gör att din sida laddar snabbt och presterar bättre – utan att tumma på kvalitet eller känsla.",
  },
  {
    icon: faChartBar,
    title: "Statistik & data",
    description:
      "Vill du förstå hur dina besökare använder sidan? Vi hjälper dig koppla på Google Analytics 4 så du får värdefull data direkt i realtid.",
  },

  {
    icon: faIcons,
    title: "Ikoner & Logotyper",
    description:
      "Starka visuella element gör stor skillnad. Vi erbjuder både färdiga ikoner och unikt framtagna logotyper som stärker ditt varumärke. Allt skräddarsytt för att passa din stil och målgrupp. En tydlig grafisk identitet gör att du sticker ut och blir ihågkommen.",
  },
  {
    icon: faPenNib,
    title: "Enklare Copywriting",
    description:
      "Vi hjälper dig att formulera ditt budskap på ett tydligt och engagerande sätt. Rätt ordval bygger förtroende, väcker intresse och leder till fler kunder. Du slipper skrivkramp – vi levererar texter som passar din bransch, målgrupp och ton. Allt för att din sida ska konvertera bättre.",
  },
  {
    icon: faSearchengin,
    title: "Optimerad SEO",
    description:
      "En snygg sida är bra – men den måste också hittas. Vi optimerar din hemsida för Google med smarta tekniker och rätt innehåll. Det innebär bättre placering i sökresultat och fler besökare över tid. Du syns där dina kunder söker – helt enkelt.",
  },
  {
    icon: faUserPen,
    title: "Total ägandeskap & redigering",
    description:
      "Din hemsida är verkligen *din*. Vi ser till att du får full tillgång till allt – både innehåll och struktur. Dessutom får du ett smidigt redigeringsverktyg som gör det enkelt att uppdatera texter och bilder. Du slipper be om hjälp varje gång du vill ändra något.",
  },
  {
    icon: faHexagonNodes,
    title: "Skräddarsydda dynamiska features",
    description:
      "Behöver du en FAQ, blogg, kontaktformulär eller något mer avancerat? Vi bygger funktioner som är både användarvänliga och anpassade efter dina mål. Allt integreras snyggt i designen och fungerar felfritt på alla enheter. Du får en hemsida som gör mer än bara se bra ut.",
  },
];

const CardComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pitch}>
      {pitchCards.map((card, index) => (
        <div
          key={index}
          onClick={() => toggleCard(index)}
          className={styles.pitchCard}
        >
          <AnimatePresence mode="wait">
            {activeIndex === index ? (
              <motion.div
                key="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className={styles.cardDesc}>{card.description}</p>
              </motion.div>
            ) : (
              <motion.div
                key="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.iconTitle}
              >
                <p>{card.title}</p>
                <FontAwesomeIcon icon={card.icon} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
