/* eslint-disable no-use-before-define */
export interface Text {
  data: Data;
  content: Content[];
  nodeType: string;
}

export interface Image3 {
  width: number;
  height: number;
}

export interface Button {}

interface Root {
  text: Text;
  image: Image;
  alignTextLeft: boolean;
  readNextTextIcon: ReadNextTextIcon;
  button: Button;
}

export interface Data {}

export interface Content {
  data: Data2;
  content: Content2[];
  nodeType: string;
}

export interface Data2 {}

export interface Content2 {
  data: Data3;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data3 {}

export interface Image {
  sys: Sys;
  fields: Fields;
}

export interface Sys {
  space: Space;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Space {
  sys: Sys2;
}

export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment {
  sys: Sys3;
}

export interface Sys3 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image2;
}

export interface Image2 {
  width: number;
  height: number;
}

export interface ReadNextTextIcon {
  sys: Sys4;
  fields: Fields2;
}

export interface Sys4 {
  space: Space2;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment2;
  revision: number;
  locale: string;
}

export interface Space2 {
  sys: Sys5;
}

export interface Sys5 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment2 {
  sys: Sys6;
}

export interface Sys6 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File2;
}

export interface File2 {
  url: string;
  details: Details2;
  fileName: string;
  contentType: string;
}

export interface Details2 {
  size: number;
  image: Image3;
}

export default Root;
