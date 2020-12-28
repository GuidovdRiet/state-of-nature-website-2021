export interface HeroSectionType {
  sys: {
    space: { sys: { type: string; linkType: string; id: string } };
    id: '3URHfBqXqwnnEciSZHwo9Z';
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: { id: string; type: string; linkType: string };
    };
    revision: number;
    contentType: {
      sys: { type: string; linkType: string; id: string };
    };
    locale: string;
  };
  fields: {
    heroText: {
      content: {
        content: { value: string; marks: { type: 'bold' }[] | [] }[];
      }[];
    };
    title: string;
  };
}
