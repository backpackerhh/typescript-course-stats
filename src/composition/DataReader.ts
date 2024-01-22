export interface DataReader<RawDataType> {
  read(): void;
  data: RawDataType[];
}
