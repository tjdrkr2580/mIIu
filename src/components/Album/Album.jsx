import React from "react";
import "./album.css";

const Album = ({ albums }) => {
  return (
    <section className="albums-wrapper">
      {albums.map((album) => (
        <a
          className="album-wrapper"
          key={album.num}
          href={`${album.url}`}
          target="_blink"
        >
          <section className="album-image">
            <img src={`${album.src}`} alt="Album images" />
          </section>
          <section className="album-text-box">
            <h1 className="Album-name">{album.name}</h1>
            <span>{album.date}</span>
            <p>{album.composer}</p>
          </section>
        </a>
      ))}
    </section>
  );
};
export default Album;
