import React, { type FC, type ReactElement } from 'react';
import styles from './itemcounter.module.scss';
import CircleIconButton from '../_atoms/buttons/circle-icon-button';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface ICounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ItemCounter: FC<ICounterProps> = ({ count, onDecrement, onIncrement }): ReactElement => {
  const size = 'sm';
  return (
    <div className={styles.itemCounter}>
      <CircleIconButton size={size} disabled={count === 1} icon={<AiOutlineMinus />} onClick={onDecrement} />
      <div className={styles.itemCounter__counter}>{count}</div>
      <CircleIconButton size={size} icon={<AiOutlinePlus />} onClick={onIncrement} />
    </div>
  );
};

export default ItemCounter;
