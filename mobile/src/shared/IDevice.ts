export interface IFetchedDevice {
  id: string;
  type: string;
  attributes: {
    connected_at: string;
    firmware_version: string;
    model_number: string;
    name: string;
    power_source: string;
    programming_code: string;
    serial_number: string;
    state: string;
  };
}
export interface IDevice {
  id: string;
  type: string;
  attributes: {
    connectedAt: string;
    firmwareVersion: string;
    modelNumber: string;
    name: string;
    powerSource: string;
    programmingCode: string;
    serialNumber: string;
    state: boolean;
  };
}
