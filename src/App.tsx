import { Layout } from "antd";
import { dataProvider } from "./rest-data-provider";
import { Refine } from "@refinedev/core";
import { axiosInstance } from "./rest-data-provider/utils";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FormSelector } from "./components/formSelector";
import RaceShow from "./components/races/raceShow";
import DriverShow from "./components/drivers/driverShow";
import TeamShow from "./components/teams/show";

const { Content, Sider } = Layout;

const apiUrl = "https://v1.formula-1.api-sports.io";

// const menuItems = [
//   {
//     key: "circuits",
//     label: <Link to="/circuits">Circuits</Link>,
//   }
// ];

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: "0 50px" }}>
          <Layout style={{ padding: "24px 0", background: "white" }}>
            <Sider style={{ background: "white" }} width={200}>
              {/* <Menu items={menuItems} /> */}
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Refine
                dataProvider={dataProvider(apiUrl, axiosInstance)}
                resources={[
                  {
                    name: "races",
                    show: "/races/show/:id",
                  },
                  {
                    name: "drivers",
                    show: "/drivers/show/:id",
                  },
                  {
                    name: "teams",
                    show: "/teams/show/:id",
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                }}
              >
                <Routes>
                  <Route path="/races">
                    <Route path="show/:id" element={<RaceShow />} />
                  </Route>
                  <Route path="/drivers">
                    <Route path="show/:id" element={<DriverShow />} />
                  </Route>
                  <Route path="/teams">
                    <Route path="show/:id" element={<TeamShow />} />
                  </Route>
                  <Route path="/" element={<FormSelector />} />
                </Routes>
              </Refine>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
