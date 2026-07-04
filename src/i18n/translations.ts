export type LangCode = "de" | "en";

const de = {
  // Navbar
  nav_leistungen: "Leistungen",
  nav_regionen: "Regionen",
  nav_unternehmen: "Unternehmen",
  nav_privatumzug: "Privatumzug",
  nav_firmenumzug: "Firmenumzug",
  nav_moebelmontage: "Möbelmontage",
  nav_kuechenmontage: "Küchenmontage",
  nav_schwerlasttransport: "Schwerlasttransport",
  nav_notfallumzug: "Notfallumzug",
  nav_entruempelung: "Entrümpelung",
  nav_wien: "Wien",
  nav_niederoesterreich: "Niederösterreich",
  nav_oesterreich: "Österreich",
  nav_deutschland: "Deutschland",
  nav_schweiz: "Schweiz",
  nav_grenzueberschreitend: "Grenzüberschreitend",
  nav_ueber_uns: "Über BAK Transport",
  nav_kontakt: "Kontakt",
  nav_faq: "FAQ",
  nav_karriere: "Karriere",
  nav_impressum: "Impressum",
  nav_datenschutz: "Datenschutz",

  // Hero
  hero_badge: "WIEN & ÖSTERREICH",
  hero_h1_part2: "Ihr Umzug.",
  hero_h1_part3: "Unser Auftrag.",
  hero_subtext:
    "Wir transportieren, was Ihnen wichtig ist — pünktlich, professionell und zum Fixpreis. Privatumzüge, Firmenumzüge, Möbelmontage in ganz Wien und Österreich.",
  hero_cta_quote: "Jetzt Angebot anfragen",
  hero_cta_call: "Uns anrufen",
  hero_badge1: "Eigene LKW-Flotte",
  hero_badge2: "€100.000 versichert",
  hero_badge3: "60 Min Rückmeldung",
  hero_badge4: "WKO Mitglied",
  hero_stat1: "Erfolgreiche Umzüge",
  hero_stat2: "Google Bewertung",
  hero_stat3: "Angebotserstellung",

  // StatsBar
  stats1: "Erfolgreiche Umzüge",
  stats2: "Bezirke abgedeckt",
  stats3: "Google Sterne",
  stats4: "Rückmeldung garantiert",

  // Services
  services_label: "UNSERE LEISTUNGEN",
  services_h2: "Was wir für Sie tun",
  services_desc:
    "Von der ersten Anfrage bis zum letzten Karton — BAK Transport übernimmt alles.",
  services_learn_more: "Mehr erfahren →",
  svc1_title: "Privatumzug",
  svc1_desc:
    "Stress-freier Umzug von A nach B. Wir kümmern uns um alles — vom Verpacken bis zum Aufbauen.",
  svc1_f1: "Kostenlose Besichtigung vor Ort",
  svc1_f2: "Fixpreis ohne Überraschungen",
  svc1_f3: "Komplett-Service inkl. Montage",
  svc1_f4: "Versicherung inklusive",
  svc2_title: "Firmenumzug",
  svc2_desc:
    "Ihr Büro zieht um — wir sorgen dafür, dass der Betrieb weiterläuft. Minimale Ausfallzeit, maximale Effizienz.",
  svc2_f1: "Umzug außerhalb der Geschäftszeiten",
  svc2_f2: "IT & Büroequipment sicher verpackt",
  svc2_f3: "Strukturierte Abwicklung",
  svc2_f4: "Diskret und professionell",
  svc3_title: "Montage & Transport",
  svc3_desc:
    "Küchenmontage, Möbelaufbau, Einzeltransporte — wir erledigen auch Teilleistungen nach Ihrem Bedarf.",
  svc3_f1: "IKEA, Nolte, Nobilia Küchen",
  svc3_f2: "Möbelauf- und -abbau",
  svc3_f3: "Schwerlasttransport",
  svc3_f4: "Einzeltransporte auf Anfrage",

  // WhyUs
  whyus_label: "WARUM BAK TRANSPORT",
  whyus_h2: "Das BAK Versprechen",
  whyus_body:
    "Bei BAK Transport Wien legen wir größten Wert darauf, dass Ihr Umzug von der ersten Anfrage bis zur letzten Kiste reibungslos und stressfrei verläuft. Unser erfahrenes Team aus professionellen Umzugshelfern kennt Wien und alle 23 Bezirke wie ihre eigene Westentasche und sorgt dafür, dass Ihre Möbel und persönlichen Gegenstände sicher und pünktlich an Ihren neuen Wohnort gelangen. Wir bieten Ihnen einen transparenten Fixpreis nach kostenloser Besichtigung, sodass Sie von Anfang an wissen, was Ihr Umzug kostet — ohne versteckte Kosten oder unangenehme Überraschungen auf der Rechnung.",
  whyus_quote:
    "„Ihr Eigentum in sicheren Händen — von der ersten Anfrage bis zum letzten Karton.“",
  r1_title: "Fixpreis-Garantie",
  r1_text:
    "Kein böses Erwachen nach dem Umzug. Sie erhalten nach der kostenlosen Besichtigung einen verbindlichen Fixpreis — was wir vereinbaren, das zahlen Sie.",
  r2_title: "Eigene Flotte",
  r2_text:
    "Unsere modernen LKW sind ausgestattet mit Hebebühnen, Möbeldecken und Schutzfolien. Kein Subunternehmer, kein Risiko — wir arbeiten nur mit eigenem Personal.",
  r3_title: "60-Minuten-Rückmeldung",
  r3_text:
    "Keine Warteschleifen. Nach Ihrer Anfrage melden wir uns innerhalb von 60 Minuten bei Ihnen — mit einem konkreten Angebot, nicht mit leeren Versprechen.",
  r4_title: "€100.000 Vollversicherung",
  r4_text:
    "Alle Umzugsgüter sind mit €100.000 vollversichert — von Haustür zu Haustür. Schäden? Ausgeschlossen. Ihr Eigentum ist in sicheren Händen.",

  // QuoteForm
  form_h2: "Angebot in 60 Minuten",
  form_desc:
    "Schildern Sie uns kurz Ihren Umzug. Wir melden uns innerhalb von 60 Minuten mit einem unverbindlichen Fixpreis-Angebot.",
  form_disclaimer: "Keine versteckten Kosten. Kein Stress. Nur ein fairer Preis.",
  form_from: "Von (Abholadresse)",
  form_from_placeholder: "z.B. Wien 1010, Stephansplatz 1",
  form_to: "Nach (Zieladresse)",
  form_to_placeholder: "z.B. Wien 1220, Seestadt 5",
  form_date: "Umzugsdatum",
  form_movetype: "Art des Umzugs",
  form_movetype_placeholder: "Bitte wählen…",
  form_size: "Ungefähre Wohnungsgröße",
  form_notes: "Besonderheiten / Anmerkungen",
  form_notes_placeholder: "z.B. Klaviertransport, kein Aufzug, 3. Stock...",
  form_name: "Ihr Name",
  form_phone: "Telefonnummer",
  form_email: "E-Mail-Adresse",
  form_submit: "Kostenloses Angebot anfragen →",
  form_note: "✓ Kostenlos & unverbindlich · ✓ Rückmeldung in 60 Min",
  move_type1: "Privatumzug",
  move_type2: "Firmenumzug",
  move_type3: "Nur Transport",
  move_type4: "Möbelmontage",
  move_type5: "Entrümpelung",
  apt_size1: "bis 50m²",
  apt_size2: "50–100m²",
  apt_size3: "über 100m²",

  // Pricing
  pricing_label: "TRANSPARENTE PREISE",
  pricing_h2: "Keine Überraschungen.",
  pricing_subtext: "Feste Preise. Echter Service.",
  pricing_badge: "Meistgewählt",
  pricing_per: "/Umzug",
  pricing_footnote:
    "* Endpreise nach kostenloser Besichtigung. Alle Pakete inkl. Mehrwertsteuer.",
  pricing_hourly: "Stundenweiser Transport auch möglich — ab €89/Std. Auf Anfrage.",
  p1_for: "Für Wohnungen bis 50m²",
  p2_for: "Für Wohnungen bis 100m²",
  p3_for: "Für Wohnungen über 100m²",
  p1_f1: "2 Umzugshelfer",
  p1_f2: "LKW mit Hebebühne",
  p1_f3: "Möbelschutz inkl.",
  p1_f4: "€100.000 Vollversicherung",
  p1_f5: "An- & Abfahrt inkl.",
  p1_f6: "Halteverbot-Koordination",
  p2_f1: "3–4 Umzugshelfer",
  p2_f2: "LKW mit Hebebühne",
  p2_f3: "Möbelschutz inkl.",
  p2_f4: "€100.000 Vollversicherung",
  p2_f5: "An- & Abfahrt inkl.",
  p2_f6: "Möbelmontage inkl.",
  p2_f7: "Halteverbot-Service inkl.",
  p3_f1: "5–6 Umzugshelfer",
  p3_f2: "1–2 LKW mit Hebebühne",
  p3_f3: "Möbelschutz & Verpackung",
  p3_f4: "€100.000 Vollversicherung",
  p3_f5: "An- & Abfahrt inkl.",
  p3_f6: "Küchen- & Möbelmontage",
  p3_f7: "Halteverbot-Service inkl.",
  cta_quote_btn: "Angebot anfragen",
  cta_request_btn: "Jetzt anfragen",

  // Reviews
  reviews_label: "KUNDENSTIMMEN",
  reviews_h2: "Was unsere Kunden sagen",
  reviews_count: "· 87 Google-Bewertungen",

  // FAQ
  faq_label: "FAQ",
  faq_h2: "Häufige Fragen",
  faq_q1: "Was kostet ein Privatumzug mit BAK Transport in Wien?",
  faq_a1:
    "Die Kosten hängen von Wohnungsgröße, Stockwerk, Aufzug, Tragewegen und gewünschten Zusatzleistungen ab. Als Orientierung: Kleine Wohnungen (bis 50m²) starten ab €650, mittlere (50–100m²) ab €950. Nach einer kostenlosen Besichtigung erhalten Sie einen verbindlichen Fixpreis – ohne versteckte Kosten.",
  faq_q2: "Wie schnell kann BAK Transport einen Umzug durchführen?",
  faq_a2:
    "In der Regel vereinbaren wir einen Termin innerhalb von 3–7 Werktagen. In dringenden Fällen versuchen wir, auch kurzfristige Termine zu ermöglichen. Kontaktieren Sie uns und wir finden gemeinsam die beste Lösung.",
  faq_q3: "Sind meine Sachen während des Umzugs versichert?",
  faq_a3:
    "Ja, alle Umzugsgüter sind während des gesamten Transports vollversichert. Bei BAK Transport übernehmen wir die Verantwortung für Ihre Sachen – von der Haustür bis zur Haustür.",
  faq_q4:
    "Führt BAK Transport auch Umzüge nach Deutschland und in die Schweiz durch?",
  faq_a4:
    "Ja, wir bieten grenzüberschreitende Umzüge nach Deutschland und in die Schweiz an. Bitte kontaktieren Sie uns für ein individuelles Angebot, da internationale Transporte gesondert kalkuliert werden.",
  faq_q5: "Was ist in einem BAK Transport Umzugspaket enthalten?",
  faq_a5:
    "Unsere Pakete beinhalten: erfahrene Umzugshelfer, LKW mit Hebebühne, Möbeldecken & Schutzfolie, Ab- und Aufbau von Möbeln, Verpackungsmaterial und Vollversicherung. Zusatzleistungen wie Küchenmontage oder Klaviertransport sind auf Anfrage möglich.",
  faq_q6: "Bieten Sie auch Möbelmontage ohne Umzug an?",
  faq_a6:
    "Natürlich! Wir montieren und demontieren Möbel aller gängigen Marken – auch ohne gleichzeitigen Umzug. IKEA, Nolte, Nobilia und andere Küchenmarken gehören zu unseren Spezialitäten.",
  faq_q7: "Wie läuft ein Umzug mit BAK Transport ab?",
  faq_a7:
    "1. Sie senden uns Ihre Anfrage online oder rufen uns an. 2. Wir melden uns innerhalb von 60 Minuten. 3. Kostenlose Besichtigung vor Ort (optional). 4. Sie erhalten ein verbindliches Fixpreisangebot. 5. Am Umzugstag kümmern wir uns um alles. 6. Nach dem Umzug fragen wir nach Ihrem Feedback.",

  // CTA
  cta_h2: "Ihre Umzugsfirma Wien — bereit für Ihren Umzug?",
  cta_desc:
    "BAK Transport ist Ihre zuverlässige Umzugsfirma in Wien für Privatumzug, Firmenumzug & Möbelmontage. Jetzt kostenloses Fixpreisangebot innerhalb von 60 Minuten anfordern.",
  cta_btn1: "Angebot anfragen",

  // Footer
  footer_tagline: "Schnell. Sicher. Verlässlich.",
  footer_desc:
    "Ihr professioneller Partner für Umzüge, Transport und Montage in Wien und ganz Österreich.",
  footer_leistungen: "Leistungen",
  footer_regionen: "Regionen",
  footer_unternehmen: "Unternehmen",
  footer_copyright: "© 2025 BAK Transport Wien. Alle Rechte vorbehalten.",

  // BenefitsSection
  benefits_label: "Vorteile bei BAK Transport",
  benefits_h2: "Warum Kunden mit uns umziehen",
  benefits_desc:
    "BAK Transport steht für flexible und professionelle Umzüge in Wien und Umgebung. Wir bieten Ihnen faire Konditionen und eine schnelle Abwicklung.",
  benefit1_title: "Schnelles Angebot",
  benefit1_text:
    "Der schnellste Weg zum Fixpreis-Umzug in Wien: Rückruf in 60 Minuten, Angebot am selben Tag, keine Überraschungen.",
  benefit2_title: "Flexible Termine",
  benefit2_text:
    "Sie brauchen einen Umzug nächste Woche? Oder erst in drei Monaten? Beides ist möglich. Wir passen uns Ihrem Zeitplan an - auch am Wochenende oder abends.",
  benefit3_title: "Transparente Preise",
  benefit3_text:
    "Sie wissen von Anfang an, was der Umzug kostet. Keine versteckten Kosten, keine Überraschungen. Klein ab €695, Kompakt ab €845, Groß ab €1395 - alles inklusive.",
  benefit4_title: "Erfahrung & Zuverlässigkeit",
  benefit4_text:
    "Seit Juni 2024 haben wir über 500 Umzüge durchgeführt. Unsere Kunden bewerten uns mit 5 von 5 Sternen. Wir wissen, wie man einen Umzug richtig macht - schnell, sorgfältig und zuverlässig.",

  // ContactSection
  contact_h2: "Persönliche Beratung",
  contact_desc:
    "Für ein konkretes Angebot oder Rückfragen erreichen Sie uns telefonisch oder per E-Mail.",
  contact_item1: "Privatumzug und Firmenumzug",
  contact_item2: "Küchenmontage und Möbelmontage",
  contact_item3: "Umzugsanfrage online",
  contact_call_btn: "Jetzt anrufen",
  contact_email_btn: "E-Mail senden",

  // FinalCTASection
  final_cta_h2:
    "Buchen Sie Ihren Besichtigungstermin oder rufen Sie uns direkt an.",
  final_cta_desc:
    "Wir planen Ihren Umzug transparent, schnell und ohne Überraschungen. Innerhalb von 60 Minuten Rückmeldung, Angebot meist am selben Tag.",
  final_cta_btn1: "Besichtigungstermin buchen",
  final_cta_btn2: "Anrufen →",

  // FirmenumzugSection
  firmen_label: "Umzüge innerhalb und nach Österreich",
  firmen_h2: "Firmenumzug Wien & Umgebung",
  firmen_p1:
    "Für kleine und mittelständische Unternehmen übernehmen wir Büro- und Firmenumzüge in ganz Österreich, mit Schwerpunkt Wien und Umgebung. Nach einer kostenlosen Vor-Ort-Besichtigung erstellen wir ein klares, auf Ihren Betrieb abgestimmtes Angebot.",
  firmen_p2:
    "Unser Team sorgt für eine strukturierte Umzugsabwicklung mit minimaler Betriebsunterbrechung. Auf Wunsch führen wir den Umzug außerhalb Ihrer Geschäftszeiten durch.",
  firmen_p3:
    "Alle Schritte werden vorab definiert, transparent kommuniziert und schriftlich festgehalten – für Planungssicherheit ohne Überraschungen.",
  firmen_btn_call: "Anrufen",
  firmen_btn_contact: "Besichtigung vereinbaren →",

  // MobileActionBar
  mobile_call: "Anrufen",

  // PrivatumzugSection
  privat_label: "Umzug in Wien & Umgebung",
  privat_h2: "Privatumzug Wien und Umgebung",
  privat_p1:
    "Ein Privatumzug mit uns verläuft einfach: Sie kontaktieren uns, wir besichtigen Ihre Wohnung kostenlos und erstellen ein transparentes Angebot. Am Umzugstag verpacken wir Ihr Inventar fachgerecht, transportieren alles sicher und richten es in der neuen Wohnung wieder ein – inklusive De- und Remontage bei Bedarf.",
  privat_p2:
    "Seit Juni 2024 haben wir über 500 Umzüge erfolgreich durchgeführt. Die meisten Umzüge dauern 4–8 Stunden. Unsere Kunden bewerten uns mit 5 von 5 Sternen – schnell, sauber, verlässlich.",
  privat_p3:
    "Die Kosten hängen vom tatsächlichen Aufwand ab (Umfang, Tragewege, Aufzüge, Montage, Schwerlastmöbel). Nach Besichtigung oder Inventarliste erhalten Sie ein kostenloses, unverbindliches Fixangebot – ohne versteckte Kosten.",
  privat_btn_call: "Anrufen",
  privat_btn_offer: "Angebot anfordern",
  privat_btn_more: "Mehr erfahren →",
  privat_btn_visit: "Besichtigung vereinbaren →",

  // ProcessSection
  process_label: "Ablauf",
  process_h2: "Unser Ablauf in fünf Schritten",
  process_desc:
    "Alle Umzüge bei BAK Transport folgen einem klaren, bewährten Prozess – von der ersten Kontaktaufnahme bis zur vollständigen Zufriedenheit.",
  process_step: "Schritt",
  process_of: "von",
  process_prev: "← Zurück",
  process_next: "Weiter →",
  process_step1_title: "Erstgespräch",
  process_step1_duration: "Dauer: 15–30 Min | Kostenlos & unverbindlich",
  process_step1_content:
    "Sie rufen uns an oder schreiben uns eine E-Mail. Wir fragen: Wie viele Zimmer haben Sie? Wohin ziehen Sie? Wann soll der Umzug stattfinden? Das dauert etwa 15–30 Minuten. Keine Sorge: Das Gespräch ist kostenlos und unverbindlich. Sie müssen sich zu nichts verpflichten.",
  process_step2_title: "Vor-Ort Besichtigung",
  process_step2_tab: "Vor-Ort Besichtigung (optional)",
  process_step2_duration: "Dauer: 30–60 Min | Kostenlos & unverbindlich",
  process_step2_content:
    "Nach dem Erstgespräch vereinbaren wir auf Wunsch einen kostenlosen Besichtigungstermin bei Ihnen vor Ort. Wir schauen uns Ihre Wohnung oder Ihr Büro an und notieren alle relevanten Details: Möbelstücke, Zugänge, Aufzüge, Parkplätze. So können wir ein genaues, verbindliches Angebot erstellen.",
  process_step3_title: "Ihr individuelles Angebot",
  process_step3_duration: "Erhalten Sie Ihr Fixpreisangebot",
  process_step3_content:
    "Auf Basis der Besichtigung oder Ihrer Angaben erhalten Sie ein schriftliches Fixpreisangebot. Keine versteckten Kosten, keine Überraschungen. Sie wissen genau, was Sie erwartet – bevor Sie unterschreiben.",
  process_step4_title: "Abwicklung am Umzugstag",
  process_step4_duration: "Der Umzugstag",
  process_step4_content:
    "Unser Team erscheint pünktlich zum vereinbarten Termin. Wir verpacken, tragen, transportieren und richten alles in Ihrer neuen Wohnung oder Ihrem neuen Büro ein. Inklusive Ab- und Aufbau von Möbeln, wenn gewünscht. Alles läuft nach Plan – damit Sie sich um nichts kümmern müssen.",
  process_step5_title: "Abschluss & Feedback",
  process_step5_duration: "Abschluss des Umzugs",
  process_step5_content:
    "Nach dem Umzug fragen wir nach Ihrer Zufriedenheit. War alles zu Ihrer Freude? Gibt es Verbesserungsvorschläge? Ihr Feedback hilft uns, besser zu werden. Und wenn Sie zufrieden sind – eine Google-Bewertung würde uns sehr freuen.",

  // QuickFactsSection
  quickfacts_h2: "Auf einen Blick",
  quickfact1: "Rückruf in ca. 60 Minuten, Angebot oft noch am selben Tag",
  quickfact2: "Fixpreis nach Besichtigung — keine versteckten Kosten",
  quickfact3:
    "über 500 Umzüge seit Juni 2024 · 5,0/5 Sterne bei Google",
  quickfact4: "Grenzüberschreitend: Deutschland · Schweiz",

  // RegionsSection
  regions_label: "EINSATZGEBIET",
  regions_h2: "Wir kommen zu Ihnen",
  regions_desc:
    "BAK Transport ist in ganz Wien und Österreich für Sie im Einsatz — auch grenzüberschreitend.",
  region1_title: "Wien – alle 23 Bezirke",
  region1_text:
    "Vom 1. bis zum 23. Bezirk – wir kennen jede Gasse und jeden Hinterhof. Schnell, zuverlässig, ortskundig.",
  region2_title: "Österreich & Nachbarländer",
  region2_text:
    "Umzüge in alle österreichischen Bundesländer sowie nach Deutschland und in die Schweiz.",
  region3_title: "Büro & Gewerbe",
  region3_text:
    "Betriebsumzüge in Wien und Niederösterreich – auf Wunsch außerhalb der Geschäftszeiten.",
  regions_question: "Haben Sie ein spezifisches Ziel?",
  regions_contact_link: "Fragen Sie uns an →",
  regions_area_title: "Unser Einsatzgebiet",
  regions_cross_border: "— Grenzüberschreitende Umzüge auf Anfrage —",

  // RequestFormSection
  reqform_h2: "Erhalten Sie jetzt Ihr individuelles Angebot",
  reqform_desc:
    "Umzugsanfrage abschicken — Ihre Anfrage wird innerhalb von 6 Stunden beantwortet.",
  reqform_von_label: "Von-Adresse",
  reqform_nach_label: "Nach-Adresse",
  reqform_address: "Adresse",
  reqform_street_placeholder: "Straße",
  reqform_hausnr: "Hausnr./Stiege/Tür",
  reqform_hausnr_placeholder: "z.B. 12/3",
  reqform_plz: "Postleitzahl",
  reqform_stockwerk: "Stockwerk",
  reqform_stockwerk_placeholder: "z.B. 2. OG",
  reqform_aufzug: "Aufzug vorhanden?",
  reqform_ja: "Ja",
  reqform_nein: "Nein",
  reqform_details: "Details",
  reqform_date: "Umzugsdatum",
  reqform_art: "Art des Umzugs",
  reqform_art_privat: "Privatumzug",
  reqform_art_firma: "Firmenumzug",
  reqform_groesse: "Größe des Umzugs",
  reqform_groesse_klein: "Klein",
  reqform_groesse_mittel: "Mittel",
  reqform_groesse_gross: "Groß",
  reqform_umfang: "Umzugsumfang / Besonderheiten",
  reqform_umfang_placeholder: "z.B. Klavier, Tresor, viele Kartons...",
  reqform_kontakt: "Kontaktdaten",
  reqform_name: "Name",
  reqform_name_placeholder: "Vor- und Nachname",
  reqform_telefon: "Telefonnummer",
  reqform_email: "E-Mail",
  reqform_email_placeholder: "ihre@email.at",
  reqform_datenschutz:
    "Ich akzeptiere hiermit, dass meine Daten zum Zwecke der Kontaktaufnahme von BAK Transport verwendet werden dürfen. Weitere Informationen in der",
  reqform_datenschutz_link: "Datenschutzerklärung",
  reqform_submit: "Anfrage senden",

  // FAQ page
  faqpage_label: "INFORMATIONEN",
  faqpage_title: "Häufige Fragen",
  faqpage_subtitle:
    "Alles, was Sie vor Ihrem Umzug wissen sollten — klar und ehrlich beantwortet.",
  faqpage_q1: "Was kostet ein Privatumzug in Wien?",
  faqpage_a1:
    "Privatumzüge starten ab €650 für Wohnungen bis 50m². Der genaue Preis hängt von der Wohnungsgröße, dem Stockwerk und den gewünschten Zusatzleistungen ab. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Fixpreis.",
  faqpage_q2: "Wie schnell erhalte ich ein Angebot?",
  faqpage_a2:
    "In der Regel innerhalb von 60 Minuten nach Ihrer Anfrage. Nach einer kostenlosen Besichtigung erstellen wir innerhalb von 24 Stunden ein verbindliches Fixpreisangebot.",
  faqpage_q3: "Sind meine Sachen während des Umzugs versichert?",
  faqpage_a3:
    "Ja. Alle Umzugsgüter sind während des gesamten Transports vollversichert. Im unwahrscheinlichen Fall eines Schadens regulieren wir schnell und unkompliziert.",
  faqpage_q4:
    "Führen Sie auch Umzüge nach Deutschland oder in die Schweiz durch?",
  faqpage_a4:
    "Ja. Wir bieten grenzüberschreitende Umzüge nach Deutschland und in die Schweiz an — zum Fixpreis nach Videobesichtigung, vollversichert.",
  faqpage_q5: "Gibt es versteckte Kosten?",
  faqpage_a5:
    "Nein. Unser Angebot ist ein Fixpreis. Was vereinbart wird, gilt — kein Stundenhonorar, keine Nachforderungen, keine Überraschungen.",
  faqpage_q6: "Können Sie auch kurzfristig einen Umzug durchführen?",
  faqpage_a6:
    "Ja. Im Rahmen unseres Notfallumzug-Services sind wir oft noch am selben Tag verfügbar. Rufen Sie uns an und wir prüfen sofort die Verfügbarkeit.",
  faqpage_q7: "Bieten Sie auch nur Möbelmontage ohne Umzug an?",
  faqpage_a7:
    "Ja. Möbelmontage und Küchenmontage können auch unabhängig von einem Umzug gebucht werden. Ab €120 für kleine Aufträge.",
  faqpage_q8: "Wie läuft eine kostenlose Besichtigung ab?",
  faqpage_a8:
    "Unser Mitarbeiter kommt zu Ihnen, schaut sich alle zu transportierenden Möbel und Gegenstände an und notiert alles Relevante. Das dauert ca. 30 Minuten. Danach erhalten Sie innerhalb von 24 Stunden Ihr Fixpreisangebot.",
  faqpage_q9: "Wie lange dauert ein Umzug?",
  faqpage_a9:
    "Das hängt von Wohnungsgröße und Etage ab: Eine 2-Zimmer-Wohnung ist meist in 3–5 Stunden fertig transportiert, ein Einfamilienhaus kann einen ganzen Tag dauern. Bei der kostenlosen Besichtigung geben wir Ihnen eine realistische Zeiteinschätzung für Ihren Umzug.",
  faqpage_q10: "Wie viele Umzugskartons brauche ich?",
  faqpage_a10:
    "Als Faustregel gilt: ca. 10–15 Kartons pro Zimmer bei durchschnittlicher Einrichtung. Bei der kostenlosen Besichtigung berechnen wir den genauen Bedarf und stellen auf Wunsch passendes Verpackungsmaterial bereit.",
  faqpage_q11: "Brauche ich für den Umzugswagen eine Halteverbotszone in Wien?",
  faqpage_a11:
    "Bei engen Straßen oder wenig Parkplätzen empfehlen wir eine Halteverbotszone, damit der Umzugswagen direkt vor der Tür stehen kann. Wir unterstützen Sie gerne bei der Organisation der nötigen Parkgenehmigung.",
  faqpage_q12: "Sind Umzugskosten steuerlich absetzbar?",
  faqpage_a12:
    "Bei einem beruflich bedingten Umzug, etwa durch einen neuen Job, können die Kosten als Werbungskosten von der Steuer abgesetzt werden. Wir stellen Ihnen dafür eine detaillierte Rechnung aus, die Sie beim Finanzamt einreichen können.",
  faqpage_q13: "Woran erkenne ich eine seriöse Umzugsfirma?",
  faqpage_a13:
    "Achten Sie auf ein schriftliches Fixpreisangebot statt vager Stundensätze, eine Versicherung für Transportschäden sowie klare Firmenangaben und Bewertungen. BAK Transport erfüllt all diese Punkte und liefert Ihnen ein verbindliches Angebot vor Beginn des Umzugs.",
  faqpage_q14: "Wie viel Trinkgeld gebe ich den Umzugshelfern?",
  faqpage_a14:
    "Trinkgeld ist bei uns keine Pflicht, da unser Fixpreis bereits alle Leistungen abdeckt. Über eine kleine Anerkennung für besonders sorgfältige Arbeit freut sich unser Team aber natürlich.",
  faqpage_q15: "Wie weit im Voraus sollte ich meinen Umzug buchen?",
  faqpage_a15:
    "Für Privatumzüge empfehlen wir 2–3 Wochen Vorlauf, bei Firmenumzügen oder in der Hochsaison rund um Monatsende und Sommer besser 4–6 Wochen. Kurzfristige Termine sind über unseren Notfallumzug-Service oft trotzdem möglich.",
  faqpage_q16: "Entsorgen Sie auch alte Möbel beim Umzug?",
  faqpage_a16:
    "Ja. Alte Möbel, Elektrogeräte oder Sperrmüll, die Sie nicht mitnehmen möchten, entsorgen wir im Rahmen unserer Entrümpelungs-Leistung fachgerecht — auf Wunsch direkt im Zuge Ihres Umzugs.",
  faqpage_intro_h2: "Wer ist BAK Transport?",
  faqpage_intro_text:
    "BAK Transport ist ein Umzugs- und Montageunternehmen mit Sitz in Wien. Wir realisieren Privat- und Firmenumzüge sowie Küchen- und Möbelmontagen in Wien und ganz Österreich. Schwerpunkte: transparente Fixpreise nach kostenloser Besichtigung, vollversicherter Transport und termintreue Ausführung.",
  faqpage_cat1_label: "Umzug in Wien, Termine & Ablauf",
  faqpage_cat1_subtitle: "Antworten zu Ablauf, Vorlaufzeit und Organisation Ihres Umzugs.",
  faqpage_cat2_label: "Preise & Kosten",
  faqpage_cat2_subtitle: "Transparente Preise und was in Ihrem Umzug enthalten ist.",
  faqpage_cat3_label: "Praktische Vorbereitung",
  faqpage_cat3_subtitle: "Kartons, Parkplatz und was Sie vor dem Umzugstag wissen sollten.",
  faqpage_cat4_label: "Möbelmontage & Zusatzleistungen",
  faqpage_cat4_subtitle: "Möbelmontage, Entrümpelung und weitere Services rund um den Umzug.",
  faqpage_cat5_label: "Versicherung, Garantie & Vertrauen",
  faqpage_cat5_subtitle: "Wie wir Ihre Umzugsgüter absichern und woran Sie uns erkennen.",
  faqpage_cat6_label: "Österreich, Deutschland, Schweiz",
  faqpage_cat6_subtitle: "Grenzüberschreitende Umzüge außerhalb von Wien.",
  faqpage_cta_h2: "Noch Fragen?",
  faqpage_cta_desc: "Kostenloses Angebot — Rückmeldung in 60 Minuten",
  faqpage_cta_btn1: "Jetzt Angebot anfordern",
  faqpage_cta_btn2: "Anrufen",

  // Kontakt page
  kontakt_label: "UNTERNEHMEN",
  kontakt_title: "Kontakt",
  kontakt_subtitle:
    "Schreiben Sie uns oder rufen Sie an — Rückmeldung garantiert in 60 Minuten.",
  kontakt_how_h2: "Wie wir helfen",
  kontakt_card1_title: "Umzugsanfrage",
  kontakt_card1_text:
    "Beschreiben Sie uns Ihren Umzug — Größe, Datum, Start- und Zielort. Wir melden uns innerhalb von 60 Minuten.",
  kontakt_card2_title: "Kostenlose Besichtigung",
  kontakt_card2_text:
    "Auf Wunsch kommen wir zur kostenlosen Vor-Ort-Besichtigung oder führen eine Videobesichtigung durch.",
  kontakt_card3_title: "Fixpreisangebot",
  kontakt_card3_text:
    "Innerhalb von 24 Stunden erhalten Sie ein verbindliches Fixpreisangebot — ohne versteckte Kosten.",
  kontakt_hours_h2: "Öffnungszeiten",
  kontakt_day1: "Montag – Freitag",
  kontakt_time1: "07:00 – 20:00 Uhr",
  kontakt_day2: "Samstag",
  kontakt_time2: "08:00 – 18:00 Uhr",
  kontakt_day3: "Sonntag",
  kontakt_time3: "Notfälle: 24h erreichbar",
  kontakt_reach_h2: "So erreichen Sie uns",
  kontakt_tel_title: "Telefon",
  kontakt_tel_sub: "Mo–Fr 7–20h, Sa 8–18h",
  kontakt_email_title: "E-Mail",
  kontakt_email_sub: "Rückmeldung innerhalb von 60 Min",
  kontakt_addr_title: "Adresse",
  kontakt_addr_sub: "Österreich",
  kontakt_cta_h2: "Umzug anfragen",
  kontakt_cta_desc: "Kostenloses Angebot — Rückmeldung in 60 Minuten",
  kontakt_cta_email_btn: "E-Mail schreiben",
  kontakt_cta_call_btn: "Jetzt anrufen",

  // Karriere page
  karriere_label: "UNTERNEHMEN",
  karriere_title: "Karriere bei BAK Transport",
  karriere_subtitle:
    "Werde Teil unseres Teams — faire Bezahlung, stabiles Umfeld, echter Teamgeist.",
  karriere_h2: "Wir suchen Menschen, keine Nummern.",
  karriere_p1:
    "Bei BAK Transport sind Sie mehr als eine Personalnummer. Wir sind ein eingespieltes Team, das füreinander einsteht — und das suchen wir auch in neuen Kollegen.",
  karriere_p2:
    "Egal ob Quereinsteiger oder erfahrener LKW-Fahrer — wenn Sie zuverlässig, körperlich fit und teamfähig sind, sind Sie bei uns richtig.",
  karriere_p3:
    "Faire Bezahlung immer zum 1. des Monats. Moderne Fahrzeuge. Geregelte Zeiten. Das ist unser Versprechen.",
  karriere_check1: "Faire & pünktliche Bezahlung",
  karriere_check2: "Geregelte Arbeitszeiten",
  karriere_check3: "Moderne Fahrzeuge & Ausrüstung",
  karriere_check4: "Kollegiales Team",
  karriere_check5: "Aufstiegsmöglichkeiten",
  karriere_check6: "Quereinstieg willkommen",
  karriere_jobs_h2: "Offene Stellen",
  karriere_job1_title: "Umzugshelfer",
  karriere_job1_text:
    "Auch ohne Erfahrung willkommen. Wir schulen Sie ein und geben Ihnen von Anfang an die Werkzeuge, die Sie brauchen.",
  karriere_job2_title: "LKW-Fahrer",
  karriere_job2_text:
    "Führerschein Klasse C/CE und Berufskraftfahrerkompetenznachweis (BKF) erforderlich. Gute Deutschkenntnisse von Vorteil.",
  karriere_job3_title: "Montagetechniker",
  karriere_job3_text:
    "Erfahrung im Möbel- oder Küchenaufbau? Dann sind Sie bei uns genau richtig. Werkzeug wird gestellt.",
  karriere_why_h2: "Warum BAK Transport als Arbeitgeber?",
  karriere_why1_title: "Pünktlich",
  karriere_why1_sub: "Gehalt immer zum 1.",
  karriere_why2_title: "Modern",
  karriere_why2_sub: "Neue Fahrzeuge & Tools",
  karriere_why3_title: "Team",
  karriere_why3_sub: "Echter Zusammenhalt",
  karriere_why4_title: "Wachstum",
  karriere_why4_sub: "Interne Beförderungen",
  karriere_faq_h2: "Häufige Fragen zur Karriere",
  karriere_faq1_q: "Brauche ich Erfahrung im Umzugsbereich?",
  karriere_faq1_a:
    "Nein. Als Umzugshelfer schulen wir Sie vollständig ein. Wichtiger als Vorerfahrung sind Zuverlässigkeit, körperliche Fitness und Teamfähigkeit.",
  karriere_faq2_q: "Wie kann ich mich bewerben?",
  karriere_faq2_a:
    "Schicken Sie uns eine E-Mail an office@baktransport.at mit einem kurzen Anschreiben. Ein formeller Lebenslauf ist kein Muss — uns interessiert, wer Sie sind.",
  karriere_faq3_q: "Gibt es Teilzeitstellen?",
  karriere_faq3_a:
    "Ja. Gerade für Umzugshelfer bieten wir flexible Modelle — auch wochenweise oder auf Abruf für Studierende oder Personen mit anderen Verpflichtungen.",
  karriere_cta_h2: "Jetzt bewerben",
  karriere_cta_desc:
    "Schicken Sie uns eine kurze E-Mail — wir melden uns schnell.",
  karriere_cta_btn1: "Jetzt bewerben",
  karriere_cta_btn2: "Anrufen",

  // Ueber-uns page
  ueber_label: "UNTERNEHMEN",
  ueber_title: "Über BAK Transport",
  ueber_subtitle:
    "Professionelle Umzüge seit Jahren — mit Herz, Erfahrung und Fixpreis.",
  ueber_h2: "Wer steckt hinter BAK Transport?",
  ueber_p1:
    "BAK Transport ist ein Wiener Umzugsunternehmen mit über 10 Jahren Erfahrung. Gegründet mit dem Ziel, Umzüge fairer, transparenter und professioneller zu machen — haben wir seitdem über 1.000 zufriedene Kunden begleitet.",
  ueber_p2:
    "Wir arbeiten ausschließlich mit eigenem Personal und eigener Fahrzeugflotte. Keine Subunternehmer, keine Qualitätsverluste. Was Sie sehen, ist was Sie bekommen.",
  ueber_p3:
    "Unsere Google-Bewertung von 5,0★ spricht für sich — und für unsere Kunden, die uns empfehlen.",
  ueber_check1: "Erfahrenes Team mit Leidenschaft",
  ueber_check2: "Eigene LKW-Flotte",
  ueber_check3: "Vollversichert & gewerblich zugelassen",
  ueber_check4: "Fixpreis-Garantie seit Tag 1",
  ueber_check5: "Kundenzufriedenheit über alles",
  ueber_check6: "5,0★ Bewertung auf Google",
  ueber_why_h2: "Warum BAK Transport?",
  ueber_card1_title: "Unser Team",
  ueber_card1_text:
    "Hinter BAK Transport stehen erfahrene Umzugsprofis — Menschen, die ihren Job lieben und jeden Auftrag mit vollem Einsatz angehen.",
  ueber_card2_title: "Eigene Flotte",
  ueber_card2_text:
    "Wir arbeiten ausschließlich mit eigenen LKWs und eigenem Personal — keine Subunternehmer, keine Qualitätsverluste.",
  ueber_card3_title: "Unsere Werte",
  ueber_card3_text:
    "Ehrlichkeit, Pünktlichkeit, Sauberkeit. Wir halten, was wir versprechen — und versprechen nur, was wir auch halten können.",
  ueber_stat1_value: "1.000+",
  ueber_stat1_label: "Erfolgreiche Umzüge",
  ueber_stat2_value: "5,0★",
  ueber_stat2_label: "Google Bewertung",
  ueber_stat3_value: "24h",
  ueber_stat3_label: "Angebotserstellung",
  ueber_stat4_value: "10+",
  ueber_stat4_label: "Jahre Erfahrung",
  ueber_faq_h2: "Häufige Fragen über BAK Transport",
  ueber_faq1_q: "Wie lange gibt es BAK Transport schon?",
  ueber_faq1_a:
    "BAK Transport ist seit über 10 Jahren in Wien tätig. In dieser Zeit haben wir mehr als 1.000 Umzüge erfolgreich abgeschlossen.",
  ueber_faq2_q: "Haben Sie eigene Fahrzeuge?",
  ueber_faq2_a:
    "Ja. Wir arbeiten ausschließlich mit unserer eigenen LKW-Flotte und unserem eigenen Personal — kein Outsourcing, volle Qualitätskontrolle.",
  ueber_faq3_q: "Wo ist BAK Transport ansässig?",
  ueber_faq3_a:
    "Unser Hauptsitz ist in Wien. Von dort aus betreuen wir alle Regionen — Wien, Niederösterreich und den Rest Österreichs sowie internationale Umzüge.",
  ueber_cta_h2: "Umzug anfragen",
  ueber_cta_desc: "Kostenloses Angebot — Rückmeldung in 60 Minuten",
  ueber_cta_btn1: "Jetzt Angebot anfordern",
  ueber_cta_btn2: "Anrufen",

  // Impressum page
  impressum_label: "RECHTLICHES",
  impressum_title: "Impressum",
  impressum_h2_1: "Angaben gemäß § 25 Mediengesetz",
  impressum_h2_2: "Haftungsausschluss",
  impressum_h2_3: "Urheberrecht",
  impressum_liability:
    "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. BAK Transport übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.",
  impressum_copyright_text:
    "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.",
  impressum_subject: "Unternehmensgegenstand:",
  impressum_subject_value: "Transport und Umzugsdienstleistungen",
  impressum_uid: "UID-Nummer:",
  impressum_fn: "Firmenbuchnummer:",
  impressum_fng: "Firmenbuchgericht:",
  impressum_fng_value: "Handelsgericht Wien",
  impressum_authority: "Aufsichtsbehörde:",
  impressum_authority_value: "Magistratisches Bezirksamt Wien",
  impressum_tel: "Telefon:",
  impressum_email_label: "E-Mail:",

  // Datenschutz page
  datenschutz_label: "RECHTLICHES",
  datenschutz_title: "Datenschutzerklärung",
  datenschutz_h1: "1. Datenschutz auf einen Blick",
  datenschutz_p1:
    "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
  datenschutz_h2: "2. Datenerfassung auf dieser Website",
  datenschutz_responsible_q: "Wer ist verantwortlich für die Datenerfassung?",
  datenschutz_responsible_a:
    "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: BAK Transport GmbH, Zwinzstraße 15, 1160 Wien, office@baktransport.at",
  datenschutz_collect_q: "Wie erfassen wir Ihre Daten?",
  datenschutz_collect_a:
    "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. über das Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (Browserdaten, Zugriffszeitpunkt).",
  datenschutz_h3: "3. Ihre Rechte",
  datenschutz_rights:
    "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Wenden Sie sich dazu an: office@baktransport.at",
  datenschutz_h4: "4. Hosting",
  datenschutz_hosting:
    "Diese Website wird bei Vercel Inc. gehostet. Details finden Sie in der Datenschutzerklärung von Vercel unter vercel.com/legal/privacy-policy.",
  datenschutz_h5: "5. Kontakt",
  datenschutz_contact:
    "BAK Transport GmbH · Zwinzstraße 15, 1160 Wien · office@baktransport.at · +43 681 10723047",

  // Shared subpage strings
  sub_why_bak: "Warum BAK Transport?",
  sub_price_overview: "Preisübersicht",
  sub_faq_h2: "Häufige Fragen",
  sub_more_services: "Weitere Leistungen von BAK Transport Wien",
  sub_cta_desc: "Kostenloses Angebot — Rückmeldung in 60 Minuten",
  sub_cta_btn1: "Jetzt Angebot anfordern",
  sub_cta_btn2: "Anrufen",
  sub_price_footnote: "Endpreise nach kostenloser Besichtigung. Fixpreis garantiert.",

  // Privatumzug subpage
  priv_page_label: "LEISTUNGEN",
  priv_page_title: "Privatumzug Wien",
  priv_page_subtitle:
    "Ihr stressfreier Umzug mit festem Preis — von der Besichtigung bis zum letzten Karton.",
  priv_page_h2: "Einfach umziehen — wir machen das.",
  priv_page_p1:
    "Ein Privatumzug mit BAK Transport bedeutet: Sie entspannen sich, wir arbeiten. Unser eingespieltes Team übernimmt das komplette Handling — vom professionellen Verpacken bis zum Aufbau in Ihrer neuen Wohnung.",
  priv_page_p2:
    "Wir arbeiten in allen 23 Wiener Bezirken und in ganz Niederösterreich. Ob Studio-Appartement oder großes Einfamilienhaus — Sie erhalten nach der kostenlosen Besichtigung einen verbindlichen Fixpreis.",
  priv_page_p3: "Kein Stundenhonorar. Kein Risiko. Nur ein fairer, fester Preis.",
  priv_page_p4:
    "Als eine der führenden Umzugsfirmen in Wien bietet BAK Transport Privatumzüge in ganz Wien und Umgebung an — zuverlässig, versichert und zum Fixpreis. Unser Umzugsservice Wien umfasst auch das professionelle Verpacken, den Transport und den kompletten Aufbau Ihrer Möbel am neuen Standort.",
  priv_page_check1: "Kostenlose Vor-Ort-Besichtigung",
  priv_page_check2: "Verbindlicher Fixpreis nach Besichtigung",
  priv_page_check3: "Professionelles Verpacken auf Wunsch",
  priv_page_check4: "Möbel-Ab- und Aufbau inklusive",
  priv_page_check5: "Vollversicherung aller Güter",
  priv_page_check6: "An- und Abfahrt im Preis inbegriffen",
  priv_page_card1_title: "Fixpreis-Garantie",
  priv_page_card1_text:
    "Was vereinbart wird, gilt. Keine Nachforderungen, keine versteckten Stunden — Sie zahlen exakt das, was im Angebot steht.",
  priv_page_card2_title: "Erfahrenes Team",
  priv_page_card2_text:
    "Unser geschultes Personal behandelt Ihre Möbel wie eigene. Schutzdecken, Folie, Spezialwerkzeug — alles dabei.",
  priv_page_card3_title: "Rundum-Service",
  priv_page_card3_text:
    "Von der Planung über das Verpacken bis zum Aufbau — wir begleiten Sie durch den ganzen Prozess.",
  priv_page_price_h2: "Preisübersicht Privatumzug",
  priv_page_price_footnote:
    "Endpreise nach kostenloser Besichtigung. Fixpreis garantiert.",
  priv_page_p1_label: "bis 50m²",
  priv_page_p1_price: "ab €650",
  priv_page_p1_detail: "2 Helfer, 1 LKW, bis 6h",
  priv_page_p2_label: "50–100m²",
  priv_page_p2_price: "ab €950",
  priv_page_p2_detail: "3–4 Helfer, 1 LKW, bis 8h",
  priv_page_p3_label: "über 100m²",
  priv_page_p3_price: "ab €1.350",
  priv_page_p3_detail: "5–6 Helfer, 1–2 LKW",
  priv_page_faq_h2: "Häufige Fragen zum Privatumzug",
  priv_page_faq1_q: "Wie läuft die Besichtigung ab?",
  priv_page_faq1_a:
    "Unser Mitarbeiter kommt kostenlos zu Ihnen, schaut sich die Wohnung an und notiert alles Relevante. Das dauert ca. 30 Minuten. Danach erhalten Sie innerhalb von 24 Stunden ein verbindliches Fixpreisangebot.",
  priv_page_faq2_q: "Was passiert, wenn etwas beschädigt wird?",
  priv_page_faq2_a:
    "Alle Umzugsgüter sind bei BAK Transport vollversichert. Im unwahrscheinlichen Fall eines Schadens regulieren wir über unsere Versicherung — unkompliziert und schnell.",
  priv_page_faq3_q: "Kann ich auch nur einzelne Leistungen buchen?",
  priv_page_faq3_a:
    "Ja. Wir bieten auch Teilleistungen an — z.B. nur Transport ohne Verpackung, oder nur Möbelmontage ohne Umzug. Fragen Sie einfach an.",
  priv_page_cta_h2: "Privatumzug anfragen",

  // Firmenumzug subpage
  firm_page_label: "LEISTUNGEN",
  firm_page_title: "Firmenumzug Wien",
  firm_page_subtitle:
    "Strukturierter Büroumzug mit minimaler Betriebsunterbrechung — damit Ihr Unternehmen schnell wieder läuft.",
  firm_page_h2: "Ihr Betrieb zieht um — wir planen alles.",
  firm_page_p1:
    "Ein Firmenumzug ist kein gewöhnlicher Umzug — er muss geplant, koordiniert und so umgesetzt werden, dass Ihr Betrieb so wenig wie möglich darunter leidet. Genau das ist unser Spezialgebiet.",
  firm_page_p2:
    "Wir arbeiten in allen 23 Wiener Bezirken und führen Büroumzüge auch außerhalb der Geschäftszeiten durch — abends, am Wochenende oder an Feiertagen.",
  firm_page_p3:
    "Sie erhalten nach der kostenlosen Besichtigung einen verbindlichen Fixpreis — keine Stundenhonorare, keine bösen Überraschungen.",
  firm_page_check1: "Individuelle Umzugsplanung",
  firm_page_check2: "Arbeit außerhalb der Geschäftszeiten möglich",
  firm_page_check3: "Demontage & Montage von Büromöbeln",
  firm_page_check4: "IT-Equipment sicher verpackt",
  firm_page_check5: "Vollversicherung aller Güter",
  firm_page_check6: "Fixpreis nach Besichtigung",
  firm_page_card1_title: "Minimale Ausfallzeit",
  firm_page_card1_text:
    "Wir planen den Umzug so, dass Ihr Betrieb so schnell wie möglich wieder voll einsatzbereit ist.",
  firm_page_card2_title: "Diskrete Abwicklung",
  firm_page_card2_text:
    "Professionelles Auftreten, sauberes Arbeiten, kein Chaos — Ihre Mitarbeiter und Kunden bemerken kaum etwas.",
  firm_page_card3_title: "Erfahrene Büroumzüge",
  firm_page_card3_text:
    "Wir haben Dutzende Büros und Praxen umgezogen. Wissen, Werkzeug und Logistik sind vorhanden.",
  firm_page_price_h2: "Preisübersicht Firmenumzug",
  firm_page_price_footnote:
    "Endpreise nach kostenloser Besichtigung. Fixpreis garantiert.",
  firm_page_p1_label: "Kleinbüro (bis 100 m²)",
  firm_page_p1_price: "ab €850",
  firm_page_p1_detail: "2–3 Helfer, 1 LKW",
  firm_page_p2_label: "Mittelbüro (100–300 m²)",
  firm_page_p2_price: "ab €1.800",
  firm_page_p2_detail: "4–5 Helfer, 2 LKW",
  firm_page_p3_label: "Großbüro (300+ m²)",
  firm_page_p3_price: "Auf Anfrage",
  firm_page_p3_detail: "individuelles Konzept",
  firm_page_faq_h2: "Häufige Fragen zum Firmenumzug",
  firm_page_faq1_q: "Können Sie den Umzug am Wochenende durchführen?",
  firm_page_faq1_a:
    "Ja, auf Wunsch führen wir Firmenumzüge auch samstags oder sonntags durch — damit Ihr Betrieb am nächsten Werktag reibungslos weiterläuft.",
  firm_page_faq2_q: "Wie gehen Sie mit empfindlicher IT-Ausstattung um?",
  firm_page_faq2_a:
    "Server, Monitore und andere IT-Geräte werden mit Spezialverpackung und -transport gesichert. Auf Wunsch arbeiten wir mit Ihrem IT-Dienstleister zusammen.",
  firm_page_faq3_q: "Gibt es eine Mindestauftragsgröße?",
  firm_page_faq3_a:
    "Nein. Wir übernehmen Firmenumzüge jeder Größe — vom Einzelbüro bis zum mehrstöckigen Unternehmensstandort.",
  firm_page_cta_h2: "Firmenumzug anfragen",

  // Küchenmontage subpage
  kueche_page_label: "LEISTUNGEN",
  kueche_page_title: "Küchenmontage Wien",
  kueche_page_subtitle:
    "Professionelle Montage aller Küchenmarken — vom ersten Schrank bis zum Wasseranschluss.",
  kueche_page_h2: "Ihre neue Küche — perfekt montiert.",
  kueche_page_p1:
    "Eine neue Küche ist aufregend — die Montage kann komplex sein. Unser Team übernimmt das vollständig: Schränke aufhängen, ausrichten, Elektro- und Wasseranschlüsse herstellen und alles bis ins letzte Detail justieren.",
  kueche_page_p2:
    "Wir montieren alle gängigen Küchenhersteller — IKEA METOD, Nolte, Nobilia, Häcker, Hüppe und viele mehr. Auf Wunsch demontieren wir auch Ihre alte Küche.",
  kueche_page_p3:
    "Auf alle Montagearbeiten geben wir 2 Jahre Garantie — ohne Wenn und Aber.",
  kueche_page_check1: "IKEA, Nolte, Nobilia, Häcker & mehr",
  kueche_page_check2: "Elektro- und Wasseranschluss inklusive",
  kueche_page_check3: "2 Jahre Garantie auf die Montage",
  kueche_page_check4: "Alte Küche auf Wunsch demontiert",
  kueche_page_check5: "Fixpreis nach Aufmaß",
  kueche_page_check6: "Schutz für Böden und Wände",
  kueche_page_card1_title: "Alle Küchenmarken",
  kueche_page_card1_text:
    "Ob Einbauküche von IKEA oder Maßküche von Nolte — wir montieren alle gängigen Marken fachgerecht und zuverlässig.",
  kueche_page_card2_title: "Komplettservice",
  kueche_page_card2_text:
    "Wir kümmern uns um alles: Montage, Elektro- und Wasseranschluss, Ausrichten und Nachjustieren bis alles perfekt sitzt.",
  kueche_page_card3_title: "2 Jahre Garantie",
  kueche_page_card3_text:
    "Auf unsere Montagearbeit geben wir 2 Jahre Garantie. Bei Problemen kommen wir ohne Diskussion wieder.",
  kueche_page_price_h2: "Preisübersicht Küchenmontage",
  kueche_page_price_footnote: "Fixpreis nach Aufmaß. Inklusive aller Anschlüsse.",
  kueche_page_p1_label: "Kleine Küche (bis 5 Schränke)",
  kueche_page_p1_price: "ab €380",
  kueche_page_p1_detail: "inkl. Anschlüsse",
  kueche_page_p2_label: "Mittelgroße Küche",
  kueche_page_p2_price: "ab €680",
  kueche_page_p2_detail: "5–10 Schränke inkl. Anschlüsse",
  kueche_page_p3_label: "Große Küche",
  kueche_page_p3_price: "ab €980",
  kueche_page_p3_detail: "10+ Schränke, Kücheninsel",
  kueche_page_faq_h2: "Häufige Fragen zur Küchenmontage",
  kueche_page_faq1_q: "Schließen Sie auch Elektro und Wasser an?",
  kueche_page_faq1_a:
    "Ja, wir übernehmen die fachgerechte Installation aller Anschlüsse — Wasser, Abwasser und Elektroanschlüsse für Herd, Geschirrspüler und Co.",
  kueche_page_faq2_q: "Können Sie auch unsere alte Küche demontieren?",
  kueche_page_faq2_a:
    "Ja, auf Wunsch demontieren wir die alte Küche vor der Montage der neuen. Entsorgung ist gegen Aufpreis ebenfalls möglich.",
  kueche_page_faq3_q: "Wie lange dauert eine Küchenmontage?",
  kueche_page_faq3_a:
    "Je nach Größe zwischen einem halben und zwei Tagen. Nach dem Aufmaß nennen wir Ihnen eine genaue Zeitschätzung.",
  kueche_page_cta_h2: "Küchenmontage anfragen",

  // Möbelmontage subpage
  moebel_page_label: "LEISTUNGEN",
  moebel_page_title: "Möbelmontage Wien",
  moebel_page_subtitle:
    "Schneller Auf- und Abbau aller Möbelmarken — präzise, sauber und ohne Kratzer.",
  moebel_page_h2: "Möbel aufbauen? Wir erledigen das.",
  moebel_page_p1:
    "Neue Möbel können eine Freude sein — der Aufbau oft weniger. Unser erfahrenes Team übernimmt das für Sie: professionell, schnell und ohne Kratzer an Böden oder Wänden.",
  moebel_page_p2:
    "Wir montieren alle gängigen Marken — von IKEA bis BoConcept. Der Dienst ist auch unabhängig von einem Umzug buchbar.",
  moebel_page_p3:
    "Nach dem Aufbau nehmen wir alle Kartons und Verpackungsreste mit. Sie zahlen einen fairen Fixpreis — vereinbart vor dem Einsatz.",
  moebel_page_check1: "Alle Marken: IKEA, Hülsta, BoConcept & mehr",
  moebel_page_check2: "Auch ohne Umzug buchbar",
  moebel_page_check3: "Schutzmatten für Böden und Wände",
  moebel_page_check4: "Entsorgung des Verpackungsmaterials",
  moebel_page_check5: "Fixpreis nach Auftragsumfang",
  moebel_page_check6: "Rückmeldung in 60 Minuten",
  moebel_page_card1_title: "Alle Marken",
  moebel_page_card1_text:
    "Wir montieren Möbel aller Hersteller — IKEA, Hülsta, Nolte, BoConcept, Maison du Monde und viele mehr.",
  moebel_page_card2_title: "Kein Umzug nötig",
  moebel_page_card2_text:
    "Sie müssen nicht umziehen, um unseren Montagedienst zu nutzen. Neue Möbel geliefert? Wir bauen sie auf.",
  moebel_page_card3_title: "Saubere Arbeit",
  moebel_page_card3_text:
    "Schutzmatten auf Böden und Wänden, sorgfältige Arbeitsweise, Entsorgung aller Kartons und Verpackungen inklusive.",
  moebel_page_price_h2: "Preisübersicht Möbelmontage",
  moebel_page_price_footnote: "Fixpreis nach Auftragsumfang. Kein Stundenhonorar.",
  moebel_page_p1_label: "Kleiner Auftrag",
  moebel_page_p1_price: "ab €120",
  moebel_page_p1_detail: "1–2 Möbelstücke, bis 2h",
  moebel_page_p2_label: "Mittlerer Auftrag",
  moebel_page_p2_price: "ab €280",
  moebel_page_p2_detail: "bis 5 Möbelstücke, bis 4h",
  moebel_page_p3_label: "Großer Auftrag",
  moebel_page_p3_price: "ab €480",
  moebel_page_p3_detail: "Schlafzimmer, Wohnzimmer etc.",
  moebel_page_faq_h2: "Häufige Fragen zur Möbelmontage",
  moebel_page_faq1_q: "Was kostet eine Möbelmontage in Wien?",
  moebel_page_faq1_a:
    "Kleine Einzelmöbel liegen meist bei ca. 50–100 €, Zimmermöbel bei ca. 150–300 € und komplette Wohnungen je nach Umfang bei ca. 300–600 €. Ein IKEA-Schrank liegt häufig bei ca. 80–150 €, ein Bett bei ca. 60–120 €.",
  moebel_page_faq2_q: "Wie lange dauert der Möbelaufbau?",
  moebel_page_faq2_a:
    "Das hängt vom Umfang ab. Einzelne Möbel sind oft in 1–2 Stunden aufgebaut, größere Einrichtungen brauchen meist 2–4 Stunden. Termine sind nach Absprache auch am Wochenende möglich.",
  moebel_page_faq3_q: "Welche Möbelmarken montieren Sie?",
  moebel_page_faq3_a:
    "Wir montieren Möbel von IKEA, XXXLutz, Mömax, Kika, Leiner, Möbelix und vielen weiteren Herstellern. Unser Team ist auf unterschiedliche Systeme, Beschläge und Aufbauarten vorbereitet.",
  moebel_page_faq4_q: "Montieren Sie auch IKEA-Möbel?",
  moebel_page_faq4_a:
    "Ja. Besonders häufig montieren wir IKEA-Systeme wie PAX, MALM, BILLY, BESTA und KALLAX. Die Kosten liegen je nach Möbel und Aufwand meist bei ca. 60–200 €.",
  moebel_page_faq5_q: "Bringen Sie Werkzeug und Montagematerial mit?",
  moebel_page_faq5_a:
    "Ja. Professionelles Werkzeug, Montagehilfen und übliches Kleinmaterial bringen wir mit. Falls spezielle Dübel oder Sonderteile nötig sind, klären wir das vorab mit Ihnen.",
  moebel_page_faq6_q: "Ist die Möbelmontage versichert?",
  moebel_page_faq6_a:
    "Ja. Unsere Montagearbeiten sind versichert. Wir arbeiten sorgfältig mit Schutz für Boden, Wände und Möbel und stehen für saubere Arbeit gerade.",
  moebel_page_cta_h2: "Möbelmontage anfragen",

  // Notfallumzug subpage
  notfall_page_label: "LEISTUNGEN",
  notfall_page_title: "Notfallumzug Wien",
  notfall_page_subtitle: "Kurzfristig umziehen? Wir helfen — oft noch am selben Tag.",
  notfall_page_h2: "Dringend umziehen — kein Problem.",
  notfall_page_p1:
    "Manchmal muss es schnell gehen. Ob Wasserschaden, kurzfristige Kündigung oder eine familiäre Notlage — BAK Transport ist auch dann für Sie da, wenn die Zeit drängt.",
  notfall_page_p2:
    "Unser Team ist 24/7 telefonisch erreichbar. Wir reagieren innerhalb von 60 Minuten und können in vielen Fällen noch am selben Tag anrücken.",
  notfall_page_p3:
    "Kein Notfallaufschlag. Fairer Fixpreis — auch wenn es schnell gehen muss.",
  notfall_page_check1: "Oft noch am selben Tag möglich",
  notfall_page_check2: "24/7 telefonisch erreichbar",
  notfall_page_check3: "Rückmeldung in 60 Minuten",
  notfall_page_check4: "Flexible Terminplanung",
  notfall_page_check5: "Vollversicherung aller Güter",
  notfall_page_check6: "Fixpreis auch bei Notfällen",
  notfall_page_card1_title: "Schnelle Reaktion",
  notfall_page_card1_text:
    "Wir wissen, dass ein Notfallumzug stressig ist. Deshalb reagieren wir schnell: Rückmeldung in 60 Min, Termin oft noch am selben Tag.",
  notfall_page_card2_title: "Rund um die Uhr",
  notfall_page_card2_text:
    "Notfälle kennen keine Bürozeiten. Unser Team ist 24/7 per Telefon erreichbar — auch an Feiertagen.",
  notfall_page_card3_title: "Faire Preise",
  notfall_page_card3_text:
    "Auch im Notfall zahlen Sie keinen Aufschlag. Wir erstellen ein faires Angebot — transparent und ohne Überraschungen.",
  notfall_page_price_h2: "Preisübersicht Notfallumzug",
  notfall_page_price_footnote: "Kein Notfallaufschlag. Fairer Fixpreis.",
  notfall_page_p1_label: "Kleiner Notfallumzug",
  notfall_page_p1_price: "ab €480",
  notfall_page_p1_detail: "1–2 Zimmer, kurzfristig",
  notfall_page_p2_label: "Mittelgroßer Umzug",
  notfall_page_p2_price: "ab €780",
  notfall_page_p2_detail: "3–4 Zimmer, selber Tag",
  notfall_page_p3_label: "Soforteinsatz",
  notfall_page_p3_price: "Auf Anfrage",
  notfall_page_p3_detail: "innerhalb 2h, je nach Verfügbarkeit",
  notfall_page_faq_h2: "Häufige Fragen zum Notfallumzug",
  notfall_page_faq1_q: "Wie kurzfristig können Sie einen Umzug durchführen?",
  notfall_page_faq1_a:
    "Im besten Fall noch am selben Tag. Rufen Sie uns an und wir prüfen sofort die Verfügbarkeit unserer Teams.",
  notfall_page_faq2_q: "Sind Notfallumzüge teurer?",
  notfall_page_faq2_a:
    "Nein. Wir verrechnen keinen Notfallaufschlag. Sie erhalten ein faires Angebot — wie bei einem regulären Umzug.",
  notfall_page_faq3_q: "Was gilt als Notfall?",
  notfall_page_faq3_a:
    "Alles, was dringend ist: Wasserschaden, kurzfristige Wohnungskündigung, plötzlicher Jobwechsel, familiäre Notlage. Wir helfen in allen Situationen.",
  notfall_page_cta_h2: "Notfallumzug anfragen",

  // Schwerlasttransport subpage
  schwer_page_label: "LEISTUNGEN",
  schwer_page_title: "Schwerlasttransport Wien",
  schwer_page_subtitle:
    "Klaviere, Tresore, Maschinen — sicher transportiert mit Spezialequipment.",
  schwer_page_h2: "Schwer geht auch — wenn man weiß wie.",
  schwer_page_p1:
    "Schwere und sperrige Objekte erfordern Erfahrung, Spezialwerkzeug und die richtigen Techniken. Unser Team ist ausgebildet für Klaviere, Tresore, Industriemaschinen und andere Schwertransporte.",
  schwer_page_p2:
    "Wir nutzen professionelles Equipment — Tresorroller, Klaviertransportgurte, verstärkte Hebegurte — damit Ihr Objekt sicher ans Ziel kommt, ohne Schäden an Böden, Wänden oder Treppenhäusern.",
  schwer_page_p3: "Jedes Objekt ist vollversichert. Fixpreis nach Besichtigung.",
  schwer_page_check1: "Klaviere & Flügel aller Größen",
  schwer_page_check2: "Tresore bis 1.000 kg",
  schwer_page_check3: "Industriemaschinen & Server",
  schwer_page_check4:
    "Spezialequipment: Sackkarren, Rollwagen, Hebegurte",
  schwer_page_check5: "Vollversicherung inklusive",
  schwer_page_check6: "Fixpreis nach Besichtigung",
  schwer_page_card1_title: "Spezialequipment",
  schwer_page_card1_text:
    "Für Schwertransporte nutzen wir professionelle Hilfsmittel: Tresorroller, Klaviertransportgurte, Lastenhebegurte und verstärkte Rollwagen.",
  schwer_page_card2_title: "Erfahrene Spezialisten",
  schwer_page_card2_text:
    "Nicht jeder kann einen 400 kg schweren Tresor treppauf transportieren. Unsere Mitarbeiter sind speziell geschult und kennen die Kniffe.",
  schwer_page_card3_title: "Vollversichert",
  schwer_page_card3_text:
    "Jedes Objekt, egal wie schwer oder wertvoll, ist während des gesamten Transports vollversichert.",
  schwer_page_price_h2: "Preisübersicht Schwerlasttransport",
  schwer_page_price_footnote:
    "Fixpreis nach Besichtigung. Vollversicherung inklusive.",
  schwer_page_p1_label: "Klavier / Keyboard",
  schwer_page_p1_price: "ab €280",
  schwer_page_p1_detail: "inkl. Auf-/Abbau",
  schwer_page_p2_label: "Tresor bis 300 kg",
  schwer_page_p2_price: "ab €380",
  schwer_page_p2_detail: "inkl. Positionierung",
  schwer_page_p3_label: "Sonderanfragen",
  schwer_page_p3_price: "Auf Anfrage",
  schwer_page_p3_detail: "Maschinen, Flügel, Großobjekte",
  schwer_page_faq_h2: "Häufige Fragen zum Schwerlasttransport",
  schwer_page_faq1_q: "Können Sie auch Flügel transportieren?",
  schwer_page_faq1_a:
    "Ja. Flügel und Klaviere sind unsere häufigsten Schwertransportaufträge. Wir haben das passende Equipment und die Erfahrung.",
  schwer_page_faq2_q: "Bis zu welchem Gewicht transportieren Sie Tresore?",
  schwer_page_faq2_a:
    "Wir transportieren Tresore bis ca. 1.000 kg. Für schwerere Objekte erstellen wir auf Anfrage ein individuelles Angebot.",
  schwer_page_faq3_q: "Ist der Transport versichert?",
  schwer_page_faq3_a:
    "Ja, alle Objekte sind während des Transports vollversichert — unabhängig vom Wert.",
  schwer_page_cta_h2: "Schwerlasttransport anfragen",

  // Wien region page
  wien_page_label: "REGIONEN",
  wien_page_title: "Umzug Wien",
  wien_page_subtitle: "Alle 23 Bezirke — ortskundig, zuverlässig, Fixpreis.",
  wien_page_h2: "Wien kennen wir wie unsere Westentasche.",
  wien_page_p1:
    "Wien ist unsere Heimat — und wir kennen jeden Winkel. Von den engen Gassen im 1. Bezirk bis zu den großen Wohnblöcken in Favoriten oder Floridsdorf: Unsere Teams wissen, was sie erwartet.",
  wien_page_p2:
    "Wir übernehmen die Parkgenehmigung, kennen die Stiegenhäuser und sind in allen 23 Bezirken tätig — mit dem gewohnten BAK-Fixpreis.",
  wien_page_p3:
    "Ob Altbau in Neubau, Studio in Penthouse — wir haben schon alles gesehen und alles gemeistert.",
  wien_page_check1: "Alle 23 Wiener Bezirke",
  wien_page_check2: "Ortskundige Teams je Bezirk",
  wien_page_check3: "Erfahrung mit engen Stiegenhäusern",
  wien_page_check4: "Parkgenehmigungen organisieren wir",
  wien_page_check5: "Fixpreis nach Besichtigung",
  wien_page_check6: "Rückmeldung in 60 Minuten",
  wien_page_card1_title: "Lokal & ortskundig",
  wien_page_card1_text:
    "Unsere Teams kennen jeden Bezirk — enge Einfahrten in Favoriten, schmale Gassen in Ottakring, Parksituationen in der Innenstadt.",
  wien_page_card2_title: "Parkgenehmigungen",
  wien_page_card2_text:
    "Wir kümmern uns um die Parkgenehmigung für den Umzugstag — damit kein kostbarer Platz vor Ihrer Tür fehlt.",
  wien_page_card3_title: "Erfahrung mit Altbauten",
  wien_page_card3_text:
    "Schmale Stiegen, keine Lifte, niedrige Deckenhöhen — wir kennen die Herausforderungen der Wiener Altbauten genau.",
  wien_page_districts_h2: "Umzug in allen 23 Wiener Bezirken",
  wien_page_districts_desc:
    "Als Umzugsfirma in Wien sind wir in allen 23 Bezirken tätig — vom 1. Bezirk (Innere Stadt) bis zum 23. Bezirk (Liesing). Wir kennen die Eigenheiten jedes Bezirks: enge Gassen in Neubau, Altbau-Stiegenhäuser in Favoriten, Parkzonen in Währing. Das bedeutet für Sie: weniger Aufwand, mehr Verlässlichkeit.",
  wien_page_price_h2: "Preisübersicht Umzug Wien",
  wien_page_price_footnote:
    "Fixpreis nach kostenloser Besichtigung. Alle 23 Bezirke.",
  wien_page_p1_label: "1–2 Zimmer",
  wien_page_p1_price: "ab €550",
  wien_page_p1_detail: "innerhalb Wien, Fixpreis",
  wien_page_p2_label: "3–4 Zimmer",
  wien_page_p2_price: "ab €850",
  wien_page_p2_detail: "innerhalb Wien, Fixpreis",
  wien_page_p3_label: "5+ Zimmer / Haus",
  wien_page_p3_price: "ab €1.200",
  wien_page_p3_detail: "nach Besichtigung",
  wien_page_faq_h2: "Häufige Fragen zum Umzug in Wien",
  wien_page_faq1_q: "Arbeiten Sie in allen 23 Bezirken?",
  wien_page_faq1_a:
    "Ja. Wir sind in ganz Wien tätig — von Floridsdorf im 21. bis Liesing im 23. Bezirk. Kein Bezirk ist zu weit.",
  wien_page_faq2_q: "Wie läuft es mit dem Parken am Umzugstag?",
  wien_page_faq2_a:
    "Wir beantragen auf Wunsch eine Parkgenehmigung bei der Gemeinde Wien, damit der LKW direkt vor Ihrer Tür halten kann.",
  wien_page_faq3_q: "Machen Sie auch Umzüge innerhalb desselben Hauses?",
  wien_page_faq3_a:
    "Ja. Auch Stockwerkswechsel im gleichen Gebäude übernehmen wir professionell und zum Fixpreis.",
  wien_page_cta_h2: "Umzug Wien anfragen",

  // Österreich region page
  oe_page_label: "REGIONEN",
  oe_page_title: "Umzug Österreich",
  oe_page_subtitle: "Bundesweit tätig — Graz, Linz, Salzburg, Innsbruck & mehr.",
  oe_page_h2: "Ganz Österreich — ein Ansprechpartner.",
  oe_page_p1:
    "BAK Transport ist nicht nur in Wien und Niederösterreich tätig — wir fahren in alle 9 Bundesländer. Egal ob Graz, Linz, Salzburg oder Innsbruck: Ihr Umzug ist bei uns in guten Händen.",
  oe_page_p2:
    "Für Fernumzüge bieten wir Videobesichtigungen an — Sie müssen nicht extra nach Wien kommen. Wir erstellen trotzdem einen verbindlichen Fixpreis.",
  oe_page_p3:
    "Ein Ansprechpartner, ein Fixpreis, ein entspannter Umzug — egal wohin in Österreich.",
  oe_page_check1: "Alle 9 Bundesländer",
  oe_page_check2: "Graz, Linz, Salzburg, Innsbruck & mehr",
  oe_page_check3: "Videobesichtigung für Fernumzüge",
  oe_page_check4: "Fixpreis garantiert",
  oe_page_check5: "Vollversicherung österreichweit",
  oe_page_check6: "Rückmeldung in 60 Minuten",
  oe_page_card1_title: "Österreichweit",
  oe_page_card1_text:
    "Von Vorarlberg bis Burgenland — wir transportieren Ihren Haushalt in alle Ecken Österreichs, mit dem gewohnten BAK-Service.",
  oe_page_card2_title: "Fixpreis für Fernumzüge",
  oe_page_card2_text:
    "Auch bei Fernumzügen innerhalb Österreichs erhalten Sie einen Fixpreis. Keine Kilometerpauschalen, keine Überraschungen.",
  oe_page_card3_title: "Videobesichtigung",
  oe_page_card3_text:
    "Für Umzüge außerhalb Wiens bieten wir Videobesichtigungen an — bequem vom Handy aus, trotzdem verbindlicher Fixpreis.",
  oe_page_price_h2: "Preisübersicht Österreichweit",
  oe_page_price_footnote: "Fixpreis nach Videobesichtigung. Bundesweit tätig.",
  oe_page_p1_label: "Wien → Graz / Linz",
  oe_page_p1_price: "ab €980",
  oe_page_p1_detail: "Fixpreis inkl. Anfahrt",
  oe_page_p2_label: "Wien → Salzburg / Innsbruck",
  oe_page_p2_price: "ab €1.280",
  oe_page_p2_detail: "Fixpreis inkl. Anfahrt",
  oe_page_p3_label: "Individuelle Routen",
  oe_page_p3_price: "Auf Anfrage",
  oe_page_p3_detail: "Videobesichtigung möglich",
  oe_page_faq_h2: "Häufige Fragen zum Umzug in Österreich",
  oe_page_faq1_q: "Machen Sie auch Umzüge nach Graz oder Linz?",
  oe_page_faq1_a:
    "Ja. Wir sind österreichweit tätig. Graz, Linz, Salzburg, Innsbruck — alles machbar, alles mit Fixpreis.",
  oe_page_faq2_q: "Wie läuft ein Fernumzug in Österreich ab?",
  oe_page_faq2_a:
    "Nach einer kostenlosen Videobesichtigung erhalten Sie ein Fixpreisangebot. Wir fahren mit einem oder zwei LKWs zu Ihnen und bringen alles an den neuen Ort.",
  oe_page_faq3_q: "Wie lange dauert ein Umzug nach Innsbruck?",
  oe_page_faq3_a:
    "Der Transport dauert ca. 4–5 Stunden reine Fahrzeit. Inklusive Be- und Entladen planen wir in der Regel einen vollen Tag ein.",
  oe_page_cta_h2: "Umzug Österreich anfragen",

  // Niederösterreich region page
  noe_page_label: "REGIONEN",
  noe_page_title: "Umzug Niederösterreich",
  noe_page_subtitle:
    "Klosterneuburg, Mödling, Baden, St. Pölten — wir sind überall.",
  noe_page_h2: "Niederösterreich — von Wien aus bestens erreichbar.",
  noe_page_p1:
    "Unser Einsatzgebiet reicht weit über die Wiener Stadtgrenzen hinaus. Von Klosterneuburg im Norden bis Wiener Neustadt im Süden — BAK Transport ist in ganz Niederösterreich für Sie da.",
  noe_page_p2:
    "Umzüge zwischen Wien und Niederösterreich sind unser Alltag. Sie erhalten einen fairen Fixpreis — nach persönlicher oder Videobesichtigung.",
  noe_page_p3:
    "Keine Kilometerpauschalen, keine Stundenhonorare. Ein Preis, der gilt.",
  noe_page_check1: "Klosterneuburg, Mödling, Baden, Stockerau",
  noe_page_check2: "St. Pölten, Krems, Wiener Neustadt",
  noe_page_check3: "Umzüge Wien ↔ Niederösterreich",
  noe_page_check4: "Fixpreis nach Besichtigung oder Video-Call",
  noe_page_check5: "Vollversicherung",
  noe_page_check6: "Rückmeldung in 60 Minuten",
  noe_page_card1_title: "Großes Einsatzgebiet",
  noe_page_card1_text:
    "Von der Stadtgrenze Wien bis in alle NÖ-Bezirke — unser Radius umfasst das gesamte Bundesland.",
  noe_page_card2_title: "Wien–NÖ Spezialisten",
  noe_page_card2_text:
    "Umzüge zwischen Wien und Niederösterreich sind unser Alltag. Kurze Wege, faire Preise.",
  noe_page_card3_title: "Video-Besichtigung möglich",
  noe_page_card3_text:
    "Sie müssen nicht vor Ort sein. Wir machen die Besichtigung auch per Video-Call und erstellen trotzdem einen Fixpreis.",
  noe_page_price_h2: "Preisübersicht Niederösterreich",
  noe_page_price_footnote: "Fixpreis nach Besichtigung oder Video-Call.",
  noe_page_p1_label: "Wien Stadtrand ↔ NÖ",
  noe_page_p1_price: "ab €680",
  noe_page_p1_detail: "bis 30 km Entfernung",
  noe_page_p2_label: "Wien ↔ Mittel-NÖ",
  noe_page_p2_price: "ab €880",
  noe_page_p2_detail: "30–80 km Entfernung",
  noe_page_p3_label: "Wien ↔ West-NÖ",
  noe_page_p3_price: "ab €1.100",
  noe_page_p3_detail: "St. Pölten, Krems etc.",
  noe_page_faq_h2: "Häufige Fragen zum Umzug in Niederösterreich",
  noe_page_faq1_q: "Fahren Sie auch nach Wiener Neustadt oder Krems?",
  noe_page_faq1_a:
    "Ja, wir sind im gesamten Bundesland Niederösterreich tätig — inklusive Wiener Neustadt, Krems, Amstetten und anderen Städten.",
  noe_page_faq2_q: "Machen Sie auch eine Besichtigung außerhalb von Wien?",
  noe_page_faq2_a:
    "Ja. Wir kommen auch nach NÖ zur kostenlosen Besichtigung. Alternativ ist eine Videobesichtigung möglich.",
  noe_page_faq3_q: "Ist ein Umzug Wien → Niederösterreich teurer?",
  noe_page_faq3_a:
    "Nur minimal — die Entfernung wird eingerechnet, aber der Fixpreis bleibt ein Fixpreis. Keine bösen Überraschungen.",
  noe_page_cta_h2: "Umzug Niederösterreich anfragen",

  // Deutschland region page
  de_page_label: "REGIONEN",
  de_page_title: "Umzug nach Deutschland",
  de_page_subtitle:
    "Wien nach München, Stuttgart, Frankfurt, Berlin — zuverlässig und versichert.",
  de_page_h2: "Österreich nach Deutschland — kein Zoll, kein Problem.",
  de_page_p1:
    "Ein Umzug von Wien nach Deutschland ist für uns Alltag. Als EU-Binnenumzug fallen keine Zollformalitäten an — Ihre Möbel kommen direkt und unkompliziert an Ihre neue Adresse in München, Frankfurt, Berlin oder einer anderen deutschen Stadt.",
  de_page_p2:
    "Die Besichtigung führen wir bequem per Video-Call durch. Innerhalb von 24 Stunden erhalten Sie einen verbindlichen Fixpreis.",
  de_page_p3:
    "Kein Zwischenlager. Keine Umwege. Direkt von Tür zu Tür — vollversichert.",
  de_page_check1: "München, Stuttgart, Frankfurt, Berlin & mehr",
  de_page_check2: "Kein Zoll (EU-Binnenmarkt)",
  de_page_check3: "Vollversicherung bis zum Zielort",
  de_page_check4: "Fixpreis nach Videobesichtigung",
  de_page_check5: "Erfahrung mit grenzüberschreitenden Umzügen",
  de_page_check6: "Rückmeldung in 60 Minuten",
  de_page_card1_title: "EU-Spezialist",
  de_page_card1_text:
    "Als EU-Umzug fällt kein Zoll an. Wir kennen die Formalitäten und kümmern uns um alle Papiere.",
  de_page_card2_title: "Direktfahrten",
  de_page_card2_text:
    "Ihre Möbel kommen direkt von Wien zu Ihrer neuen Adresse in Deutschland — keine Zwischenlager, kein Umpacken.",
  de_page_card3_title: "Fixpreis",
  de_page_card3_text:
    "Sie erhalten einen verbindlichen Fixpreis nach der Videobesichtigung — egal wie weit der Weg ist.",
  de_page_price_h2: "Preisübersicht Umzug nach Deutschland",
  de_page_price_footnote:
    "Fixpreis nach Videobesichtigung. Direkttransport von Tür zu Tür.",
  de_page_p1_label: "Wien → München",
  de_page_p1_price: "ab €1.480",
  de_page_p1_detail: "ca. 450 km, Fixpreis",
  de_page_p2_label: "Wien → Frankfurt / Stuttgart",
  de_page_p2_price: "ab €1.980",
  de_page_p2_detail: "ca. 750 km, Fixpreis",
  de_page_p3_label: "Wien → Berlin / Hamburg",
  de_page_p3_price: "ab €2.480",
  de_page_p3_detail: "ca. 1.000 km, Fixpreis",
  de_page_faq_h2: "Häufige Fragen zum Umzug nach Deutschland",
  de_page_faq1_q: "Fällt beim Umzug nach Deutschland Zoll an?",
  de_page_faq1_a:
    "Nein. Österreich und Deutschland sind beide EU-Mitglieder — für private Umzugsgüter fällt kein Zoll an.",
  de_page_faq2_q: "Wie läuft die Besichtigung ab?",
  de_page_faq2_a:
    "Für Umzüge nach Deutschland führen wir die Besichtigung per Video-Call durch. Danach erhalten Sie innerhalb von 24 Stunden ein verbindliches Angebot.",
  de_page_faq3_q: "Wie lange dauert der Transport nach München?",
  de_page_faq3_a:
    "Die Fahrtzeit beträgt ca. 3–4 Stunden. Inklusive Be- und Entladen ist der Umzug in der Regel an einem Tag abgeschlossen.",
  de_page_cta_h2: "Umzug nach Deutschland anfragen",

  // Schweiz region page
  ch_page_label: "REGIONEN",
  ch_page_title: "Umzug in die Schweiz",
  ch_page_subtitle: "Wien nach Zürich, Bern, Basel — inklusive Zollinformationen.",
  ch_page_h2: "Österreich in die Schweiz — mit Planung kein Problem.",
  ch_page_p1:
    "Ein Umzug in die Schweiz erfordert etwas mehr Vorbereitung als ein EU-Umzug — aber mit BAK Transport haben Sie einen erfahrenen Partner an Ihrer Seite, der die Zollformalitäten kennt und Sie durch den gesamten Prozess begleitet.",
  ch_page_p2:
    "Ihre Möbel kommen direkt von Wien zu Ihrer neuen Schweizer Adresse — ob Zürich, Bern, Basel oder Genf. Wir übernehmen Direkttransporte ohne Zwischenlager.",
  ch_page_p3: "Fixpreis nach Videobesichtigung, innerhalb von 24 Stunden.",
  ch_page_check1: "Zürich, Bern, Basel, Genf & mehr",
  ch_page_check2: "Zollinformationen inklusive",
  ch_page_check3: "Vollversicherung bis zum Zielort",
  ch_page_check4: "Fixpreis nach Videobesichtigung",
  ch_page_check5: "Erfahrung mit Drittlandsexporten",
  ch_page_check6: "Rückmeldung in 60 Minuten",
  ch_page_card1_title: "Zoll-Know-how",
  ch_page_card1_text:
    "Die Schweiz ist kein EU-Mitglied — bei Umzügen fallen Zollformalitäten an. Wir begleiten Sie durch den Prozess und sorgen für reibungslose Abfertigung.",
  ch_page_card2_title: "Direkttransport",
  ch_page_card2_text:
    "Ihre Möbel fahren direkt von Wien in die Schweiz. Kein Umpacken, kein Zwischenlager — direkt zu Ihrer neuen Adresse.",
  ch_page_card3_title: "Verbindlicher Fixpreis",
  ch_page_card3_text:
    "Auch für Schweiz-Umzüge erhalten Sie einen Fixpreis — nach Videobesichtigung, innerhalb von 24 Stunden.",
  ch_page_price_h2: "Preisübersicht Umzug Schweiz",
  ch_page_price_footnote: "Fixpreis nach Videobesichtigung. Inkl. Zollabfertigung.",
  ch_page_p1_label: "Wien → Zürich / Basel",
  ch_page_p1_price: "ab €2.200",
  ch_page_p1_detail: "inkl. Zollabfertigung",
  ch_page_p2_label: "Wien → Bern / Genf",
  ch_page_p2_price: "ab €2.600",
  ch_page_p2_detail: "inkl. Zollabfertigung",
  ch_page_p3_label: "Weitere Routen",
  ch_page_p3_price: "Auf Anfrage",
  ch_page_p3_detail: "Videobesichtigung möglich",
  ch_page_faq_h2: "Häufige Fragen zum Umzug in die Schweiz",
  ch_page_faq1_q: "Muss ich beim Umzug in die Schweiz Zoll zahlen?",
  ch_page_faq1_a:
    "Bei privaten Umzugsgütern gibt es in der Schweiz Zollbefreiungen für Personen, die ihren Hauptwohnsitz in die Schweiz verlegen. Wir informieren Sie über alle Details.",
  ch_page_faq2_q: "Wie lange dauert der Transport nach Zürich?",
  ch_page_faq2_a:
    "Die Fahrzeit beträgt ca. 6–7 Stunden. Inklusive Zollabfertigung planen wir einen bis eineinhalb Tage ein.",
  ch_page_faq3_q: "Helfen Sie auch bei den Zolldokumenten?",
  ch_page_faq3_a:
    "Ja. Wir unterstützen Sie bei der Erstellung der notwendigen Dokumente und sorgen für eine reibungslose Zollabfertigung.",
  ch_page_cta_h2: "Umzug Schweiz anfragen",

  // Grenzüberschreitend region page
  grenz_page_label: "REGIONEN",
  grenz_page_title: "Grenzüberschreitende Umzüge",
  grenz_page_subtitle:
    "Europa in Reichweite — Deutschland, Schweiz, Slowakei, Tschechien, Ungarn & mehr.",
  grenz_page_h2: "Europa ist unser Arbeitsgebiet.",
  grenz_page_p1:
    "Von Wien aus sind wir europaweit unterwegs. Ob Bratislava, Budapest, Prag oder München — wir transportieren Ihren Hausrat zu Ihrer neuen Adresse in ganz Europa.",
  grenz_page_p2:
    "Innerhalb der EU fallen keine Zollformalitäten an. Für Drittländer wie die Schweiz begleiten wir Sie durch den gesamten Zollprozess — unkompliziert und transparent.",
  grenz_page_p3:
    "Ein Ansprechpartner, ein Fixpreis, ein entspannter internationaler Umzug.",
  grenz_page_check1: "Deutschland, Schweiz, Slowakei, Tschechien",
  grenz_page_check2: "Ungarn, Polen, Kroatien & weitere EU-Länder",
  grenz_page_check3: "Drittländer nach Absprache",
  grenz_page_check4: "Zoll- und Importinformationen",
  grenz_page_check5: "Vollversicherung europaweit",
  grenz_page_check6: "Fixpreis nach Videobesichtigung",
  grenz_page_card1_title: "EU & Drittländer",
  grenz_page_card1_text:
    "Innerhalb der EU keine Zollhürden. Für Drittländer wie die Schweiz oder UK informieren wir Sie über alle Formalitäten.",
  grenz_page_card2_title: "Direkttransport",
  grenz_page_card2_text:
    "Kein Umpacken unterwegs. Ihre Möbel fahren direkt von Wien zu Ihrer neuen Adresse — egal in welchem Land.",
  grenz_page_card3_title: "Ein Ansprechpartner",
  grenz_page_card3_text:
    "Für den gesamten internationalen Umzug haben Sie einen festen Ansprechpartner bei BAK Transport — von der Anfrage bis zur Lieferung.",
  grenz_page_price_h2: "Preisübersicht Internationale Umzüge",
  grenz_page_price_footnote: "Fixpreis nach Videobesichtigung. Europaweit.",
  grenz_page_p1_label: "Nachbarländer (bis 300 km)",
  grenz_page_p1_price: "ab €1.200",
  grenz_page_p1_detail: "Slowakei, Ungarn, Tschechien",
  grenz_page_p2_label: "Mittlere Distanz (300–800 km)",
  grenz_page_p2_price: "ab €1.800",
  grenz_page_p2_detail: "Deutschland, Polen, Kroatien",
  grenz_page_p3_label: "Weite Distanz (800+ km)",
  grenz_page_p3_price: "Auf Anfrage",
  grenz_page_p3_detail: "individuelle Kalkulation",
  grenz_page_faq_h2: "Häufige Fragen zu grenzüberschreitenden Umzügen",
  grenz_page_faq1_q: "In welche Länder fahren Sie?",
  grenz_page_faq1_a:
    "Wir fahren in alle EU-Länder sowie in die Schweiz. Für andere Drittländer erstellen wir auf Anfrage ein individuelles Angebot.",
  grenz_page_faq2_q: "Wie läuft ein internationaler Umzug ab?",
  grenz_page_faq2_a:
    "Nach einer Videobesichtigung erhalten Sie ein Fixpreisangebot. Wir organisieren alle Formalitäten und bringen Ihr Umzugsgut direkt an die neue Adresse.",
  grenz_page_faq3_q: "Brauche ich besondere Dokumente?",
  grenz_page_faq3_a:
    "Für EU-Umzüge nicht. Für Drittländer wie die Schweiz sind spezielle Zolldokumente nötig — wir helfen Ihnen dabei.",
  grenz_page_cta_h2: "Internationalen Umzug anfragen",
};

