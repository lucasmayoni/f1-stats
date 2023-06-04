
import { ArrowDownOutlined, ArrowUpOutlined, MinusOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';
import React, { useEffect, useState } from 'react';

const GridProgression = ({grid, position}: {grid:number, position:number}) => { 
    
    const [iconColor, setIconColor] = useState({});
    const [iconDraw, setIconDraw] = useState({});

    useEffect(()=>{
         if (grid === position){
             setIconColor({color: '#000000'});
             //setIconDraw(<MinusOutlined/>);
         } else if (grid > position){
             setIconColor({color: '#51ff00'});
             //setIconDraw(<ArrowDownOutlined/>);
         } else {
             setIconColor({color: '#ff0000'});
             //setIconDraw(<ArrowUpOutlined/>);
         }
        },[]
    ); // eslint-disable-line react-hooks/exhaustive-deps
    return (
            
        <Statistic
            title=""
            precision={0}
            value={Math.abs(grid-position)}
            valueStyle={iconColor}
            prefix={<MinusOutlined/>}
        />

    )
}
export default GridProgression