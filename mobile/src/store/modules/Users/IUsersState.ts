import { EProcessState } from "../../../shared/EProcessState";
import { IUser } from "../../../shared/IUser";

export interface IUsersState {
  users: IUser[];
  processState: EProcessState;
}
