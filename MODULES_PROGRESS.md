# Modules 6–15 Build Progress

Tracking the implementation of each Modelltest. Each module involves:
1. OCR extract images (+ official Lösungen answer key)
2. Create 11 data files (answerKey, lesenTeil1–5, hoerenTeil1–4, schreiben, sprechen)
3. Create 11 components (MN LesenTeil1–5, HoerenTeil1–4, Schreiben, Sprechen) + ModuleN wrapper
4. Wire into ProgressContext (totals + section counts) and App.tsx (import, progress ring, card)
5. Verify with `npx tsc -b`

| Module | OCR | Data | Components | Wired | Build ✓ |
|--------|-----|------|-----------|-------|---------|
| 6  | ✅ | ✅ | ✅ | ✅ | ✅ |
| 7  | ✅ | ✅ | ✅ | ✅ | ✅ |
| 8  | ✅ | ✅ | ✅ | ✅ | ✅ |
| 9  | ✅ | ✅ | ✅ | ✅ | ✅ |
| 10 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 11 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 12 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 13 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 15 | ✅ | ✅ | ✅ | ✅ | ✅ |

All Modelltests 6–15 are fully implemented, wired, and building cleanly. 🎉

## Detailed log

### Module 14
- Lesen T1: Michelstädter Altstadtfest · T2A: Die Alten wollen kein Internet · T2B: Essen als Medizin (Functional Food)
- Lesen T3: Hilfe leisten · T4: Frühstudenten · T5: Benutzungsordnung der PBZ Zürich
- Hören T1: 5 kurze Texte · T2: Mozart-City-Tour · T3: Isabella/Jonas über die Ferien · T4: „Darf ein Lehrer einen Schüler schlagen?" (Moderatorin/Lara/Simon)
- Schreiben: Besuch der Schwester / „Stars – unsere Idole?" / Bandraum im Jugendzentrum
- Sprechen: Radausflug planen · Plastikgeschirr – ja oder nein?

### Module 15
- Lesen T1: Mein Handy-Unfall · T2A: Weihnachten in Deutschland · T2B: Eltern begleiten ihre Kinder an die Uni
- Lesen T3: Familie/Eltern-Kind-Hilfe · T4: Gehsteige nur für Fußgänger? · T5: SommerKinderUni Graz
- Hören T1: 5 kurze Texte · T2: Dampferschifffahrt auf dem Rhein · T3: Schweizer Küche (Lena/Großvater) · T4: Spitalradio (Moderator/Annette Vinke/Michael Schönberg)
- Schreiben: Freund/in zum Ausflug einladen / „Vegetarische Ernährung" / Krankmeldung an Herrn Hackl
- Sprechen: Ausstellung und Feier planen · Führerschein ab 16?
