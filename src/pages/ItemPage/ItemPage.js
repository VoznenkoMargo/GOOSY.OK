/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {useRouteMatch} from "react-router-dom";

function ItemPage() {
  const {params: { itemNo }} = useRouteMatch();

    const [item, setItem] = useState({});
    useEffect(() => (async () => {
      const result = await fetch(`https://ajax.test-danit.com/api/json/posts/${itemNo}`)
          .then(res => res.json());
          setItem(result);
  })(), []);

      return (
        <section>
            {item._id &&
            <>
                <h2>{item.name}</h2>
                <p>{item.weight}</p>
            </>}
        </section>
    )

}

export default ItemPage;
