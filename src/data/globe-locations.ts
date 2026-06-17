export interface GlobeLocation {
  name: string;
  /** Compact label for 3D globe pins */
  shortName?: string;
  /** Primary pin label on mobile */
  pinLabel?: string;
  city: string;
  lat: number;
  lng: number;
  flag: string;
  services: string;
  isHQ?: boolean;
}

export const globeLocations: GlobeLocation[] = [
  {
    name: "Saudi Arabia",
    shortName: "KSA",
    city: "Jeddah",
    lat: 21.5433,
    lng: 39.1728,
    flag: "🇸🇦",
    services: "Main Headquarters",
    isHQ: true,
  },
  {
    name: "Saudi Arabia",
    shortName: "KSA",
    city: "Riyadh",
    lat: 24.7136,
    lng: 46.6753,
    flag: "🇸🇦",
    services: "GCC Client Services",
  },
  {
    name: "India",
    pinLabel: "Hyderabad",
    city: "Hyderabad",
    lat: 17.385,
    lng: 78.4867,
    flag: "🇮🇳",
    services: "Main Headquarters",
    isHQ: true,
  },
  {
    name: "India",
    pinLabel: "Bangalore",
    city: "Bangalore",
    lat: 12.9716,
    lng: 77.5946,
    flag: "🇮🇳",
    services: "Development & Engineering",
  },
  {
    name: "India",
    pinLabel: "Gujarat",
    city: "Gujarat",
    lat: 23.0225,
    lng: 72.5714,
    flag: "🇮🇳",
    services: "Regional Operations",
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    pinLabel: "England",
    city: "England",
    lat: 52.3555,
    lng: -1.1743,
    flag: "🇬🇧",
    services: "European Clients",
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    pinLabel: "UK",
    city: "London",
    lat: 51.5074,
    lng: -0.1278,
    flag: "🇬🇧",
    services: "European Clients",
  },
  {
    name: "United States",
    shortName: "USA",
    pinLabel: "Chicago",
    city: "Chicago",
    lat: 41.8781,
    lng: -87.6298,
    flag: "🇺🇸",
    services: "North America",
  },
  {
    name: "United States",
    shortName: "USA",
    pinLabel: "Texas",
    city: "Texas",
    lat: 31.9686,
    lng: -99.9018,
    flag: "🇺🇸",
    services: "North America",
  },
  {
    name: "United States",
    shortName: "USA",
    pinLabel: "California",
    city: "California",
    lat: 36.7783,
    lng: -119.4179,
    flag: "🇺🇸",
    services: "North America",
  },
];

export interface GlobeArc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  key: string;
}

const JEDDAH_HUB = globeLocations.find((loc) => loc.city === "Jeddah")!;

export function getGlobeArcs(locations: GlobeLocation[] = globeLocations): GlobeArc[] {
  return locations
    .filter((loc) => loc.city !== JEDDAH_HUB.city)
    .map((loc) => ({
      startLat: JEDDAH_HUB.lat,
      startLng: JEDDAH_HUB.lng,
      endLat: loc.lat,
      endLng: loc.lng,
      key: `Jeddah-${loc.city}`,
    }));
}

export const globeArcs = getGlobeArcs();
