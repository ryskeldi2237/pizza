import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Content from "../components/Content";
import SliderLoader from "../components/SliderLoader";
import { fetchUserById } from "../store/itemSlice";
export default function Home() {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.item.load);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUserById());
    }, 500);
  }, [dispatch]);
  return (
    <div>
      <div className="test">{load ? <Main /> : <SliderLoader />}</div>
      <Content />
      <Contact />
    </div>
  );
}
