import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const image = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{image}</div>;
};

export default ImageList;
