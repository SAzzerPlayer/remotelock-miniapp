import React from "react";
import { Card } from "../../../shared/Card";
import { View } from "react-native";
import { SharedText } from "../../../shared/Text";
import { dequal } from "dequal";
import { styles } from "./styles";
import {
  EUserCardStatus,
  UserCardStatusBackground,
  UserCardStatusTitle,
} from "./EUserCardStatus";
import moment from "moment";
import { ColorTheme } from "../../../../shared/ColorTheme";

type TDateFormat = string | number;
const formatDate = (date: TDateFormat) => moment(date).format("MMM Do YY");

interface IUserCardProps {
  name: string;
  email: string;
  status: EUserCardStatus;
  period?: {
    start: TDateFormat;
    end: TDateFormat;
  };
}

export const UserCard = React.memo<IUserCardProps>(
  ({ name, email, period, status }) => {
    const periodText = !!period
      ? `${formatDate(period.start)} - ${formatDate(period.end)}`
      : undefined;
    return (
      <Card title={name} hint={email}>
        {!!periodText && (
          <SharedText category="h3" style={styles.periodText}>
            {periodText}
          </SharedText>
        )}
        <View style={styles.statusPosition}>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: UserCardStatusBackground[status] },
            ]}
          >
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
