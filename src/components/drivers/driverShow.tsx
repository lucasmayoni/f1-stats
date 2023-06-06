/* eslint-disable react/jsx-no-comment-textnodes */
import { useCustom } from "@refinedev/core";
import { Link, useParams } from "react-router-dom";
import { IDriver, IDriverList } from "../../models/interfaces";
import { Alert, Badge, Descriptions, Image } from "antd";
import { useState } from "react";
import DescriptionsItem from "antd/lib/descriptions/Item";
import { InfoCircleOutlined } from "@ant-design/icons";

function generateUrl(url: string): string {
  return `https://v1.formula-1.api-sports.io/${url}`;
}
const DriverShow = () => {
  const { id } = useParams();
  const { data, isLoading } = useCustom<IDriverList>({
    url: generateUrl("drivers"),
    method: "get",
    config: {
      headers: {
        "x-rapidapi-key": "a60ea4ff24401431f91b830580f39950",
      },
      query: {
        id: id,
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const driverInfoList = data?.data.response ?? [];

  let driver = driverInfoList[0];

  return (
    <div>
      <Descriptions title="DRIVER INFO" bordered column={3}>
        <Descriptions.Item label="Picture" span={1}>
          <Image src={driver?.image} alt={driver?.name} width={250} />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        labelStyle={{ fontWeight: "bold" }}
        title=""
        column={3}
        bordered
      >
        <Descriptions.Item span={2} label="Name">
          {driver?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Number">{driver?.number}</Descriptions.Item>
        <Descriptions.Item label="Nationality">
          {driver?.nationality}
        </Descriptions.Item>
        <Descriptions.Item label="Country">
          {driver?.country.name}
        </Descriptions.Item>
        <Descriptions.Item label="Date and Place of Birth" span={2}>
          {driver?.birthdate} - {driver?.birthplace}
        </Descriptions.Item>
        <Descriptions.Item label="GP Entered">
          {driver?.grand_prix_entered}
        </Descriptions.Item>
        <Descriptions.Item label="Podiums">{driver?.podiums}</Descriptions.Item>
        <Descriptions.Item label="World Championships">
          {driver?.world_championships}
        </Descriptions.Item>
        <Descriptions.Item label="Teams">
          <Descriptions
            title=""
            bordered
            labelStyle={{ fontWeight: "bold" }}
            column={1}
          >
            {driver?.teams?.map((team) => {
              return (
                <Descriptions.Item
                  label={team.season}
                  labelStyle={{ width: 100 }}
                >
                  <Image src={team.team.logo} width={50} /> {team.team.name}{" "}
                  <Link to={`/teams/show/${team.team.id}`}>
                    <InfoCircleOutlined />
                  </Link>
                </Descriptions.Item>
              );
            })}
          </Descriptions>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
export default DriverShow;
