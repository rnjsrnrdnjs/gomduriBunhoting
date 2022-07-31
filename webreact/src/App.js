import "./App.css";
import {
  Redirect,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { connect } from "react-redux";
import { getUser, updateUser } from "./reduxModules/user";
import axios from "axios";
import serverURL from "./serverURL";
import { useMediaQuery } from "react-responsive";

import Home from "./components/home";
import Auth from "./components/auth";
import MyInfo from "./components/myInfo";
import PhoneList from "./components/phoneList";
import Recommand from "./components/recommand";

const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapDispatchProps = (dispatch) => ({
  getUser: () => {
    dispatch(getUser());
  },
  updateUser: (input) => {
    dispatch(updateUser(input));
  },
});

function App({ user, updateUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <div className="AppBody">
      <Routes>
        <Route
          path="/"
          element={<Home user={user} updateUser={updateUser} />}
          //exact={true}
        />
        <Route
          path="/Home"
          element={<Home user={user} updateUser={updateUser} />}
        />
        <Route
          path="/MyInfo"
          element={
            user.id < 0 ? (
              <MyInfo user={user} updateUser={updateUser} />
            ) : (
              <Home user={user} updateUser={updateUser} />
            )
          }
        />
        <Route
          path="/PhoneList"
          element={
            user.id < 0 ? (
              <PhoneList user={user} updateUser={updateUser} />
            ) : (
              <Home user={user} updateUser={updateUser} />
            )
          }
        />
        <Route
          path="/Recommand"
          element={
            user.id < 0 ? (
              <Recommand user={user} updateUser={updateUser} />
            ) : (
              <Home user={user} updateUser={updateUser} />
            )
          }
        />

        <Route
          path="/auth/sns"
          element={<Auth user={user} updateUser={updateUser} />}
        />
      </Routes>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchProps)(App);
