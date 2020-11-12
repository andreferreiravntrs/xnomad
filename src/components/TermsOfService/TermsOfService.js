import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: March 01, 2018</p>

      <h2>Allmänt</h2>
      <p>xNomad allmänna villkor (“Allmänna Villkoren”), tillsammans med övriga villkor som finns på xNomad webbplats 
      (“Webbplatsen”) samt övriga villkor som xNomad i vissa fall tillhandahåller en användare separat, 
      beskriver de villkor som är tillämpliga vid användning av xNomad Webbplats samt vid användningen av xNomad'
      tjänster. Se under rubriken Regler för annonsering nedan med avseende på innehåll och närmare utformning och 
      kategorisering av annonser.</p>
      
      <p>Genom att besöka xNomad webbplats, lämnar du ditt samtycke till nedanstående 
      villkor och att du läst, förstått och godkänt de Allmänna Villkoren och förbinder dig att följa dem. 
      Om du inte accepterar villkoren bör du inte använda dig av hemsidan samt avstå från att ladda ner någon 
      information eller något material från den. De Allmänna Villkoren gäller alla besökare, användare och andra 
      som använder tjänsten.</p>

      <p>Vi rekommenderar dig att skriva ut en kopia av de Allmänna Villkoren för framtida bruk.</p>

      <p>Dessa Allmänna Villkor ingås på svenska och gäller från den 01 March 2018.</p>

      <p>xNomad kan komma att ändra dessa Allmänna Villkor och kommer då att publicera de ändrade Allmänna Villkoren 
      på Webbplatsen. De ändrade villkoren blir gällande för nya användare från och med det datum de publiceras på 
      Webbplatsen. Redan existerande användare blir bundna av de ändrade villkoren 30 dagar efter publicering på 
      Webbplatsen.</p>

      <p>För att ingå avtal om xNomad tjänster måste du vara minst 18 år gammal. xNomad tjänster tillhandahålls inte 
      företag/personer som tidigare har brutit mot de Allmänna Villkoren, tidigare av xNomad tillhandahållna villkor 
      och/eller lagar och regler. Om du registrerar ett företag som användare intygar du att du har behörighet att 
      teckna/binda företaget i enlighet med dessa Allmänna Villkor.</p>

      <p>xNomad är en virtuell mötesplats för uthyrning av lediga lokaler, ytor och platser. xNomad agerar ej 
      fastighetsmäklare, är ej fastighetsägare eller fastighetsskötare. xNomad är ej återförsäljare, inredare, uthyrare, 
      andrahandsuthyrare, administrerar eller besiktigar fastigheter/lokalers egenskaper. xNomad erbjuder teknisk 
      plattform för att underlätta flödet av betalning och uthyrning av lokaler, platser och liknande mellan uthyrare 
      och hyresgäst.</p>

      <h2>Immateriella rättigheter</h2>
      <p>Allt material på Webbplatsen, inklusive Webbplatsens layout är skyddat av upphovsrätt, varumärkesrätt, 
      patent och/eller andra immaterialrättsliga regler. Om inte annat anges är allt material på Webbplatsen 
      xNomad exklusiva egendom.</p>

      <p>Du får skriva ut enskilda sidor från xNomad webbsida men du får i övrigt inte kopiera, reproducera, 
      publicera, ladda upp, skicka eller distribuera något material eller någon information på Webbplatsen 
      utan föregående skriftligt tillstånd från xNomad.</p>

      <p>Du får göra en förflyttande länk till Webbplatsens startsida, d.v.s. en länk som “förflyttar” läsaren 
      helt till Webbplatsen i samma eller nytt fönster, så länge dessa är fullständiga fönster. Du får dock 
      inte indexera innehållet på Webbplatsen och baserat på detta automatgenerera länkar på din egen hemsida. 
      Inte heller får du länka in Webbplatsens material i ett framesystem eller Pop-up fönster. Du bör alltid 
      tänka på att det kan finnas andra än xNomad som har rättigheter till materialet på Webbplatsen och dessa 
      måste då också ge sitt tillstånd.</p>

      <p>All otillåten användning medför ersättningsskyldighet. Den som avsiktligt eller genom grov oaktsamhet bryter 
      mot lagen kan straffas med böter eller fängelse upp till två år och bli dömd att betala skadestånd.</p>

      <h2>Annonserat innehåll</h2>
      <p>Med annonserat innehåll avses allt sådant innehåll som en användare av tjänsten på Webbplatsen skapar 
      och/eller lägger upp på Webbsidan som t.ex. bilder, filmer och annonstexter (“Annonserat innehåll”).</p>

      <p>Du garanterar att du innehar nödvändiga rättigheter till det Annonserade innehållet, antingen genom 
      att du själv har skapat detta (vare sig det är exempelvis en bild, en film eller en annonstext), eller 
      att alla som har medverkat har gett dig tillstånd att använda det Annonserade innehållet på Webbsidan 
      i enligt med de Allmänna Villkoren.</p>

      <p>Du garanterar att Annonserat innehåll inte innehåller upphovsrättsligt skyddat material, såsom skyddad 
      musik, inklippta filmsekvenser eller annat upphovsrättsligt skyddat material som du inte har fått 
      tillåtelse att använda i det Annonserade materialet och inte heller annans logotyp.</p>

      <p>Du garanterar att du har sett till att de personer som kan identifieras i det Annonserade innehållet 
      (exempelvis i en bild eller en film eller enbart genom sitt namn) är medvetna om hur materialet kommer 
      att användas och att de uttryckligen har godkänt att förekomma i det Annonserade innehållet och att 
      xNomad även kan komma att använda det Annonserade innehållet i marknadsföringssyfte.</p>

      <p>Genom att lägga upp Annonserat innehåll, ger du xNomad en oinskränkt rätt att fritt förfoga över det 
      Annonserade innehållet, genom att till exempel bearbeta, formatanpassa, lagra eller kopiera det och 
      göra det tillgängligt för allmänheten oavsett mediekanal och att vidare upplåta dessa rättigheter till 
      eventuella samarbetspartners. xNomad får även använda det Annonserade innehållet i marknadsföringssyfte. 
      xNomad rättigheter kvarstår även efter att en annons har raderats.</p>

      <p>Du efterger härmed alla krav på ersättning från xNomad för xNomad användning av det Annonserade innehållet.</p>

      <p>Du garanterar att du inte använt dig av direktlänkning till aktiva web-kameror (live-cams) eller av 
      bildmaterial från säkerhets- eller övervakningskameror.</p>

      <h2>Marknadsföring</h2>
      <p>All marknadsföring skall enligt Marknadsföringslagen (2008:486) stämma överens med god marknadsföringssed. 
      Om ett företag bryter mot reglerna kan Marknadsdomstolen förbjuda detta och om det fortsätter kan företaget 
      dömas att betala vite (ett slags böter).</p>

      <p>Det är uttryckligen förbjudet att skicka reklam via e-mail eller SMS till fysiska personer om inte dessa 
      har samtyckt till det på förhand.</p>

      <h2>Ansvar</h2>
      <p>xNomad garanterar inte kontinuerlig, oavbruten eller säker tillgång till sin tjänst. Driften av Webbplatsen 
      kan komma att störas av ett antal faktorer utanför xNomad kontroll och xNomad ställer inga garantier gällande 
      webbsidans funktion eller tillgänglighet. xNomad kan inte göras ansvarigt för skador som direkt eller indirekt 
      orsakas av användning av Webbplatsen och dess innehåll. Vid tekniska fel utgår ingen ersättning.</p>

      <p>Webbplatsen är huvudsakligen en annonsplats. Webbplatsen är således ett forum som låter användare annonsera 
      lokaler, platser och ytor. xNomad har ingen kontroll över eller medverkar i transaktionen mellan en hyresgäst 
      och en uthyrare. Du skall inte anta att ett erbjudande av ett objekt är giltigt och lagligt endast för att det 
      förekommer på Webbsidan. xNomad ansvarar inte för det utannonserade objektet.</p>

      <p>Det åligger hyresgästen att försäkra sig om att uthyraren är ägare till lokalen och/eller har rätt att vidare 
      uthyra den.</p>

      <p>xNomad ansvarar inte för skada som beror på uteblivna eller fördröjda annonssvar eller på felaktig information 
      i annonstexten.</p>

      <h2>Skadeersättning</h2>
      <p>Du som användare åtar dig att hålla xNomad skadeslöst för det fall att någon tredje part ställer krav på 
      ersättning på grund av Annonserat innehåll eller på grund av att du som användare i övrigt har agerat i strid 
      med dessa Allmänna Villkor eller i strid med gällande lag eller tredje parts rättigheter.</p>

      <h2>Personuppgifter</h2>
      <p>xNomad samlar in och använder ett fåtal uppgifter för att leverera och upprätthålla en enkel, effektiv och 
      trygg hyres- och uthyrningssida med tillhörande tjänster.</p>

      <p>De uppgifter vi samlar in när du använder vår tjänst som hyresgäst är:</p>

      <ol>
        <li>Namn och/eller företagsnamn</li>

        <li>Organisationsnummer eller personnummer</li>

        <li>Adress</li>

        <li>E-post adress</li>

        <li>IP-adress</li>
      </ol>
      
      <p>De uppgifter vi samlar in när du använder vår tjänst som uthyrare är:</p>

      <ol>
        <li>Namn och/eller företagsnamn</li>

        <li>Organisationsnummer eller personnummer</li>

        <li>Adress</li>

        <li>E-postadress</li>

        <li>IP-adress</li>

        <li>Telefonnummer</li>
      </ol>

      <h2>Informationen som du anger i annonser och formulär.</h2>
      <p>För att göra din annonsering så effektiv som möjligt och bereda dig så många potentiella hyresgäster som möjligt, 
      kan informationen komma att delas med samarbetspartners t.ex. om du väljer att utnyttja sådana tjänster som erbjuds 
      i samarbete med våra samarbetspartners.</p>

      <p>Uppgifterna kan även komma att användas för att skicka ut anpassad information och erbjudanden om 
      xNomad-relaterade tjänster. Du kan alltid tacka nej till mejlutskick med erbjudanden från xNomad via ditt 
      xNomad-konto, eller via utskicket.</p>

      <p>När du lägger in en annons, använder en tjänst, kontaktar vår kundtjänst eller mailar annonsör medger du att 
      xNomad använder, sparar och kan lämna ut dina personuppgifter till andra såsom annonsör, samarbetspartners, 
      eller till behöriga myndigheter som Polisen, Skatteverket m.fl.</p>

      <p>Om du inte kan godta vår personuppgiftshantering eller våra andra villkor ber vi dig avstå från annonsering 
      och att inte använda våra tjänster.</p>

      <p>All insamlad information skyddas med tekniska hjälpmedel och vi har säkerhetsrutiner och system kopplade till 
      vår tjänst för att förhindra obehörig åtkomst och användning av uppgifter. Våra samarbetspartners har förbundit 
      sig att hantera informationen i enlighet med våra krav på säkerhet och sekretess.</p>

      <p>Personuppgiftsansvarig är Nomadic Retail AB, Bolagets säte: Stockholm. Genom att skriva till xNomad på adress: 
      xNomad AB, Kungsgatan 6, 111 43 Stockholm och ange de uppgifter du använt vid registrering eller korrespondens, 
      kan  kostnadsfritt en gång per år, få veta vilka uppgifter xNomad har registrerat om dig och hur dessa används. 
      Du kan när som helst skriftligen begära att uppgifter om dig korrigeras eller raderas om de är felaktiga.</p>

      <h2>Betalningsregler</h2>
      <p>Alla hyror debiteras och ska erläggas i förskott. Om betalningen ej kommit xNomad tillhanda innan hyresperioden 
      inleds kommer hyresgästen ej att äga tillträde till lokalen fram till dess att full betalning är erhållen. 
      Betalningen skall göras till xNomad Bankgirokonto och ske mot faktura.</p>

      <h2>Ångerrätt</h2>
      <p>Du är medveten om att genom att du tar del av eller påbörjar utnyttjandet av de tjänster som finns på 
      Webbsidan föreligger inte någon ångerrätt.</p>

      <h2>Kontaktuppgifter</h2>
      <p>xNomad AB, xNomad AB, Kungsgatan 6, 111 43</p>

      <p>Tillämplig lag och tvistelösning</p>

      <p>Svensk lag skall gälla avseende dessa Allmänna Villkor och tvister skall lösas i svensk domstol.</p>

      <h2>Regler för annonsering</h2>
      <p>xNomad annonser är till för företag.</p>

      <p>En annons ligger ute tills du själv väljer att plocka bort annonsen.</p>

      <p>xNomad gör inte anspråk på att nedan angiven information, med avseende på vad som kan anses vara olagligt 
      eller otillbörligt och således inte får förekomma på Webbplatsen, är komplett eller uttömmande. Informationen 
      är således i dessa avseenden endast exemplifierande. Du ansvarar själv som användare för att den Information 
      som du lägger in i annonser inte strider mot gällande lagar och regler. Du som användare är personligen ansvarig 
      för din annons.</p>

      <p>xNomad förbehåller sig rätten att granska samtliga annonser, att neka eller avlägsna en annons på grund av att 
      den bryter mot de Allmänna Villkoren, tredje parts upphovsrätt, annan rättslig reglering eller mot xNomad 
      principer och anda.</p>

      <p>Inte ren marknadsföring: Det är endast tillåtet att annonsera om uthyrning. Annonstexten ska användas till 
      att beskriva det specifika objektet som erbjuds i annonsen och inte för att annonsera annan vara, produkt 
      eller tjänst.</p>

      <p>Beskrivning: Annonsrubriken måste beskriva objektet, inga länkningar får förekomma. Objektet måste beskrivas 
      i annonstexten, det är inte tillåtet att endast länka till en annan sida. Annonstexter får inte kopieras från 
      andra annonser som inte är era egna, dessa kan vara skyddade av upphovsrätt och/eller andra lagar och är xNomad 
      egendom enligt vad som anges ovan.</p>

      <p>Inga dubbletter: Det är inte tillåtet att lägga in annonser om samma objekt mer än en gång samtidigt.</p>

      <p>Kategorisering: Annonsen skall läggas i den kategori som bäst beskriver ditt objekt (annonsen kan flyttas 
      till rätt kategori när den granskas).</p>

      <p>Uthyrning av lägenhet: Vid annonsering av privatbostad måste annonsören intyga att ingen förskottshyra eller 
      deposition tas ut innan lägenheten är visad och avtal/kontrakt tecknats. xNomad förbehåller sig rätten att neka 
      annonser där det framkommit att intygandet inte följts.</p>

      <p>Stötande och kränkande innehåll: Annonser som kan verka stötande eller kränkande för folkgrupper och/eller 
      enskilda individer godkänns inte. Vissa ålderdomliga benämningar på folkgrupper kan uppfattas som stötande 
      och får inte användas. Bilder och filmer av kränkande karaktär tillåts inte.</p>

      <p>Tredjepartsinformation: När du lägger upp din annons kan viss tilläggsinformation komma att visas i anslutning 
      till din annons. Sådan tilläggsinformation visas automatiskt och är baserad på den information som du som 
      användare/annonsör lägger in, exempelvis kan viss kartinformation uppkomma baserat på postnummer och vissa 
      fordonsuppgifter kan uppkomma i anledning av registreringsnummer. Dessa tilläggsuppgifter hämtas från externa 
      system vilka tillhandahålls av tredje part och xNomad tar inget ansvar för eventuella felaktigheter. Du måste 
      själv som annonsör kontrollera att dessa uppgifter är korrekta. Meddela gärna xNomad om något inte stämmer.</p>

      <p>Bilder och filmer: Bilder och filmer skall vara relevanta för varan eller tjänsten du annonserar om.</p>

      <p>Avseende bilder och annat innehåll i annonser, se också ovan i dessa Allmänna Villkor under rubriken 
      Annonserat innehåll. Annonserat innehåll överlåts till xNomad varvid full äganderätt tillkommer xNomad.</p>

      <p>Logotyper: Det är inte tillåtet att använda annans logotyp i en annons (oavsett om logotypen är del av en 
      bild eller film).</p>

      <h2>Hyresgäst</h2>
      <p>Som hyresgäst ska du inneha en företagsförsäkring som täcker eventuella skador eller olyckor som kan uppstå 
      i och på lokalen samt för tredje person som kan skadas från något som härrör lokalen under tiden den hyrs. 
      Det är även ditt ansvar att säkerställa att uthyraren har rätt att hyra ut objektet.</p>

      <h2>Uthyrning i andra hand</h2>
      <p>Om du hyr ut lokal/objekt i andra hand måste du ha fastighetsägarens- och berörda parters medgivande.</p>

      <h2>Betalning</h2>
      <p>Hyresersättningen betalas av hyresgästen direkt till xNomad mot faktura. Hela beloppet måste vara xNomad 
      tillhanda innan hyresperioden påbörjas, annars kommer inte tillträde till lokalen medges. Hyresersättningen 
      kommer att föras över till uthyraren efter hyresgästens tillträde till lokalen, detta för att säkerställa att 
      hyresgästen fått tillträde till lokalen som utlovats och att de agremanger som utlovats föreligger.</p>

      <h2>Försäkring</h2>
      <p>När man hyr en butik av eller via xNomad så ska man ha tecknat en företagsförsäkring, utöver den egna 
      företagsförsäkringen och fastighetsägarens försäkring så har xNomad en försäkring.</p>

      <p>xNomad försäkring finns för att hjälpa till att täcka kostnader som inte täcks av fastighetsägarens 
      fastighetsförsäkring eller hyresgästens företagsförsäkring. Försäkringen kan även användas för att hjälpa 
      till att betala hela eller delar av självrisken för fastighetsägarens fastighetsförsäkring eller hyresgästens 
      företagsförsäkring. Försäkringen kan aldrig uppgå till mer än 2 % av det i kontraktet/avtalet överenskomna 
      hyresbeloppet. Hyresgästen och fastighetsägaren måste ha använt sig av xNomad avtal för att ha rätt att nyttja 
      försäkringen.</p>

      <h2>Uthyrning av bostad</h2>
      <p>När du hyr ut ditt småhus, din ägarlägenhet, din bostadsrätt eller din hyresrätt med överskott, ska du 
      redovisa överskottet som inkomst av kapital. Skatten är 30 procent.</p>

      <p>Överskottet beräknas på olika sätt beroende på vilken typ av bostad du hyr ut. Du får göra ett schablonavdrag 
      oavsett bostadstyp. Schablonavdraget är 40 000 kronor per bostad och år. Det har ingen betydelse hur många som 
      äger bostaden. Om du både hyr ut och säljer produkter från privatbostaden under samma år, gör du schablonavdraget 
      från de sammanlagda intäkterna. Schablonavdraget har höjts under de senaste åren.</p>

      <h1>DEFAULT POPUP TENANCY AGREEMENT</h1>

      <h2>About us</h2>
      <p>xNomad.co is owned and operated by Nomadic Retail AB. Here after referred to as xNomad. xNomad is an online 
        marketplace facilitating short-term commercial rentals between Space Owners termed Landlords and Tenants.  
        The commercial spaces available on our website are not operated by xNomad. xNomad only acts as an intermediary. 
        The site allows users to connect, agree on applicable terms and then enter into a comprehensive, legally-binding 
        agreement tailored to users’ particular needs.</p>
      <p>The terms and conditions laid out below set out the use of our Services and Space-Sharing Agreements facilitated 
        by the Services. Your use and access of the Services and Content signifies your acceptance of these Terms of 
        Service and agreement to be bound by them and any and all other applicable terms herein referenced.</p>

      <h2>Rental object</h2>
      <p>The Landlord lets to the Tenant, under the terms stated by the lease, Tenancy consisting of 1 xNomad, 
        ("Rental object")</p>
      <p>The Tenant shall use the Rental object for retail purposes. The Tenant may also use storage room, lighting, 
        heating & bathroom as per individual object availability.</p>
      <p>The Rental object is rented out furnished. Tenant and Landlord agree that when moving in the Rental object will 
        include some amenities.</p>
      <p>When moving out the Tenant shall return all keys to the Landlord. The Landlord may keep a copy of the keys during 
        the rental period.</p>
      <p>The Tenant is renting as is.</p>

      <h2>Rental period</h2>
      <p>The rental period is from the dates as per the booking calendar. Additional time will be exclusively requested and 
        booked  through xNomad marketplace as available.</p>
      
      <h2>Rent and security deposit</h2>
      <p>The rent is agreed on booking.</p>
      <p>The rent includes: water, heating. Electricity, WiFi and other auxiliary services may be additional charges as 
        noted in the individual object.</p>
      <p>Before moving in the Landlord shall ensure and bear the cost of a final cleaning.</p>
      <p>Before moving out the Tenant shall ensure and bear the cost of a final cleaning.</p>
      <p>The Landlord assigns all claims (i.e rent payments) on the Tenant emerged by this lease.</p>

      <h2>Maintenance and care</h2>
      <p>The Tenant undertakes to keep the Rental object and its property well maintained during the rental period.</p>
      <p>The Tenant undertakes to only use the Rental object in a way that does not disturb the people who live or 
        operate in the surrounding area to a point that impairs their working or living environment in an intolerable way.</p>
      <p>The Tenant undertakes to while using the Rental object also be aware of everything required to maintain its 
        wellbeing, order and condition within the property. Therefore the Tenant undertakes to follow all rules regarding 
        the property and follow instructions regarding stairwell cleaning, gardening, garbage disposal etc. The Tenant 
        also undertakes to keep the Rental object well maintained.</p>
      <p>The Tenant may not without the Landlord's written consent to make changes in the Rental object or install devices 
        that can't be easily restored when moving out.</p>
      <p>When moving in the Landlord shall make sure that the Rental object is in an acceptable condition. When moving out 
        the Tenant shall make sure that the Rental object is in an acceptable condition.</p>

      <h2>Other</h2>
      <p>The validity of the lease presumes that the Landlord has the consent of its landlord/estate owner/housing society 
        or that the rent tribunal communicates consent of a sublet.</p>
      <p>The Tenant may not assign its rights or obligations according to this lease without the Landlord's written 
        consent prior to the assignation</p>
      <p>If a damage or defect occurs that needs to be taken care of immediately to prevent serious consequences, the 
        Tenant is obligated to tell the Landlord right away. The Landlord should be notified of other damage or defect 
        without excessive delay. If the Tenant neglects to notify the Landlord as said above, the Tenant will be held 
        liable for any damage caused by the negligence. This also applies to the case of pests in the Rental object.</p>
      <p>The lease expires at the end of the rental period. The tenant must vacate without notice.</p>
      <p>Individual properties may have additional terms and will be stated by email.</p>

      <h2>Ending</h2>
      <p>By using xNomad Services you agree and understand that Nomadic Retial is not a party to any license, lease or 
        similar Space-Sharing Agreements entered between Members (Landlords and Tenants). Nomadic Retail disclaims all 
        liability arising from or related to any such transactions to the fullest extent permitted by law.</p>
      <p>Nomadic Retail has no control over the conduct of Members and other users of its service and disclaims all 
        liability in this regard to the maximum extent permitted by Law.</p>
      <p>Nomadic Retail reserves the right, at our sole discretion, to change these Terms of service and applicable 
        conditions at any time. Members are advised to review these Terms on a regular basis to keep informed of any changes.</p>

      <h2>Default Lease</h2>
      <p>xNomad strongly recommends that for all bookings made on its site, Space Owners and Occupants sign a license or 
        lease to structure the terms of their space-sharing agreement.  However, should the parties to a Space-sharing 
        Agreement made through xNomad fail to draft and sign a written agreement prior to Move-In, but without either party 
        expressing an intention to cancel the agreement, the terms of the following Default Commercial Space License 
        Agreement shall govern the transaction.</p>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
