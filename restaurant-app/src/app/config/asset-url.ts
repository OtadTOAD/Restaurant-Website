import { ASSET_VERSION } from './asset-version';

export function assetUrl(path: string): string {
  return `${path}${path.includes('?') ? '&' : '?'}v=${ASSET_VERSION}`;
}
