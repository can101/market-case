export interface IProduct {
    [x: string]: any;
    id: number;
    name: string;
    price: number;
    image_url: string;
    description: string;
    category: string;
    count?: number;
}

export interface IBasketState {
    items: IProduct[];
    length: number;
}

export interface IProductState {
    items: IProduct[];
    loading: boolean;
    error: string;
    temp: IProduct[];
    notfound: boolean;
}

export interface IProductAction {
    payload: IProduct;
    type: string;
}

export interface ICategory {
    id: number;
    name: string;
    base?: string;
}

export interface ICategoryState {
    items: ICategory[];
    loading: boolean;
    error: string;
}

export interface IThemeState {
    theme: string;
}

export interface ISortBy {
    id: number;
    name: string;
    nameSpace: string;
    isReverse: boolean;
}
export interface IFavoriteState {
    items: IProduct[];
    length: number;
}

export interface IDeliveryInfo {
    phone: string;
    address: string;
    district: string;
    city: string;
    door_number?: string;
    first_name: string;
    last_name: string;
    createdOn?: Date;
}

export interface IDeliveryInfoState {
    items: IDeliveryInfo[];
    length: number;
}