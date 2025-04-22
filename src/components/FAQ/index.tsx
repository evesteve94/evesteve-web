// FAQ.tsx
import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Vad ingår i alla paket?",
    answer: `Alla våra paket inkluderar alltid:
    
- Egen domän (”mittforetag.se”) så att du får en unik webbadress
- Favicon som ger din sida det lilla extra i fliken
- Grundläggande SEO (titel, meta-beskrivningar) så att Google förstår vad du gör
- Responsiv design: Din sida ser lika bra ut på mobil, surfplatta och dator
- Totalt ägandeskap: Koden är din — du får full tillgång utan låsningar
- Headless CMS: Ett användarvänligt gränssnitt där du kan ändra text & bilder själv utan kodning

Allt för att du känner dig trygg och kan växa i din egen takt!`,
  },
  {
    question: "Vad är en responsiv hemsida?",
    answer: `Tänk dig att din hemsida automatiskt ommöblerar sig beroende på besökarens skärm:

- På mobil blir texten lättläst och menyerna kompakta
- På surfplatta får du en blandning av mobil och desktop
- På dator breder designen ut sig och visar fler kolumner

Ingen zoomning eller sidledsskroll — bara en smidig upplevelse, oavsett enhet.`,
  },
  {
    question: "Vad innebär det att jag kan göra enklare ändringar själv?",
    answer: `Med vårt headless CMS får du:

1. Enkel inloggning via webbläsaren
2. Visuell editor för att redigera texter och byta bilder
3. Skapa nya sidor med ett klick — perfekt för produktlanseringar eller blogginlägg

Allt utan en rad kod; du är kapten över ditt eget innehåll!`,
  },
  {
    question: "Hur lång tid tar det?",
    answer: `Vi arbetar effektivt och flexibelt:

- Mindre projekt (enkla sidor, minimal design): 2 veckor
- Medelstora projekt (5–7 undersidor + några funktioner): 3 veckor
- Större projekt (10+ undersidor + avancerade features): 4 veckor

Allt beror på omfång, revisioner och materialleverans. Vi sätter en tydlig tidsplan vid kickoff!`,
  },
  {
    question: "Vad är en bra hemsida värd?",
    answer: `En professionell hemsida är ofta det viktigaste säljverktyget:

- Leadgenerering: Ett enkelt formulär kan ge dig 20–50 nya kontakter per månad
- Första intrycket: 75% av användare bedömer ditt företag baserat på designen
- ROI-exempel: En investering på 6 000 kr kan generera affärer för över 100 000 kr per år

Kort sagt: din hemsida kan betala sig själv många gånger om!`,
  },
  {
    question: "Varför utvecklar ni i React och inte WordPress?",
    answer: `React är som en tom canvas där vi kan måla precis det du behöver:

- Prestanda: Snabbare laddningstider och bättre användarupplevelse
- Flexibilitet: Vi bygger exakt de funktioner du vill ha — inga onödiga plugins
- Säkerhet: Mindre attackyta jämfört med plugin-tunga WordPress-sajter

Du får en framtidssäker lösning som växer med dig.`,
  },
  {
    question: "Varför välja oss framför en mer etablerad webbyrå?",
    answer: `Som småföretagare vet vi att varje krona räknas:

- Transparent prissättning: Du betalar endast för det du behöver
- Personlig service: Direktkontakt med senior utvecklare utan mellanhänder
- Snabb leverans: Vi arbetar utan byråkrati för att ge dig en CMS-lösning snabbt

Vi blir din pålitliga partner — inte bara en leverantör.`,
  },
  {
    question: "Vad innebär dynamiska features?",
    answer: `Dynamiska features är interaktiva element som gör sidan levande:

- FAQ-slingor där besökaren klickar för svar
- Bildkaruseller för att visa era produkter på ett engagerande sätt
- Kontaktformulär med direkt validering
- Interaktiva kartor så att kunder lätt hittar er
- Interaktiva produktkort med information om era produkter eller tjänster

Det är fritt fram att önska er skräddarsydda features!

Dessa funktioner höjer användarupplevelsen och ökar engagemanget!`,
  },
  {
    question: "Vad är en undersida?",
    answer: `En undersida är en separat sida inom din webbplats, till exempel "Om oss", "Tjänster" eller "Kontakt". Varje undersida har sin egen URL och gör det enkelt att organisera och navigera innehåll på din sajt.`,
  },
  {
    question: "Vad är en logotyp i PNG-format?",
    answer: `En logotyp i PNG är en bildfil med transparent bakgrund som du kan placera i din headers eller footers utan att få en vit ruta runt. PNG bevarar hög kvalitet och skarpa kanter, perfekt för webb.`,
  },
  {
    question: "Vad betyder copywriting per sida?",
    answer: `Copywriting per sida innebär att vår professionella textförfattare skapar unikt, SEO-optimerat och engagerande innehåll för varje undersida — t.ex. en "Tjänster"-sida med tydliga värdeförslag och en "Om oss"-sida som berättar din historia.`,
  },
  {
    question: "Vad gör en enkel bloggfunktion?",
    answer: `En enkel bloggfunktion låter dig publicera, redigera och kategorisera inlägg direkt på din sajt. Du kan lägga till bilder, taggar och datum — perfekt för nyheter, artiklar och uppdateringar utan att behöva separata system.`,
  },
  {
    question: "Vad är ett headless CMS?",
    answer: `Ett headless CMS är ett innehållshanteringssystem utan förutbestämd frontend. Du hanterar text, bilder och data i CMS:et och använder ett API för att hämta det till din webbplats. Det ger flexibilitet att skapa skräddarsydda upplevelser på valfri enhet.`,
  },
  {
    question: "Hur fungerar betalning och fakturering?",
    answer: `Vi fakturerar 50% vid projektstart och 50% vid leverans.
Alla priser anges exklusive moms, och fakturan skickas digitalt till din mejl.

Betala smidigt via bankgiro eller Swish!`,
  },
  {
    question: "Kan ni hjälpa till med hosting och underhåll?",
    answer: `Absolut! Vi erbjuder driftspaket:

- Bas: Dagliga backups & säkerhetsuppdateringar
- Pro: 24/7 övervakning & prioriterad support

Välj det paket som passar dig bäst och låt oss sköta tekniken.`,
  },
  {
    question: "Vad händer efter lansering?",
    answer: `Efter publicering får du:

1. Utbildning i CMS:et
2. Överlämning av all kod & dokumentation
3. Möjlighet till vidareutveckling och support

Vi finns med dig hela vägen!`,
  },
];

interface FAQProps {
  activeIndex: number | null;
  onToggle: (index: number) => void;
  refs?: React.RefObject<HTMLDivElement>[];
}

const FAQ: React.FC<FAQProps> = ({ activeIndex, onToggle }) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof activeIndex === "number" && itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex];
      const isMobile = window.innerWidth <= 768;

      if (isMobile && el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Vanliga frågor (FAQ)</h2>
      {faqData.map((item, idx) => (
        <div
          key={idx}
          ref={(el) => void (itemRefs.current[idx] = el)}
          className={styles.item}
        >
          <button className={styles.question} onClick={() => onToggle(idx)}>
            {item.question}
            <FontAwesomeIcon
              icon={faAngleRight}
              className={`${styles.icon} ${
                activeIndex === idx ? styles.iconOpen : ""
              }`}
            />
          </button>
          <div
            className={`${styles.answer} ${
              activeIndex === idx ? styles.answerOpen : ""
            }`}
          >
            {item.answer.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
