import { useState } from 'react';
import Input from '@_atoms/form/input';
import Select from '@_atoms/form/select';
import { AiOutlineSearch } from 'react-icons/ai';
import type { ICategory, ISortBy } from '@/types';
import styles from './filter.module.scss';
import { useTranslation } from 'react-i18next';
import { actions, type Params } from '@store/products';
import { useStore } from '@hooks/useStore';

const Filter = () => {
  const { dispatch } = useStore();
  const { t } = useTranslation();
  const handleClickFilter = (category: ICategory): void => {
    dispatch(actions.filterProductsCategory({ category: category.base }));
  };
  const handleClickSort = (sort: ISortBy): void => {
    dispatch(actions.sortByPrameters({ params: sort.nameSpace as Params, isReverse: Boolean(sort.isReverse) }));
  };
  const sortOptions: ISortBy[] = [
    { id: 1, name: t('filter.sort_by.sort_by_a_z') as string, nameSpace: 'name' },
    { id: 2, name: t('filter.sort_by.sort_by_z_a') as string, nameSpace: 'name', isReverse: true },
    { id: 3, name: t('filter.sort_by.price_low_to_high') as string, nameSpace: 'price' },
    { id: 4, name: t('filter.sort_by.price_high_to_low') as string, nameSpace: 'price', isReverse: true },
  ];
  const filterCategory: ICategory[] = [
    {
      id: 0,
      name: t('filter.filter_category.all'),
      base: "All"
    },
    {
      id: 1,
      name: t('filter.filter_category.furit'),
      base: "Fruit"
    },
    {
      id: 2,
      name: t('filter.filter_category.bakery'),
      base: "Bakery"
    },
    {
      id: 3,
      name: t('filter.filter_category.vegetable'),
      base: "Vegetable"
    },
    {
      id: 4,
      name: t('filter.filter_category.dairy'),
      base: "Dairy"
    },
    {
      id: 5,
      name: t('filter.filter_category.meat'),
      base: "Meat"
    },
    {
      id: 6,
      name: t('filter.filter_category.snacks'),
      base: "Snacks"
    },
    {
      id: 7,
      name: t('filter.filter_category.beverage'),
      base: "Beverage"
    },
    {
      id: 8,
      name: t('filter.filter_category.seaFood'),
      base: "Seafood"
    },
    {
      id: 9,
      name: t('filter.filter_category.fastFood'),
      base: "Fast food"
    },
    {
      id: 10,
      name: t('filter.filter_category.dessert'),
      base: "Dessert"
    },
    {
      id: 11,
      name: t('filter.filter_category.asianCuisine'),
      base: "Asian cuisine"
    },
    {
      id: 12,
      name: t('filter.filter_category.grain'),
      base: "Grain"
    }
  ]

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
          <Select placeholder={t('filter.filter_by') as string} options={filterCategory} onClick={(item) => { handleClickFilter(item as ICategory) }} size={'sm'} />
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
