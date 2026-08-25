import type { HomePageData } from "../types/content";

const facebookUrl =
  "https://www.facebook.com/MaliOdkrywcyOpiekaNadDziecmi";

export const homePageData = {
  metaTitle: "Mali Odkrywcy | Opieka nad dziećmi na Targówku",
  metaDescription:
    "Mali Odkrywcy – opieka dzienna nad dziećmi przy ul. Czerwińskiej 26 na warszawskim Targówku.",
  siteName: "Mali Odkrywcy",
  navigation: [
    { label: "O nas", url: "#o-nas" },
    { label: "Jak odkrywamy", url: "#jak-odkrywamy" },
    { label: "Codzienność", url: "#codziennosc" },
    { label: "Opinie", url: "#opinie" },
    { label: "Kontakt", url: "#kontakt" },
  ],
  hero: {
    eyebrow: "Targówek · Warszawa",
    title: "Blisko natury. Blisko dziecka.",
    description:
      "Miejsce, w którym dziecko może być sobą, odkrywać i rosnąć w swoim tempie.",
    primaryAction: { label: "Zapytaj o miejsce", url: "#kontakt" },
    secondaryAction: { label: "Poznaj nas", url: "#o-nas" },
    locationLabel: "ul. Czerwińska 26, Warszawa",
  },
  about: {
    enabled: true,
    eyebrow: "Blisko dziecka",
    title: "Przestrzeń na ciekawość",
    description:
      "Każde dziecko odkrywa świat we własnym tempie. Jesteśmy obok, aby dawać mu uwagę, poczucie bezpieczeństwa i swobodę potrzebną do stawiania kolejnych kroków.",
    lead: "Miejsce stworzone z myślą o najmłodszych odkrywcach.",
    body: "Codzienność budujemy wokół relacji, zabawy i naturalnej dziecięcej ciekawości. To one pomagają zdobywać nowe umiejętności i pewniej poznawać otoczenie.",
    highlights: ["Blisko natury", "Blisko dziecka", "Rozwój we własnym tempie"],
  },
  discovery: {
    enabled: true,
    eyebrow: "Jak odkrywamy świat",
    title: "Zabawa, która ma znaczenie",
    description:
      "Proste doświadczenia, ruch i wspólne chwile tworzą najlepsze warunki do naturalnego rozwoju.",
    items: [
      {
        id: "bezpieczenstwo",
        title: "Bezpieczeństwo",
        description: "Priorytetem jest dla nas bezpieczeństwo, troska i uważność.",
        icon: "shield",
        enabled: true,
      },
      {
        id: "natura",
        title: "Natura",
        description: "Budujemy codzienną bliskość z naturą i wrażliwość na otoczenie.",
        icon: "leaf",
        enabled: true,
      },
      {
        id: "samodzielnosc",
        title: "Samodzielność",
        description: "Wspieramy wiarę we własne możliwości i odwagę do próbowania.",
        icon: "sprout",
        enabled: true,
      },
      {
        id: "relacje",
        title: "Relacje",
        description: "Tworzymy atmosferę życzliwości, zaufania i szacunku.",
        icon: "chat",
        enabled: true,
      },
      {
        id: "odkrywanie",
        title: "Odkrywanie",
        description: "Zabawa, doświadczanie i ciekawość świata prowadzą nas każdego dnia.",
        icon: "search",
        enabled: true,
      },
    ],
  },
  activities: {
    enabled: false,
    eyebrow: "Nasze zajęcia",
    title: "Różne drogi do odkrywania",
    description:
      "Szczegółowy zakres aktywności czeka na potwierdzenie placówki.",
    items: [],
  },
  dailyLife: {
    enabled: true,
    eyebrow: "Codzienność",
    title: "Każdy dzień przynosi coś nowego",
    description:
      "Spokojny rytm dnia zostawia miejsce na wspólną zabawę, samodzielne próby i małe sukcesy.",
    cards: [
      {
        id: "pierwsze-proby",
        number: "01",
        title: "Pierwsze próby",
        description: "Zachęcamy do samodzielności bez pośpiechu i presji.",
      },
      {
        id: "razem",
        number: "02",
        title: "Bycie razem",
        description: "Uczymy się świata także w relacji z innymi dziećmi.",
      },
      {
        id: "radość",
        number: "03",
        title: "Radość odkrywania",
        description: "Doceniamy pytania, pomysły i codzienne dziecięce zachwyty.",
      },
    ],
    action: {
      label: "Zobacz naszą codzienność",
      url: facebookUrl,
      external: true,
    },
  },
  reviews: {
    enabled: true,
    eyebrow: "Opinie rodziców",
    title: "Dobre słowa zostają z nami",
    description:
      "Rodzice szczególnie doceniają bliską atmosferę, zaangażowanie opiekunek i indywidualne podejście do dzieci.",
    rating: 5,
    reviewCount: 17,
    retrievedAt: "2026-08-26",
    sourceLabel: "Google Maps",
    reviews: [
      {
        id: "sabina-kosecka",
        author: "Sabina Kosecka",
        rating: 5,
        excerpt: "jak drugi dom dla mojego synka",
      },
      {
        id: "beata-debska",
        author: "Beata Dębska",
        rating: 5,
        excerpt: "Ciocie są ciepłe, serdeczne i pełne zaangażowania",
      },
      {
        id: "a-k",
        author: "A K",
        rating: 5,
        excerpt: "Indywidualne podejście do dziecka, mnóstwo różnych zabaw",
      },
    ],
    action: {
      label: "Zobacz wszystkie opinie",
      url: "https://www.google.com/maps/place/Mali+Odkrywcy/@52.2896118,21.0632837,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecf963c3d3a25:0x12a0def86ee005cd!8m2!3d52.2896118!4d21.0632837!16s%2Fg%2F11gr0bhkjx",
      external: true,
    },
  },
  recruitment: {
    enabled: true,
    status: "unknown",
    eyebrow: "Rekrutacja",
    title: "Szukasz miejsca dla swojego dziecka?",
    description:
      "Aktualną dostępność miejsc najlepiej sprawdzić bezpośrednio u nas.",
    action: { label: "Zapytaj o dostępność", url: "#kontakt" },
  },
  contact: {
    enabled: true,
    eyebrow: "Kontakt",
    title: "Poznajmy się",
    description:
      "Napisz do nas, aby zapytać o aktualną ofertę, dostępność miejsc lub umówić pierwszą rozmowę.",
    name: "Mali Odkrywcy",
    address: {
      street: "ul. Czerwińska 26",
      postalCode: "03-661",
      city: "Warszawa",
      district: "Targówek",
    },
    phone: "510 524 062",
    email: "kontakt@mali-odkrywcy.pl",
    facebookUrl,
    messengerUrl:
      "https://www.facebook.com/messages/t/MaliOdkrywcyOpiekaNadDziecmi/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Czerwińska+26%2C+03-661+Warszawa",
    action: {
      label: "Napisz na Messengerze",
      url: "https://www.facebook.com/messages/t/MaliOdkrywcyOpiekaNadDziecmi/",
      external: true,
    },
  },
} satisfies HomePageData;
