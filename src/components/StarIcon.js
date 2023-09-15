import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  // si dans le locale storage il y a l'id alors tu remplace  l'icone star-empty par star-full
  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      } else {
        setLike(false);
      }
    }
  }, [coinId]);

  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    if (favList) {
      if (favList.includes(id)) {
        // on exclut le token cliquer
        window.localStorage.coinList = favList.filter((coin) => coin !== id); // filtre tout les token qui ne sont pas égale a id
        setLike(false);
      } else {
        // si l'id n'existe pas on le rajoute , on casse le tableau favList en le destructurant pour recréer un nouveau tableau avec l'id en plus
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;
