import { EProcessState } from "@shared/EProcessState";
import { IUser } from "@shared/interfaces/IUser";

export interface IUsersState {
  users: IUser[];
  processState: EProcessState;
}
