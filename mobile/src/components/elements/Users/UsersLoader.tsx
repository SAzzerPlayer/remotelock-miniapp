import React from 'react';
import { useDispatch } from 'react-redux';
import { useUsersSelector } from '@shared/selectors/useUsersSelector';
import { UsersActions } from '@store/modules/Users/Actions';
import { ProcessIndicator } from '@components/shared/ProcessIndicator';

export const UsersLoader: React.FC = () => {
  const dispatch = useDispatch();
  const { processState } = useUsersSelector();

  const load = React.useCallback(
    () =>
      dispatch(
        UsersActions.loadUsersAsync.request({
          request: {
            url: 'api/users',
          },
        }),
      ),
    [dispatch],
  );
  React.useEffect(() => {
    load();
  }, [load]);

  return <ProcessIndicator state={processState} onReloadPress={load} />;
};
