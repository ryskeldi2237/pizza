import React from "react";
import ContentLoader from "react-content-loader";

const SliderLoader = (props) => (
  <ContentLoader
    speed={2}
    width={`91%`}
    height={`300`}
    viewBox="0 0 91% 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="120" y="0" rx="0" ry="30" width="91%" height="300" />
  </ContentLoader>
);

export default SliderLoader;
