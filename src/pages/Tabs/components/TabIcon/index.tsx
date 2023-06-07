import React from 'react';
import { Image, ImageProps } from 'react-native';

const TabIcon = ({ source }: ImageProps) => {
  return (
    <Image
      source={source}
      style={{ width: '100%', height: '100%' }}
      resizeMode='contain'
    />
  );
};

export default TabIcon;