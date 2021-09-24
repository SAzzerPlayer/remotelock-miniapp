import { ColorTheme } from '@shared/ColorTheme';
import { EProcessState } from '@shared/EProcessState';

export const ProcessMessage = {
  [EProcessState.Waiting]: '',
  [EProcessState.Loading]: 'Loading...',
  [EProcessState.Error]: 'Something went wrong',
  [EProcessState.EmptyResponse]: 'Nothing found',
};

export const ProcessColor = {
  [EProcessState.Waiting]: 'transparent',
  [EProcessState.Loading]: ColorTheme.green,
  [EProcessState.Error]: ColorTheme.red,
  [EProcessState.EmptyResponse]: ColorTheme.regular,
};
