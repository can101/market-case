import React, {useEffect, memo, useMemo} from 'react';
import styles from './home.module.scss';
import {type AppDispatch} from "../../store";
import {useDispatch} from "react-redux";
import {getAllProductsAsyncThunk} from "../../store/products/getAllProductsAsyncThunk";
import {getAllCategoryAsyncThunk} from "../../store/category/getAllCategoryAsyncThunk";

function Home(): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

    useEffect((): void => {
            console.log('Home page');
            void dispatch(getAllProductsAsyncThunk());
            void dispatch(getAllCategoryAsyncThunk());
        }, []
    );

    return (
        <div className={styles.bg_dark}>
            <h1>Home</h1>

        </div>
    );
}

export default memo(Home);
