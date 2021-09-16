import React from "react";
import { UsersList } from "@components/elements/Users/List";
import { UsersLoader } from "@components/elements/Users/UsersLoader";
import { Spacer } from "@components/shared/Spacer";
import { AbsolutePosition } from "@components/shared/AbsolutePosition";

const loaderTopOffset = 4;

export const UsersScreen: React.FC = () => (
  <>
    <Spacer space={loaderTopOffset} top>
      <Spacer space={16} horizontal>
        <AbsolutePosition zIndex={1}>
          <UsersLoader />
        </AbsolutePosition>
      </Spacer>
    </Spacer>
    <Spacer space={-loaderTopOffset} top>
      <UsersList />
    </Spacer>
  </>
);
