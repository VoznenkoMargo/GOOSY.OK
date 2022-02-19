import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import Item from '../../components/Item/Item';
import { getUserWishlist } from '../../store/actionCreators/wishlistItemsCreator';
import styles from './WishlistPage.module.scss';

function WishlistPage() {

  const {wishlistItems, isFavoriteItems} = useSelector(store => store.wishlist)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWishlist())
  }, [isFavoriteItems])

  return (
    <div className={styles.wishlistPage}>
        <div className={styles.wishlistPage_back}>
          <ArrowBack />
        </div>   
        <h3 className={styles.wishlistPageTitle}>Your Wishlist Items</h3>
        <div className={styles.wishlistPageItemsContainer}>
          <div className={styles.wishlistPageEmpty}>
          {wishlistItems.length === 0 ? "Wishlist list is empty" : null}
          </div>
          
        {wishlistItems && wishlistItems.map(element => (
        <Item 
        key={element.itemNo}
        itemNo={element.itemNo}
        imageUrls={element.imageUrls}
        categories={element.categories}
        name={element.name}
           currentPrice={element.currentPrice}
            weight={element.weight}
             count={element.count}
              _id={element._id}/>
        ))}   
        </div>
    </div>
  )
}

export default WishlistPage