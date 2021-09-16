import React from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { DevicesActions } from "../../../../store/modules/Devices/Actions";
import { styles } from "./styles";

export const SearchField: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const timeoutRef = React.useRef<any>(null);
  React.useEffect(() => {
    timeoutRef.current = setTimeout(
      () => dispatch(DevicesActions.setQuery(value)),
      400
    );
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [dispatch, value]);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={"Search by device name"}
        style={styles.input}
      />
    </View>
  );
};
