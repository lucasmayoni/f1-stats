import { Layout, Menu } from "antd";
import { dataProvider } from "./rest-data-provider";
import { Refine } from "@refinedev/core";
import { axiosInstance } from "./rest-data-provider/utils";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { CircuitShow } from "./components/show";
import { FormSelector } from "./components/formSelector";

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
                    name: "circuits",
                    list: "/circuits",
                    show: "/circuits/show/:id",
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                }}
              >
                <FormSelector />
                <Routes>
                  <Route path="/circuits">
                    <Route path="show/:id" element={<CircuitShow />} />
                  </Route>
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
