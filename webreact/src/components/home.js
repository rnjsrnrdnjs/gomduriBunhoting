import "../App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import serverURL from "../serverURL";
import { useMediaQuery } from "react-responsive";

export default function Home({ user, updateUser }) {
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          width: "100%",
          height: "100vh",
          background: "black",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "60vh",
            color: "white",
            justifyContent: "flex-end",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/logo.png"
            style={{
              height: "40vh",
            }}
          ></img>
        </div>
        <div
          style={{
            width: "100%",
            height: "30vh",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "5vh",
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontFamily: "Inter",
              color: "#FF5675",
            }}
          >
            카카오계정으로
          </div>
          <div
            style={{
              fontSize: 16,
              fontFamily: "Inter",
              color: "#FF5675",
            }}
          >
            간편가입/로그인하기
          </div>
          <div
            style={{
              background: "#FBE300",
              color: "black",
              padding: 10,
              width: "70%",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginTop: "3vh",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          >
            카카오로 시작
          </div>
        </div>
        <div
          style={{
            height: "10vh",
            color: "white",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div>만든이 Estelle, 090.js, 유꽁빈</div>
        </div>
      </div>
    </div>
  );
}
