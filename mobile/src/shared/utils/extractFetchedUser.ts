import { IFetchedUser, IUser, EUserStatus } from "../IUser";

const extractFetchedUserStatus = (status: string) => {
  if (status === "current") return EUserStatus.Current;
  if (status === "upcoming") return EUserStatus.Upcoming;
  return EUserStatus.Unavailable;
};

export const extractFetchedUser = ({
  id,
  type,
  attributes: {
    name,
    pin,
    email,
    starts_at,
    ends_at,
    status,
    phone,
    device_time_zone,
  },
}: IFetchedUser): IUser => ({
  id,
  type,
  attributes: {
    name,
    pin,
    email,
    phone,
    startsAt: starts_at,
    endsAt: ends_at,
    status: extractFetchedUserStatus(status),
    deviceTimeZone: device_time_zone,
  },
});
