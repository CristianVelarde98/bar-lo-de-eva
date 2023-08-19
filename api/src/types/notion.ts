import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export type TNotionResponse =
  | PageObjectResponse
  | PartialPageObjectResponse
  | PartialDatabaseObjectResponse
  | DatabaseObjectResponse;

export type TSortsFilterItems = {
  filter?: {
    property: string;
    [key: string]: any;
  };
  sorts?: {
    property: string;
    [key: string]: any;
  }[];
};
export type TypesNotionModel = {
  [key: string]: (value: string | number) => Record<string, any>;
};
export type convertToObject = {
  [key: string]: (value: Record<string, any>) => any;
};
export type TSchemaNotion = {
  property: string;
  value: string;
};
