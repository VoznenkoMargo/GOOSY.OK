import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { getOneProduct } from "../../axios";
import { getAllUsersComments } from "../../store/actionCreators/commentItemsCreator";


function ItemPage() {
  const {
    params: { itemNo },
  } = useRouteMatch();

  const [item, setItem] = useState({});
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const {thumb} = useSelector(store => store.comment);

  useEffect(async () => {
    const { data } = await getOneProduct(itemNo);
    setItem(data);
  }, [itemNo]);

  useEffect(() => {
    dispatch(getAllUsersComments())
  }, [flag, thumb]);

  return (
    <section>
      <ItemDetails item={item} setFlag={setFlag} flag={flag}/>
    </section>
  );
}

export default ItemPage;
