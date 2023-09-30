import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage, URLConfig, CloudConfig } from '@cloudinary/url-gen';
import { webp } from '@cloudinary/url-gen/qualifiers/format';
import { format } from '@cloudinary/url-gen/actions/delivery';

interface image {
  // name: string;
  directorio: string;
}

export default function ImageComp({ directorio }: image) {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'dm0is9bjm' });
  const urlConfig = new URLConfig({ secure: true });

  // Instantiate and configure a CloudinaryImage object.
  const myImage = new CloudinaryImage(
    directorio,
    cloudConfig,
    urlConfig
  ).delivery(format(webp()));

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/docs/shoes
  // Render the image in a React component.
  return <AdvancedImage cldImg={myImage} />;
}
