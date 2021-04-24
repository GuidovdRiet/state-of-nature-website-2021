/* eslint-disable no-use-before-define */
export interface Button {
  fields: {
    text: string;
    link: string;
    icon: Icon;
  };
}

export interface Icon {
  metadata: Metadata;
  sys: IconSys;
  fields: Fields;
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
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface IconSys {
  space: Environment;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}
