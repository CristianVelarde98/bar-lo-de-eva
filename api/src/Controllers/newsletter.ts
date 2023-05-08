import Newsletter, { INewsletter } from '../Models/newsletter.ts';

const nodemailer = require('nodemailer');

interface Mensaje {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

interface Evento {
  encabezado: string;
  titulo: string;
  imagen: string;
  descripcion: string;
}

const enviarMail = async (
  destinatario: string[],
  contenido: string,
  encabezado: string
): Promise<any> => {
  const transporte: any = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'cristianvelardefx@gmail.com',
      pass: 'lyltkadpadvhiytd',
    },
  });

  const mensaje: Mensaje = {
    from: 'cristianvelardefx@gmail.com',
    to: destinatario,
    subject: encabezado,
    html: contenido,
  };

  const respuesta = await transporte.sendMail(mensaje);
  return respuesta;
};

export async function agregarSub(email: INewsletter): Promise<INewsletter> {
  try {
    const sub: INewsletter = new Newsletter(email);
    const respuesta: INewsletter = await sub.save();

    if (!respuesta.gmail)
      throw new Error('ocurrio un problema, intente mas tarde');

    const encabezado = 'Bienvenido a lo de Eva';

    const content = `<html>
                        <head>
                        <meta charset="utf-8">
                        <title>Bienvenido a lo de Eva</title>
                          <style>
                            img {
                               display: block;
                               margin: 0 auto;
                               max-width: 15%;
                               }
                           </style>
                        </head>
                        <body>
                         <img src="https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Pepsi.png" alt="Logo lo de Eva">
                         <h1>Bienvenido a lo de Eva</h1>
                         <p>¡Gracias por suscribirte y estar al tanto de las novedades! Ahora estás en nuestra lista de correo y serás el primero en saber sobre nuestros próximos eventos, descuentos especiales y promociones exclusivas.</p>
                         <p>Mientras tanto, no dudes en visitar nuestro <a href="https://eva-repo-save.vercel.app/">sitio web</a> y seguirnos en <a href="https://www.instagram.com/bar.lodeeva/?hl=es">Instagram</a> para mantenerte actualizado con todas nuestras novedades.</p>
                         <p>¡Esperamos verte pronto en lo de eva!</p>
                        </body>
                    </html>`;

    await enviarMail([email.gmail], content, encabezado);

    return respuesta;
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
}

export async function enviarCadena(nuevoEvento: Evento): Promise<string> {
  try {
    const suscriptores = await Newsletter.find();
    const correos = suscriptores.map((suscriptor) => suscriptor.gmail);

    const contenido = `
      <html>
        <head>
          <meta charset="utf-8">
          <title>${nuevoEvento.titulo}</title>
          <style>
            img {
              display: block;
              margin: 0 auto;
              max-width: 30%;
              }
          </style>
        </head>
        <body>
          <h1>${nuevoEvento.titulo}</h1>
          <img src="${nuevoEvento.imagen}" alt="${nuevoEvento.titulo}">
          <p>${nuevoEvento.descripcion}</p>
        </body>
      </html>
    `;

    await enviarMail(correos, contenido, nuevoEvento.encabezado);

    return 'cadena enviada';
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
}
