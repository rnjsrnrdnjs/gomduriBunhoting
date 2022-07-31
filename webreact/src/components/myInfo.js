import "../App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import serverURL from "../serverURL";
import { useMediaQuery } from "react-responsive";

export default function MyInfo({ user, updateUser }) {
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

  const [nick, setNick] = useState("");
  const [phone, setPhone] = useState("");
  const [MBTI, setMBTI] = useState("");
  const [introduce, setIntroduce] = useState("");

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
              src="/assets/menu.png"
              style={{
                width: 25,
                height: 25,
              }}
            ></img>
            <div
              style={{
                marginLeft: 20,
                color: "white",
              }}
            >
              번호목록
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "75vh",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              marginTop: "10vh",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "#FF5675",
                }}
              >
                번호팅
              </div>
              <div
                style={{
                  color: "white",
                }}
              >
                에 참여하기 위하여
              </div>
            </div>
            <div
              style={{
                color: "white",
              }}
            >
              개인정보를 입력해주세요.
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
              <input
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
                }}
                placeholder="닉네임"
              ></input>
              <input
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
                }}
                placeholder="전화번호"
              ></input>
              <input
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
                }}
                placeholder="MBTI"
              ></input>
              <input
                type={"text"}
                style={{
                  borderRadius: 50,
                  width: "110%",
                  marginLeft: "-5%",
                  height: 40,
                  background: "white",
                  border: "2px solid #FF5675",
                  paddingLeft: "2vw",
                }}
                placeholder="한줄소개"
              ></input>
            </div>
            <div
              style={{
                marginTop: "3vh",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  marginBottom: "2vh",
                  color: "white",
                }}
              >
                번호 받기는 1일 3건까지 가능합니다.
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#FF5675",
                }}
              >
                번호팅 이외의 목적으로 번호 사용시,
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#FF5675",
                }}
              >
                법적 처벌이 이루어 질 수 있다는 점 알려드립니다.
              </div>
            </div>
          </div>
          <div
            style={{
              alignContent: "center",
              alignItems: "center",
              marginBottom: "4vh",
            }}
          >
            <div
              style={{
                width: "60%",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  color: "white",
                  flex: 1,
                  background: "#FF5675",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  height: 45,
                  borderTopLeftRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderRight: "1px solid black",
                }}
              >
                번호저장
              </div>
              <div
                style={{
                  color: "white",
                  flex: 1,
                  background: "#FF5675",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  height: 45,
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                }}
              >
                번호팅
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