export interface StartLocation {
  type: string;
  coordinates: number[];
  description: string;
  address: string;
}

export interface Location {
  _id: string;
  type: string;
  coordinates: number[];
  description: string;
  day: number;
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
  locations: Location[];
  startLocation: StartLocation;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  startDates: string[];
  secretTour: boolean;
  guides: Guide[];
}
