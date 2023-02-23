export type PilotSignData = {
  token: string;
  user: {
    credits: number;
    loans: Loan[];
    ships: Ship[];
    username: string;
  };
};

export type PilotLoginData = {
  user: PilotProfileData;
};

export type PilotProfileData = {
  credits: number;
  joinedAt: string;
  shipCount: number;
  structureCount: number;
  username: string;
};

export type Loan = {
  credits: number;
  loan: {
    due: string;
    id: string;
    repaymentAmount: number;
    status: string;
    type: string;
  };
};

export type Ship = {
  cargo: Cargo[];
  class: string;
  id: string;
  location: string;
  manufacture: string;
  maxCargo: number;
  plating: number;
  spaceAvailable: number;
  speed: number;
  type: string;
  weapons: number;
  x: number;
  y: number;
};

export type Cargo = {
  good: string;
  quantity: number;
  totalVolume: 20;
};

export interface LogOutHeaderProps {
  navigation: any;
  handleLogout: () => void;
}
