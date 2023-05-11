import Evento, { IEvento } from '../Models/eventos.ts';
const { cloudinary } = require('../Cloudinary/cloudinary.ts');

interface eventoAux {
  inicio: Date;
  fin: Date;
  imagen: Buffer;
}

export async function traerEventos(consulta: string): Promise<IEvento[]> {
  try {
    const futurosEventos: IEvento[] =
      consulta === 'todos'
        ? await Evento.find()
        : await Evento.find({ fin: { $gte: new Date() } });
    return futurosEventos;
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
}

export async function agregarEvento(eventoAgregar: eventoAux): Promise<string> {
  try {
    const fileStr = eventoAgregar.imagen;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setups',
    });
    const idImagen = uploadedResponse.public_id;

    const nuevoEvento: IEvento = new Evento({
      inicio: eventoAgregar.inicio,
      fin: eventoAgregar.fin,
      imagen: idImagen,
    });
    const respuesta: IEvento = await nuevoEvento.save();

    if (respuesta.imagen === idImagen) return 'nuevo evento agregado con exito';
    throw new Error('ocurrio un problema, intente mas tarde');
  } catch (error) {
    console.log(error);
    if ((error as Error).message)
      throw new Error(`${(error as Error).message}`);
    throw new Error('Error al cargar la imagen en Cloudinary');
  }
}
