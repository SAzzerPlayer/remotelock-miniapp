import React from 'react';
import { Card } from '@components/shared/Card';
import { View, StyleSheet } from 'react-native';
import { SharedText } from '@components/shared/Text';
import { dequal } from 'dequal';
import { styles } from './styles';
import { UserStatusBackground, UserStatusTitle } from './options';
import moment from 'moment';
import { EUserStatus } from '@shared/interfaces/IUser';

type TDateFormat = string | number;
const formatDate = (date: TDateFormat) => moment(date).format('MMM DD hh:mm A');

interface IUserCardProps {
  name: string;
  status: EUserStatus;
  contactInfo?: string;
  period?: {
    start: TDateFormat;
    end: TDateFormat;
  };
}

export const UserCard = React.memo<IUserCardProps>(
  ({ name, contactInfo, period, status }) => {
    const periodText = period
      ? `${formatDate(period.start)} - ${formatDate(period.end)}`
      : undefined;

    const avatarStyle = StyleSheet.flatten([
      styles.avatar,
      {
        borderColor: UserStatusBackground[status],
      },
    ]);
    const statusBadgeStyle = StyleSheet.flatten([
      styles.statusBadge,
      { backgroundColor: UserStatusBackground[status] },
    ]);

    return (
      <Card title={name} hint={contactInfo} avatarStyle={avatarStyle}>
        {!!periodText && (
          <SharedText category="h3" style={styles.periodText} numberOfLines={2}>
            {periodText}
          </SharedText>
        )}
        <View style={styles.statusPosition}>
          <View style={statusBadgeStyle}>
            <SharedText category="h3" style={styles.status}>
              {UserStatusTitle[status]}
            </SharedText>
          </View>
        </View>
      </Card>
    );
  },
  dequal,
);
