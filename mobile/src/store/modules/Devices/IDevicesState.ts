import { EProcessState } from "../../../shared/EProcessState";
import { IDevice } from "../../../shared/IDevice";

export interface IDevicesState {
  devices: IDevice[];
  query: string;
  processState: EProcessState;
}
