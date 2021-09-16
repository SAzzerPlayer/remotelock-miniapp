import React from "react";
import { Card } from "../../../shared/Card";
import { View } from "react-native";
import { SharedText } from "../../../shared/Text";
import { dequal } from "dequal";
import { styles } from "./styles";
import {
  UserCardStatusBackground,
  UserCardStatusTitle,
} from "./EUserCardStatus";
import moment from "moment";
import { EUserStatus } from "../../../../shared/IUser";

type TDateFormat = string | number;
const formatDate = (date: TDateFormat) => moment(date).format("MMM Do YY");

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
    const periodText = !!period
      ? `${formatDate(period.start)} - ${formatDate(period.end)}`
      : undefined;

    const avatarStyle = [
      styles.avatar,
      {
        borderColor: UserCardStatusBackground[status],
      },
    ];
    const statusBadgeStyle = [
      styles.statusBadge,
      { backgroundColor: UserCardStatusBackground[status] },
    ];

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
              {UserCardStatusTitle[status]}
            </SharedText>
          </View>
        </View>
      </Card>
    );
  },
  dequal
);
