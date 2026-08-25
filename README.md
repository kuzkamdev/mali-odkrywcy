# Mali Odkrywcy

Strona internetowa placówki „Mali Odkrywcy”, budowana w Astro i TypeScript.

## Wymagania

- Node.js 22.19 lub nowszy
- npm

## Komendy

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Treść jest przechowywana w `src/data`, jej kontrakty w `src/types`, a komponenty odpowiadają wyłącznie za prezentację.

## Treść i źródła

- `src/data/home.ts` zawiera wyłącznie treść dopuszczoną do renderowania.
- `src/data/recovered-content.ts` jest lokalnym seedem przyszłego CMS. Zachowuje odzyskane informacje wraz z poziomem pewności, źródłami i flagą `publish`.
- Dane z `publish: false` nie mogą być publikowane bez potwierdzenia placówki.
- Komponenty sekcji przyjmują dane przez props i nie importują źródła treści bezpośrednio.

Godziny otwarcia, zakres wieku, szczegółowa oferta i status rekrutacji pozostają nieopublikowane do czasu potwierdzenia. Aktualny adres, telefon i e-mail zostały potwierdzone na profilu placówki.
