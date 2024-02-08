---------------FITNESS VERDEN-----------------
Sofie Hilge Thygesen
WU-09
https://github.com/rts-cmk-wu09/svendepr-ve-euv2-sofiehilge

---------------TECH-STACK-----------------
React
React-Router
Axios
React-hook-form
React-icons
Tailwindcss

---------------TEKNISK DOKUMENTATION-----------------

# REACT

Jeg bruger React som framework til at udvikle min Fitness-verden app, React supportere Hot Module Replacement (HMR), som hjælper til at kunne opdatere moduler i applikationen imens appen køre, uden at kræve en hardrefresh. Det er altså et stærkt værktøj til at gøre udvikler fasen mere flydende og produktiv. Et andet argument for at bruge React at denne tilbyder en single-page app løsning, som tilbyder brugeren en hurtigere og interaktiv bruger erfaring.

# REACT-ROUTER

React-router bruges til at udføre server-side og client-side routing. Komponeneter som BrowserRouter, Route og Link, hjælper til at navigere mellem flere sider og mellem views uden at der trigges en fuld side reload.

# AXIOS

Til at fetche data fra api'et benyttes axios. Denne har flere fordele i forhold til Fetch API. Response bliver automatisk konverteret til JSON. Dog benytter jeg mig af begge i opgaven, da Fetch API også er fuldt ud brugbar til denne størrelse projekter.

# REACT-HOOK-FORM

React-hook-form tilbyder flere React hooks som gør det nemmere at håndtere state, form submission og at udføre form validering, jeg benytter mig af dens useForm i på min login side. React-hook-form minimere rerenders, den kan tilpasses specifikke behov. Alternativer er Formik, Redux-Form og Final Form, men React-hook-form er valgt til denne opgave da den er simpel at bruge og tilpasset React's funktionelle programmerings paradigme.

# REACT-ICONS

Jeg har valgt at bruge React Icons fremfor svg-filer, da react-ikons er skalerbar, konsistente i designstilen, tilpasselige, indbygget tilgængelighed for ikke seende bruger.

# TAILWIND

Tailwind tilbyder en bred vifte af predefinerede classes, endvidere gør inline metoden det nemmere at holde et overblik over stylingen. Dette kan gøre udviklingen hurtigere end brug af custom CSS. Taliwind er fleksibelt, da det er muligt at tilpasse default konfigurationen til at matche appens behov. Et alternativ kunne være Materialize CSS og ville muligvis være at foretækker hvis projektets design filer var lavet ud fra dette bibliotek.
Et andet alternativ er styledcomponents, denne muliggøre dog ikke inlinestyling, hvorfor tailwind er valgt til dette projekt.

---------------KODE TIL SÆRLIG BEDØMMELSE-----------------

---------------TILFØJELSER OG RETTELSER-----------------
Der står i opgavebeskrivelsen at sign-up button på classDetails ikke skal vises hvis bruger ikke er logget ind. Jeg har valgt at vise den med følgende tekst: "Log in for sign up", og hvis brugeren klikker på den bliver man ført til login siden. Dette fordi jeg mener det giver en bedre bruger oplevelse, og tydeligere kommunikation om hvad det kræver for at kunne tilmelde sig et hold. Desuden viser jeg i burgermenu at jeg kan fjerne links hvis bruger ikke er logget ind, da schedule ikke vises.
Jeg har desuden tilføjes loading og error pages hvor det er relevant.
Jeg har tilføjet en border rundt om buttons når de bliver klikket.

---------------VALG FRIOPGAVE-----------------
Jeg har valgt at lave den valgfri opgave C -- Automatiseret Deployment. Jeg har tilknyttet opgavens GitHub repository til Netlify:

https://fitnessverdensofie.netlify.app/

---------------REFLEKTION-----------------
Man kunne tilføje en darkmode og light mode switch, så brugeren selv kan vælge darkmode og lightmode.
Der kunne tilføjes mulighed for login for trænerne, så kan de tilgå deres holdoversigt med tilmeldte inden på schedule.
Tilføj at kunne oprette ny bruger
Tilføje en side med oversigter over hver træners hold, så når man søger på en specifik træner på search-siden, sendes brugeren videre til den valgte træners hold.
