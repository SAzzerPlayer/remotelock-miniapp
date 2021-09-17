import { IDevice, IFetchedDevice } from "@shared/interfaces/IDevice";

//  It's used for camelCase code style rules
//  and for translation into typed fields(boolean, enum) from strings values

export const extractFetchedDevice = ({
  attributes: {
    name,
    connected_at,
    firmware_version,
    model_number,
    power_source,
    programming_code,
    serial_number,
    state,
  },
  ...other
}: IFetchedDevice): IDevice => ({
  attributes: {
    name,
    connectedAt: connected_at,
    firmwareVersion: firmware_version,
    modelNumber: model_number,
    powerSource: power_source,
    programmingCode: programming_code,
    serialNumber: serial_number,
    state: state === "locked",
  },
  ...other,
});
