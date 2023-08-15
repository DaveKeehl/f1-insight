export interface Location {
  country: string;
  lat: string;
  locality: string;
  long: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}
