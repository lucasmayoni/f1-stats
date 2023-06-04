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

export interface IRankings {
  response:{
    driver:{
      id:number;
      name: string;
      abbr: string;
      number: number;
      image: string;
    }
    team:{
      id:number;
      name: string;
      image: string;
    }
    position:number;
    time:number;
    grid:number
  }[]
}

export interface IRanking {
  
    driver:{
      id:number;
      name: string;
      abbr: string;
      number: number;
      image: string;
    }
    team:{
      id:number;
      name: string;
      image: string;
    }
    position:number;
    time:number;
    grid:number
}

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
