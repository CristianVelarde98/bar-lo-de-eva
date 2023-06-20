import LinkLogic from './linkLogic';

export default function WtspButton() {
  const phoneNumber = 5491135827346;
  //Aca se puede poner un mensaje custom en caso en algun momento se necesite.
  const message =
    'Hola, estoy interesado en obtener informacion sobre el servicio de cataring';

  return <LinkLogic phoneNumber={phoneNumber} message={message} />;
}
