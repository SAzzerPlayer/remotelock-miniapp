import { useSelector } from 'react-redux';
import { IState } from '@store/IState';
import { IUsersState } from '@store/modules/Users/IUsersState';

const selector = (state: IState) => state.UsersReducer;

export const useUsersSelector = (): IUsersState => useSelector(selector);
