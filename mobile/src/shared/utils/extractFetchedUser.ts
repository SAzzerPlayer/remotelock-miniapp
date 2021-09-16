import { IFetchedUser, IUser, EUserStatus } from "@shared/interfaces/IUser";

//  It's used for camelCase code style rules
//  and for translation into typed fields(boolean, enum) from strings values

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
    email: email ?? undefined,
    phone: phone ?? undefined,
    startsAt: starts_at ?? undefined,
    endsAt: ends_at ?? undefined,
    status: extractFetchedUserStatus(status),
    deviceTimeZone: device_time_zone,
  },
});
