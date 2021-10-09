import { IFetchedUser, IUser, EUserStatus } from '@shared/interfaces/IUser';

//  It's used for camelCase code style rules
//  and for translation into typed fields(boolean, enum) from strings values

const extractFetchedUserStatus = (status: string) => {
  if (status === 'current') return EUserStatus.Current;
  if (status === 'upcoming') return EUserStatus.Upcoming;
  return EUserStatus.Unavailable;
};

export const extractFetchedUser = ({
  attributes: {
    starts_at,
    ends_at,
    status,
    device_time_zone,
    ...otherAttributes
  },
  ...other
}: IFetchedUser): IUser => ({
  attributes: {
    startsAt: starts_at,
    endsAt: ends_at,
    status: extractFetchedUserStatus(status),
    deviceTimeZone: device_time_zone,
    ...otherAttributes,
  },
  ...other,
});
