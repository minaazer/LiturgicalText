import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

type FontFace = {
  family: string;
  weight?: string;
  style?: string;
  modules: Array<{ module: number; format: string }>;
};

const fontFaces: FontFace[] = [
  { family: 'Arial Coptic', modules: [{ module: require('../../assets/fonts/ArialCoptic.ttf'), format: 'truetype' }] },
  { family: 'FreeSerif Avva Shenouda', modules: [{ module: require('../../assets/fonts/FreeSerifAvvaShenouda.ttf'), format: 'truetype' }] },
  { family: 'EB Garamond', modules: [{ module: require('../../assets/fonts/EBGaramond.ttf'), format: 'truetype' }] },
  { family: 'NotoSansRegular', modules: [{ module: require('../../assets/fonts/NotoSans-Regular.ttf'), format: 'truetype' }] },
  { family: 'Georgia', modules: [{ module: require('../../assets/fonts/georgia.ttf'), format: 'truetype' }] },
  { family: 'Georgia', weight: 'bold', modules: [{ module: require('../../assets/fonts/georgiab.ttf'), format: 'truetype' }] },
  { family: 'Georgia', style: 'italic', modules: [{ module: require('../../assets/fonts/georgiai.ttf'), format: 'truetype' }] },
  { family: 'Times New Roman', modules: [{ module: require('../../assets/fonts/times.ttf'), format: 'truetype' }] },
  { family: 'Font Awesome 5 Free', weight: '900', modules: [{ module: require('../../assets/fonts/fa-solid-900.ttf'), format: 'truetype' }] },
  { family: 'Font Awesome 5 Free', modules: [{ module: require('../../assets/fonts/fa-regular-400.ttf'), format: 'truetype' }] },
  { family: 'Font Awesome 5 Brands', modules: [{ module: require('../../assets/fonts/fa-brands-400.ttf'), format: 'truetype' }] },
];

const buildFace = (family: string, srcList: string, weight?: string, style?: string) => `
@font-face {
  font-family: "${family}";
  src: ${srcList};
  ${weight ? `font-weight: ${weight};` : 'font-weight: normal;'}
  ${style ? `font-style: ${style};` : 'font-style: normal;'}
  font-display: swap;
}`;

const mimeForFormat = (format: string) => {
  switch (format) {
    case 'woff2':
      return 'font/woff2';
    case 'woff':
      return 'font/woff';
    case 'truetype':
    default:
      return 'font/ttf';
  }
};

export const defaultFontTypeface = '';

export async function buildFontTypefaceCss(): Promise<string> {
  const faceCss: string[] = [];

  for (const face of fontFaces) {
    const resolvedSources: string[] = [];
    for (const entry of face.modules) {
      const assets = await Asset.loadAsync(entry.module);
      const asset = assets[0];
      if (!asset.localUri) {
        try {
          await asset.downloadAsync();
        } catch {
          // ignore download errors; fall back to uri if present
        }
      }
      const uri = asset.localUri || asset.uri;
      if (!uri) continue;

      let source = `url("${uri}") format("${entry.format}")`;
      try {
        const pathToRead = asset.localUri || uri;
        const base64 = await FileSystem.readAsStringAsync(pathToRead, {
          encoding: FileSystem.EncodingType.Base64,
        });
        const mime = mimeForFormat(entry.format);
        source = `url("data:${mime};base64,${base64}") format("${entry.format}")`;
      } catch {
        // keep source as-is if base64 conversion fails
      }

      resolvedSources.push(source);
    }

    if (resolvedSources.length > 0) {
      faceCss.push(buildFace(face.family, resolvedSources.join(',\n       '), face.weight, face.style));
    }
  }

  return faceCss.join('\n\n');
}
