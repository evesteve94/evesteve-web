import React from "react";
import ContactForm from "../ContactForm";
import styles from "./styles.module.css";
import PriceTable from "../PriceTable";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <div className={styles.contactText}>
          <h1>Kontakta Oss</h1>
          <br />
          <p>
            Välkommen att höra av dig – vi erbjuder alltid en kostnadsfri
            konsultation, oavsett hur långt du har kommit i processen. Det
            kostar inget att bolla idéer eller ställa frågor. <br />
            <br />
            Vi är en liten byrå, vilket betyder att du får snabba svar,
            personlig kontakt och en smidig dialog utan mellanhänder. Oftast
            svarar vi inom ett par timmar under vardagar – ibland snabbare!{" "}
            <br />
            <br />
            Du når oss enklast via formuläret här på sidan, men vi finns också
            på telefon under kontorstid. Oavsett hur du kontaktar oss lovar vi
            att återkomma så snart vi kan.
            <br />
            <br />
            Varmt välkommen med ditt meddelande – vi ser fram emot att höra från
            dig!
          </p>
        </div>
        <ContactForm />
        <PriceTable />
      </div>
    </div>
  );
};

export default ContactPage;
