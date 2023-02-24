export interface PilotSignData {
  token: string;
  user: {
    credits: number;
    loans: CurrentLoan[];
    ships: Ship[];
    username: string;
  };
}

export interface PilotLoginData {
  user: PilotProfileData;
}

export interface PilotProfileData {
  credits: number;
  joinedAt: string;
  shipCount: number;
  structureCount: number;
  username: string;
}

export interface AvailableLoan {
  amount: number;
  collateralRequired: boolean;
  rate: number;
  termInDays: number;
  type: string;
}

export interface CurrentLoan {
  due: string;
  id: string;
  repaymentAmount: number;
  status: string;
  type: string;
}

export interface Ship {
  shipClass: string;
  manufacturer: string;
  maxCargo: number;
  plating: number;
  weapons: number;
  purchaseLocation: SpaceLocation[];
  speed: number;
  type: ShipType;
}

export type ShipType =
  | "JW-MK-I"
  | "JW-MK-II"
  | "ZA-MK-II"
  | "ZA-MK-III"
  | "EM-MK-I"
  | "HM-MK-I"
  | "HM-MK-III"
  | "TD-MK-I"
  | "GR-MK-I"
  | "GR-MK-II"
  | "GR-MK-III"
  | string;

interface SpaceLocation {
  location: string;
  price: number;
}

export interface TakenLoan {
  credits: number;
  loan: {
    due: Date;
    id: string;
    repaymentAmount: number;
    status: string;
    type: string;
  };
}

export interface Cargo {
  good: string;
  quantity: number;
  totalVolume: 20;
}
