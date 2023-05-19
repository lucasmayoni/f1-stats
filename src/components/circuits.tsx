import React from "react"
import { IResourceComponentsProps, useCustom } from "@refinedev/core"
import { Card, Row, Alert } from "antd";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";

interface ICircuit {
    response: {
            id: number;
            name: string;
            image: string;
            laps: number;
    }[]
}

const generateUrl = (url: string ) => {
    return `https://v1.formula-1.api-sports.io/${url}`
}


export const Circuits : React.FC<IResourceComponentsProps> = () =>{
    const {data, isLoading} = useCustom<ICircuit>({
        url: generateUrl("circuits"),
        method: "get",
        config:{
            headers:{
                "x-rapidapi-key": "a60ea4ff24401431f91b830580f39950",
            }
        }
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    
    
    const circuits = data?.data.response ?? [];
    return (
        <Row>
            {
                !circuits.length ? (
                    <Alert
                        message="Not found"
                        description="Circuit info not found or no records"
                        type="warning"
                        />
                ):
                (circuits.map((circuit) => (
                    <Card
                        hoverable
                        style={{margin:5, width: 200}}
                        cover={<img alt="" width="180" src={circuit.image}/>}
                        extra={<Link to={`/circuits/show/${circuit.id}`} >GO</Link>}
                        >
                     <Meta title={circuit.name}/> 
                     <Meta title="Laps" description={circuit.laps}/>
                    </Card>
                )))
            }
        </Row>
    )
}
