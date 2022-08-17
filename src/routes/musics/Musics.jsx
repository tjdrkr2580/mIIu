import React, { useEffect, useState } from "react";
import "./musics.css";
import Album from "../../components/Album/Album";
import AnimationPage from "../../AnimationPage";
import Loading from "../Loading/Loading";

const Musics = () => {
  const [loading, setLoading] = useState(true);
  const Albums = [
    {
      url: "https://music.apple.com/kr/album/utopia/1505545550",
      src: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a6/28/d1/a628d1b9-0c45-d208-996d-231e8609f7b2/artwork.jpg/1200x1200bf-60.jpg",
      num: 1,
      name: "Utopia",
      date: "2020",
      composer: "M2U",
    },
    {
      url: "https://music.apple.com/kr/album/diversity/1440890722",
      src: "https://image.bugsm.co.kr/album/images/1000/6653/665314.jpg",
      num: 2,
      name: "Diversity",
      date: "2017",
      composer: "M2U",
    },
    {
      url: "https://www.music-flo.com/detail/album/leiloi/albumtrack",
      src: "https://image.bugsm.co.kr/album/images/1000/5435/543573.jpg",
      num: 3,
      name: "Myosotis",
      date: "2015",
      composer: "M2U, NICODE",
    },
    {
      url: "https://namu.wiki/w/M2U#s-3.5",
      src: "https://w.namu.la/s/e17554313f5061c85e3a9bc9c3188ec9b5094cd53becf717dcd1bbde114905dbc6f57401d03a56da7d7af0cfefcddb8b5446889ae3011896c0cdeabbba970ec27cda88bf576f544c96acbcd68bd32a72e351b133e369f3b60f227b58382dd459a44847fd00641c6a8e56a9183cae6345",
      num: 4,
      name: "The Last One",
      date: "2014",
      composer: "M2U",
    },
    {
      url: "https://namu.wiki/w/M2U#s-3.3",
      src: "https://w.namu.la/s/2fbd710c5d2320aa40dff098544da4a2d768c767fd37127061cd1603f28e05142a1b09e6f380f2a0d2137aea48052135b64f4e5cd064e7e9d6e53f8444d4a68361106975a4ffb88d78837ed90a85b8a6420b2e02b6ae68be71a71dea01b644e833918e6f9fcfd0927bcb4acb6be1d195",
      num: 5,
      name: "Magnolia",
      date: "2014",
      composer: "M2U",
    },
    {
      url: "https://www.music-flo.com/detail/album/nndnzi/albumtrack",
      src: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/110/873/80110873_1_600x600.JPG/dims/resize/Q_80,0",
      num: 6,
      name: "Violinism",
      date: "2010",
      composer: "M2U",
    },
  ];
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 150);
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Musics | mIIu`;
  }, []);
  return (
    <section className="music-wrapper">
      {loading ? (
        <Loading />
      ) : (
        <AnimationPage>
          <Album albums={Albums} />
        </AnimationPage>
      )}
    </section>
  );
};

export default Musics;
