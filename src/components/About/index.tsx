// components/About.tsx
import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const About: React.FC = () => {
  return (
    <div className={styles.longText}>
      <h1>Vem står bakom evesteve web?</h1>
      <div className={styles.imagesAbout}>
        <img src="evesteve.png" alt="Eva och Stevie – evesteve web" />
        <p>
          Hej! Jag som driver{" "}
          <strong className={styles.boldText}>evesteve web</strong> heter Eva,
          och bakom varje rad kod, designval och strategisk lösning finns ett
          genuint engagemang för att hjälpa småföretag synas, växa och lyckas
          online.
        </p>
        <p>
          Namnet <em>evesteve</em> är faktiskt en liten kärlekshyllning — en
          blandning av mitt namn och min hund Stevie. Hon är min bästa vän och
          trognaste kollega, alltid vid min sida under sena kodkvällar och
          kaffestunder. 💛
        </p>
        <p>
          Min resa in i webbutveckling började under min YH-utbildning, där jag
          snabbt insåg att detta inte bara var ett framtidsyrke — det var något
          jag verkligen brann för. Att få kombinera kreativitet med
          problemlösning, teknik med användarupplevelse, kändes helt rätt. Efter
          examen var jag full av driv, nyfikenhet och vilja att skapa. Tyvärr
          satte världsläget och den ekonomiska oron käppar i hjulen – jobben
          lyste med sin frånvaro. Men istället för att lägga drömmen på hyllan,
          valde jag att bygga något eget. <br />
        </p>
        <p>
          <strong className={styles.solution}>
            evesteve web blev min lösning — ett sätt att fortsätta utvecklas,
            lära mig nya tekniker och samtidigt göra nytta för andra.
          </strong>
        </p>
      </div>
      <p>
        Jag vet vad det innebär att vara småföretagare. Du har ett hav av
        ansvar, begränsad tid och en budget som måste räcka till allt från
        bokföring till kaffemaskinen. Samtidigt vet du hur viktigt det är att
        din hemsida utstrålar professionalism och förtroende – det är trots allt
        ofta det första dina kunder ser.{" "}
        <strong className={styles.boldText}>
          Det är därför evesteve web är en perfekt match för just dig.
        </strong>{" "}
        Jag jobbar transparent, snabbt och utan mellanhänder. Du får personlig
        kontakt direkt med utvecklaren, inga dolda avgifter, och en hemsida som
        inte bara ser bra ut – den funkar och gör jobbet.
      </p>

      <h2 className={styles.guarantees}>
        Alla paket jag erbjuder är byggda med småföretag i åtanke. Inget
        krångel, inga låsningar. Du får:
      </h2>
      <ul>
        <li>
          En snabb, responsiv hemsida som ser lika bra ut på mobil som på dator
        </li>
        <li>
          En headless CMS-lösning så du enkelt kan uppdatera innehåll själv
        </li>
        <li>Grundläggande SEO så du syns på Google</li>
        <li>Och en personlig touch hela vägen</li>
        <li>Kod du äger — helt och hållet</li>
      </ul>
      <p>
        Jag bygger i React, inte WordPress, för att ge dig en modern, säker och
        framtidssäker lösning – utan onödiga plugins eller svårhanterade
        adminpaneler.
      </p>

      <p>
        Att anlita mig är inte att välja en "budgetlösning" — det är att
        samarbeta med någon som bryr sig lika mycket om din framgång som du gör.
        Här finns ingen byråkrati, bara raka rör, kunnighet och ett brinnande
        intresse för att skapa något som verkligen gör skillnad.
      </p>

      <p>
        Välkommen att höra av dig — jag ser fram emot att höra om din idé, ditt
        företag och hur vi tillsammans kan göra något riktigt bra av det.
      </p>
    </div>
  );
};

export default About;
