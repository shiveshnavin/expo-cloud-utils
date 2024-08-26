import * as React from 'react';

import { ExpoCloudUtilsViewProps } from './ExpoCloudUtils.types';

export default function ExpoCloudUtilsView(props: ExpoCloudUtilsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
