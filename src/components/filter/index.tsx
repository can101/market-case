import React, { useEffect } from 'react';
import Input from '@_atoms/form/input';
import Select from '@_atoms/form/select';
import type { RootState, AppDispatch } from '@/store';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAsyncThunk } from '@store/category/getAllCategoryAsyncThunk';
import type { ICategory } from '@/types';
import styles from './filter.module.scss';
import { useTranslation } from 'react-i18next';

const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect((): void => {
    console.log('Home page');
    void dispatch(getAllCategoryAsyncThunk());
  }, []);
  const _categoryList = useSelector((state: RootState) => state.categories);
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.filter}>
        <Input
          icon={<AiOutlineSearch />}
          size={'auto'}
          placeholder={t('filter.search') as string}
          value={''}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            console.log('====================================');
            console.log(e.target.value, 'e.target.value');
            console.log('====================================');
          }}
        />
        <div className={styles.filter__right_box}>
          <Select
            placeholder={t('filter.filter_by') as string}
            options={_categoryList.items}
            onClick={(item: ICategory): void => {
              console.log('====================================');
              console.log('item', item);
              console.log('====================================');
            }}
            size={'sm'}
          />
          <Select
            size={'sm'}
            isGray={true}
            placeholder={t('filter.sort_by.title') as string}
            options={[
              { id: 1, name: t('filter.sort_by.sort_by_a_z') as string },
              { id: 2, name: t('filter.sort_by.sort_by_z_a') as string },
              { id: 3, name: t('filter.sort_by.price_low_to_high') as string },
              { id: 4, name: t('filter.sort_by.price_high_to_low') as string },
            ]}
            onClick={(item: ICategory): void => {
              console.log('====================================');
              console.log('item', item);
              console.log('====================================');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
