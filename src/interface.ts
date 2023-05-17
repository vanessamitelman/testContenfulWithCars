export interface CarI {
  id: string;
  model: string;
  desc?: (EntityOrDescEntityEntity[] | null)[] | null;
  images?: ImagesEntity[] | null;
  year: number;
}
export interface EntityOrDescEntityEntity {
  nodeType: string;
  value?: string | null;
  marks?: (MarksEntity | null)[] | null;
  data: Data;
  content?: ContentEntity[] | null;
}
export interface MarksEntity {
  type: string;
}
export interface Data {
  uri?: string | null;
}
export interface ContentEntity {
  nodeType: string;
  value: string;
  marks?: null[] | null;
  data: Data1;
}
export interface Data1 {}
export interface ImagesEntity {
  title: string;
  description: string;
  url: string;
}
