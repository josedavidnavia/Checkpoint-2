
export interface Body {
    id: string;
    englishName: string;
    mass: { massValue: number; massExponent: number } | null;
    gravity: number | null;
    density: number | null;
    isPlanet: boolean;
  }
  