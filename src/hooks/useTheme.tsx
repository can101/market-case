import { setTheme } from '@store/theme';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useStore } from './useStore';

enum Theme {
  dark = 'light',
  light = 'dark',
}

type UseThemeReturnType = [boolean, () => void];

export const useTheme = (): UseThemeReturnType => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { theme } = useStore();

  useLayoutEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
  }, [theme]);

  const setStoreTheme = (): void => {
    dispatch(setTheme({ theme: Theme[theme.toLowerCase() as keyof typeof Theme], message: t('toast_msg.theme_change') }));
  };

  const isLightMode = theme === 'light';
  return [isLightMode, setStoreTheme];
};
