import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";
import "./_app.scss";
import Loginscreen from "./screens/Loginscreen";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Watchscreen from "./screens/Watchscreen";
import Searchscreen from "./screens/Searchscreen";
import Subscriptions from "./screens/Subscriptions";
import Channelscreen from "./screens/Channelscreen";

const Layout = ({ children }) => {
  const [togglsideebar, settogglesidebar] = useState(false);
  const handletogglesidebar = () => settogglesidebar((value) => !value);
  return (
    <>
      {" "}
      <Header handletogglesidebar={handletogglesidebar} />
      <div className="app__container ">
        <Sidebar
          togglsideebar={togglsideebar}
          handletogglesidebar={handletogglesidebar}
        />
        <Container fluid className="app_main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Homescreen />
            </Layout>
          }
        />
        <Route exact path="/auth" element={<Loginscreen />} />
        <Route
          exact
          path="/search/:query"
          element={
            <Layout>
              <Searchscreen />
            </Layout>
          }
        />
        <Route
          exact
          path="/watch/:id"
          element={
            <Layout>
              <Watchscreen />
            </Layout>
          }
        />
        <Route
          exact
          path="/feed/subscriptions"
          element={
            <Layout>
              <Subscriptions />
            </Layout>
          }
        />
        <Route
          exact
          path="/channel/:channelId"
          element={
            <Layout>
              <Channelscreen />
            </Layout>
          }
        />

        <Route element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
