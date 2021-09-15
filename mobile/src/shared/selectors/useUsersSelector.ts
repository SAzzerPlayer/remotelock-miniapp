import { useSelector } from "react-redux";
import { IState } from "../../store/IState";

const selector = (state: IState) => state.UsersReducer;

export const useUsersSelector = useSelector(selector);
