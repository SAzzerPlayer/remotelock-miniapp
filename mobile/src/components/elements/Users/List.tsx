import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { IUser } from '@shared/interfaces/IUser';
import { useUsersSelector } from '@shared/selectors/useUsersSelector';
import { Spacer } from '@components/shared/Spacer';
import { UserCard } from './Card';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export const UsersList: React.FC = () => {
  const { users } = useUsersSelector();

  const keyExtractor = React.useCallback(item => item.id, []);
  const renderItem = React.useCallback<(row: { item: IUser }) => JSX.Element>(
    ({
      item: {
        attributes: { name, email, phone, status, startsAt, endsAt },
      },
    }) => (
      <Spacer space={16} bottom>
        <UserCard
          name={name}
          contactInfo={email || phone}
          status={status}
          period={
            startsAt && endsAt ? { start: startsAt, end: endsAt } : undefined
          }
        />
      </Spacer>
    ),
    [],
  );

  return (
    <FlatList
      data={users}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};
