import { useSelector } from "react-redux";
import { IState } from "@store/IState";

const selector = (state: IState) => state.DevicesReducer;

export const useDevicesSelector = () => useSelector(selector);
