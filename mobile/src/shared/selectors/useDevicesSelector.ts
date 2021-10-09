import { useSelector } from 'react-redux';
import { IState } from '@store/IState';
import { IDevicesState } from '@store/modules/Devices/IDevicesState';

const selector = (state: IState) => state.DevicesReducer;

export const useDevicesSelector = (): IDevicesState => useSelector(selector);
