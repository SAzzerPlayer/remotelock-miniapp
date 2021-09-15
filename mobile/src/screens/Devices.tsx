import React from "react";
import { FlatList } from "react-native";
import { DeviceCard } from "../components/elements/Devices/Card";
import { SearchField } from "../components/elements/Devices/SearchField";
import { Spacer } from "../components/shared/Spacer";

const Card: React.FC<{ i: number }> = ({ i }) => {
  const [locked, setLocked] = React.useState(!!(i % 2));
  return (
    <Spacer space={16} bottom>
      <DeviceCard
        name={"Home"}
        serial={"BG (LS-3i)"}
        locked={locked}
        onChangeLock={setLocked}
      />
    </Spacer>
  );
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const DevicesScreen: React.FC = () => (
  <>
    <Spacer space={16} top left right>
      <SearchField />
    </Spacer>
    <FlatList
      data={data}
      renderItem={({ index }) => <Card key={index} i={index} />}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
      keyExtractor={(_, index) => `${index}`}
    />
  </>
);
