import React from "react";
import { DevicesLoader } from "../components/elements/Devices/DevicesLoader";
import { DevicesList } from "../components/elements/Devices/List";
import { SearchField } from "../components/elements/Devices/SearchField";
import { Spacer } from "../components/shared/Spacer";

export const DevicesScreen: React.FC = () => (
  <>
    <Spacer space={16} top left right>
      <SearchField />
    </Spacer>
    <Spacer space={16} left right>
      <DevicesLoader />
    </Spacer>
    <DevicesList />
  </>
);
