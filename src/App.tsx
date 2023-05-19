import React from 'react';
import { Button } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { dataProvider } from './rest-data-provider';
import { Refine } from '@refinedev/core';
import { axiosInstance } from './rest-data-provider/utils';
import { Circuits } from './components/circuits';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { CircuitShow } from './components/show';

const apiUrl = "https://v1.formula-1.api-sports.io"


function App() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider(apiUrl, axiosInstance)}
        resources={[
          {
            name:"circuits",
            list: "/circuits",
            show: "/circuits/show/:id"
          }
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
          <Routes>
              <Route path="/circuits">
                  <Route index element={<Circuits/>}/>
                  <Route path="show/:id" element={<CircuitShow />} />
              </Route>
          </Routes>
      </Refine>
      </BrowserRouter>
  );
}

export default App;
