import "../App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import serverURL from "../serverURL";
import { useMediaQuery } from "react-responsive";

export default function Recommand({ user, updateUser }) {
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
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15vh",
            justifyContent: "flex-end",
            paddingLeft: "4vh",
            paddingRight: "4vh",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src="/assets/back.png"
              style={{
                width: 25,
                height: 25,
              }}
            ></img>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "75vh",
            alignItems: "center",
            paddingTop: "20vh",
          }}
        >
          <div
            style={{
              color: "#FF5675",
            }}
          >
            운명적인 상대의 번호를 확인하세요.
          </div>
          <div
            style={{
              width: "70%",
              marginTop: "2vh",
              borderTop: "1px solid #FF5675",
              paddingTop: "2vh",
              paddingBottom: "2vh",
              borderBottom: "1px solid #FF5675",
            }}
          >
            <div
              type={"text"}
              style={{
                borderRadius: 50,
                width: "110%",
                marginLeft: "-5%",
                height: 40,
                background: "white",
                border: "2px solid #FF5675",
                marginBottom: "2vh",
                paddingLeft: "2vw",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  flex: 3,
                }}
              >
                닉네임
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  flex: 7,
                }}
              >
                월급없는그녀
              </div>
            </div>
            <div
              type={"text"}
              style={{
                borderRadius: 50,
                width: "110%",
                marginLeft: "-5%",
                height: 40,
                background: "white",
                border: "2px solid #FF5675",
                marginBottom: "2vh",
                paddingLeft: "2vw",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  flex: 3,
                  wordBreak: "break-all",
                }}
              >
                전화번호
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  flex: 7,
                }}
              >
                010-xxxx-xxxx
              </div>
            </div>
            <div
              type={"text"}
              style={{
                borderRadius: 50,
                width: "110%",
                marginLeft: "-5%",
                height: 40,
                background: "white",
                border: "2px solid #FF5675",
                marginBottom: "2vh",
                paddingLeft: "2vw",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  flex: 3,
                }}
              >
                MBTI
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  flex: 7,
                }}
              >
                ESFJ
              </div>
            </div>
            <div
              type={"text"}
              style={{
                borderRadius: 50,
                width: "110%",
                marginLeft: "-5%",
                height: 40,
                background: "white",
                border: "2px solid #FF5675",
                marginBottom: "2vh",
                paddingLeft: "2vw",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  flex: 3,
                }}
              >
                한줄소개
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  flex: 7,
                }}
              >
                21/ 컴공 / 많관부~
              </div>
            </div>
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
