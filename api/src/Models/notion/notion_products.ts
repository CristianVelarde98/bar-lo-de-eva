import NotionSchema from '@database/schemaNotion';
const { NOTION_PRODUCTS_ID } = process.env;

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
