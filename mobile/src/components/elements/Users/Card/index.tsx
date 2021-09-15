import React from "react";
import { Card } from "../../../shared/Card";
import { View } from "react-native";
import { SharedText } from "../../../shared/Text";
import { dequal } from "dequal";
import { styles } from "./styles";
import moment from "moment";

type TDateFormat = string | number;
const formatDate = (date: TDateFormat) => moment(date).format();

interface IUserCardProps {
  name: string;
  email: string;
  status: string;
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
        {!!periodText && <SharedText category="s1">{periodText}</SharedText>}
        <View style={styles.statusPosition}>
          <View style={styles.statusBadge}>
            <SharedText category="h2" style={styles.status}>
              {status}
            </SharedText>
          </View>
        </View>
      </Card>
    );
  },
  dequal
);
