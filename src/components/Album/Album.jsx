import React from "react";
import "./album.css";

const Album = ({ albums }) => {
  return (
    <section className="albums-wrapper">
      {albums.map((album) => (
        <div className="album-wrapper" key={album.num}>
          <img src={`${album.src}`} alt="Album images" />
          <div className="album-text-box">
            <h1 className="Album-name">{album.name}</h1>
            <span>{album.date}</span>
            <p>{album.composer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Album;
