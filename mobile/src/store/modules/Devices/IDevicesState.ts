import { EProcessState } from '@shared/EProcessState';
import { IDevice } from '@shared/interfaces/IDevice';

export interface IDevicesState {
  devices: IDevice[];
  query: string;
  processState: EProcessState;
}
