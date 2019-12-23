export interface GeoPoint {
  type: string;
  coordinates: number[];
  description: string;
  address: string;
}

export interface Guide {
  _id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
}

export interface Tour {
  _id: string;
  id: string;
  name: string;
  slug: string;
  durationWeeks: number;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: GeoPoint[];
  startLocation: GeoPoint;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  startDates: string[];
  secretTour: boolean;
  guides: Guide[];
}
