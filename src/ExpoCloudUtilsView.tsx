import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCloudUtilsViewProps } from './ExpoCloudUtils.types';

const NativeView: React.ComponentType<ExpoCloudUtilsViewProps> =
  requireNativeViewManager('ExpoCloudUtils');

export default function ExpoCloudUtilsView(props: ExpoCloudUtilsViewProps) {
  return <NativeView {...props} />;
}
