import React  from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { initItems } from '../../store/actionCreators';
import { useEffect } from 'react';
import Find from '../../components/Find/Find';
import FindPrice from '../../components/FindPrice/FindPrice';
import style from "./CategorysPage.module.scss"
import ItemsContainer from '../../components/ItemsContainer/ItemsContainer';
import Select from '../../components/Select/Select';


function CategorysPage () {
    const {items, url} = useSelector((store)=> store.items)
    
    const isLoading = false
    const isError = false

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initItems(url))
    }, [url])
    
    return(
        <section className={style.mainSection}>
            <div>
                <Find/>
                <FindPrice/>
            </div>
            <div>
            <Select />
            <ItemsContainer className={style.test} items={items} isLoading={isLoading} isError={isError} />

            </div>

        </section>
    )
}

export default CategorysPage