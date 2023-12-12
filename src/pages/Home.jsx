import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Content from "../components/Content";
import axios from "axios";

export default function Home() {
  const [load, setLoad] = useState(false);
  const [sliders, setSliders] = useState([]);
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    await axios.get("https://b395de9a2b0b8ac0.mokky.dev/items").then((res) => {
      setTimeout(() => {
        setData(res);
        setSliders(res.data[5]);
        setLoad(true);
      }, 500);
    });
  };
  useEffect(() => sendRequest(), []);
  return (
    <div>
      <div className="test">
        <Main sliders={sliders} test={data} />
      </div>
      <Content load={load} {...data} />
      <Contact />
    </div>
  );
}
