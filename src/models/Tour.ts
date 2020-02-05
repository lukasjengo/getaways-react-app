import { StartLocation } from './StartLocation';
import { Guide } from './Guide';
import { Location } from './Location';

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
