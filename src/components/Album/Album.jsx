import React, { useEffect, useState } from "react";
import Loading from "./../../routes/Loading/Loading";

const Album = ({ albums }) => {
  return (
    <>
      {albums.map((album) => (
        <section key={album.num} className="Album-wrapper">
          <img src={`${album.src}`} alt="Album images" />
          <h1 className="Album-name">{album.name}</h1>
          <p>{album.date}</p>
        </section>
      ))}
    </>
  );
};
export default Album;
