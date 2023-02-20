import { IDeliveryInfo, IProduct } from '@/types'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { getAllProductsAsyncThunk } from '@/store/products/getAllProductsAsyncThunk'
import { useLayoutEffect, useState } from 'react';

interface ReturnType { productList: IProduct[], productLength: number, loading: boolean, notfound: boolean, favoriteList: IProduct[], favoritesLength: number, basketList: IProduct[], basketLength: number, deliveryList: IDeliveryInfo[], deliveryLength: number, theme: string, dispatch: AppDispatch, checkFavorite: (item: IProduct) => boolean };

export const useStore = (): ReturnType => {
    const dispatch = useDispatch<AppDispatch>();
    // get store state start
    const { basket, delivery, products, theme } = useSelector((state: RootState) => state);
    const Favorites: IProduct[] = products.items.filter((item: IProduct) => item.isFavorite == true);
    // get store state end
    const favoritesLength: number = Favorites.length;
    // product get request start
    useLayoutEffect(() => {
        if (products.items.length == 0) {
            dispatch(getAllProductsAsyncThunk());
        }
    }, []);
    // product get request end
    const checkFavorite = (item: IProduct): boolean => {
        const productIndex = products.temp.findIndex((el: IProduct) => el.id === item.id);
        return products.temp[productIndex].isFavorite;
    }
    // return data
    return { productList: products.items, productLength: products.length, loading: products.loading, notfound: products.notfound, favoriteList: Favorites, favoritesLength, basketList: basket.items, basketLength: basket.length, deliveryList: delivery.items, deliveryLength: delivery.length, theme: theme.theme, dispatch, checkFavorite };
}