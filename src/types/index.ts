export interface IProduct {
    id: number;
    name: string;
    price: number;
    image_url: string;
    description: string;
    category: string;
    quantity?: number;
}

export interface IBasketState {
    items: IProduct[];
    total: number;
}

export interface IProductState {
    items: IProduct[];
    loading: boolean;
    error: string;
}

export interface IProductAction {
    payload: IProduct;
    type: string;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ICategoryState {
    items: ICategory[];
    loading: boolean;
    error: string;
}

export interface IThemeState {
    theme: string;
}