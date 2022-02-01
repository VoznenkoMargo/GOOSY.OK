/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { getOneProduct } from "../../axios";

function ItemPage() {
  const {
    params: { itemNo },
  } = useRouteMatch();

  const [item, setItem] = useState({});

  useEffect(async () => {
    const { data } = await getOneProduct(itemNo);
    setItem(data);
  }, [itemNo]);

  return (
    <section>
      <ItemDetails item={item} />
    </section>
  );
}

export default ItemPage;
