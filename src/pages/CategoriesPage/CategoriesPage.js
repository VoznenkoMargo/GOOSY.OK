// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { initItems } from "../../store/actionCreators";
// import Find from "../../components/Find/Find";
// import style from "../CategoriesPage/CategoriesPage.module.scss";
// import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
// import Select from "../../components/Select/Select";

// function CategoriesPage() {
//   const { items, url } = useSelector((store) => store.items);

//   const isLoading = false;
//   const isError = false;

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(initItems(url));
//   }, [url]);

//   return (
//     <section className={style.mainSection}>
//       <div>
//         <Find />
//       </div>
//       <div>
//         <Select />
//         <ItemsContainer
//           className={style.test}
//           items={items}
//           isLoading={isLoading}
//           isError={isError}
//         />
//       </div>
//     </section>
//   );
// }

// export default CategoriesPage;
