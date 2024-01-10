import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../components/Slider";
import Contact from "../components/Contacts";
import Content from "../components/Content";
import SliderSkelton from "../components/Skeletons/SliderSkeleton";
import ItemsSkeleton from "../components/Skeletons/ItemsSkeleton";
import { fetchItems } from "../store/slices/itemSlice";

const Home = () => {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.item.load);

  useEffect(() => {
    try {
      dispatch(fetchItems());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  return (
    <div>
      <div className="test">{load ? <Slider /> : <SliderSkelton />}</div>
      {load ? (
        <Content />
      ) : (
        Array(8)
          .fill(0)
          .map((_, index) => <ItemsSkeleton key={index} />)
      )}
      <Contact />
    </div>
  );
};

export default Home;
