import { EProcessState } from "../../../shared/EProcessState";
import { IDevice } from "../../../shared/IDevice";

export interface IDevicesState {
  devices: IDevice[];
  query: string;
  process: EProcessState;
}
