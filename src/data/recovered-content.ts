import type {
  ActivityItem,
  RecoveredContentSeed,
  RecoveredFact,
  SourceReference,
} from "../types/content";

const sources = {
  facebook: {
    label: "Facebook – Mali Odkrywcy",
    url: "https://www.facebook.com/MaliOdkrywcyOpiekaNadDziecmi",
  },
  oldDomain: {
    label: "Stara domena",
    url: "https://mali-odkrywcy.com/",
  },
  przedszkolowo: {
    label: "Przedszkolowo",
    url: "https://przedszkolowo.pl/placowka/mali-odkrywcy-15",
  },
  cylex: {
    label: "Cylex",
    url: "https://www.cylex-polska.pl/firmy/mali-odkrywcy-13499974.html",
  },
  cityOn: {
    label: "CityOn",
    url: "https://cityon.pl/miejsce/mali-odkrywcy-rozwadowska-15-warszawa",
  },
  businessRegistry: {
    label: "Publiczne dane działalności",
    url: "https://www.krs-online.com.pl/firma/7747348-mali-odkrywcy-kamil-przybysz",
  },
  currentFacebookContact: {
    label: "Aktualne dane kontaktowe profilu Facebook",
    url: "https://www.facebook.com/MaliOdkrywcyOpiekaNadDziecmi/directory_contact_info",
  },
} satisfies Record<string, SourceReference>;

const unconfirmedActivity = (
  id: string,
  title: string,
  description: string,
): RecoveredFact<ActivityItem> => ({
  value: { id, title, description, enabled: false },
  confidence: "likely",
  publish: false,
  note: "Odzyskane ze starego opisu; wymaga potwierdzenia placówki.",
  sources: [sources.przedszkolowo],
});

export const recoveredContentSeed = {
  identity: {
    name: {
      value: "Mali Odkrywcy",
      confidence: "confirmed",
      publish: true,
      sources: [sources.facebook, sources.przedszkolowo, sources.cylex],
    },
    address: {
      value: {
        street: "ul. Czerwińska 26",
        postalCode: "03-661",
        city: "Warszawa",
        district: "Targówek",
      },
      confidence: "confirmed",
      publish: true,
      note: "Aktualny adres; Rozwadowska 15 jest adresem historycznym.",
      sources: [sources.currentFacebookContact],
    },
    businessProfile: {
      value: "Opieka dzienna nad dziećmi",
      confidence: "confirmed",
      publish: true,
      sources: [sources.businessRegistry],
    },
    facebookUrl: {
      value: sources.facebook.url,
      confidence: "confirmed",
      publish: true,
      sources: [sources.facebook],
    },
  },
  details: {
    phone: {
      value: "510 524 062",
      confidence: "confirmed",
      publish: true,
      note: "Potwierdzone na aktualnym profilu Facebook.",
      sources: [sources.currentFacebookContact],
    },
    ageRange: {
      value: { fromMonths: 12, toYears: 3 },
      confidence: "likely",
      publish: false,
      note: "Zakres wieku pochodzi ze starych materiałów.",
      sources: [sources.przedszkolowo],
    },
    openingHours: {
      value: ["07:00–17:30", "06:30–18:00"],
      confidence: "conflicting",
      publish: false,
      note: "Źródła podają różne godziny; nie publikować.",
      sources: [sources.przedszkolowo, sources.cylex],
    },
    recruitmentStatus: {
      value: "unknown",
      confidence: "unknown",
      publish: false,
      note: "Brak aktualnego, potwierdzonego statusu rekrutacji.",
      sources: [],
    },
    email: {
      value: "kontakt@mali-odkrywcy.pl",
      confidence: "confirmed",
      publish: true,
      sources: [sources.currentFacebookContact],
    },
    previousAddress: {
      value: {
        street: "ul. Rozwadowska 15",
        postalCode: "03-628",
        city: "Warszawa",
        district: "Targówek",
      },
      confidence: "confirmed",
      publish: false,
      note: "Adres historyczny – nie publikować jako bieżącej lokalizacji.",
      sources: [sources.cylex, sources.cityOn],
    },
  },
  activities: [
    unconfirmedActivity(
      "motoryka",
      "Ruch",
      "Zabawy wspierające motorykę małą i dużą.",
    ),
    unconfirmedActivity(
      "tworczosc",
      "Twórczość",
      "Zabawy plastyczne, kreatywne i twórcze.",
    ),
    unconfirmedActivity(
      "muzyka",
      "Muzyka",
      "Elementy zajęć muzycznych i muzykoterapii.",
    ),
    unconfirmedActivity(
      "opowiesci",
      "Opowieści",
      "Elementy bajkoterapii i wspólnego odkrywania historii.",
    ),
    unconfirmedActivity(
      "mowa",
      "Mowa",
      "Zabawy wspierające rozwój językowy.",
    ),
    unconfirmedActivity(
      "myslenie",
      "Myślenie i budowanie",
      "Zabawy dydaktyczne, manipulacyjne i konstrukcyjne.",
    ),
  ],
} satisfies RecoveredContentSeed;
