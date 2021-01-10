export interface EventType {
  sys: {
    space: {
      sys: { type: string; linkType: string; id: string };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: { id: string; type: string; linkType: string };
    };
    revision: 1;
    contentType: {
      sys: { type: string; linkType: string; id: string };
    };
    locale: string;
  };
  fields: {
    labelText: string;
    title: string;
    description: {
      data: {};
      content: [
        {
          data: {};
          content: [
            {
              data: {};
              marks: [];
              value: string;
              nodeType: string;
            }
          ];
          nodeType: string;
        }
      ];
      nodeType: string;
    };
    illustration: {
      sys: {
        space: {
          sys: { type: string; linkType: string; id: string };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: { id: string; type: string; linkType: string };
        };
        revision: number;
        locale: string;
      };
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
          details: { size: number; image: { width: number; height: number } };
          fileName: string;
          contentType: string;
        };
      };
    };
    image: {
      sys: {
        space: {
          sys: { type: string; linkType: string; id: string };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: { id: string; type: string; linkType: string };
        };
        revision: number;
        locale: string;
      };
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
          details: { size: number; image: { width: number; height: number } };
          fileName: string;
          contentType: string;
        };
      };
    };
    date: string;
    location: { lon: number; lat: number };
    buttonText: string;
  };
}
