import React from "react";
import { IResourceComponentsProps, useCustom } from "@refinedev/core";
import { useParams } from "react-router-dom";
interface ICircuit {
    response: {
        id: number;
        name: string;
        image: string;
        laps: number;
        lap_record: {
            time:number;
            driver:string;
            year:number;
        }
    }[]
}

const generateUrl = (url: string ) => {
    return `https://v1.formula-1.api-sports.io/${url}`
}

export const CircuitShow  : React.FC<IResourceComponentsProps> = () => {
    
    const {id} = useParams()

    const {data, isLoading} = useCustom<ICircuit>({
        url: generateUrl("circuits"),
        method: "get",
        config:{
            query:{
                id: id
            },
            headers:{
                "x-rapidapi-key": "a60ea4ff24401431f91b830580f39950",
            }
        }
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const circuits = data?.data.response ?? [];
    const circuit = circuits[0];
    return (
        <div>
        <h1> Circuit DATA </h1>
        <h3> Name: {circuit.name}</h3>
        <img alt={circuit.name} src={circuit.image} width="300"/>
        <div>
            <h2>FASTEST LAP</h2>
            <h4>Time: {circuit.lap_record.time} by {circuit.lap_record.driver} in {circuit.lap_record.year}</h4>
        </div>
        </div>
    )
}
