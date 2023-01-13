import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { hotelInputs, productInputs, userInputs } from "./tableSource";

import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, userColumns } from "./components/datatable/datatablesource";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoot = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route
              index
              element={
                <ProtectedRoot>
                  <Home />
                </ProtectedRoot>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoot>
                    <List columns = {userColumns}/>
                  </ProtectedRoot>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoot>
                    <Single />
                  </ProtectedRoot>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoot>
                    <New inputs={userInputs} title={"Add new user"} />
                  </ProtectedRoot>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoot>
                    <List columns={hotelColumns}/>
                  </ProtectedRoot>
                }
              />
              <Route
                path=":hotelId"
                element={
                  <ProtectedRoot>
                    <Single />
                  </ProtectedRoot>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoot>
                    <New inputs={hotelInputs} title={"Add new hotel"} />
                  </ProtectedRoot>
                }
              />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
