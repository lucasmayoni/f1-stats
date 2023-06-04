import {  useCustom } from "@refinedev/core";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useParams } from "react-router-dom";
import { IRanking, IRankings } from "../../models/interfaces";
import GridProgression from "../gridProgression";

const RaceShow = () => {

    const {id} = useParams()
    const { data, isLoading } = useCustom<IRankings>({
        url: generateUrl("rankings/races"),
        method: "get",
        config: {
          headers: {
            "x-rapidapi-key": "a60ea4ff24401431f91b830580f39950",
          },
          query: {
            race: id
          },
        },
      });


    if (isLoading) {
       return <div>Loading...</div>;
    }
    const rankings = data?.data.response ?? [];
    const columns: ColumnsType<IRanking> = [
        {
            title:"Position",
            dataIndex:"position",
            key:"position",
            
        },
        {
            title:'Driver',
            dataIndex:'driver',
            key:'name',
            render: (_, item) => (
                item.driver.name.concat(
                    " ("+
                item.driver.abbr+")")
            )
        },
        {
            title:'Team',
            dataIndex:'team',
            key:'name',
            render: (_, item) => (item.team.name)
        },
        {
            title:'Time',
            dataIndex:'time',
            key:'time'
        },
        {
            title:"Progress",
            dataIndex:'grid',
            key:'grid',
            render: (_, item) => {
                return (
                <GridProgression grid={item.grid} position={item.position} />
                )
            }
        }
    ]
    return (
        <Table
            bordered
            dataSource={rankings}
            columns={columns}
        >
            
        </Table>
    )
}

export default RaceShow;

function generateUrl(url: string): string {
    return `https://v1.formula-1.api-sports.io/${url}`;
}
