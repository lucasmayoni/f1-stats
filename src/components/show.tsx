import React from "react";
import { IResourceComponentsProps, useCustom } from "@refinedev/core";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

interface ICircuit {
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

const generateUrl = (url: string) => {
  return `https://v1.formula-1.api-sports.io/${url}`;
};

export const CircuitShow: React.FC<IResourceComponentsProps> = () => {
  const { id } = useParams();

  const { data, isLoading } = useCustom<ICircuit>({
    url: generateUrl("circuits"),
    method: "get",
    config: {
      query: {
        id: id,
      },
      headers: {
        "x-rapidapi-key": "a60ea4ff24401431f91b830580f39950",
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const circuits = data?.data.response ?? [];
  const circuit = circuits[0];
  return (
    <Row>
      <Col>
        <Card
          style={{ margin: 5, width: 400 }}
          cover={<img alt={circuit.name} width="200" src={circuit.image} />}
        >
          <h2>{circuit.name}</h2>
          <h3>Laps: {circuit.laps}</h3>
          <h3>Fastest Lap Time: {circuit.lap_record.time}</h3>
          <h3>
            Fastest Lap Driver:{" "}
            <Link to={`/driver/show/${circuit.lap_record.driver}`}>
              {circuit.lap_record.driver}
            </Link>
          </h3>
        </Card>
      </Col>
    </Row>
  );
};
