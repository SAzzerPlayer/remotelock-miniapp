import { IDevicesState } from './modules/Devices/IDevicesState';
import { IUsersState } from './modules/Users/IUsersState';

export interface IState {
  DevicesReducer: IDevicesState;
  UsersReducer: IUsersState;
}
