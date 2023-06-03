export interface IRaceList {
  response: {
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
  }[];
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
