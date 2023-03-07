import { type ReactElement, type FC, useState, useEffect } from 'react';
import styles from './gototop.module.scss';
import Button from '@_atoms/buttons/circle-icon-button'
import { TbArrowBigUpLines } from "react-icons/tb"

const GoToTop: FC = (): ReactElement => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  const isScroll = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', isScroll)
  }, []);
  return (
    <div className={styles.container}>
      {show && <Button onClick={handleClick} icon={<TbArrowBigUpLines />} />}
    </div>
  );
};

export default GoToTop;
