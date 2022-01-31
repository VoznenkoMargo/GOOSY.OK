/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";

function ItemPage() {
  const {
    params: { itemNo },
  } = useRouteMatch();

  const [item, setItem] = useState({});
  useEffect(
    () =>
      (async () => {
        const result = await fetch(
          `http://35.180.205.240:5000/api/products/${itemNo}`
        ).then((res) => res.json());
        setItem(result);
      })(),
    []
  );
  return (
    <section>
      <ItemDetails item={item} />
    </section>
  );
}

export default ItemPage;
