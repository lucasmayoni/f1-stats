/* eslint-disable react/jsx-no-comment-textnodes */
import { useCustom } from "@refinedev/core";
import { Link, useParams } from "react-router-dom";
import { ITeamList } from "../../models/interfaces";
import { Descriptions, Image } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

function generateUrl(url: string): string {
  return `https://v1.formula-1.api-sports.io/${url}`;
}
const TeamShow = () => {
  const { id } = useParams();
  const { data, isLoading } = useCustom<ITeamList>({
    url: generateUrl("teams"),
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
  const teamInfoList = data?.data.response ?? [];

  return <div></div>;
};
export default TeamShow;
