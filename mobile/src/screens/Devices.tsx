import React from "react";
import { DevicesLoader } from "@components/elements/Devices/DevicesLoader";
import { DevicesList } from "@components/elements/Devices/List";
import { SearchField } from "@components/elements/Devices/SearchField";
import { Spacer } from "@components/shared/Spacer";
import { isIOS } from "@shared/utils/isiOS";

export const DevicesScreen: React.FC = () => (
  <>
    <Spacer space={16} top left right>
      <SearchField />
    </Spacer>
    <Spacer space={16} left right zIndex={isIOS() ? 1 : undefined}>
      <DevicesLoader />
    </Spacer>
    <DevicesList />
  </>
);
