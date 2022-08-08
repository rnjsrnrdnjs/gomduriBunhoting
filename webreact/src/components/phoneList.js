import "../App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import serverURL from "../serverURL";
import { useMediaQuery } from "react-responsive";

export default function PhoneList({ user, updateUser }) {
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

  const [phoneList, setPhoneList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .post(`${serverURL}/getMyPhoneList`, {
          req_user_id: user.id,
        })
        .then((res) => {
          setPhoneList(res.data.phoneList);
        });
    }
    fetchData();
  }, []);

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
              onClick={() => {
                navigate(-1);
              }}
            ></img>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "85vh",
            overflow: "scroll",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              borderBottom: "1px solid #FF5675",
              alignItems: "center",
              paddingTop: "6vh",
              paddingBottom: "6vh",
            }}
          >
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              월급없는 그녀
            </div>
            <div
              style={{
                color: "white",
                fontSize: 18,
                marginBottom: 2,
              }}
            >
              010 - XXXX - XXXX
            </div>
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              ESFJ
            </div>
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              21/ 컴공 / 많관부~
            </div>
          </div>
          <div
            style={{
              width: "60%",
              borderBottom: "1px solid #FF5675",
              alignItems: "center",
              paddingTop: "6vh",
              paddingBottom: "6vh",
            }}
          >
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              월급없는 그녀
            </div>
            <div
              style={{
                color: "white",
                fontSize: 18,
                marginBottom: 2,
              }}
            >
              010 - XXXX - XXXX
            </div>
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              ESFJ
            </div>
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              21/ 컴공 / 많관부~
            </div>
          </div>
          <div
            style={{
              width: "60%",
              borderBottom: "1px solid #FF5675",
              alignItems: "center",
              paddingTop: "6vh",
              paddingBottom: "6vh",
            }}
          >
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              월급없는 그녀
            </div>
            <div
              style={{
                color: "white",
                fontSize: 18,
                marginBottom: 2,
              }}
            >
              010 - XXXX - XXXX
            </div>
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              ESFJ
            </div>
            <div
              style={{
                color: "white",
                marginBottom: 2,
              }}
            >
              21/ 컴공 / 많관부~
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
