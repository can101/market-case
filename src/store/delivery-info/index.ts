import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDeliveryInfo, IDeliveryInfoState } from '@/types';
import toast from 'react-hot-toast';

const initialState: IDeliveryInfoState = {
    items: [
        {
            phone: '+90 123 123 12 12',
            address: 'Nispetiye Mahallesi, Aytar Caddesi',
            district: 'Besiktas',
            city: 'Istanbul',
            door_number: '14/1',
            first_name: 'Ali',
            last_name: 'Yilmaz',
        }
    ],
    length: 0,
};

const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        addDeliveryInfo: (state: IDeliveryInfoState, action: PayloadAction<{ info: IDeliveryInfo, message: string }>) => {
            const { info } = action.payload;
            toast.success(action.payload.message as string);
            state.items.push(info);
            state.length += 1;
        },
    }
});

export const { addDeliveryInfo } = deliverySlice.actions;
export default deliverySlice.reducer;
