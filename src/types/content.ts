export interface LinkAction {
  label: string;
  url: string;
  external?: boolean;
}

export interface NavigationItem {
  label: string;
  url: string;
}

export interface SectionContent {
  enabled: boolean;
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface HeroData {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: LinkAction;
  secondaryAction: LinkAction;
  locationLabel: string;
}

export interface AboutData extends SectionContent {
  lead: string;
  body: string;
  highlights: string[];
}

export type DiscoveryIcon = "shield" | "leaf" | "sprout" | "chat" | "search";

export interface DiscoveryItem {
  id: string;
  title: string;
  description: string;
  icon: DiscoveryIcon;
  enabled: boolean;
}

export interface DiscoveryData extends SectionContent {
  items: DiscoveryItem[];
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export interface ActivitiesData extends SectionContent {
  items: ActivityItem[];
}

export interface DailyLifeCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface DailyLifeData extends SectionContent {
  cards: DailyLifeCard[];
  action: LinkAction;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  excerpt: string;
}

export interface ReviewsData extends SectionContent {
  rating: number;
  reviewCount: number;
  retrievedAt: string;
  sourceLabel: string;
  reviews: ReviewItem[];
  action: LinkAction;
}

export type RecruitmentStatus =
  | "open"
  | "limited"
  | "closed"
  | "unknown";

export interface RecruitmentData extends SectionContent {
  status: RecruitmentStatus;
  action: LinkAction;
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  district?: string;
}

export interface OpeningHours {
  days: string;
  opensAt: string;
  closesAt: string;
}

export interface ContactData extends SectionContent {
  name: string;
  address: Address;
  phone?: string;
  email?: string;
  openingHours?: OpeningHours[];
  facebookUrl: string;
  mapUrl: string;
  mapEmbedUrl: string;
  action: LinkAction;
}

export type Price =
  | {
      kind: "fixed";
      amount: number;
      currency: "PLN";
      period?: "month" | "day" | "hour" | "one-time";
    }
  | {
      kind: "custom";
      label: string;
    };

export interface PricingItem {
  id: string;
  name: string;
  description?: string;
  price: Price;
  features?: string[];
  highlighted?: boolean;
}

export interface PricingData extends SectionContent {
  items: PricingItem[];
  footnote?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  enabled: boolean;
}

export interface GalleryData extends SectionContent {
  images: GalleryImage[];
}

export interface HomePageData {
  metaTitle: string;
  metaDescription: string;
  siteName: string;
  navigation: NavigationItem[];
  hero: HeroData;
  about: AboutData;
  discovery: DiscoveryData;
  activities: ActivitiesData;
  dailyLife: DailyLifeData;
  reviews: ReviewsData;
  recruitment: RecruitmentData;
  contact: ContactData;
}

export type ContentConfidence =
  | "confirmed"
  | "likely"
  | "conflicting"
  | "unknown";

export interface SourceReference {
  label: string;
  url: string;
}

export interface RecoveredFact<T> {
  value: T;
  confidence: ContentConfidence;
  publish: boolean;
  note?: string;
  sources: SourceReference[];
}

export interface RecoveredContentSeed {
  identity: {
    name: RecoveredFact<string>;
    address: RecoveredFact<Address>;
    businessProfile: RecoveredFact<string>;
    facebookUrl: RecoveredFact<string>;
  };
  details: {
    phone: RecoveredFact<string>;
    ageRange: RecoveredFact<{ fromMonths: number; toYears: number }>;
    openingHours: RecoveredFact<string[]>;
    recruitmentStatus: RecoveredFact<RecruitmentStatus>;
    email: RecoveredFact<string>;
    previousAddress: RecoveredFact<Address>;
  };
  activities: Array<RecoveredFact<ActivityItem>>;
}
