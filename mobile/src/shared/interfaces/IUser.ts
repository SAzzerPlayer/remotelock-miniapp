import { IBaseObject } from './IBaseObject';

export interface IFetchedUser extends IBaseObject {
  attributes: {
    name: string;
    email: string | null;
    phone: string | null;
    pin: string;
    status: string;
    starts_at: string | null;
    ends_at: string | null;
    device_time_zone: string;
  };
}

export enum EUserStatus {
  Unavailable = 0,
  Current = 1,
  Upcoming = 2,
}

export interface IUser extends IBaseObject {
  attributes: {
    name: string;
    pin: string;
    status: EUserStatus;
    deviceTimeZone: string;
    email?: string;
    phone?: string;
    startsAt?: string;
    endsAt?: string;
  };
}
