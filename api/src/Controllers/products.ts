import ProductSchema from '@models/notion_products';
import { TSchemaNotion } from '@/types/notion';
import { findProperties } from '@helpers/errors';
import { convertTSchemaNotion } from '@helpers/notionModels';
import type { controllerHttp } from '@/types/helper/response';
import type { TProductItem, TQueryProduct } from '@/types/notion_products';

export const CProductGet = async (
  options: TQueryProduct
): Promise<controllerHttp> => {
  const propertyCurrent = String(options.property);
  let succes: Record<string, any> = [];
  if (options.id !== undefined)
    return {
      message: await ProductSchema.finOneById(options.id),
    };

  if (options.sort !== undefined)
    succes = {
      column1: await ProductSchema.findAll({
        filter: {
          property: 'TypeColumn',
          select: {
            equals: 'Column1',
          },
        },
        sorts: [
          {
            property: propertyCurrent,
            direction: options.sort,
          },
        ],
      }),
      column2: await ProductSchema.findAll({
        filter: {
          property: 'TypeColumn',
          select: {
            equals: 'Column2',
          },
        },
        sorts: [
          {
            property: propertyCurrent,
            direction: options.sort,
          },
        ],
      }),
    };

  return {
    message: succes,
  };
};

export const CProductPost = async (
  product: TProductItem
): Promise<controllerHttp> => {
  findProperties(
    ['NameProduct', 'Description', 'Price', 'TypeColumn'],
    product
  );
  const existProduct: Record<string, any> = await ProductSchema.findAll({
    filter: {
      property: 'NameProduct',
      rich_text: {
        equals: product.NameProduct,
      },
    },
  });
  if (existProduct.length === 0) {
    const dataProduct: TSchemaNotion[] = convertTSchemaNotion(product);
    const newProduct = await ProductSchema.createNewItem(dataProduct);
    return { message: newProduct };
  }
  return { message: 'elemento ya existe' };
};

export const CProductUpdate = async (
  product: TProductItem
): Promise<controllerHttp> => {
  const { ID, ...productWhioutID } = product;
  findProperties(
    ['NameProduct', 'Description', 'Price', 'TypeColumn'],
    productWhioutID
  );
  if (ID === undefined)
    throw new Error('requiere id para actualizar el producto');
  const dataProduct: TSchemaNotion[] = convertTSchemaNotion(productWhioutID);
  const updateProduct = await ProductSchema.updateNotionItemById(
    Number(ID),
    dataProduct
  );

  if (updateProduct === null)
    throw new Error('No se pudo actualizar el Producto');
  return { message: updateProduct };
};

export const CProductDelete = async (
  query: Record<string, any>
): Promise<controllerHttp> => {
  findProperties(['id'], query);
  const exist = await ProductSchema.finOneById(Number(query.id));
  if (Object.keys(exist).length === 0)
    throw new Error(`El elemento con el id ${query.id} no existe`);
  const deleteProduct = await ProductSchema.deleteNotionItemById(query.id);
  if (deleteProduct === null)
    throw new Error('no se pudo eliminar el producto');
  return { message: deleteProduct };
};
