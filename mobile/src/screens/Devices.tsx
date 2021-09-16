import React from "react";
import { DevicesLoader } from "@components/elements/Devices/DevicesLoader";
import { DevicesList } from "@components/elements/Devices/List";
import { SearchField } from "@components/elements/Devices/SearchField";
import { Spacer } from "@components/shared/Spacer";
import { AbsolutePosition } from "@components/shared/AbsolutePosition";

const loaderTopOffset = 4;

export const DevicesScreen: React.FC = () => (
  <>
    <Spacer space={16} top horizontal>
      <SearchField />
    </Spacer>
    <Spacer space={loaderTopOffset} top>
      <Spacer space={16} horizontal>
        <AbsolutePosition zIndex={1}>
          <DevicesLoader />
        </AbsolutePosition>
      </Spacer>
    </Spacer>
    <Spacer space={-loaderTopOffset} top>
      <DevicesList />
    </Spacer>
  </>
);
