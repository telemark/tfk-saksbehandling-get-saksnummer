# Vedlikehold

Denne modulen må oppdateres 2 ganger i året: november og januar.

I hovedsak er det [data.json](config/data.json) som må få nye saksnummer, opplysninger om møtedato og eventuelt nye kontaktpersoner.

## Forutsetninger
- Du har Node 8.x.x installert på maskinen
- Du har git satt opp
- Du har Visual Studio Code installert
- Du har installert [release](https://www.npmjs.com/package/release) globalt

## Fremgangsmåte

01 - Gå til repoets [forside](https://github.com/telemark/tfk-saksbehandling-get-saksnummer) og trykk "Clone or download"

02 - Velg clone with ssh og kopier linken (Trykk copy to clipboard ikonet)

03 - Åpne git shellet og cd deg til egnet sted og skriv inn ```git clone <link til repoet>```

04 - Gå inn i mappen kjør ```npm install```

05 - Kjør ```npm test```

06 - Hvis alt er ok kjør ```code config/data.json```

07 - Gjør bestilte endringer

08 - Lagre

09 - Kjør ```npm test```

10 - Kjør ```git commit -am "Updates data.json (patch)"```

11 - Hvis alt ok kjør ```git push```

12 - Avslutt med release av modulen ```release patch```

13 - Slett mappen