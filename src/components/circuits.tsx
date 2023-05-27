import React from "react";
import { Card, Row, Alert } from "antd";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";

interface ICircuit {
  id: number;
  name: string;
  image: string;
  laps: number;
}

const Circuits = ({ circuits }: { circuits: ICircuit[] }) => {
  return (
    <Row>
      {!circuits.length ? (
        <Alert
          message="Not found"
          description="Circuit info not found or no records"
          type="warning"
        />
      ) : (
        circuits.map((circuit) => (
          <Card
            hoverable
            style={{ margin: 5, width: 200 }}
            cover={<img alt="" width="180" src={circuit.image} />}
            extra={<Link to={`/circuits/show/${circuit.id}`}>GO</Link>}
          >
            <Meta title={circuit.name} />
            <Meta title="Laps" description={circuit.laps} />
          </Card>
        ))
      )}
    </Row>
  );
};

export default Circuits;
