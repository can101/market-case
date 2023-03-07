import styles from './delivery-info.module.scss';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IDeliveryInfo } from '@/types';
import { addDeliveryInfo } from '@store/delivery-info';
// add atoms here for form elements and buttons etc.
import Input from '@_atoms/form/input';
import Textarea from '@_atoms/form/text-area';
import FaltButton from '@_atoms/buttons/flat-button';
import { Player } from '@lottiefiles/react-lottie-player';
import animatePath from '@assets/json/delivery.json';
import { useStore } from '@hooks/useStore';
import { memo, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import useReTitle from '@hooks/useReTitle';

let validationSchema = Yup.object({
  first_name: Yup.string().min(2).required(),
  last_name: Yup.string().min(2).required(),
  city: Yup.string().required(),
  district: Yup.string().required(),
  door_number: Yup.string(),
  address: Yup.string().required(),
  phone: Yup.string().required(),
  createdOn: Yup.date().default(() => new Date()),
});
const initialValues: IDeliveryInfo = {
  first_name: '',
  last_name: '',
  city: '',
  district: '',
  door_number: '',
  address: '',
  phone: '',
  createdOn: new Date(),
};

const DeliveryInfo = () => {
  const { deliveryList, dispatch } = useStore();

  const { handleSubmit, handleChange, handleReset, values, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addDeliveryInfo({ info: values, message: t('toast_msg.add_delivery') as string }));
      resetForm();
    },
  });

  useEffect(() => {
    toast.error(t('toast_msg.required_fields'))
  }, [Object.keys(errors).length > 0]);
  const { t } = useTranslation();
  useReTitle('pages.delivery');
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__right}>
          <div className={styles.container__form}>
            <div className={styles.container__form__title}>{t('delivery.title')}</div>
            <form>
              <div className={styles.container__form__control}>
                <Input name="first_name" size="auto" error={Boolean(errors.first_name)} placeholder={t('delivery.first_name')} value={values.first_name} onChange={handleChange} />
                <Input name="last_name" size="auto" error={Boolean(errors.last_name)} placeholder={t('delivery.last_name')} value={values.last_name} onChange={handleChange} />
              </div>
              <div className={styles.container__form__control}>
                <Input name="city" size="auto" error={Boolean(errors.city)} placeholder={t('delivery.city')} value={values.city} onChange={handleChange} />
                <Input name="district" size="auto" error={Boolean(errors.district)} placeholder={t('delivery.district')} value={values.district} onChange={handleChange} />
              </div>
              <div className={styles.container__form__control}>
                <Textarea name="address" placeholder={t('delivery.address')} error={Boolean(errors.address)} size={'md'} value={values.address} onChange={handleChange} />
              </div>
              <div className={styles.container__form__control}>
                <Input name="door_number" size="auto" error={Boolean(errors.door_number)} placeholder={t('delivery.door_number')} value={values.door_number as string} onChange={handleChange} />
                <Input name="phone" size="auto" placeholder={t('delivery.phone')} error={Boolean(errors.phone)} value={values.phone} onChange={handleChange} />
              </div>
              <div className={`${styles.container__form__control} ${styles.container__form__control__buttons}`}>
                <FaltButton type={'submit'} title={t('delivery.save') as string} size="md" onClick={handleSubmit} />
                <FaltButton
                  type="reset"
                  bgColor="primary"
                  size="md"
                  title={t('delivery.reset') as string}
                  onClick={(): void => {
                    handleReset(0);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.container__content__left}>
          <div className={styles.container__content__left__top}>
            <div className={styles.container__animation}>
              <Player src={animatePath} className={styles.container__animation__player} autoplay loop />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container__header}>
        {deliveryList.map((item: IDeliveryInfo, index: number) => {
          return (
            <div key={index} className={styles.container__header__adress__card}>
              <div>
                <div className={`${styles.container__header__adress__card__item} ${styles.container__header__adress__card__item__name}`}>
                  {item.first_name} {item.last_name}
                </div>
              </div>
              <div>
                <div className={styles.container__header__adress__card__item}>
                  {item.city}/{item.district}
                </div>
                <div className={styles.container__header__adress__card__item__door}>{item.door_number}</div>
              </div>
              <div>
                <div className={`${styles.container__header__adress__card__item} ${styles.container__header__adress__card__item__adress}`}>{item.address}</div>
              </div>
              <div>
                <div className={`${styles.container__header__adress__card__item} ${styles.container__header__adress__card__item__phone}`}>{item.phone}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(DeliveryInfo);
