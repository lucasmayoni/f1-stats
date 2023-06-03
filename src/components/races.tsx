import React from "react";
import { Card, Row, Alert, Skeleton } from "antd";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";
import { IRace } from "../models/interfaces";

const Races = ({ races }: { races: IRace[] }) => {
  return (
    <Row>
      {!races.length ? (
        <Alert
          message="Not found"
          description="Race info not found or no records"
          type="warning"
        />
      ) : (
        races.map((race) => {
          return race.status === "Completed" ? (
            <Card
              hoverable
              style={{ margin: 5, width: 200 }}
              cover={<img alt="" width="180" src={race.circuit.image} />}
              extra={<Link to={`/circuits/show/${race.circuit.id}`}>GO</Link>}
            >
              <Meta title="Circuit" description={race.circuit.name} />
              <Meta title="Laps" description={race.laps.total} />
              <Meta title="Fastest Lap" description={race.fastest_lap.time} />
            </Card>
          ) : (
            <Skeleton />
          );
        })
      )}
    </Row>
  );
};

export default Races;
