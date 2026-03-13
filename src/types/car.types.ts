export interface CarSpecs {
  horsepower: number;
  fuelEfficiency: string;
  acceleration: string;
  transmission: string;
  drivetrain: "FWD" | "RWD" | "AWD";
}

export interface CarModel {
  id: string;
  value: string;
  label: string;
  category: string;
  year: number;
  startingPrice: number;
  image: string;
  tagline: string;
  specs: CarSpecs;
}

export interface CarVersion {
  id: string;
  value: string;
  label: string;
  price: number;
}

export type CarModelId = CarModel["id"];
export type CarVersionsMap = Record<CarModelId, CarVersion[]>;
