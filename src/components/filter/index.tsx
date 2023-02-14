import React, { useEffect } from 'react';
import Input from '../_atoms/form/input';
import Select from '../_atoms/form/select';
import type { RootState, AppDispatch } from '../../store';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAsyncThunk } from '../../store/category/getAllCategoryAsyncThunk';
import type { ICategory } from '../../types';
import styles from './filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect((): void => {
    console.log('Home page');
    void dispatch(getAllCategoryAsyncThunk());
  }, []);
  const _categoryList = useSelector((state: RootState) => state.categories);
  return (
    <div>
      <div className={styles.filter}>
        <Input
          icon={<AiOutlineSearch />}
          size={'auto'}
          placeholder={'Search'}
          value={''}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            console.log('====================================');
            console.log(e.target.value, 'e.target.value');
            console.log('====================================');
          }}
        />
        <div className={styles.filter__right_box}>
          <Select
            placeholder={'filter by'}
            options={_categoryList.items}
            value={''}
            onClick={(e: React.MouseEvent<HTMLElement>, item: ICategory): void => {
              console.log('====================================');
              console.log('e', e, 'item', item);
              console.log('====================================');
            }}
            size={'sm'}
          />
          <Select
            size={'sm'}
            isGray={true}
            placeholder={'sort by'}
            options={[
              { id: 1, name: 'A-Z' },
              { id: 2, name: 'Z-A' },
              { id: 3, name: 'Price: Low to High' },
              { id: 4, name: 'Price: High to Low' },
            ]}
            value={''}
            onClick={(e: React.MouseEvent<HTMLElement>, item: ICategory): void => {
              console.log('====================================');
              console.log('e', e, 'item', item);
              console.log('====================================');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
