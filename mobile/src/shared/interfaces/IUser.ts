export interface IFetchedUser {
  id: string;
  type: "lock" | string;
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

export interface IUser {
  id: string;
  type: string;
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