const en: typeof de = {
  // Navbar
  nav_leistungen: "Services",
  nav_regionen: "Regions",
  nav_unternehmen: "Company",
  nav_privatumzug: "Private Moving",
  nav_firmenumzug: "Office Moving",
  nav_moebelmontage: "Furniture Assembly",
  nav_kuechenmontage: "Kitchen Assembly",
  nav_schwerlasttransport: "Heavy Transport",
  nav_notfallumzug: "Emergency Move",
  nav_entruempelung: "Clearance",
  nav_wien: "Vienna",
  nav_niederoesterreich: "Lower Austria",
  nav_oesterreich: "Austria",
  nav_deutschland: "Germany",
  nav_schweiz: "Switzerland",
  nav_grenzueberschreitend: "Cross-Border",
  nav_ueber_uns: "About BAK Transport",
  nav_kontakt: "Contact",
  nav_faq: "FAQ",
  nav_karriere: "Careers",
  nav_impressum: "Legal Notice",
  nav_datenschutz: "Privacy Policy",

  // Hero
  hero_badge: "VIENNA & AUSTRIA",
  hero_h1_part2: "Your Move.",
  hero_h1_part3: "Our Mission.",
  hero_subtext:
    "We transport what matters to you — on time, professionally and at a fixed price. Private moves, office relocations, furniture assembly throughout Vienna and Austria.",
  hero_cta_quote: "Request a Quote Now",
  hero_cta_call: "Call Us",
  hero_badge1: "Own Truck Fleet",
  hero_badge2: "€100,000 insured",
  hero_badge3: "60 Min Response",
  hero_badge4: "WKO Member",
  hero_stat1: "Successful Moves",
  hero_stat2: "Google Rating",
  hero_stat3: "Quote Preparation",

  // StatsBar
  stats1: "Successful Moves",
  stats2: "Districts Covered",
  stats3: "Google Stars",
  stats4: "Response Guaranteed",

  // Services
  services_label: "OUR SERVICES",
  services_h2: "What We Do for You",
  services_desc:
    "From the first inquiry to the last box — BAK Transport takes care of everything.",
  services_learn_more: "Learn more →",
  svc1_title: "Private Move",
  svc1_desc:
    "Stress-free move from A to B. We take care of everything — from packing to assembly.",
  svc1_f1: "Free on-site inspection",
  svc1_f2: "Fixed price, no surprises",
  svc1_f3: "Full service incl. assembly",
  svc1_f4: "Insurance included",
  svc2_title: "Office Move",
  svc2_desc:
    "Your office is relocating — we make sure the business keeps running. Minimal downtime, maximum efficiency.",
  svc2_f1: "Moving outside business hours",
  svc2_f2: "IT & office equipment safely packed",
  svc2_f3: "Structured handling",
  svc2_f4: "Discreet and professional",
  svc3_title: "Assembly & Transport",
  svc3_desc:
    "Kitchen assembly, furniture building, individual transport — we also handle partial services as needed.",
  svc3_f1: "IKEA, Nolte, Nobilia kitchens",
  svc3_f2: "Furniture assembly and disassembly",
  svc3_f3: "Heavy transport",
  svc3_f4: "Individual transport on request",

  // WhyUs
  whyus_label: "WHY BAK TRANSPORT",
  whyus_h2: "The BAK Promise",
  whyus_body:
    "At BAK Transport Vienna, we place the greatest importance on ensuring that your move runs smoothly and stress-free from the very first enquiry to the very last box. Our experienced team of professional movers knows Vienna and all 23 districts inside out and ensures that your furniture and personal belongings arrive safely and on time at your new home. We offer you a transparent fixed price after a free inspection, so you know from the start exactly what your move will cost — with no hidden fees or unpleasant surprises.",
  whyus_quote:
    '"Your property in safe hands — from the first inquiry to the last box."',
  r1_title: "Fixed Price Guarantee",
  r1_text:
    "No unpleasant surprises after the move. After a free inspection, you receive a binding fixed price — what we agree is what you pay.",
  r2_title: "Own Fleet",
  r2_text:
    "Our modern trucks are equipped with tail lifts, furniture blankets and protective films. No subcontractors, no risk — we work only with our own staff.",
  r3_title: "60-Minute Response",
  r3_text:
    "No waiting on hold. After your inquiry, we get back to you within 60 minutes — with a concrete offer, not empty promises.",
  r4_title: "€100,000 Full Insurance",
  r4_text:
    "All items are covered with €100,000 full insurance — door to door. Damage? Out of the question. Your property is in safe hands.",

  // QuoteForm
  form_h2: "Quote in 60 Minutes",
  form_desc:
    "Tell us briefly about your move. We will get back to you within 60 minutes with a non-binding fixed price offer.",
  form_disclaimer: "No hidden costs. No stress. Just a fair price.",
  form_from: "From (Pickup Address)",
  form_from_placeholder: "e.g. Vienna 1010, Stephansplatz 1",
  form_to: "To (Delivery Address)",
  form_to_placeholder: "e.g. Vienna 1220, Seestadt 5",
  form_date: "Moving Date",
  form_movetype: "Type of Move",
  form_movetype_placeholder: "Please select…",
  form_size: "Approximate Apartment Size",
  form_notes: "Special requirements / Notes",
  form_notes_placeholder: "e.g. piano transport, no elevator, 3rd floor...",
  form_name: "Your Name",
  form_phone: "Phone Number",
  form_email: "Email Address",
  form_submit: "Request Free Quote →",
  form_note: "✓ Free & non-binding · ✓ Response in 60 min",
  move_type1: "Private Move",
  move_type2: "Office Move",
  move_type3: "Transport Only",
  move_type4: "Furniture Assembly",
  move_type5: "Clearance",
  apt_size1: "up to 50m²",
  apt_size2: "50–100m²",
  apt_size3: "over 100m²",

  // Pricing
  pricing_label: "TRANSPARENT PRICES",
  pricing_h2: "No Surprises.",
  pricing_subtext: "Fixed Prices. Real Service.",
  pricing_badge: "Most Popular",
  pricing_per: "/move",
  pricing_footnote:
    "* Final prices after free inspection. All packages incl. VAT.",
  pricing_hourly: "Hourly transport also available — from €89/hr. On request.",
  p1_for: "For apartments up to 50m²",
  p2_for: "For apartments up to 100m²",
  p3_for: "For apartments over 100m²",
  p1_f1: "2 moving helpers",
  p1_f2: "Truck with tail lift",
  p1_f3: "Furniture protection incl.",
  p1_f4: "€100,000 full insurance",
  p1_f5: "Arrival & departure incl.",
  p1_f6: "Parking zone coordination",
  p2_f1: "3–4 moving helpers",
  p2_f2: "Truck with tail lift",
  p2_f3: "Furniture protection incl.",
  p2_f4: "€100,000 full insurance",
  p2_f5: "Arrival & departure incl.",
  p2_f6: "Furniture assembly incl.",
  p2_f7: "No-parking zone service incl.",
  p3_f1: "5–6 moving helpers",
  p3_f2: "1–2 trucks with tail lift",
  p3_f3: "Furniture protection & packaging",
  p3_f4: "€100,000 full insurance",
  p3_f5: "Arrival & departure incl.",
  p3_f6: "Kitchen & furniture assembly",
  p3_f7: "No-parking zone service incl.",
  cta_quote_btn: "Request Quote",
  cta_request_btn: "Request Now",

  // Reviews
  reviews_label: "CUSTOMER REVIEWS",
  reviews_h2: "What Our Customers Say",
  reviews_count: "· 87 Google Reviews",

  // FAQ
  faq_label: "FAQ",
  faq_h2: "Frequently Asked Questions",
  faq_q1: "How much does a private move with BAK Transport in Vienna cost?",
  faq_a1:
    "The cost depends on apartment size, floor, elevator, carrying distances and desired additional services. As a guide: small apartments (up to 50m²) start from €650, medium (50–100m²) from €950. After a free inspection, you receive a binding fixed price – with no hidden costs.",
  faq_q2: "How quickly can BAK Transport carry out a move?",
  faq_a2:
    "We usually schedule an appointment within 3–7 business days. In urgent cases, we try to accommodate short-notice appointments. Contact us and we'll find the best solution together.",
  faq_q3: "Are my belongings insured during the move?",
  faq_a3:
    "Yes, all moving goods are fully insured throughout the entire transport. At BAK Transport, we take responsibility for your belongings – door to door.",
  faq_q4:
    "Does BAK Transport also carry out moves to Germany and Switzerland?",
  faq_a4:
    "Yes, we offer cross-border moves to Germany and Switzerland. Please contact us for an individual quote, as international transport is priced separately.",
  faq_q5: "What is included in a BAK Transport moving package?",
  faq_a5:
    "Our packages include: experienced moving helpers, truck with tail lift, furniture blankets & protective film, assembly and disassembly of furniture, packing materials and full insurance. Additional services such as kitchen installation or piano transport are available on request.",
  faq_q6: "Do you also offer furniture assembly without a move?",
  faq_a6:
    "Of course! We assemble and disassemble furniture of all major brands – even without a simultaneous move. IKEA, Nolte, Nobilia and other kitchen brands are among our specialties.",
  faq_q7: "How does a move with BAK Transport work?",
  faq_a7:
    "1. You send us your request online or call us. 2. We get back to you within 60 minutes. 3. Free on-site inspection (optional). 4. You receive a binding fixed price offer. 5. On moving day, we take care of everything. 6. After the move, we ask for your feedback.",

  // CTA
  cta_h2: "Your moving company Vienna — ready for your move?",
  cta_desc:
    "BAK Transport is your reliable moving company in Vienna for private moves, office relocations & furniture assembly. Request a free fixed price offer within 60 minutes now.",
  cta_btn1: "Request Quote",

  // Footer
  footer_tagline: "Fast. Safe. Reliable.",
  footer_desc:
    "Your professional partner for moves, transport and assembly in Vienna and throughout Austria.",
  footer_leistungen: "Services",
  footer_regionen: "Regions",
  footer_unternehmen: "Company",
  footer_copyright: "© 2025 BAK Transport Wien. All rights reserved.",

  // BenefitsSection
  benefits_label: "Benefits with BAK Transport",
  benefits_h2: "Why customers move with us",
  benefits_desc:
    "BAK Transport stands for flexible and professional moves in Vienna and surroundings. We offer you fair conditions and fast processing.",
  benefit1_title: "Fast Quote",
  benefit1_text:
    "The fastest way to a fixed-price move in Vienna: callback in 60 minutes, quote on the same day, no surprises.",
  benefit2_title: "Flexible Appointments",
  benefit2_text:
    "You need a move next week? Or not until three months from now? Both are possible. We adapt to your schedule — even on weekends or evenings.",
  benefit3_title: "Transparent Prices",
  benefit3_text:
    "You know from the start what the move costs. No hidden costs, no surprises. Small from €695, Compact from €845, Large from €1395 — all inclusive.",
  benefit4_title: "Experience & Reliability",
  benefit4_text:
    "Since June 2024 we have completed over 500 moves. Our customers rate us 5 out of 5 stars. We know how to do a move right — fast, careful and reliable.",

  // ContactSection
  contact_h2: "Personal Consultation",
  contact_desc:
    "For a specific quote or questions, you can reach us by phone or email.",
  contact_item1: "Private and office moves",
  contact_item2: "Kitchen and furniture assembly",
  contact_item3: "Online moving request",
  contact_call_btn: "Call now",
  contact_email_btn: "Send email",

  // FinalCTASection
  final_cta_h2:
    "Book your inspection appointment or call us directly.",
  final_cta_desc:
    "We plan your move transparently, quickly and without surprises. Response within 60 minutes, quote usually on the same day.",
  final_cta_btn1: "Book inspection appointment",
  final_cta_btn2: "Call →",

  // FirmenumzugSection
  firmen_label: "Moves within and to Austria",
  firmen_h2: "Office Move Vienna & Surroundings",
  firmen_p1:
    "For small and medium-sized companies we handle office and business relocations throughout Austria, with a focus on Vienna and surroundings. After a free on-site inspection we create a clear, tailored quote for your business.",
  firmen_p2:
    "Our team ensures structured move handling with minimal business interruption. On request, we carry out the move outside your business hours.",
  firmen_p3:
    "All steps are defined in advance, communicated transparently and recorded in writing — for planning certainty without surprises.",
  firmen_btn_call: "Call",
  firmen_btn_contact: "Schedule inspection →",

  // MobileActionBar
  mobile_call: "Call",

  // PrivatumzugSection
  privat_label: "Move in Vienna & surroundings",
  privat_h2: "Private Move Vienna and surroundings",
  privat_p1:
    "A private move with us is simple: you contact us, we inspect your apartment for free and create a transparent quote. On moving day we pack your belongings professionally, transport everything safely and set it up in the new apartment — including assembly and disassembly as needed.",
  privat_p2:
    "Since June 2024 we have successfully completed over 500 moves. Most moves take 4–8 hours. Our customers rate us 5 out of 5 stars — fast, clean, reliable.",
  privat_p3:
    "The cost depends on the actual work involved (scope, carrying distances, elevators, assembly, heavy furniture). After inspection or inventory list you receive a free, non-binding fixed quote — no hidden costs.",
  privat_btn_call: "Call",
  privat_btn_offer: "Request quote",
  privat_btn_more: "Learn more →",
  privat_btn_visit: "Schedule inspection →",

  // ProcessSection
  process_label: "Process",
  process_h2: "Our Process in Five Steps",
  process_desc:
    "All moves at BAK Transport follow a clear, proven process — from the first contact to complete satisfaction.",
  process_step: "Step",
  process_of: "of",
  process_prev: "← Back",
  process_next: "Next →",
  process_step1_title: "Initial Consultation",
  process_step1_duration: "Duration: 15–30 min | Free & non-binding",
  process_step1_content:
    "You call us or send us an email. We ask: How many rooms do you have? Where are you moving to? When should the move take place? This takes about 15–30 minutes. Don't worry: the consultation is free and non-binding. You are not committing to anything.",
  process_step2_title: "On-Site Inspection",
  process_step2_tab: "On-Site Inspection (optional)",
  process_step2_duration: "Duration: 30–60 min | Free & non-binding",
  process_step2_content:
    "After the initial consultation, we arrange a free on-site inspection visit at your request. We look at your apartment or office and note all relevant details: furniture pieces, access, elevators, parking spaces. This allows us to create an accurate, binding quote.",
  process_step3_title: "Your Individual Quote",
  process_step3_duration: "Receive your fixed price offer",
  process_step3_content:
    "Based on the inspection or your information, you receive a written fixed price offer. No hidden costs, no surprises. You know exactly what to expect — before you sign.",
  process_step4_title: "Execution on Moving Day",
  process_step4_duration: "Moving day",
  process_step4_content:
    "Our team arrives punctually at the agreed time. We pack, carry, transport and set up everything in your new apartment or office. Including assembly and disassembly of furniture if desired. Everything goes according to plan — so you don't have to worry about anything.",
  process_step5_title: "Completion & Feedback",
  process_step5_duration: "Completion of the move",
  process_step5_content:
    "After the move, we ask about your satisfaction. Was everything to your liking? Are there suggestions for improvement? Your feedback helps us improve. And if you are satisfied — a Google review would make us very happy.",

  // QuickFactsSection
  quickfacts_h2: "At a Glance",
  quickfact1: "Callback in approx. 60 minutes, quote often on the same day",
  quickfact2: "Fixed price after inspection — no hidden costs",
  quickfact3: "over 500 moves since June 2024 · 5.0/5 stars on Google",
  quickfact4: "Cross-border: Germany · Switzerland",

  // RegionsSection
  regions_label: "SERVICE AREA",
  regions_h2: "We come to you",
  regions_desc:
    "BAK Transport is active throughout Vienna and Austria — including cross-border.",
  region1_title: "Vienna – all 23 districts",
  region1_text:
    "From the 1st to the 23rd district — we know every alley and backyard. Fast, reliable, locally knowledgeable.",
  region2_title: "Austria & Neighbouring Countries",
  region2_text:
    "Moves to all Austrian federal states as well as to Germany and Switzerland.",
  region3_title: "Office & Commercial",
  region3_text:
    "Business relocations in Vienna and Lower Austria — on request outside business hours.",
  regions_question: "Do you have a specific destination?",
  regions_contact_link: "Ask us →",
  regions_area_title: "Our Service Area",
  regions_cross_border: "— Cross-border moves on request —",

  // RequestFormSection
  reqform_h2: "Get Your Individual Quote Now",
  reqform_desc:
    "Submit your moving request — your inquiry will be answered within 6 hours.",
  reqform_von_label: "From Address",
  reqform_nach_label: "To Address",
  reqform_address: "Address",
  reqform_street_placeholder: "Street",
  reqform_hausnr: "House No./Staircase/Door",
  reqform_hausnr_placeholder: "e.g. 12/3",
  reqform_plz: "Postal Code",
  reqform_stockwerk: "Floor",
  reqform_stockwerk_placeholder: "e.g. 2nd floor",
  reqform_aufzug: "Elevator available?",
  reqform_ja: "Yes",
  reqform_nein: "No",
  reqform_details: "Details",
  reqform_date: "Moving Date",
  reqform_art: "Type of Move",
  reqform_art_privat: "Private Move",
  reqform_art_firma: "Office Move",
  reqform_groesse: "Size of Move",
  reqform_groesse_klein: "Small",
  reqform_groesse_mittel: "Medium",
  reqform_groesse_gross: "Large",
  reqform_umfang: "Move scope / Special requirements",
  reqform_umfang_placeholder: "e.g. piano, safe, many boxes...",
  reqform_kontakt: "Contact Details",
  reqform_name: "Name",
  reqform_name_placeholder: "First and last name",
  reqform_telefon: "Phone Number",
  reqform_email: "Email",
  reqform_email_placeholder: "your@email.com",
  reqform_datenschutz:
    "I hereby accept that my data may be used by BAK Transport for the purpose of contact. Further information in the",
  reqform_datenschutz_link: "Privacy Policy",
  reqform_submit: "Send Request",

  // FAQ page
  faqpage_label: "INFORMATION",
  faqpage_title: "Frequently Asked Questions",
  faqpage_subtitle:
    "Everything you need to know before your move — answered clearly and honestly.",
  faqpage_q1: "What does a private move in Vienna cost?",
  faqpage_a1:
    "Private moves start from €650 for apartments up to 50m². The exact price depends on apartment size, floor level and desired additional services. After the free inspection you receive a binding fixed price.",
  faqpage_q2: "How quickly do I receive a quote?",
  faqpage_a2:
    "Usually within 60 minutes of your inquiry. After a free inspection, we prepare a binding fixed price offer within 24 hours.",
  faqpage_q3: "Are my belongings insured during the move?",
  faqpage_a3:
    "Yes. All moving goods are fully insured throughout the entire transport. In the unlikely event of damage, we settle quickly and without complications.",
  faqpage_q4: "Do you also carry out moves to Germany or Switzerland?",
  faqpage_a4:
    "Yes. We offer cross-border moves to Germany and Switzerland — at a fixed price after video inspection, fully insured.",
  faqpage_q5: "Are there hidden costs?",
  faqpage_a5:
    "No. Our offer is a fixed price. What is agreed applies — no hourly fee, no additional charges, no surprises.",
  faqpage_q6: "Can you carry out a move at short notice?",
  faqpage_a6:
    "Yes. As part of our emergency move service, we are often available on the same day. Call us and we will immediately check availability.",
  faqpage_q7: "Do you also offer furniture assembly without a move?",
  faqpage_a7:
    "Yes. Furniture assembly and kitchen assembly can also be booked independently of a move. From €120 for small orders.",
  faqpage_q8: "How does a free inspection work?",
  faqpage_a8:
    "Our employee comes to you, looks at all the furniture and items to be transported and notes everything relevant. This takes about 30 minutes. Afterwards you receive your fixed price offer within 24 hours.",
  faqpage_q9: "How long does a move take?",
  faqpage_a9:
    "It depends on the size of the apartment and the floor: a 2-room apartment is usually finished in 3–5 hours, a single-family house can take a full day. During the free inspection we give you a realistic time estimate for your move.",
  faqpage_q10: "How many moving boxes do I need?",
  faqpage_a10:
    "As a rule of thumb: about 10–15 boxes per room for an average household. During the free inspection we calculate the exact amount needed and can provide suitable packing material on request.",
  faqpage_q11: "Do I need a no-parking zone for the moving truck in Vienna?",
  faqpage_a11:
    "On narrow streets or where parking is scarce, we recommend a no-parking zone so the moving truck can park directly outside. We're happy to help you organize the necessary parking permit.",
  faqpage_q12: "Are moving costs tax-deductible?",
  faqpage_a12:
    "For a job-related move, for example due to a new job, the costs can be deducted from tax as income-related expenses. We provide you with a detailed invoice for this that you can submit to the tax office.",
  faqpage_q13: "How do I recognize a reputable moving company?",
  faqpage_a13:
    "Look for a written fixed-price offer instead of vague hourly rates, insurance for transport damage, and clear company details and reviews. BAK Transport meets all of these points and gives you a binding offer before the move begins.",
  faqpage_q14: "How much tip should I give the moving helpers?",
  faqpage_a14:
    "Tipping is not required with us, since our fixed price already covers all services. Our team is of course happy to receive a small token of appreciation for especially careful work.",
  faqpage_q15: "How far in advance should I book my move?",
  faqpage_a15:
    "For private moves we recommend 2–3 weeks' notice; for company moves or during peak season around month-end and summer, 4–6 weeks is better. Short-notice appointments are often still possible through our emergency move service.",
  faqpage_q16: "Do you also dispose of old furniture during a move?",
  faqpage_a16:
    "Yes. We properly dispose of old furniture, electrical appliances or bulky waste that you don't want to take with you as part of our decluttering service — on request directly alongside your move.",
  faqpage_intro_h2: "Who is BAK Transport?",
  faqpage_intro_text:
    "BAK Transport is a moving and assembly company based in Vienna. We handle private and corporate moves as well as kitchen and furniture assembly in Vienna and throughout Austria. Our focus: transparent fixed prices after a free on-site inspection, fully insured transport and reliable, on-time execution.",
  faqpage_cat1_label: "Moving in Vienna, Scheduling & Process",
  faqpage_cat1_subtitle: "Answers about the process, lead time and organizing your move.",
  faqpage_cat2_label: "Pricing & Costs",
  faqpage_cat2_subtitle: "Transparent pricing and what's included in your move.",
  faqpage_cat3_label: "Practical Preparation",
  faqpage_cat3_subtitle: "Boxes, parking and what to know before moving day.",
  faqpage_cat4_label: "Furniture Assembly & Add-on Services",
  faqpage_cat4_subtitle: "Furniture assembly, decluttering and other services around your move.",
  faqpage_cat5_label: "Insurance, Guarantee & Trust",
  faqpage_cat5_subtitle: "How we protect your belongings and how to recognize us.",
  faqpage_cat6_label: "Austria, Germany, Switzerland",
  faqpage_cat6_subtitle: "Cross-border moves beyond Vienna.",
  faqpage_cta_h2: "Still have questions?",
  faqpage_cta_desc: "Free quote — response in 60 minutes",
  faqpage_cta_btn1: "Request quote now",
  faqpage_cta_btn2: "Call",

  // Kontakt page
  kontakt_label: "COMPANY",
  kontakt_title: "Contact",
  kontakt_subtitle:
    "Write to us or call — response guaranteed within 60 minutes.",
  kontakt_how_h2: "How we help",
  kontakt_card1_title: "Moving Request",
  kontakt_card1_text:
    "Describe your move to us — size, date, start and destination. We will get back to you within 60 minutes.",
  kontakt_card2_title: "Free Inspection",
  kontakt_card2_text:
    "On request we come for a free on-site inspection or conduct a video inspection.",
  kontakt_card3_title: "Fixed Price Quote",
  kontakt_card3_text:
    "Within 24 hours you receive a binding fixed price quote — without hidden costs.",
  kontakt_hours_h2: "Opening Hours",
  kontakt_day1: "Monday – Friday",
  kontakt_time1: "07:00 – 20:00",
  kontakt_day2: "Saturday",
  kontakt_time2: "08:00 – 18:00",
  kontakt_day3: "Sunday",
  kontakt_time3: "Emergencies: reachable 24h",
  kontakt_reach_h2: "How to reach us",
  kontakt_tel_title: "Phone",
  kontakt_tel_sub: "Mon–Fri 7am–8pm, Sat 8am–6pm",
  kontakt_email_title: "Email",
  kontakt_email_sub: "Response within 60 min",
  kontakt_addr_title: "Address",
  kontakt_addr_sub: "Austria",
  kontakt_cta_h2: "Request a Move",
  kontakt_cta_desc: "Free quote — response in 60 minutes",
  kontakt_cta_email_btn: "Send email",
  kontakt_cta_call_btn: "Call now",

  // Karriere page
  karriere_label: "COMPANY",
  karriere_title: "Careers at BAK Transport",
  karriere_subtitle:
    "Join our team — fair pay, stable environment, real team spirit.",
  karriere_h2: "We are looking for people, not numbers.",
  karriere_p1:
    "At BAK Transport you are more than an employee number. We are a well-coordinated team that stands up for each other — and that is what we look for in new colleagues.",
  karriere_p2:
    "Whether career changer or experienced truck driver — if you are reliable, physically fit and a team player, you are right with us.",
  karriere_p3:
    "Fair pay always on the 1st of the month. Modern vehicles. Regular hours. That is our promise.",
  karriere_check1: "Fair & punctual pay",
  karriere_check2: "Regular working hours",
  karriere_check3: "Modern vehicles & equipment",
  karriere_check4: "Collegial team",
  karriere_check5: "Career advancement opportunities",
  karriere_check6: "Career changers welcome",
  karriere_jobs_h2: "Open Positions",
  karriere_job1_title: "Moving Helper",
  karriere_job1_text:
    "Experience not required. We will train you and give you the tools you need from day one.",
  karriere_job2_title: "Truck Driver",
  karriere_job2_text:
    "Class C/CE licence and professional driver competency certificate (BKF) required. Good German skills an advantage.",
  karriere_job3_title: "Assembly Technician",
  karriere_job3_text:
    "Experience in furniture or kitchen assembly? Then you are exactly right with us. Tools provided.",
  karriere_why_h2: "Why BAK Transport as an employer?",
  karriere_why1_title: "Punctual",
  karriere_why1_sub: "Salary always on the 1st",
  karriere_why2_title: "Modern",
  karriere_why2_sub: "New vehicles & tools",
  karriere_why3_title: "Team",
  karriere_why3_sub: "Real team spirit",
  karriere_why4_title: "Growth",
  karriere_why4_sub: "Internal promotions",
  karriere_faq_h2: "Frequently Asked Questions about Careers",
  karriere_faq1_q: "Do I need experience in the moving industry?",
  karriere_faq1_a:
    "No. As a moving helper we will fully train you. More important than prior experience are reliability, physical fitness and teamwork skills.",
  karriere_faq2_q: "How can I apply?",
  karriere_faq2_a:
    "Send us an email to office@baktransport.at with a brief cover letter. A formal CV is not required — we are interested in who you are.",
  karriere_faq3_q: "Are there part-time positions?",
  karriere_faq3_a:
    "Yes. Especially for moving helpers we offer flexible models — even week-by-week or on-call for students or people with other commitments.",
  karriere_cta_h2: "Apply now",
  karriere_cta_desc: "Send us a short email — we will get back to you quickly.",
  karriere_cta_btn1: "Apply now",
  karriere_cta_btn2: "Call",

  // Ueber-uns page
  ueber_label: "COMPANY",
  ueber_title: "About BAK Transport",
  ueber_subtitle:
    "Professional moves for years — with heart, experience and fixed price.",
  ueber_h2: "Who is behind BAK Transport?",
  ueber_p1:
    "BAK Transport is a Viennese moving company with over 10 years of experience. Founded with the goal of making moves fairer, more transparent and more professional — we have since accompanied over 1,000 satisfied customers.",
  ueber_p2:
    "We work exclusively with our own staff and vehicle fleet. No subcontractors, no quality losses. What you see is what you get.",
  ueber_p3:
    "Our Google rating of 5.0★ speaks for itself — and for our customers who recommend us.",
  ueber_check1: "Experienced team with passion",
  ueber_check2: "Own truck fleet",
  ueber_check3: "Fully insured & commercially licensed",
  ueber_check4: "Fixed price guarantee from day 1",
  ueber_check5: "Customer satisfaction above all",
  ueber_check6: "5.0★ rating on Google",
  ueber_why_h2: "Why BAK Transport?",
  ueber_card1_title: "Our Team",
  ueber_card1_text:
    "Behind BAK Transport are experienced moving professionals — people who love their job and approach every order with full commitment.",
  ueber_card2_title: "Own Fleet",
  ueber_card2_text:
    "We work exclusively with our own trucks and our own staff — no subcontractors, no quality losses.",
  ueber_card3_title: "Our Values",
  ueber_card3_text:
    "Honesty, punctuality, cleanliness. We keep what we promise — and only promise what we can deliver.",
  ueber_stat1_value: "1,000+",
  ueber_stat1_label: "Successful Moves",
  ueber_stat2_value: "5.0★",
  ueber_stat2_label: "Google Rating",
  ueber_stat3_value: "24h",
  ueber_stat3_label: "Quote Preparation",
  ueber_stat4_value: "10+",
  ueber_stat4_label: "Years Experience",
  ueber_faq_h2: "Frequently Asked Questions about BAK Transport",
  ueber_faq1_q: "How long has BAK Transport been in business?",
  ueber_faq1_a:
    "BAK Transport has been active in Vienna for over 10 years. During this time we have successfully completed more than 1,000 moves.",
  ueber_faq2_q: "Do you have your own vehicles?",
  ueber_faq2_a:
    "Yes. We work exclusively with our own truck fleet and our own staff — no outsourcing, full quality control.",
  ueber_faq3_q: "Where is BAK Transport based?",
  ueber_faq3_a:
    "Our headquarters is in Vienna. From there we serve all regions — Vienna, Lower Austria and the rest of Austria as well as international moves.",
  ueber_cta_h2: "Request a Move",
  ueber_cta_desc: "Free quote — response in 60 minutes",
  ueber_cta_btn1: "Request quote now",
  ueber_cta_btn2: "Call",

  // Impressum page
  impressum_label: "LEGAL",
  impressum_title: "Legal Notice",
  impressum_h2_1: "Information pursuant to § 25 Media Act",
  impressum_h2_2: "Disclaimer",
  impressum_h2_3: "Copyright",
  impressum_liability:
    "The contents of this website have been created with the greatest possible care. However, BAK Transport assumes no liability for the accuracy, completeness and timeliness of the content provided.",
  impressum_copyright_text:
    "The content and works created by the site operator on these pages are subject to Austrian copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author.",
  impressum_subject: "Business purpose:",
  impressum_subject_value: "Transport and moving services",
  impressum_uid: "VAT Number:",
  impressum_fn: "Company Register Number:",
  impressum_fng: "Company Register Court:",
  impressum_fng_value: "Commercial Court Vienna",
  impressum_authority: "Supervisory authority:",
  impressum_authority_value: "Municipal district office Vienna",
  impressum_tel: "Phone:",
  impressum_email_label: "Email:",

  // Datenschutz page
  datenschutz_label: "LEGAL",
  datenschutz_title: "Privacy Policy",
  datenschutz_h1: "1. Privacy at a Glance",
  datenschutz_p1:
    "The following information gives a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified.",
  datenschutz_h2: "2. Data Collection on This Website",
  datenschutz_responsible_q: "Who is responsible for data collection?",
  datenschutz_responsible_a:
    "The data processing on this website is carried out by the website operator: BAK Transport GmbH, Zwinzstraße 15, 1160 Vienna, office@baktransport.at",
  datenschutz_collect_q: "How do we collect your data?",
  datenschutz_collect_a:
    "Your data is collected on the one hand by you providing it to us (e.g. via the contact form). Other data is automatically collected by our IT systems when you visit the website (browser data, access time).",
  datenschutz_h3: "3. Your Rights",
  datenschutz_rights:
    "You have the right to access, correction, deletion, restriction of processing and data portability. Please contact: office@baktransport.at",
  datenschutz_h4: "4. Hosting",
  datenschutz_hosting:
    "This website is hosted by Vercel Inc. Details can be found in Vercel's privacy policy at vercel.com/legal/privacy-policy.",
  datenschutz_h5: "5. Contact",
  datenschutz_contact:
    "BAK Transport GmbH · Zwinzstraße 15, 1160 Vienna · office@baktransport.at · +43 681 10723047",

  // Shared subpage strings
  sub_why_bak: "Why BAK Transport?",
  sub_price_overview: "Pricing",
  sub_faq_h2: "Frequently Asked Questions",
  sub_more_services: "More Services from BAK Transport Vienna",
  sub_cta_desc: "Free quote — response in 60 minutes",
  sub_cta_btn1: "Request quote now",
  sub_cta_btn2: "Call",
  sub_price_footnote: "Final prices after free inspection. Fixed price guaranteed.",

  // Privatumzug subpage
  priv_page_label: "SERVICES",
  priv_page_title: "Private Move Vienna",
  priv_page_subtitle:
    "Your stress-free move at a fixed price — from the inspection to the last box.",
  priv_page_h2: "Simply move — we do it.",
  priv_page_p1:
    "A private move with BAK Transport means: you relax, we work. Our well-coordinated team handles the complete process — from professional packing to setup in your new apartment.",
  priv_page_p2:
    "We work in all 23 Viennese districts and throughout Lower Austria. Whether studio apartment or large house — you receive a binding fixed price after the free inspection.",
  priv_page_p3: "No hourly fee. No risk. Just a fair, fixed price.",
  priv_page_p4:
    "As one of the leading moving companies in Vienna, BAK Transport offers private moves throughout Vienna and surroundings — reliably, insured and at a fixed price. Our moving service Vienna also includes professional packing, transport and the complete assembly of your furniture at the new location.",
  priv_page_check1: "Free on-site inspection",
  priv_page_check2: "Binding fixed price after inspection",
  priv_page_check3: "Professional packing on request",
  priv_page_check4: "Furniture assembly and disassembly included",
  priv_page_check5: "Full insurance of all goods",
  priv_page_check6: "Travel to and from included in price",
  priv_page_card1_title: "Fixed Price Guarantee",
  priv_page_card1_text:
    "What is agreed applies. No additional charges, no hidden hours — you pay exactly what is stated in the quote.",
  priv_page_card2_title: "Experienced Team",
  priv_page_card2_text:
    "Our trained staff treats your furniture like their own. Protective blankets, film, special tools — everything included.",
  priv_page_card3_title: "Full Service",
  priv_page_card3_text:
    "From planning to packing to assembly — we accompany you through the entire process.",
  priv_page_price_h2: "Pricing: Private Move",
  priv_page_price_footnote: "Final prices after free inspection. Fixed price guaranteed.",
  priv_page_p1_label: "up to 50m²",
  priv_page_p1_price: "from €650",
  priv_page_p1_detail: "2 helpers, 1 truck, up to 6h",
  priv_page_p2_label: "50–100m²",
  priv_page_p2_price: "from €950",
  priv_page_p2_detail: "3–4 helpers, 1 truck, up to 8h",
  priv_page_p3_label: "over 100m²",
  priv_page_p3_price: "from €1,350",
  priv_page_p3_detail: "5–6 helpers, 1–2 trucks",
  priv_page_faq_h2: "Frequently Asked Questions: Private Move",
  priv_page_faq1_q: "How does the inspection work?",
  priv_page_faq1_a:
    "Our employee comes to you free of charge, looks at the apartment and notes all relevant details. This takes about 30 minutes. Afterwards you receive a binding fixed price offer within 24 hours.",
  priv_page_faq2_q: "What happens if something is damaged?",
  priv_page_faq2_a:
    "All moving goods at BAK Transport are fully insured. In the unlikely event of damage, we settle through our insurance — straightforward and fast.",
  priv_page_faq3_q: "Can I also book only individual services?",
  priv_page_faq3_a:
    "Yes. We also offer partial services — e.g. transport only without packing, or just furniture assembly without a move. Simply ask.",
  priv_page_cta_h2: "Request Private Move",

  // Firmenumzug subpage
  firm_page_label: "SERVICES",
  firm_page_title: "Office Move Vienna",
  firm_page_subtitle:
    "Structured office relocation with minimal business interruption — so your company is back up and running quickly.",
  firm_page_h2: "Your business is relocating — we plan everything.",
  firm_page_p1:
    "An office move is not an ordinary move — it must be planned, coordinated and executed so that your business suffers as little as possible. That is exactly our speciality.",
  firm_page_p2:
    "We work in all 23 Viennese districts and also carry out office moves outside business hours — evenings, weekends or public holidays.",
  firm_page_p3:
    "You receive a binding fixed price after the free inspection — no hourly fees, no unpleasant surprises.",
  firm_page_check1: "Individual moving planning",
  firm_page_check2: "Work outside business hours possible",
  firm_page_check3: "Disassembly & assembly of office furniture",
  firm_page_check4: "IT equipment safely packed",
  firm_page_check5: "Full insurance of all goods",
  firm_page_check6: "Fixed price after inspection",
  firm_page_card1_title: "Minimal Downtime",
  firm_page_card1_text:
    "We plan the move so that your business is back to full capacity as quickly as possible.",
  firm_page_card2_title: "Discreet Handling",
  firm_page_card2_text:
    "Professional appearance, clean work, no chaos — your employees and customers will barely notice.",
  firm_page_card3_title: "Experienced Office Moves",
  firm_page_card3_text:
    "We have relocated dozens of offices and practices. Knowledge, tools and logistics are all in place.",
  firm_page_price_h2: "Pricing: Office Move",
  firm_page_price_footnote: "Final prices after free inspection. Fixed price guaranteed.",
  firm_page_p1_label: "Small office (up to 100 m²)",
  firm_page_p1_price: "from €850",
  firm_page_p1_detail: "2–3 helpers, 1 truck",
  firm_page_p2_label: "Medium office (100–300 m²)",
  firm_page_p2_price: "from €1,800",
  firm_page_p2_detail: "4–5 helpers, 2 trucks",
  firm_page_p3_label: "Large office (300+ m²)",
  firm_page_p3_price: "On Request",
  firm_page_p3_detail: "individual concept",
  firm_page_faq_h2: "Frequently Asked Questions: Office Move",
  firm_page_faq1_q: "Can you carry out the move on the weekend?",
  firm_page_faq1_a:
    "Yes, on request we also carry out office moves on Saturdays or Sundays — so your business runs smoothly on the next working day.",
  firm_page_faq2_q: "How do you handle sensitive IT equipment?",
  firm_page_faq2_a:
    "Servers, monitors and other IT devices are secured with special packaging and transport. On request, we work with your IT service provider.",
  firm_page_faq3_q: "Is there a minimum order size?",
  firm_page_faq3_a:
    "No. We handle office moves of any size — from a single office to a multi-storey company location.",
  firm_page_cta_h2: "Request Office Move",

  // Küchenmontage subpage
  kueche_page_label: "SERVICES",
  kueche_page_title: "Kitchen Assembly Vienna",
  kueche_page_subtitle:
    "Professional assembly of all kitchen brands — from the first cabinet to the water connection.",
  kueche_page_h2: "Your new kitchen — perfectly assembled.",
  kueche_page_p1:
    "A new kitchen is exciting — the assembly can be complex. Our team handles it completely: hanging and aligning cabinets, installing electrical and water connections and adjusting everything to the last detail.",
  kueche_page_p2:
    "We assemble all major kitchen manufacturers — IKEA METOD, Nolte, Nobilia, Häcker, Hüppe and many more. On request we also disassemble your old kitchen.",
  kueche_page_p3:
    "We give 2 years warranty on all assembly work — without any ifs or buts.",
  kueche_page_check1: "IKEA, Nolte, Nobilia, Häcker & more",
  kueche_page_check2: "Electrical and water connections included",
  kueche_page_check3: "2-year warranty on the assembly",
  kueche_page_check4: "Old kitchen disassembled on request",
  kueche_page_check5: "Fixed price after measurement",
  kueche_page_check6: "Protection for floors and walls",
  kueche_page_card1_title: "All Kitchen Brands",
  kueche_page_card1_text:
    "Whether built-in kitchen from IKEA or custom kitchen from Nolte — we assemble all common brands professionally and reliably.",
  kueche_page_card2_title: "Complete Service",
  kueche_page_card2_text:
    "We take care of everything: assembly, electrical and water connections, alignment and adjustment until everything fits perfectly.",
  kueche_page_card3_title: "2-Year Warranty",
  kueche_page_card3_text:
    "We give 2 years warranty on our assembly work. If there are problems, we come back without discussion.",
  kueche_page_price_h2: "Pricing: Kitchen Assembly",
  kueche_page_price_footnote: "Fixed price after measurement. Including all connections.",
  kueche_page_p1_label: "Small kitchen (up to 5 units)",
  kueche_page_p1_price: "from €380",
  kueche_page_p1_detail: "incl. connections",
  kueche_page_p2_label: "Medium kitchen",
  kueche_page_p2_price: "from €680",
  kueche_page_p2_detail: "5–10 units incl. connections",
  kueche_page_p3_label: "Large kitchen",
  kueche_page_p3_price: "from €980",
  kueche_page_p3_detail: "10+ units, kitchen island",
  kueche_page_faq_h2: "Frequently Asked Questions: Kitchen Assembly",
  kueche_page_faq1_q: "Do you also connect electricity and water?",
  kueche_page_faq1_a:
    "Yes, we handle the professional installation of all connections — water, waste water and electrical connections for cooktop, dishwasher and more.",
  kueche_page_faq2_q: "Can you also disassemble our old kitchen?",
  kueche_page_faq2_a:
    "Yes, on request we disassemble the old kitchen before assembling the new one. Disposal is also possible for an additional charge.",
  kueche_page_faq3_q: "How long does kitchen assembly take?",
  kueche_page_faq3_a:
    "Depending on size, between half a day and two days. After the measurement we give you a precise time estimate.",
  kueche_page_cta_h2: "Request Kitchen Assembly",

  // Möbelmontage subpage
  moebel_page_label: "SERVICES",
  moebel_page_title: "Furniture Assembly Vienna",
  moebel_page_subtitle:
    "Fast assembly and disassembly of all furniture brands — precise, clean and scratch-free.",
  moebel_page_h2: "Assemble furniture? We take care of it.",
  moebel_page_p1:
    "New furniture can be a joy — assembly less so. Our experienced team takes over for you: professionally, quickly and without scratches on floors or walls.",
  moebel_page_p2:
    "We assemble all common brands — from IKEA to BoConcept. The service is also bookable independently of a move.",
  moebel_page_p3:
    "After assembly we take all boxes and packaging materials with us. You pay a fair fixed price — agreed before the job.",
  moebel_page_check1: "All brands: IKEA, Hülsta, BoConcept & more",
  moebel_page_check2: "Also bookable without a move",
  moebel_page_check3: "Protective mats for floors and walls",
  moebel_page_check4: "Disposal of packaging material",
  moebel_page_check5: "Fixed price by job scope",
  moebel_page_check6: "Response in 60 minutes",
  moebel_page_card1_title: "All Brands",
  moebel_page_card1_text:
    "We assemble furniture from all manufacturers — IKEA, Hülsta, Nolte, BoConcept, Maison du Monde and many more.",
  moebel_page_card2_title: "No Move Needed",
  moebel_page_card2_text:
    "You don't have to move to use our assembly service. New furniture delivered? We build it up.",
  moebel_page_card3_title: "Clean Work",
  moebel_page_card3_text:
    "Protective mats on floors and walls, careful working method, disposal of all boxes and packaging included.",
  moebel_page_price_h2: "Pricing: Furniture Assembly",
  moebel_page_price_footnote: "Fixed price by job scope. No hourly fee.",
  moebel_page_p1_label: "Small job",
  moebel_page_p1_price: "from €120",
  moebel_page_p1_detail: "1–2 furniture pieces, up to 2h",
  moebel_page_p2_label: "Medium job",
  moebel_page_p2_price: "from €280",
  moebel_page_p2_detail: "up to 5 pieces, up to 4h",
  moebel_page_p3_label: "Large job",
  moebel_page_p3_price: "from €480",
  moebel_page_p3_detail: "bedroom, living room etc.",
  moebel_page_faq_h2: "Frequently Asked Questions: Furniture Assembly",
  moebel_page_faq1_q: "How much does furniture assembly cost in Vienna?",
  moebel_page_faq1_a:
    "Small individual furniture items usually cost around €50–100, room furniture around €150–300, and complete apartments around €300–600 depending on the scope. An IKEA wardrobe is often around €80–150, a bed around €60–120.",
  moebel_page_faq2_q: "How long does furniture assembly take?",
  moebel_page_faq2_a:
    "It depends on the scope. Single items are often assembled in 1–2 hours, while larger room setups usually take 2–4 hours. Weekend appointments are possible by arrangement.",
  moebel_page_faq3_q: "Which furniture brands can you assemble?",
  moebel_page_faq3_a:
    "We assemble furniture from IKEA, XXXLutz, Mömax, Kika, Leiner, Möbelix and many other manufacturers. Our team is prepared for different systems, fittings and assembly methods.",
  moebel_page_faq4_q: "Do you also assemble IKEA furniture?",
  moebel_page_faq4_a:
    "Yes. We frequently assemble IKEA systems such as PAX, MALM, BILLY, BESTA and KALLAX. Costs are usually around €60–200 depending on the furniture and effort.",
  moebel_page_faq5_q: "Do you bring tools and assembly materials?",
  moebel_page_faq5_a:
    "Yes. We bring professional tools, assembly aids and standard small materials. If special wall plugs or parts are needed, we clarify that with you in advance.",
  moebel_page_faq6_q: "Is my furniture assembly insured?",
  moebel_page_faq6_a:
    "Yes. Our assembly work is insured. We work carefully with protection for floors, walls and furniture and stand behind clean, professional work.",
  moebel_page_cta_h2: "Request Furniture Assembly",

  // Notfallumzug subpage
  notfall_page_label: "SERVICES",
  notfall_page_title: "Emergency Move Vienna",
  notfall_page_subtitle: "Need to move at short notice? We help — often on the same day.",
  notfall_page_h2: "Urgent move — no problem.",
  notfall_page_p1:
    "Sometimes it needs to happen fast. Whether water damage, short-notice termination or a family emergency — BAK Transport is there for you even when time is pressing.",
  notfall_page_p2:
    "Our team is reachable by phone 24/7. We respond within 60 minutes and can in many cases arrive the same day.",
  notfall_page_p3:
    "No emergency surcharge. Fair fixed price — even when speed is essential.",
  notfall_page_check1: "Often possible on the same day",
  notfall_page_check2: "Reachable by phone 24/7",
  notfall_page_check3: "Response in 60 minutes",
  notfall_page_check4: "Flexible scheduling",
  notfall_page_check5: "Full insurance of all goods",
  notfall_page_check6: "Fixed price even in emergencies",
  notfall_page_card1_title: "Fast Response",
  notfall_page_card1_text:
    "We know that an emergency move is stressful. That is why we react quickly: response in 60 min, appointment often the same day.",
  notfall_page_card2_title: "Around the Clock",
  notfall_page_card2_text:
    "Emergencies don't have office hours. Our team is reachable by phone 24/7 — including on public holidays.",
  notfall_page_card3_title: "Fair Prices",
  notfall_page_card3_text:
    "Even in an emergency you pay no surcharge. We create a fair offer — transparent and without surprises.",
  notfall_page_price_h2: "Pricing: Emergency Move",
  notfall_page_price_footnote: "No emergency surcharge. Fair fixed price.",
  notfall_page_p1_label: "Small emergency move",
  notfall_page_p1_price: "from €480",
  notfall_page_p1_detail: "1–2 rooms, short notice",
  notfall_page_p2_label: "Medium move",
  notfall_page_p2_price: "from €780",
  notfall_page_p2_detail: "3–4 rooms, same day",
  notfall_page_p3_label: "Immediate deployment",
  notfall_page_p3_price: "On Request",
  notfall_page_p3_detail: "within 2h, subject to availability",
  notfall_page_faq_h2: "Frequently Asked Questions: Emergency Move",
  notfall_page_faq1_q: "How short-notice can you carry out a move?",
  notfall_page_faq1_a:
    "In the best case, still on the same day. Call us and we will immediately check the availability of our teams.",
  notfall_page_faq2_q: "Are emergency moves more expensive?",
  notfall_page_faq2_a:
    "No. We do not charge an emergency surcharge. You receive a fair offer — just like a regular move.",
  notfall_page_faq3_q: "What counts as an emergency?",
  notfall_page_faq3_a:
    "Anything that is urgent: water damage, short-notice apartment termination, sudden job change, family emergency. We help in all situations.",
  notfall_page_cta_h2: "Request Emergency Move",

  // Schwerlasttransport subpage
  schwer_page_label: "SERVICES",
  schwer_page_title: "Heavy Transport Vienna",
  schwer_page_subtitle:
    "Pianos, safes, machines — transported safely with special equipment.",
  schwer_page_h2: "Heavy is possible — if you know how.",
  schwer_page_p1:
    "Heavy and bulky objects require experience, special tools and the right techniques. Our team is trained for pianos, safes, industrial machines and other heavy transports.",
  schwer_page_p2:
    "We use professional equipment — safe rollers, piano transport straps, reinforced lifting straps — so your object reaches its destination safely, without damage to floors, walls or stairways.",
  schwer_page_p3: "Every object is fully insured. Fixed price after inspection.",
  schwer_page_check1: "Pianos & grand pianos of all sizes",
  schwer_page_check2: "Safes up to 1,000 kg",
  schwer_page_check3: "Industrial machines & servers",
  schwer_page_check4: "Special equipment: hand trucks, trolleys, lifting straps",
  schwer_page_check5: "Full insurance included",
  schwer_page_check6: "Fixed price after inspection",
  schwer_page_card1_title: "Special Equipment",
  schwer_page_card1_text:
    "For heavy transports we use professional aids: safe rollers, piano transport straps, load lifting straps and reinforced trolleys.",
  schwer_page_card2_title: "Experienced Specialists",
  schwer_page_card2_text:
    "Not everyone can transport a 400 kg safe up the stairs. Our employees are specially trained and know the tricks.",
  schwer_page_card3_title: "Fully Insured",
  schwer_page_card3_text:
    "Every object, no matter how heavy or valuable, is fully insured throughout the entire transport.",
  schwer_page_price_h2: "Pricing: Heavy Transport",
  schwer_page_price_footnote: "Fixed price after inspection. Full insurance included.",
  schwer_page_p1_label: "Piano / Keyboard",
  schwer_page_p1_price: "from €280",
  schwer_page_p1_detail: "incl. assembly/disassembly",
  schwer_page_p2_label: "Safe up to 300 kg",
  schwer_page_p2_price: "from €380",
  schwer_page_p2_detail: "incl. positioning",
  schwer_page_p3_label: "Special requests",
  schwer_page_p3_price: "On Request",
  schwer_page_p3_detail: "Machines, grand pianos, large objects",
  schwer_page_faq_h2: "Frequently Asked Questions: Heavy Transport",
  schwer_page_faq1_q: "Can you also transport grand pianos?",
  schwer_page_faq1_a:
    "Yes. Grand pianos and upright pianos are our most common heavy transport orders. We have the right equipment and experience.",
  schwer_page_faq2_q: "Up to what weight do you transport safes?",
  schwer_page_faq2_a:
    "We transport safes up to approx. 1,000 kg. For heavier objects we create an individual offer on request.",
  schwer_page_faq3_q: "Is the transport insured?",
  schwer_page_faq3_a:
    "Yes, all objects are fully insured during transport — regardless of value.",
  schwer_page_cta_h2: "Request Heavy Transport",

  // Wien region page
  wien_page_label: "REGIONS",
  wien_page_title: "Move Vienna",
  wien_page_subtitle: "All 23 districts — locally knowledgeable, reliable, fixed price.",
  wien_page_h2: "We know Vienna like the back of our hand.",
  wien_page_p1:
    "Vienna is our home — and we know every corner. From the narrow alleyways in the 1st district to the large apartment blocks in Favoriten or Floridsdorf: our teams know what to expect.",
  wien_page_p2:
    "We take care of parking permits, know the stairways and are active in all 23 districts — with the familiar BAK fixed price.",
  wien_page_p3:
    "Whether old building to new construction, studio to penthouse — we have seen everything and mastered everything.",
  wien_page_check1: "All 23 Viennese districts",
  wien_page_check2: "Locally knowledgeable teams per district",
  wien_page_check3: "Experience with narrow stairways",
  wien_page_check4: "We organise parking permits",
  wien_page_check5: "Fixed price after inspection",
  wien_page_check6: "Response in 60 minutes",
  wien_page_card1_title: "Local & knowledgeable",
  wien_page_card1_text:
    "Our teams know every district — narrow driveways in Favoriten, narrow alleys in Ottakring, parking situations in the city centre.",
  wien_page_card2_title: "Parking Permits",
  wien_page_card2_text:
    "We take care of the parking permit for moving day — so there is no shortage of valuable space in front of your door.",
  wien_page_card3_title: "Experience with Old Buildings",
  wien_page_card3_text:
    "Narrow staircases, no lifts, low ceiling heights — we know exactly the challenges of Vienna's old buildings.",
  wien_page_districts_h2: "Move in all 23 Viennese Districts",
  wien_page_districts_desc:
    "As a moving company in Vienna, we are active in all 23 districts — from the 1st district (Inner City) to the 23rd district (Liesing). We know the characteristics of each district: narrow alleys in Neubau, old building stairways in Favoriten, parking zones in Währing. This means for you: less effort, more reliability.",
  wien_page_price_h2: "Pricing: Move Vienna",
  wien_page_price_footnote: "Fixed price after free inspection. All 23 districts.",
  wien_page_p1_label: "1–2 rooms",
  wien_page_p1_price: "from €550",
  wien_page_p1_detail: "within Vienna, fixed price",
  wien_page_p2_label: "3–4 rooms",
  wien_page_p2_price: "from €850",
  wien_page_p2_detail: "within Vienna, fixed price",
  wien_page_p3_label: "5+ rooms / house",
  wien_page_p3_price: "from €1,200",
  wien_page_p3_detail: "after inspection",
  wien_page_faq_h2: "Frequently Asked Questions: Moving in Vienna",
  wien_page_faq1_q: "Do you work in all 23 districts?",
  wien_page_faq1_a:
    "Yes. We are active throughout Vienna — from Floridsdorf in the 21st to Liesing in the 23rd district. No district is too far.",
  wien_page_faq2_q: "How does parking work on moving day?",
  wien_page_faq2_a:
    "On request we apply for a parking permit from the city of Vienna so the truck can park directly in front of your door.",
  wien_page_faq3_q: "Do you also do moves within the same building?",
  wien_page_faq3_a:
    "Yes. We also handle floor changes in the same building professionally and at a fixed price.",
  wien_page_cta_h2: "Request Move Vienna",

  // Österreich region page
  oe_page_label: "REGIONS",
  oe_page_title: "Move Austria",
  oe_page_subtitle: "Nationwide — Graz, Linz, Salzburg, Innsbruck & more.",
  oe_page_h2: "All of Austria — one contact person.",
  oe_page_p1:
    "BAK Transport is not only active in Vienna and Lower Austria — we travel to all 9 federal states. Whether Graz, Linz, Salzburg or Innsbruck: your move is in good hands with us.",
  oe_page_p2:
    "For long-distance moves we offer video inspections — you don't need to come to Vienna especially. We still create a binding fixed price.",
  oe_page_p3:
    "One contact person, one fixed price, one relaxed move — wherever in Austria.",
  oe_page_check1: "All 9 federal states",
  oe_page_check2: "Graz, Linz, Salzburg, Innsbruck & more",
  oe_page_check3: "Video inspection for long-distance moves",
  oe_page_check4: "Fixed price guaranteed",
  oe_page_check5: "Full insurance throughout Austria",
  oe_page_check6: "Response in 60 minutes",
  oe_page_card1_title: "Nationwide",
  oe_page_card1_text:
    "From Vorarlberg to Burgenland — we transport your household to all corners of Austria, with the familiar BAK service.",
  oe_page_card2_title: "Fixed Price for Long-Distance Moves",
  oe_page_card2_text:
    "Even for long-distance moves within Austria you receive a fixed price. No per-kilometre charges, no surprises.",
  oe_page_card3_title: "Video Inspection",
  oe_page_card3_text:
    "For moves outside Vienna we offer video inspections — conveniently from your phone, still a binding fixed price.",
  oe_page_price_h2: "Pricing: Nationwide Austria",
  oe_page_price_footnote: "Fixed price after video inspection. Nationwide.",
  oe_page_p1_label: "Vienna → Graz / Linz",
  oe_page_p1_price: "from €980",
  oe_page_p1_detail: "Fixed price incl. travel",
  oe_page_p2_label: "Vienna → Salzburg / Innsbruck",
  oe_page_p2_price: "from €1,280",
  oe_page_p2_detail: "Fixed price incl. travel",
  oe_page_p3_label: "Individual routes",
  oe_page_p3_price: "On Request",
  oe_page_p3_detail: "Video inspection possible",
  oe_page_faq_h2: "Frequently Asked Questions: Moving in Austria",
  oe_page_faq1_q: "Do you also do moves to Graz or Linz?",
  oe_page_faq1_a:
    "Yes. We are active throughout Austria. Graz, Linz, Salzburg, Innsbruck — all doable, all with fixed price.",
  oe_page_faq2_q: "How does a long-distance move in Austria work?",
  oe_page_faq2_a:
    "After a free video inspection you receive a fixed price offer. We drive with one or two trucks to you and bring everything to the new location.",
  oe_page_faq3_q: "How long does a move to Innsbruck take?",
  oe_page_faq3_a:
    "The transport takes approx. 4–5 hours of pure driving time. Including loading and unloading we generally plan a full day.",
  oe_page_cta_h2: "Request Move Austria",

  // Niederösterreich region page
  noe_page_label: "REGIONS",
  noe_page_title: "Move Lower Austria",
  noe_page_subtitle:
    "Klosterneuburg, Mödling, Baden, St. Pölten — we are everywhere.",
  noe_page_h2: "Lower Austria — easily accessible from Vienna.",
  noe_page_p1:
    "Our service area extends well beyond Vienna's city limits. From Klosterneuburg in the north to Wiener Neustadt in the south — BAK Transport is there for you throughout Lower Austria.",
  noe_page_p2:
    "Moves between Vienna and Lower Austria are our everyday business. You receive a fair fixed price — after personal or video inspection.",
  noe_page_p3:
    "No per-kilometre charges, no hourly fees. One price that applies.",
  noe_page_check1: "Klosterneuburg, Mödling, Baden, Stockerau",
  noe_page_check2: "St. Pölten, Krems, Wiener Neustadt",
  noe_page_check3: "Moves Vienna ↔ Lower Austria",
  noe_page_check4: "Fixed price after inspection or video call",
  noe_page_check5: "Full insurance",
  noe_page_check6: "Response in 60 minutes",
  noe_page_card1_title: "Large Service Area",
  noe_page_card1_text:
    "From Vienna's city limits to all Lower Austrian districts — our radius covers the entire federal state.",
  noe_page_card2_title: "Vienna–Lower Austria Specialists",
  noe_page_card2_text:
    "Moves between Vienna and Lower Austria are our everyday business. Short distances, fair prices.",
  noe_page_card3_title: "Video Inspection Possible",
  noe_page_card3_text:
    "You don't need to be on site. We also conduct the inspection via video call and still create a fixed price.",
  noe_page_price_h2: "Pricing: Lower Austria",
  noe_page_price_footnote: "Fixed price after inspection or video call.",
  noe_page_p1_label: "Vienna outskirts ↔ Lower Austria",
  noe_page_p1_price: "from €680",
  noe_page_p1_detail: "up to 30 km distance",
  noe_page_p2_label: "Vienna ↔ Central Lower Austria",
  noe_page_p2_price: "from €880",
  noe_page_p2_detail: "30–80 km distance",
  noe_page_p3_label: "Vienna ↔ Western Lower Austria",
  noe_page_p3_price: "from €1,100",
  noe_page_p3_detail: "St. Pölten, Krems etc.",
  noe_page_faq_h2: "Frequently Asked Questions: Moving in Lower Austria",
  noe_page_faq1_q: "Do you also go to Wiener Neustadt or Krems?",
  noe_page_faq1_a:
    "Yes, we are active throughout the federal state of Lower Austria — including Wiener Neustadt, Krems, Amstetten and other cities.",
  noe_page_faq2_q: "Do you also carry out an inspection outside Vienna?",
  noe_page_faq2_a:
    "Yes. We also come to Lower Austria for the free inspection. Alternatively, a video inspection is possible.",
  noe_page_faq3_q: "Is a move Vienna → Lower Austria more expensive?",
  noe_page_faq3_a:
    "Only minimally — the distance is factored in, but the fixed price remains a fixed price. No unpleasant surprises.",
  noe_page_cta_h2: "Request Move Lower Austria",

  // Deutschland region page
  de_page_label: "REGIONS",
  de_page_title: "Move to Germany",
  de_page_subtitle:
    "Vienna to Munich, Stuttgart, Frankfurt, Berlin — reliable and insured.",
  de_page_h2: "Austria to Germany — no customs, no problem.",
  de_page_p1:
    "A move from Vienna to Germany is our everyday business. As an EU domestic move there are no customs formalities — your furniture arrives directly and straightforwardly at your new address in Munich, Frankfurt, Berlin or another German city.",
  de_page_p2:
    "We conduct the inspection conveniently by video call. Within 24 hours you receive a binding fixed price.",
  de_page_p3:
    "No intermediate storage. No detours. Directly door to door — fully insured.",
  de_page_check1: "Munich, Stuttgart, Frankfurt, Berlin & more",
  de_page_check2: "No customs (EU single market)",
  de_page_check3: "Full insurance to the destination",
  de_page_check4: "Fixed price after video inspection",
  de_page_check5: "Experience with cross-border moves",
  de_page_check6: "Response in 60 minutes",
  de_page_card1_title: "EU Specialist",
  de_page_card1_text:
    "As an EU move there is no customs. We know the formalities and take care of all paperwork.",
  de_page_card2_title: "Direct Trips",
  de_page_card2_text:
    "Your furniture travels directly from Vienna to your new address in Germany — no intermediate storage, no repacking.",
  de_page_card3_title: "Fixed Price",
  de_page_card3_text:
    "You receive a binding fixed price after the video inspection — regardless of how far the journey is.",
  de_page_price_h2: "Pricing: Move to Germany",
  de_page_price_footnote: "Fixed price after video inspection. Direct transport door to door.",
  de_page_p1_label: "Vienna → Munich",
  de_page_p1_price: "from €1,480",
  de_page_p1_detail: "approx. 450 km, fixed price",
  de_page_p2_label: "Vienna → Frankfurt / Stuttgart",
  de_page_p2_price: "from €1,980",
  de_page_p2_detail: "approx. 750 km, fixed price",
  de_page_p3_label: "Vienna → Berlin / Hamburg",
  de_page_p3_price: "from €2,480",
  de_page_p3_detail: "approx. 1,000 km, fixed price",
  de_page_faq_h2: "Frequently Asked Questions: Move to Germany",
  de_page_faq1_q: "Is there customs when moving to Germany?",
  de_page_faq1_a:
    "No. Austria and Germany are both EU members — for private moving goods there is no customs duty.",
  de_page_faq2_q: "How does the inspection work?",
  de_page_faq2_a:
    "For moves to Germany we conduct the inspection by video call. Afterwards you receive a binding offer within 24 hours.",
  de_page_faq3_q: "How long does transport to Munich take?",
  de_page_faq3_a:
    "The travel time is approx. 3–4 hours. Including loading and unloading the move is generally completed in one day.",
  de_page_cta_h2: "Request Move to Germany",

  // Schweiz region page
  ch_page_label: "REGIONS",
  ch_page_title: "Move to Switzerland",
  ch_page_subtitle: "Vienna to Zurich, Bern, Basel — including customs information.",
  ch_page_h2: "Austria to Switzerland — with planning, no problem.",
  ch_page_p1:
    "A move to Switzerland requires a little more preparation than an EU move — but with BAK Transport you have an experienced partner at your side who knows the customs formalities and guides you through the entire process.",
  ch_page_p2:
    "Your furniture travels directly from Vienna to your new Swiss address — whether Zurich, Bern, Basel or Geneva. We handle direct transports without intermediate storage.",
  ch_page_p3: "Fixed price after video inspection, within 24 hours.",
  ch_page_check1: "Zurich, Bern, Basel, Geneva & more",
  ch_page_check2: "Customs information included",
  ch_page_check3: "Full insurance to the destination",
  ch_page_check4: "Fixed price after video inspection",
  ch_page_check5: "Experience with third-country exports",
  ch_page_check6: "Response in 60 minutes",
  ch_page_card1_title: "Customs Know-How",
  ch_page_card1_text:
    "Switzerland is not an EU member — customs formalities apply for moves. We guide you through the process and ensure smooth clearance.",
  ch_page_card2_title: "Direct Transport",
  ch_page_card2_text:
    "Your furniture travels directly from Vienna to Switzerland. No repacking, no intermediate storage — directly to your new address.",
  ch_page_card3_title: "Binding Fixed Price",
  ch_page_card3_text:
    "Even for Swiss moves you receive a fixed price — after video inspection, within 24 hours.",
  ch_page_price_h2: "Pricing: Move to Switzerland",
  ch_page_price_footnote: "Fixed price after video inspection. Incl. customs clearance.",
  ch_page_p1_label: "Vienna → Zurich / Basel",
  ch_page_p1_price: "from €2,200",
  ch_page_p1_detail: "incl. customs clearance",
  ch_page_p2_label: "Vienna → Bern / Geneva",
  ch_page_p2_price: "from €2,600",
  ch_page_p2_detail: "incl. customs clearance",
  ch_page_p3_label: "Further routes",
  ch_page_p3_price: "On Request",
  ch_page_p3_detail: "Video inspection possible",
  ch_page_faq_h2: "Frequently Asked Questions: Move to Switzerland",
  ch_page_faq1_q: "Do I have to pay customs when moving to Switzerland?",
  ch_page_faq1_a:
    "For private moving goods there are customs exemptions in Switzerland for persons relocating their main residence to Switzerland. We will inform you about all details.",
  ch_page_faq2_q: "How long does transport to Zurich take?",
  ch_page_faq2_a:
    "The travel time is approx. 6–7 hours. Including customs clearance we plan one to one and a half days.",
  ch_page_faq3_q: "Do you also help with customs documents?",
  ch_page_faq3_a:
    "Yes. We assist you in preparing the necessary documents and ensure smooth customs clearance.",
  ch_page_cta_h2: "Request Move to Switzerland",

  // Grenzüberschreitend region page
  grenz_page_label: "REGIONS",
  grenz_page_title: "Cross-Border Moves",
  grenz_page_subtitle:
    "Europe within reach — Germany, Switzerland, Slovakia, Czech Republic, Hungary & more.",
  grenz_page_h2: "Europe is our work area.",
  grenz_page_p1:
    "From Vienna we are active throughout Europe. Whether Bratislava, Budapest, Prague or Munich — we transport your household to your new address anywhere in Europe.",
  grenz_page_p2:
    "Within the EU there are no customs formalities. For third countries like Switzerland we guide you through the entire customs process — straightforward and transparent.",
  grenz_page_p3:
    "One contact person, one fixed price, one relaxed international move.",
  grenz_page_check1: "Germany, Switzerland, Slovakia, Czech Republic",
  grenz_page_check2: "Hungary, Poland, Croatia & more EU countries",
  grenz_page_check3: "Third countries by arrangement",
  grenz_page_check4: "Customs and import information",
  grenz_page_check5: "Full insurance throughout Europe",
  grenz_page_check6: "Fixed price after video inspection",
  grenz_page_card1_title: "EU & Third Countries",
  grenz_page_card1_text:
    "Within the EU no customs hurdles. For third countries like Switzerland or UK we inform you about all formalities.",
  grenz_page_card2_title: "Direct Transport",
  grenz_page_card2_text:
    "No repacking along the way. Your furniture travels directly from Vienna to your new address — in any country.",
  grenz_page_card3_title: "One Contact Person",
  grenz_page_card3_text:
    "For the entire international move you have a dedicated contact person at BAK Transport — from inquiry to delivery.",
  grenz_page_price_h2: "Pricing: International Moves",
  grenz_page_price_footnote: "Fixed price after video inspection. Throughout Europe.",
  grenz_page_p1_label: "Neighbouring countries (up to 300 km)",
  grenz_page_p1_price: "from €1,200",
  grenz_page_p1_detail: "Slovakia, Hungary, Czech Republic",
  grenz_page_p2_label: "Medium distance (300–800 km)",
  grenz_page_p2_price: "from €1,800",
  grenz_page_p2_detail: "Germany, Poland, Croatia",
  grenz_page_p3_label: "Long distance (800+ km)",
  grenz_page_p3_price: "On Request",
  grenz_page_p3_detail: "individual calculation",
  grenz_page_faq_h2: "Frequently Asked Questions: Cross-Border Moves",
  grenz_page_faq1_q: "Which countries do you travel to?",
  grenz_page_faq1_a:
    "We travel to all EU countries as well as Switzerland. For other third countries we create an individual offer on request.",
  grenz_page_faq2_q: "How does an international move work?",
  grenz_page_faq2_a:
    "After a video inspection you receive a fixed price offer. We organise all formalities and bring your moving goods directly to the new address.",
  grenz_page_faq3_q: "Do I need special documents?",
  grenz_page_faq3_a:
    "Not for EU moves. For third countries like Switzerland special customs documents are required — we will help you with this.",
  grenz_page_cta_h2: "Request International Move",
};

export const translations: Record<LangCode, typeof de> = { de, en };
