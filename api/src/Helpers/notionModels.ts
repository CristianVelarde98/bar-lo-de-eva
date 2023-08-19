import dotenv from 'dotenv';
import { Client } from '@notionhq/client';
import type {
  TNotionResponse,
  TSchemaNotion,
  TypesNotionModel,
  convertToObject,
} from '@/types/notion';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
dotenv.config();
const { TOKEN_NOTION } = process.env;

const notion = new Client({
  auth: TOKEN_NOTION,
});

export const typesConvert: TypesNotionModel = {
  title: (value: string | number) => ({
    type: 'title',
    title: [
      {
        type: 'text',
        text: {
          content: value,
        },
      },
    ],
  }),
  rich_text: (value: string | number) => ({
    type: 'rich_text',
    rich_text: [
      {
        type: 'text',
        text: {
          content: value,
        },
      },
    ],
  }),
  number: (value: string | number) => ({
    type: 'number',
    number: Number(value),
  }),
  select: (value: string | number) => ({
    type: 'select',
    select: {
      name: String(value),
    },
  }),
};
export const convertObject: convertToObject = {
  unique_id: (value: Record<string, any>) =>
    'unique_id' in value ? Number(value.unique_id.number) : null,
  title: (value: Record<string, any>) =>
    'title' in value ? value.title[0].plain_text : null,
  rich_text: (value: Record<string, any>) =>
    'rich_text' in value ? value.rich_text[0].plain_text : null,
  number: (value: Record<string, any>) =>
    'number' in value ? Number(value.number) : null,
  select: (value: Record<string, any>) =>
    'select' in value ? value.select.name : null,
};
export const convertTSchemaNotion = (
  product: Record<string, any>
): TSchemaNotion[] =>
  Object.entries(product).map(
    ([property, value]: [string, string | number]) => ({
      property: property,
      value: String(value),
    })
  );
// funcion de prueba
export const testNotion = async (notionID: string) => {
  const response = await notion.databases.query({
    database_id: notionID,
  });
  if ('properties' in response.results[0])
    console.log(
      '🚀 ~ file: notionModels.ts:62 ~ testNotion ~ response:',
      response.results[0].properties.TypeColumn
    );
};

// obtener todo los datos en un array
export const getNotionAll = async (
  notionID: string,
  filterOptions: any,
  sortsOptions: any
): Promise<TNotionResponse[]> => {
  try {
    const response = await notion.databases.query({
      database_id: notionID,
      filter: filterOptions,
      sorts: sortsOptions,
    });
    return response.results;
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error: ${error.message}`);
    return [];
  }
};
// obtener producto por ID
export const getByIdNotion = async (notionID: string, id: number) => {
  try {
    const query: QueryDatabaseResponse = await notion.databases.query({
      database_id: notionID,
      filter: {
        property: 'ID',
        number: {
          equals: Number(id),
        },
      },
    });

    if (query.results.length === 0) return [];
    return query.results[0];
  } catch (error: unknown) {
    if (error instanceof Error) return `Error: ${error.message}`;
    return null;
  }
};
// actualizar producto por id
export const updateNotionItem = async (
  key: string,
  newData: Record<string, any>
) => {
  try {
    await notion.pages.update({
      page_id: key,
      properties: { ...newData },
    });
    return 'actualizado correctamente';
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(`Error: ${error.message}`);
    return null;
  }
};
// eliminar producto por id
export const deleteNotionItem = async (item: Record<string, any>) => {
  try {
    if (item === null) throw new Error('Error al obtener el producto');
    if (item.key === null)
      throw new Error('Error al obtener la key del producto');

    await notion.blocks.delete({
      block_id: item.key,
    });
    return `Se elimino correctamente`;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(`Error: ${error.message}`);
    return null;
  }
};

// agregar nuevo Producto
export const postNotionItem = async (
  notionID: string,
  newItem: Record<string, any>
) => {
  try {
    await notion.pages.create({
      parent: {
        database_id: notionID,
      },
      properties: {
        ...newItem,
      },
    });
    return `Se agrego correctamente`;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(`Error: ${error.message}`);
    return null;
  }
};