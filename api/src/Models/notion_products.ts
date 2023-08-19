import dotenv from 'dotenv';
import NotionSchema from '@database/schema';
dotenv.config();
const { NOTION_PRODUCTS_ID } = process.env;

if (NOTION_PRODUCTS_ID === undefined)
  throw new Error('error con el ID de la base de datos');

const ProductSchema = new NotionSchema(
  {
    ID: {
      type: 'unique_id',
    },
    NameProduct: {
      type: 'title',
    },
    Description: {
      type: 'rich_text',
    },
    Price: {
      type: 'number',
    },
    TypeColumn: {
      type: 'select',
    },
  },
  NOTION_PRODUCTS_ID
);

export default ProductSchema;
