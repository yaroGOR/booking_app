import React from "react";
import ContentLoader from "react-content-loader"


const SkeletonLoading = () => {
  return (
    
<ContentLoader 
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    
  </ContentLoader>


)
};

export default SkeletonLoading;



