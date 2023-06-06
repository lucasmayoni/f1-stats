export interface IDriver {
  id: number;
  name: string;
  abbr: string;
  image: string;
  nationality: string;
  country: {
    name: string;
    code: string;
  };
  birthdate: string;
  birthplace: string;
  number: number;
  grand_prix_entered: number;
  world_championships: number;
  podiums: number;
  teams: [
    {
      season: number;
      team: {
        id: number;
        name: string;
        logo: string;
      };
    }
  ];
}

export interface IDriverList {
  response: IDriver[];
}

export interface ICircuit {
  response: {
    id: number;
    name: string;
    image: string;
    laps: number;
    lap_record: {
      time: number;
      driver: string;
      year: number;
    };
  }[];
}

export interface IRanking {
  driver: {
    id: number;
    name: string;
    abbr: string;
    number: number;
    image: string;
  };
  team: {
    id: number;
    name: string;
    image: string;
  };
  position: number;
  time: number;
  grid: number;
}

export interface IRankings {
  response: IRanking[];
}

export interface IRace {
  id: number;
  circuit: {
    id: number;
    name: string;
    image: string;
  };
  laps: {
    total: number;
  };
  fastest_lap: {
    driver: {
      id: number;
    };
    time: number;
  };
  status: string;
}

export interface IRaceList {
  response: IRace[];
}
