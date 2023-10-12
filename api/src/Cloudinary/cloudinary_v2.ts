import { findErrorPropertiesAsync, isEmptyAsync } from '@/Helpers/errors';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_v2_NAME,
  api_key: process.env.CLOUDINARY_v2_API_KEY,
  api_secret: process.env.CLOUDINARY_v2_API_SECRET,
});

export async function uploadImageCloudinary(filePath: string) {
  try {
    const upload = await cloudinary.uploader.upload(filePath, {
      folder: 'replit',
    });

    await Promise.all([
      isEmptyAsync([upload]),
      findErrorPropertiesAsync(['url', 'secure_url'], upload),
    ]);

    return {
      url: upload.url,
      publicId: upload.public_id,
    };
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error inespedado con cloudinary');
  }
}

export async function deleteImageCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId)
    const data = await cloudinary.api.resources({
      type:'upload',
      prefix:'replit',
    })
    console.log(data);
  } catch (error: unknown) {
    if (error instanceof Error)
      throw new Error(
        `Error al eliminar la imagen: ${publicId} - ${error.message}`
      );
    else throw new Error(`Error inesperado al eliminar la imagen: ${publicId}`);
  }
}

// export async function cloudinaryClean (){
//   await deleteImageCloudinary('replit/hclwwphxcpzz4parhnn9').then(a=>{console.log('deleted successfully')})
//   const data = await cloudinary.api.resources({
//     type:'upload',
//     prefix:'replit',
//     backup:false,
//     bytes:0
//   })
//   console.log(data);
// }