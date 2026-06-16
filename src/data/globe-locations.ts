export interface GlobeLocation {
  name: string;
  /** Compact label for 3D globe pins */
  shortName?: string;
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
    city: "Jeddah",
    lat: 21.5433,
    lng: 39.1728,
    flag: "🇸🇦",
    services: "Headquarters & Full Services",
    isHQ: true,
  },
  {
    name: "United Arab Emirates",
    shortName: "UAE",
    city: "Dubai",
    lat: 25.2048,
    lng: 55.2708,
    flag: "🇦🇪",
    services: "GCC Client Services",
  },
  {
    name: "India",
    city: "Hyderabad",
    lat: 17.385,
    lng: 78.4867,
    flag: "🇮🇳",
    services: "Development & Engineering",
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    city: "London",
    lat: 51.5074,
    lng: -0.1278,
    flag: "🇬🇧",
    services: "European Clients",
  },
  {
    name: "United States",
    shortName: "USA",
    city: "New York",
    lat: 40.7128,
    lng: -74.006,
    flag: "🇺🇸",
    services: "North America",
  },
];

export const globeArcs = globeLocations
  .filter((loc) => !loc.isHQ)
  .map((loc) => ({
    startLat: 21.5433,
    startLng: 39.1728,
    endLat: loc.lat,
    endLng: loc.lng,
    color: ["#ff8c00", "rgba(255, 140, 0, 0.15)"],
  }));
