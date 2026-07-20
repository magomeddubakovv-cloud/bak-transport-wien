export interface NoeOrt {
  slug: string;
  name: string;
  fullName: string;
  beschreibung: string;
  beschreibungEn: string;
  besonderheit: string;
  besonderheitEn: string;
  faq: { q: string; a: string; qEn: string; aEn: string }[];
}

export const NOE_ORTE: NoeOrt[] = [
  {
    slug: "voesendorf",
    name: "Vösendorf",
    fullName: "2331 Vösendorf",
    beschreibung:
      "Vösendorf grenzt direkt an Wien-Liesing und ist vor allem durch die SCS (Shopping City Süd) bekannt. Die Nähe zur Stadtgrenze und der Autobahnanschluss an die A2 machen Umzüge zwischen Wien und Vösendorf besonders unkompliziert. Die direkte Autobahnanbindung über die A2 und die kurze Distanz zu Wien-Liesing bedeuten für uns kurze Anfahrtswege — das kommt unseren Kunden in Form von Terminflexibilität und fairen Preisen zugute.",
    beschreibungEn:
      "Vösendorf borders directly on Vienna-Liesing and is best known for the SCS (Shopping City Süd) shopping center. Its proximity to the city limits and direct access to the A2 motorway make moves between Vienna and Vösendorf especially straightforward. The direct A2 motorway connection and the short distance to Vienna-Liesing mean short travel routes for us — which benefits our customers through scheduling flexibility and fair prices.",
    besonderheit: "SCS, Autobahnanschluss A2, Wien-Liesing-Nähe",
    besonderheitEn: "SCS shopping center, A2 motorway access, close to Vienna-Liesing",
    faq: [
      {
        q: "Wie weit ist Vösendorf von Wien entfernt?",
        a: "Vösendorf liegt direkt an der südlichen Stadtgrenze Wiens, nur wenige Kilometer von Wien-Liesing entfernt. Die kurze Distanz hält unsere Anfahrtszeiten gering.",
        qEn: "How far is Vösendorf from Vienna?",
        aEn: "Vösendorf lies right on Vienna's southern city limit, just a few kilometers from Vienna-Liesing. The short distance keeps our travel times low.",
      },
      {
        q: "Was kostet ein Umzug von Wien nach Vösendorf?",
        a: "Umzüge zwischen Wien und Vösendorf starten ab €680, da die Entfernung unter 30 km liegt. Der genaue Fixpreis wird nach kostenloser Besichtigung oder Video-Call festgelegt.",
        qEn: "What does a move from Vienna to Vösendorf cost?",
        aEn: "Moves between Vienna and Vösendorf start from €680, since the distance is under 30 km. The exact fixed price is set after a free inspection or video call.",
      },
      {
        q: "Übernimmt BAK Transport auch Umzüge in der Nähe der SCS?",
        a: "Ja — wir kennen die Verkehrssituation rund um die SCS und die Zufahrtswege in Vösendorf gut und planen die Anfahrt entsprechend ein.",
        qEn: "Does BAK Transport also handle moves near the SCS?",
        aEn: "Yes — we know the traffic situation around the SCS and the access routes in Vösendorf well and plan our arrival accordingly.",
      },
      {
        q: "Profitiere ich von der Autobahnanbindung Vösendorfs bei der Terminplanung?",
        a: "Ja — dank der direkten A2-Anbindung und der Nähe zu Wien-Liesing sind wir in Vösendorf oft auch kurzfristig verfügbar, da die Anfahrt aus Wien oder anderen Umlandgemeinden schnell geht.",
        qEn: "Do I benefit from Vösendorf's motorway access when scheduling?",
        aEn: "Yes — thanks to the direct A2 connection and the proximity to Vienna-Liesing, we're often available in Vösendorf at short notice too, since the trip from Vienna or other surrounding towns is quick.",
      },
    ],
  },
  {
    slug: "brunn-am-gebirge",
    name: "Brunn am Gebirge",
    fullName: "2345 Brunn am Gebirge",
    beschreibung:
      "Brunn am Gebirge liegt direkt südlich von Wien-Liesing an der Autobahn A2 und hat sich mit dem Bürostandort BEC (Business & Event Center) sowie zahlreichen Wohnprojekten zu einem gefragten Ort im Wiener Umland entwickelt. Neben dem Bürostandort BEC prägen auch zahlreiche neue Wohnprojekte das Ortsbild — wir sind daher sowohl mit Firmenumzügen im BEC als auch mit Privatumzügen in die neuen Wohnanlagen bestens vertraut.",
    beschreibungEn:
      "Brunn am Gebirge lies directly south of Vienna-Liesing on the A2 motorway and, with the BEC (Business & Event Center) office park and numerous residential projects, has become a sought-after location just outside Vienna. Alongside the BEC office park, numerous new residential projects also shape the town — we're therefore just as familiar with corporate moves in the BEC as with private moves into the new residential developments.",
    besonderheit: "A2-Anschluss, Bürostandort BEC, Wien-Liesing-Nähe",
    besonderheitEn: "A2 motorway access, BEC office park, close to Vienna-Liesing",
    faq: [
      {
        q: "Wie schnell ist BAK Transport in Brunn am Gebirge vor Ort?",
        a: "Dank der direkten Autobahnanbindung und der Nähe zu Wien-Liesing sind wir meist innerhalb kurzer Zeit vor Ort.",
        qEn: "How quickly can BAK Transport get to Brunn am Gebirge?",
        aEn: "Thanks to direct motorway access and the proximity to Vienna-Liesing, we're usually on site within a short time.",
      },
      {
        q: "Was kostet ein Umzug nach Brunn am Gebirge?",
        a: "Umzüge nach Brunn am Gebirge starten ab €680, da die Entfernung unter 30 km liegt. Fixpreis nach Besichtigung oder Video-Call.",
        qEn: "What does a move to Brunn am Gebirge cost?",
        aEn: "Moves to Brunn am Gebirge start from €680, since the distance is under 30 km. Fixed price after an inspection or video call.",
      },
      {
        q: "Übernehmen Sie auch Büroumzüge in Brunn am Gebirge?",
        a: "Ja, wir führen regelmäßig Firmenumzüge in und rund um den Bürostandort BEC durch — auch außerhalb der Geschäftszeiten.",
        qEn: "Do you also handle office moves in Brunn am Gebirge?",
        aEn: "Yes, we regularly carry out corporate moves in and around the BEC office park — including outside business hours.",
      },
      {
        q: "Zieht BAK Transport auch in die neuen Wohnprojekte in Brunn am Gebirge?",
        a: "Ja — neben den Firmenumzügen rund um das BEC übernehmen wir regelmäßig auch Privatumzüge in die neu entstandenen Wohnanlagen von Brunn am Gebirge.",
        qEn: "Does BAK Transport also move people into the new residential projects in Brunn am Gebirge?",
        aEn: "Yes — alongside corporate moves around the BEC, we also regularly handle private moves into Brunn am Gebirge's newly built residential developments.",
      },
    ],
  },
  {
    slug: "perchtoldsdorf",
    name: "Perchtoldsdorf",
    fullName: "2380 Perchtoldsdorf",
    beschreibung:
      "Perchtoldsdorf grenzt unmittelbar an Wien-Liesing und besticht mit seinem historischen Ortskern rund um den Perchtoldsdorfer Turm sowie zahlreichen Heurigen. Viele Häuser hier sind älter und erfordern erfahrene Umzugsteams. Rund um die Heurigenbetriebe und den historischen Ortskern stehen oft ältere, denkmalgeschützte Gebäude — hier setzen wir zusätzlichen Kanten- und Bodenschutz ein, um Bausubstanz und Möbel gleichermaßen zu schonen.",
    beschreibungEn:
      "Perchtoldsdorf borders directly on Vienna-Liesing and impresses with its historic town center around the Perchtoldsdorfer Turm tower and numerous heurigen wine taverns. Many buildings here are older and call for an experienced moving team. Around the heurigen wine taverns and the historic town center, older, heritage-protected buildings are common — here we use extra edge and floor protection to safeguard both the building fabric and your furniture.",
    besonderheit: "Historischer Ortskern, Perchtoldsdorfer Turm, Weinbau",
    besonderheitEn: "Historic town center, Perchtoldsdorfer Turm tower, wine-growing",
    faq: [
      {
        q: "Wie läuft ein Umzug im historischen Ortskern von Perchtoldsdorf ab?",
        a: "Der Ortskern hat teils enge Gassen und begrenzten Parkraum. Wir planen die Anfahrt vorab und passen bei Bedarf die Fahrzeuggröße an.",
        qEn: "How does a move in Perchtoldsdorf's historic town center work?",
        aEn: "The town center has some narrow lanes and limited parking. We plan our arrival in advance and adjust the vehicle size if needed.",
      },
      {
        q: "Was kostet ein Umzug nach Perchtoldsdorf?",
        a: "Umzüge nach Perchtoldsdorf starten ab €680, da der Ort innerhalb der 30-km-Zone ab Wien liegt. Fixpreis nach kostenloser Besichtigung.",
        qEn: "What does a move to Perchtoldsdorf cost?",
        aEn: "Moves to Perchtoldsdorf start from €680, since the town lies within the 30 km zone from Vienna. Fixed price after a free inspection.",
      },
      {
        q: "Ziehen Sie auch von Perchtoldsdorf zurück nach Wien um?",
        a: "Ja, wir übernehmen Umzüge in beide Richtungen — von Wien nach Perchtoldsdorf und umgekehrt.",
        qEn: "Do you also move people from Perchtoldsdorf back to Vienna?",
        aEn: "Yes, we handle moves in both directions — from Vienna to Perchtoldsdorf and vice versa.",
      },
      {
        q: "Hat BAK Transport Erfahrung mit Umzügen bei den Heurigen in Perchtoldsdorf?",
        a: "Ja — viele Gebäude rund um die Heurigenbetriebe sind älter und denkmalgeschützt. Wir arbeiten hier mit zusätzlichem Schutz für Stiegenhäuser und historische Bausubstanz.",
        qEn: "Does BAK Transport have experience with moves near the heurigen in Perchtoldsdorf?",
        aEn: "Yes — many buildings around the heurigen wine taverns are older and heritage-protected. We work with extra protection for stairwells and historic building fabric here.",
      },
    ],
  },
  {
    slug: "klosterneuburg",
    name: "Klosterneuburg",
    fullName: "3400 Klosterneuburg",
    beschreibung:
      "Klosterneuburg liegt an der Donau direkt an der nordwestlichen Stadtgrenze Wiens und ist vor allem für das Stift Klosterneuburg und den Weinbau bekannt. Die Nähe zu Wien-Döbling macht Umzüge in beide Richtungen unkompliziert. Die Lage am Donauufer bedeutet für einige Adressen in Klosterneuburg längere Zufahrtswege entlang des Ufers — wir kalkulieren diese Anfahrtszeit bereits in unserer Planung mit ein.",
    beschreibungEn:
      "Klosterneuburg sits on the Danube, right on Vienna's northwestern city limit, and is best known for Klosterneuburg Abbey and its vineyards. Its proximity to Vienna-Döbling makes moves in either direction straightforward. The location on the Danube riverbank means longer approach routes along the river for some addresses in Klosterneuburg — we already factor this travel time into our planning.",
    besonderheit: "Stift Klosterneuburg, Donauufer, Weinbau",
    besonderheitEn: "Klosterneuburg Abbey, Danube riverbank, wine-growing",
    faq: [
      {
        q: "Wie weit ist Klosterneuburg von Wien entfernt?",
        a: "Klosterneuburg grenzt direkt an Wien-Döbling und liegt nur wenige Kilometer vom Stadtzentrum entfernt.",
        qEn: "How far is Klosterneuburg from Vienna?",
        aEn: "Klosterneuburg borders directly on Vienna-Döbling and is only a few kilometers from the city center.",
      },
      {
        q: "Was kostet ein Umzug nach Klosterneuburg?",
        a: "Umzüge nach Klosterneuburg starten ab €680, da die Entfernung unter 30 km liegt. Fixpreis nach Besichtigung oder Video-Call.",
        qEn: "What does a move to Klosterneuburg cost?",
        aEn: "Moves to Klosterneuburg start from €680, since the distance is under 30 km. Fixed price after an inspection or video call.",
      },
      {
        q: "Kennt sich BAK Transport mit den engen Gassen der Klosterneuburger Altstadt aus?",
        a: "Ja, wir sind regelmäßig in Klosterneuburg unterwegs und kennen die Zufahrtsmöglichkeiten rund um Stift und Altstadt.",
        qEn: "Is BAK Transport familiar with the narrow lanes of Klosterneuburg's old town?",
        aEn: "Yes, we're regularly on the road in Klosterneuburg and know the access routes around the abbey and old town well.",
      },
      {
        q: "Gibt es in Klosterneuburg Adressen, die schwerer zu erreichen sind?",
        a: "Direkt am Donauufer gelegene Adressen können etwas längere Anfahrtswege bedeuten. Wir planen die Route bereits bei der Besichtigung mit ein, sodass der Fixpreis am Umzugstag verlässlich bleibt.",
        qEn: "Are there addresses in Klosterneuburg that are harder to reach?",
        aEn: "Addresses directly on the Danube riverbank can mean somewhat longer approach routes. We already factor the route into our planning during the inspection, so the fixed price stays reliable on moving day.",
      },
    ],
  },
  {
    slug: "moedling",
    name: "Mödling",
    fullName: "2340 Mödling",
    beschreibung:
      "Mödling ist die Bezirkshauptstadt des gleichnamigen Bezirks und liegt am Rand des Wienerwaldes, nur wenige Kilometer südlich von Wien-Liesing. Die historische Altstadt und die gute Bahnanbindung machen Mödling bei Zuzüglern aus Wien beliebt. Als Bezirkshauptstadt vereint Mödling die historische Altstadt mit neueren Wohngebieten am Rand des Wienerwaldes — wir stellen uns bei jedem Umzug flexibel auf die jeweilige Bausubstanz ein.",
    beschreibungEn:
      "Mödling is the district capital of the eponymous district and lies on the edge of the Vienna Woods, just a few kilometers south of Vienna-Liesing. Its historic old town and good rail connections make Mödling popular among people relocating from Vienna. As the district capital, Mödling combines the historic old town with newer residential areas on the edge of the Vienna Woods — we adapt flexibly to the respective building type for every move.",
    besonderheit: "Bezirkshauptstadt, historische Altstadt, Wienerwald",
    besonderheitEn: "District capital, historic old town, Vienna Woods",
    faq: [
      {
        q: "Wie ist Mödling verkehrstechnisch an Wien angebunden?",
        a: "Mödling liegt direkt an der Südbahn und der A2 — sowohl mit dem Zug als auch mit dem LKW ist die Anfahrt aus Wien kurz.",
        qEn: "How is Mödling connected to Vienna by transport?",
        aEn: "Mödling sits directly on the Southern Railway line and the A2 motorway — the trip from Vienna is short whether by train or by truck.",
      },
      {
        q: "Was kostet ein Umzug nach Mödling?",
        a: "Umzüge nach Mödling starten ab €680, da der Ort innerhalb der 30-km-Zone liegt. Fixpreis nach kostenloser Besichtigung.",
        qEn: "What does a move to Mödling cost?",
        aEn: "Moves to Mödling start from €680, since the town lies within the 30 km zone. Fixed price after a free inspection.",
      },
      {
        q: "Übernehmen Sie auch Umzüge in der historischen Altstadt von Mödling?",
        a: "Ja — wir kennen die teils engen Gassen der Altstadt und planen die Zufahrt entsprechend.",
        qEn: "Do you also handle moves in Mödling's historic old town?",
        aEn: "Yes — we know the sometimes narrow lanes of the old town and plan our access accordingly.",
      },
      {
        q: "Sind Umzüge am Waldrand von Mödling anders als in der Altstadt?",
        a: "Ja — Richtung Wienerwald treffen wir häufiger auf Einfamilienhäuser mit größeren Zufahrten, während die Altstadt engere Gassen mit begrenztem Parkraum hat. Wir passen Fahrzeuggröße und Teamstärke entsprechend an.",
        qEn: "Are moves on the edge of the Vienna Woods in Mödling different from those in the old town?",
        aEn: "Yes — toward the Vienna Woods we more often find single-family houses with larger access areas, while the old town has narrower lanes with limited parking. We adjust vehicle size and team strength accordingly.",
      },
    ],
  },
  {
    slug: "baden",
    name: "Baden",
    fullName: "2500 Baden",
    beschreibung:
      "Baden bei Wien ist die Bezirkshauptstadt des Bezirks Baden und als Kurstadt mit Thermalquellen, dem Rosarium und dem Casino Baden bekannt. Die Distanz zu Wien ist mit rund 26 Kilometern etwas größer als bei den anderen Orten im Wiener Umland. Als Kurstadt hat Baden neben klassischen Wohnhäusern auch viele historische Kurhotels und Villen — bei der Möbelmontage und dem Transport empfindlicher Einrichtung bringen wir hier besondere Sorgfalt mit.",
    beschreibungEn:
      "Baden bei Wien is the district capital of Baden district and known as a spa town with thermal springs, the Rosarium rose garden, and Casino Baden. At around 26 kilometers, it's a bit further from Vienna than the other towns just outside the city. As a spa town, Baden has many historic spa hotels and villas alongside classic residential buildings — we bring particular care to furniture assembly and the transport of delicate furnishings here.",
    besonderheit: "Kurstadt, Rosarium, Casino Baden",
    besonderheitEn: "Spa town, Rosarium, Casino Baden",
    faq: [
      {
        q: "Wie weit ist Baden von Wien entfernt?",
        a: "Baden liegt rund 26 km südlich von Wien und ist über die A2 gut erreichbar.",
        qEn: "How far is Baden from Vienna?",
        aEn: "Baden lies around 26 km south of Vienna and is easily reached via the A2 motorway.",
      },
      {
        q: "Was kostet ein Umzug nach Baden?",
        a: "Umzüge nach Baden starten ab €680, da der Ort innerhalb der 30-km-Zone ab Wien liegt. Fixpreis nach Besichtigung oder Video-Call.",
        qEn: "What does a move to Baden cost?",
        aEn: "Moves to Baden start from €680, since the town lies within the 30 km zone from Vienna. Fixed price after an inspection or video call.",
      },
      {
        q: "Übernehmen Sie auch die Einlagerung von Möbeln für vorübergehende Aufenthalte in Baden?",
        a: "Ja, wir übernehmen sowohl reguläre Umzüge als auch die kurz- und langfristige Einlagerung von Möbeln in und um Baden.",
        qEn: "Do you also offer furniture storage for temporary stays in Baden?",
        aEn: "Yes, we handle both regular moves and short- and long-term furniture storage in and around Baden.",
      },
      {
        q: "Wirkt sich die etwas größere Entfernung Badens auf den Umzug aus?",
        a: "Die rund 26 km sind über die A2 gut und zügig zu bewältigen. Der etwas längere Anfahrtsweg ist bereits in unserem Fixpreis ab €680 berücksichtigt — es entstehen keine versteckten Zusatzkosten.",
        qEn: "Does Baden's slightly greater distance affect the move?",
        aEn: "The roughly 26 km are covered quickly and easily via the A2. The somewhat longer approach is already factored into our fixed price from €680 — there are no hidden extra costs.",
      },
    ],
  },
  {
    slug: "schwechat",
    name: "Schwechat",
    fullName: "2320 Schwechat",
    beschreibung:
      "Schwechat grenzt direkt an Wien-Simmering und ist vor allem durch den Flughafen Wien bekannt. Als wichtiger Industrie- und Wirtschaftsstandort im Wiener Umland gehört Schwechat zu den am besten erreichbaren Orten in Niederösterreich. Als bedeutender Industrie- und Flughafenstandort hat Schwechat neben klassischen Wohnumzügen auch einen hohen Anteil an Firmen- und Büroumzügen — beide Umzugsarten gehören bei uns zum Alltag.",
    beschreibungEn:
      "Schwechat borders directly on Vienna-Simmering and is best known as the home of Vienna International Airport. As an important industrial and business location just outside Vienna, Schwechat is one of the most easily reachable towns in Lower Austria. As a major industrial and airport hub, Schwechat sees not only classic residential moves but also a high share of corporate and office moves — both types of moves are part of our everyday work here.",
    besonderheit: "Flughafen Wien, Industriestandort, Wien-Simmering-Nähe",
    besonderheitEn: "Vienna International Airport, industrial hub, close to Vienna-Simmering",
    faq: [
      {
        q: "Wie weit ist Schwechat vom Wiener Stadtzentrum entfernt?",
        a: "Schwechat grenzt direkt an Wien-Simmering und liegt nur rund 15 km vom Zentrum entfernt.",
        qEn: "How far is Schwechat from Vienna's city center?",
        aEn: "Schwechat borders directly on Vienna-Simmering and is only around 15 km from the center.",
      },
      {
        q: "Was kostet ein Umzug nach Schwechat?",
        a: "Umzüge nach Schwechat starten ab €680, da der Ort innerhalb der 30-km-Zone liegt. Fixpreis nach kostenloser Besichtigung.",
        qEn: "What does a move to Schwechat cost?",
        aEn: "Moves to Schwechat start from €680, since the town lies within the 30 km zone. Fixed price after a free inspection.",
      },
      {
        q: "Übernehmen Sie auch Umzüge in der Nähe des Flughafens Wien?",
        a: "Ja, wir sind mit den Zufahrtsregelungen rund um den Flughafen Wien vertraut und planen Umzüge dort entsprechend.",
        qEn: "Do you also handle moves near Vienna International Airport?",
        aEn: "Yes, we're familiar with the access regulations around Vienna International Airport and plan moves there accordingly.",
      },
      {
        q: "Führt BAK Transport auch Firmenumzüge in Schwechat durch?",
        a: "Ja — durch den Industriestandort und den Flughafen Wien haben wir viel Erfahrung mit Büro- und Firmenumzügen in Schwechat, auch außerhalb der regulären Geschäftszeiten.",
        qEn: "Does BAK Transport also carry out corporate moves in Schwechat?",
        aEn: "Yes — thanks to the industrial location and Vienna International Airport, we have extensive experience with office and corporate moves in Schwechat, including outside regular business hours.",
      },
    ],
  },
];

export const getOrtBySlug = (slug: string) =>
  NOE_ORTE.find(o => o.slug === slug);
