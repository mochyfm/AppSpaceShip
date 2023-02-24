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
  class: string;
  manufacturer: string;
  maxCargo: number;
  plating: number;
  purchaseLocation: SpaceLocation[]
  speed: number;
  type: string;
}

interface SpaceLocation {
  location: string;
  price: number;
}

export interface TakenLoan {
  credits: number,
  loan: {
    due: Date,
    id: string
    repaymentAmount: number,
    status: string,
    type: string
  }
}

export interface Cargo {
  good: string;
  quantity: number;
  totalVolume: 20;
}