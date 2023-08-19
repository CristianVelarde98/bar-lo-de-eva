import ProductSchema from '@models/notion_products';
import { TSchemaNotion } from '@/types/notion';
import { findErrorPropertiesAsync, isEmptyAsync } from '@helpers/errors';
import { convertTSchemaNotion } from '@helpers/notionModels';
import type { controllerHttp } from '@/types/helper/response';
import type { TProductItem, TQueryProduct } from '@/types/notion_products';

export const CProductGet = async (
  options: TQueryProduct
): Promise<controllerHttp> => {
  const propertyCurrent = String(options.property);

  if (options.id !== undefined) {
    return {
      message: await ProductSchema.finOneById(options.id),
    };
  }

  const columnPromises = ['Column1', 'Column2'].map((column) =>
    ProductSchema.findAll({
      filter: {
        property: 'TypeColumn',
        select: {
          equals: column,
        },
      },
      sorts:
        options.sort !== undefined
          ? [{ property: propertyCurrent, direction: options.sort }]
          : [],
    })
  );

  const [column1, column2] = await Promise.all(columnPromises);
  return { message: { column1, column2 } };
};

export const CProductPost = async (
  product: TProductItem
): Promise<controllerHttp> => {
  await Promise.all([
    findErrorPropertiesAsync(
      ['NameProduct', 'Description', 'Price', 'TypeColumn'],
      product
    ),
    isEmptyAsync([
      product.NameProduct,
      product.Description,
      product.Price,
      product.TypeColumn,
    ]),
  ]);
  const existProduct: Record<string, any> = await ProductSchema.findAll({
    filter: {
      property: 'NameProduct',
      rich_text: {
        equals: product.NameProduct,
      },
    },
  });
  if (existProduct.length > 0) return { message: 'elemento ya existe' };
  const dataProduct: TSchemaNotion[] = convertTSchemaNotion(product);
  const newProduct = await ProductSchema.createNewItem(dataProduct);
  return { message: newProduct };
};

export const CProductUpdate = async (
  product: TProductItem
): Promise<controllerHttp> => {
  const { ID, ...productWhioutID } = product;
  const promises = await Promise.all([
    findErrorPropertiesAsync(
      ['NameProduct', 'Description', 'Price', 'TypeColumn'],
      productWhioutID
    ),
    isEmptyAsync([
      product.NameProduct,
      product.Description,
      product.Price,
      product.TypeColumn,
      ID,
    ]),
  ]);

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
  await Promise.all([
    findErrorPropertiesAsync(['id'], query),
    isEmptyAsync([query]),
  ]);
  await ProductSchema.finOneById(Number(query.id));
  const deleteProduct = await ProductSchema.deleteNotionItemById(query.id);
  if (deleteProduct === null)
    throw new Error('no se pudo eliminar el producto');
  return { message: deleteProduct };
};
