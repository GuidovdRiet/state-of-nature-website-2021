export interface EventType {
  name: string;
  description: string;
  displayField: string;
  fields: [
    {
      id: string;
      name: string;
      type: string;
      localized: boolean;
      required: boolean;
      validations: [];
      disabled: boolean;
      omitted: boolean;
    },
    {
      id: string;
      name: string;
      type: string;
      localized: boolean;
      required: boolean;
      validations: [];
      disabled: boolean;
      omitted: boolean;
    },
    {
      id: string;
      name: string;
      type: string;
      localized: boolean;
      required: boolean;
      validations: [
        {
          nodes: {};
        }
      ];
      disabled: boolean;
      omitted: boolean;
    },
    {
      id: string;
      name: string;
      type: string;
      localized: boolean;
      required: boolean;
      validations: [];
      disabled: boolean;
      omitted: boolean;
      linkType: string;
    },
    {
      id: string;
      name: string;
      type: string;
      localized: boolean;
      required: boolean;
      validations: [];
      disabled: boolean;
      omitted: boolean;
    },
    {
      id: string;
      name: string;
      type: string;
      localized: boolean;
      required: boolean;
      validations: [];
      disabled: boolean;
      omitted: boolean;
    },
    {
      id: string;
      name: string;
      type: string;
      localized: boolean;
      required: boolean;
      validations: [];
      disabled: boolean;
      omitted: boolean;
    }
  ];
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    publishedVersion: 19;
    publishedAt: string;
    firstPublishedAt: string;
    createdBy: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    updatedBy: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    publishedCounter: 10;
    version: 20;
    publishedBy: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
}
