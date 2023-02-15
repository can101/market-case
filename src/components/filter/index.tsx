import React, { useEffect, useState } from 'react';
import Input from '@_atoms/form/input';
import Select from '@_atoms/form/select';
import type { RootState, AppDispatch } from '@/store';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAsyncThunk } from '@store/category/getAllCategoryAsyncThunk';
import type { ICategory, ISortBy } from '@/types';
import styles from './filter.module.scss';
import { useTranslation } from 'react-i18next';
import { actions, type Params } from '@store/products';
import { log } from 'console';

const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect((): void => {
    console.log('Home page');
    void dispatch(getAllCategoryAsyncThunk());
  }, []);
  const handleClickFilter = (category: ICategory): void => {
    dispatch(actions.filterProductsCategory({ category: category.name }));
  };
  const handleClickSort = (sort: ISortBy): void => {
    dispatch(actions.sortByPrameters({ params: sort.nameSpace as Params, isReverse: sort.isReverse }));
  };
  const _categoryList = useSelector((state: RootState) => state.categories);
  const { t } = useTranslation();
  const sortOptions = [
    { id: 1, name: t('filter.sort_by.sort_by_a_z') as string, nameSpace: 'name' },
    { id: 2, name: t('filter.sort_by.sort_by_z_a') as string, nameSpace: 'name', isReverse: true },
    { id: 3, name: t('filter.sort_by.price_low_to_high') as string, nameSpace: 'price' },
    { id: 4, name: t('filter.sort_by.price_high_to_low') as string, nameSpace: 'price', isReverse: true },
  ];
  const [value, setValue] = useState('');
  return (
    <div>
      <div className={styles.filter}>
        <Input
          icon={<AiOutlineSearch />}
          size={'auto'}
          placeholder={t('filter.search') as string}
          value={value}
          onChange={(value): void => {
            const text = value.target.value;
            setValue(text);
            dispatch(actions.searchProductName({ text }));
          }}
          onClick={(): void => {
            dispatch(actions.searchProductName({ text: value }));
          }}
        />
        <div className={styles.filter__right_box}>
          <Select placeholder={t('filter.filter_by') as string} options={_categoryList.items} onClick={handleClickFilter} size={'sm'} />
          <Select
            size={'sm'}
            isGray={true}
            placeholder={t('filter.sort_by.title') as string}
            options={sortOptions}
            onClick={(el) => {
              handleClickSort(el as ISortBy);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
