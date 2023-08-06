import { ThemeMode } from '@core/const/enum';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'theme',
  storage: localStorage,
});

const themeMode = atom<ThemeMode>({
  key: 'theme',
  default: ThemeMode.Light,
  effects: [persistAtom],
});

export default themeMode;
