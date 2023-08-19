import {
  convertObject,
  deleteNotionItem,
  getByIdNotion,
  getNotionAll,
  postNotionItem,
  typesConvert,
  updateNotionItem,
} from '@helpers/notionModels';
import type {
  TNotionResponse,
  TSchemaNotion,
  TSortsFilterItems,
} from '@/types/notion';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

/**
 * NotionModel se encargar de manejar la base de datos para notion
 */
class NotionModel {
  private schema: Record<string, any>;
  private NOTION_PRODUCTS_ID: string;
  /**
   * Inicializar los datos para el Schema
   * @example const ProductSchema = new NotionSchema({
   *    NameProduct: {type: 'title'},
   *    Description: { type: 'rich_text'}
   * });
   */
  constructor(schema: Record<string, any>, NOTION_PRODUCTS_ID: string) {
    this.schema = schema;
    this.NOTION_PRODUCTS_ID = NOTION_PRODUCTS_ID;
  }

  private getValues(notionItem: PageObjectResponse) {
    if (Array.isArray(notionItem) && notionItem.length === 0) return {};
    return Object.entries(this.schema).reduce(
      (result, [property, type]) => {
        result[property] = convertObject[type.type](
          notionItem.properties[property]
        );
        return result;
      },
      { key: notionItem.id } as Record<string, any>
    );
  }
  private converterItem(data: TSchemaNotion[]) {
    return data.reduce((result, { property, value }) => {
      if (!(property in this.schema))
        throw new Error(`Property "${property}" no es valido para el schema.`);
      result[property] = typesConvert[this.schema[property].type](value);
      return result;
    }, {} as Record<string, any>);
  }

  /**
   * Agrega datos a Notion siguiendo el esquema definido, procesando los valores de acuerdo a los tipos definidos.
   * @param data Un array de objetos que contienen propiedades y valores a agregar en Notion.
   * @throws {Error} Si alguna propiedad no es válida según el esquema.
   * @async
   * @example const NewItem = await ProductNotion.schemaNotion([{ property: 'NameProduct', value: 'duvan rozo' }])
   */
  public async createNewItem(data: TSchemaNotion[]) {
    return await this.addNotionItem(this.converterItem(data));
  }

  public async findAll(options?: TSortsFilterItems) {
    const response: TNotionResponse[] = await getNotionAll(
      this.NOTION_PRODUCTS_ID,
      options?.filter,
      options?.sorts
    );
    const allItems: Record<string, any> = [];
    response.forEach((item) => {
      const objectPage = item as PageObjectResponse;
      allItems.push(this.getValues(objectPage));
    });
    return allItems;
  }

  public async finOneById(id: number) {
    const response = (await getByIdNotion(
      this.NOTION_PRODUCTS_ID,
      id
    )) as PageObjectResponse;
    if (response === null)
      throw new Error(`error al obtener el elemento ${id}`);
    return this.getValues(response);
  }

  /**
   * Actualiza un elemento en Notion basado en su ID.
   * @param id El ID del elemento que se actualizará.
   * @param newData Los nuevos datos que se utilizarán para la actualización.
   * @returns Una promesa que se resuelve una vez que se ha realizado la actualización.
   * @throws {Error} Si NOITON_PRODUCTS_ID no está definido o si ocurre algún error en la operación.
   * @async
   * @example const model = new NotionModel;
   * model.updateNotionItemById(id,[{ property: 'NameProduct', value: 'Nombre' }]);
   */
  public async updateNotionItemById(id: number, newData: TSchemaNotion[]) {
    const item = await this.finOneById(id);
    if (item === null) throw new Error('Error al obtener el producto');
    if (typeof item === 'string') throw new Error('formato inesperado');
    const conver = this.converterItem(newData);
    console.log('paso2');
    return await updateNotionItem(String(item.key), conver);
  }

  public async deleteNotionItemById(id: number) {
    const item = await this.finOneById(id);
    if (typeof item === 'string') throw new Error('formato inesperado');
    return await deleteNotionItem(item);
  }

  public async addNotionItem(newItem: Record<string, any>) {
    return await postNotionItem(this.NOTION_PRODUCTS_ID, newItem);
  }
}

export default NotionModel;
