import { Routes } from '@navigation/Routes';

interface ITabRoute {
  title: string;
  route: string;
}

export const tabRoutesArray: ITabRoute[] = [
  {
    title: 'Devices',
    route: Routes.Devices,
  },
  {
    title: 'Users',
    route: Routes.Users,
  },
];
