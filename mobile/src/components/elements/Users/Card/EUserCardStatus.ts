import { ColorTheme } from "../../../../shared/ColorTheme";

export enum EUserCardStatus {
  Unavailable = 0,
  Current = 1,
  Upcoming = 2,
}

export const UserCardStatusTitle: Record<EUserCardStatus, string> = {
  [EUserCardStatus.Unavailable]: "Unavailable",
  [EUserCardStatus.Current]: "Active",
  [EUserCardStatus.Upcoming]: "Upcoming",
};

export const UserCardStatusBackground: Record<EUserCardStatus, string> = {
  [EUserCardStatus.Unavailable]: ColorTheme["back-1"],
  [EUserCardStatus.Current]: ColorTheme["green"],
  [EUserCardStatus.Upcoming]: ColorTheme["yellow"],
};
