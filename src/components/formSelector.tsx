import { Button, Form, Select } from "antd";
import { useState } from "react";
import { useCustom } from "@refinedev/core";
import Races from "./races/raceList";
import { IRaceList } from "../models/interfaces";

const generateUrl = (url: string) => {
  return `https://v1.formula-1.api-sports.io/${url}`;
};

export const FormSelector: React.FC = () => {
  const seasons = [2019, 2020, 2021, 2022, 2023];
  const [season, setSeason] = useState();
  const onFinish = (value: any) => {
    setSeason(value.season);
  };

  const { data, isLoading } = useCustom<IRaceList>({
    url: generateUrl("races"),
    method: "get",
    config: {
      headers: {
        "x-rapidapi-key": "a60ea4ff24401431f91b830580f39950",
      },
      query: {
        season: season,
        type: "race",
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const races = data?.data.response ?? [];

  return (
    <div>
      <Form layout="inline" onFinish={onFinish}>
        <Form.Item name="season">
          <Select style={{ width: 100 }} placeholder="Season">
            {seasons.map((season) => (
              <Select.Option key={season} value={season}>
                {season}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      <Races races={races} />
    </div>
  );
};
