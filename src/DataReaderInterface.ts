export interface DataReaderInterface<RawDataType> {
  read(): void;
  data: RawDataType[];
}
