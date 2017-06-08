# Oppgave 1 - modularisering

Selv om appen vi skal lage er ganske liten, er det viktig å vite om de to mest kjent teknikkene for å dele kode i JavaScript; arv og komposisjon. I denne øvelsen har vi en ustabil postmann. Din jobb er å arv og komposisjon for å få han til å fungere i jobben.

Denne oppgaven har unit tester som er men som en guide på vegen. De kan kjøres med `npm run oppgave1`

## lag klassen sanePostman som arver fra postman
Rammene er allerde satt opp i `oving/sanePostman.js`

Unngå at postmannen går «postal» ved å overskrive `goPostal()`-funksjonen

Vår ustabile postmann må ta medisinene sine også når han er ute på runde. Lag funksjon `takeMeds` og kall denne fra `deliverMail`.

Pass på at medisinene ikke tar overhånd. Pass på å kalle parents (super) sin `deliverMail` etter `takeMeds`

## lag et prozac-objekt som holder composedPostman i sjakk
Prozac-objektet er allerde satt opp i `oving/prozac.js`

Ta var på en referanse til `prozac` på `this.prozac` i constructoren

Denne mer avbalanserte postmannen har ingen innbygget trang om å gå «postal». Opprett funksjon `goPostal`, som ikke trenger å gjøre noe som helst.

Pass på at postmannen tar medisinene ute på runde. Opprett `deliverMail` og kall `takeMeds` på prozac objektet vi la på `this` fra den.


## Oppgaven er gjennomført når alle testene går i grønt
