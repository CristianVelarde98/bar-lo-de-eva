import { Request } from 'express';
import eventsSchema from '@models/notion/notion_events';
import {
  uploadImageCloudinary,
  deleteImageCloudinary,
} from '@cloudinary/cloudinary_v2';
import { findErrorPropertiesAsync, isEmptyAsync } from '@helpers/errors';
import { controllerHttp } from '@/types/helper/response';

type TCEventsGet = {
  id?: number;
  filter?: 'before' | 'after';
  date?: string;
};

export const CEventsGet = async ({
  id,
  filter,
  date,
}: TCEventsGet): Promise<controllerHttp> => {
  if (id !== undefined) {
    return {
      message: await eventsSchema.finOneById(id),
    };
  }

  if (
    date !== undefined &&
    filter !== undefined &&
    (filter === 'before' || filter === 'after')
  ) {
    return {
      message: await eventsSchema.findAll({
        filter: {
          property: 'Time',
          date: {
            [filter]: date,
          },
        },
      }),
    };
  }

  return {
    message: await eventsSchema.findAll(),
  };
};

export const CEventsPost = async (events: Request): Promise<controllerHttp> => {
  const { Name, Time } = events.body;
  const file = events.files?.Image;
  await Promise.all([
    isEmptyAsync([Name, Time, file]),
    findErrorPropertiesAsync(['Name', 'Time'], events.body),
  ]);

  const existProduct: Record<string, any> = await eventsSchema.findAll({
    filter: {
      property: 'Name',
      rich_text: {
        equals: Name,
      },
    },
  });
  if (existProduct.length > 0) return { message: 'elemento ya existe' };

  if (file !== undefined && 'tempFilePath' in file) {
    const { url, publicId } = await uploadImageCloudinary(file.tempFilePath);
    return {
      message: await eventsSchema.createNewItem({
        Name,
        Time,
        Image: url,
        IdPublic: publicId,
      }),
    };
  } else {
    throw new Error('error con el archivo');
  }
};

export const CEventsPath = async (events: Request): Promise<controllerHttp> => {
  const { Name, Time, ID } = events.body;
  const file = events.files?.Image;

  if (!ID) {
    return { message: 'se requiere de la propiedad ID' };
  }

  const existProduct = await eventsSchema.finOneById(Number(ID));
  if (!existProduct) {
    return { message: 'elemento no existe' };
  }

  const response: Record<string, any> = {
    Name: existProduct.Name,
    Time: existProduct.Time,
    Image: existProduct.Image,
    IdPublic: existProduct.IdPublic,
  };

  if (Name) response.Name = Name;
  if (Time) response.Time = Time;

  if (file !== undefined && 'tempFilePath' in file) {
    const [_, uploadImageResult] = await Promise.all([
      deleteImageCloudinary(response.IdPublic),
      uploadImageCloudinary(file.tempFilePath),
    ]);

    response.Image = uploadImageResult.url;
    response.IdPublic = uploadImageResult.publicId;
  }

  return {
    message: await eventsSchema.updateNotionItemById(Number(ID), response),
  };
};

export const CEventsDelete = async (
  query: Record<string, any>
): Promise<controllerHttp> => {
  if (!query.id) throw new Error('require id');

  const numberId = Number(query.id);
  isEmptyAsync([numberId]);

  const existProduct = await eventsSchema.finOneById(numberId);
  if (!existProduct) return { message: 'elemento no existe' };

  const [deletedResult] = await Promise.all([
    eventsSchema.deleteNotionItemById(numberId),
    deleteImageCloudinary(existProduct.IdPublic),
  ]);

  if (deletedResult === null)
    throw new Error('no se pudo eliminar el producto');

  return { message: deletedResult };
};
