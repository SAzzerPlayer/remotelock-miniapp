import { ColorTheme } from '@shared/ColorTheme';
import { EUserStatus } from '@shared/interfaces/IUser';

export const userStatusTitleDict: Record<EUserStatus, string> = {
  [EUserStatus.Unavailable]: 'Unavailable',
  [EUserStatus.Current]: 'Active',
  [EUserStatus.Upcoming]: 'Upcoming',
};

export const userStatusBackgroundDict: Record<EUserStatus, string> = {
  [EUserStatus.Unavailable]: ColorTheme['back-1'],
  [EUserStatus.Current]: ColorTheme['green'],
  [EUserStatus.Upcoming]: ColorTheme['yellow'],
};
