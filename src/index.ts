import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCloudUtils.web.ts
// and on native platforms to ExpoCloudUtils.ts
import ExpoCloudUtilsModule from './ExpoCloudUtilsModule';
import ExpoCloudUtilsView from './ExpoCloudUtilsView';
import { ChangeEventPayload, ExpoCloudUtilsViewProps } from './ExpoCloudUtils.types';

// Get the native constant value.
export const PI = ExpoCloudUtilsModule.PI;

export function hello(): string {
  return ExpoCloudUtilsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCloudUtilsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCloudUtilsModule ?? NativeModulesProxy.ExpoCloudUtils);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCloudUtilsView, ExpoCloudUtilsViewProps, ChangeEventPayload };
