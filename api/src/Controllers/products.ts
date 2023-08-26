import ProductSchema from '@/Models/notion/notion_products';
import { findErrorPropertiesAsync, isEmptyAsync } from '@helpers/errors';
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
  return { message: await ProductSchema.createNewItem(product) };
};

export const CProductUpdate = async (
  product: TProductItem
): Promise<controllerHttp> => {
  const { ID, ...productWhioutID } = product;

  if (!ID) {
    return { message: 'se requiere de la propiedad ID' };
  }

  const existProduct = await ProductSchema.finOneById(Number(ID));
  if (!existProduct) {
    return { message: 'elemento no existe' };
  }

  const response: Record<string, any> = {
    NameProduct: existProduct.NameProduct,
    Description: existProduct.Description,
    Price: existProduct.Price,
    TypeColumn: existProduct.TypeColumn,
  };

  if (productWhioutID.NameProduct)
    response.NameProduct = productWhioutID.NameProduct;
  if (productWhioutID.Description)
    response.Description = productWhioutID.Description;
  if (productWhioutID.Price) response.Price = productWhioutID.Price;
  if (productWhioutID.TypeColumn)
    response.TypeColumn = productWhioutID.TypeColumn;

  return {
    message: await ProductSchema.updateNotionItemById(
      Number(ID),
      productWhioutID
    ),
  };
};

export const CProductDelete = async (
  query: Record<string, any>
): Promise<controllerHttp> => {
  if (!query.id) throw new Error('require id');

  const numberId = Number(query.id);
  isEmptyAsync([numberId]);

  const existProduct = await ProductSchema.finOneById(numberId);
  if (!existProduct) return { message: 'elemento no existe' };

  const deleteProduct = await ProductSchema.deleteNotionItemById(query.id);
  if (deleteProduct === null)
    throw new Error('no se pudo eliminar el producto');
  return { message: deleteProduct };
};
