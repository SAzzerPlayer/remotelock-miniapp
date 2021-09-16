import React from "react";
import { UsersList } from "@components/elements/Users/List";
import { UsersLoader } from "@components/elements/Users/UsersLoader";
import { Spacer } from "@components/shared/Spacer";
import { isIOS } from "@shared/utils/isiOS";

export const UsersScreen: React.FC = () => (
  <>
    <Spacer space={16} left right zIndex={isIOS() ? 1 : undefined}>
      <UsersLoader />
    </Spacer>
    <UsersList />
  </>
);
