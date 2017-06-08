# Oppgave 2 - data store

Nå skal vi start med byggingen av selve appen. I første omgang ser vi på data. Målet er å lage en lettvekts modell/«store» som holder på litt applikasjonstilstand.

## lag en service for å hente data
For å unngå å veve sammen tilstand og data, pleier jeg å lage et service lag som har ansvaret for å koble seg opp til server og hente data. Her kan du legge autentiseringslogikk som skal være sjult fra resten av applikasjonen.

eksponer metoden get() fra `service.js`. Denne skal returnere et `Promise` som resolver en liste med ansattinfo. For enkelthetsskylt kan listen være hardkodet med formatet:
```
[{
  employmentId: 50,
  name: 'Ola Normann',
  title: 'Systemutvikler',
  department: 'Technology',
  phone: '987 65 432',
  email: 'ola.normann@bekk.no'
}]
```

## lag en modell / «store» for å holde på tilstand
Storen skal inneholde to dataobjekter; `this.ppl` (et array) og `this.person` (et objekt). Legg på et tomt array og et objekt som default i constructoren.

Implmentere metoden `getPpl` som henter data via `get` metoden på servicen vi implementerte ovenfor. Når `get` resolver med data legger du den på ´this.ppl´ (overskriver det som ligger der fra før).

Vi trenger en måte å definere hvilken ansatt vi ønsker å se på. Implementer metoden `setPerson` som tar en indeks som argument. Denne skal hente ut rett objekt fra listen på `this.ppl` (ut fra indeksen) og sette det på `this.person`.

For å få med oss endringer i storen nede i grensesnittet må vi implementere en liten eventbus. Denne består at et tomt array som legges på `this._subscribers` (vi bruker _ som prefix for å synliggjøre at dette er ment som en privat instansvariabel)
For å legge til lyttere må vi implementere metoden `subscribe` som tar en callback om argument, som den pusher på `this._subscribers` arrayet.
For å kunne si i fra må vi implementere `notify` metoden. Den går igjennom hele `this._subscribers` arrayet og kaller hver eneste funksjon.
```
this._subscribers.forEach(fn => fn());
```



## Oppgaven er gjennomført når alle testene går i grønt
