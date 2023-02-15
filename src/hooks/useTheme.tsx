import { RootState } from '@store/index';
import { setTheme } from '@store/theme';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

enum Theme {
  dark = 'light',
  light = 'dark',
}

type UseThemeReturnType = [boolean, () => void];

export const useTheme = (): UseThemeReturnType => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: RootState) => state.theme);

  useLayoutEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
  }, [theme]);

  const setStoreTheme = (): void => {
    dispatch(setTheme(Theme[theme.toLowerCase() as keyof typeof Theme]));
  };

  const isLightMode = theme === 'light';
  return [isLightMode, setStoreTheme];
};
