import NotionSchema from '@database/schemaNotion';
const { NOTION_EVENTS_ID } = process.env;

const eventsSchema = new NotionSchema(
  {
    ID: {
      type: 'unique_id',
    },
    Name: {
      type: 'title',
    },
    Time: {
      type: 'date',
    },
    Image: {
      type: 'rich_text',
    },
    IdPublic: {
      type: 'rich_text',
    },
  },
  NOTION_EVENTS_ID
);

export default eventsSchema;
