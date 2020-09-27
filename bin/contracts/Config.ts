export type Config = {
  debugMode: boolean;
  fontUnit: 'rem' | 'em';
  letterSpacingUnit: 'em' | 'px';
  opacitiesUnit: 'float' | 'percent';
  figmaData: string;
  figmagicFolder: string;
  outputFolderElements: string;
  outputFolderGraphics: string;
  outputFolderTokens: string;
  outputFormatCss: 'ts' | 'mjs' | 'js';
  outputFormatDescription: 'md' | 'txt';
  outputFormatElements: 'tsx' | 'jsx' | 'mjs' | 'js';
  outputFormatGraphics: 'svg' | 'png';
  outputFormatStorybook: 'ts' | 'js';
  outputFormatTokens: 'ts' | 'mjs' | 'js';
  outputScaleGraphics: number;
  outputDataTypeToken: null | 'enum';
  recompileLocal: boolean;
  remSize: number;
  skipFileGeneration: {
    forceUpdate: boolean;
    skipCss: boolean;
    skipDescription: boolean;
    skipReact: boolean;
    skipStorybook: boolean;
    skipStyled: boolean;
  };
  spacingUnit: 'rem' | 'em';
  syncElements: boolean;
  syncGraphics: boolean;
  syncTokens: boolean;
  templates: {
    templatePathReact: string;
    templatePathStorybook: string;
    templatePathStyled: string;
  };
  token: string | null;
  url: string | null;
  usePostscriptFontNames: boolean;
};

export type ConfigDTO = {
  debugMode?: boolean;
  fontUnit?: 'rem' | 'em';
  letterSpacingUnit?: 'em' | 'px';
  opacitiesUnit?: 'float' | 'percent';
  figmaData?: string;
  figmagicFolder?: string;
  outputFolderElements?: string;
  outputFolderGraphics?: string;
  outputFolderTokens?: string;
  outputFormatCss?: 'ts' | 'mjs' | 'js';
  outputFormatDescription?: 'md' | 'txt';
  outputFormatElements?: 'tsx' | 'jsx';
  outputFormatGraphics?: 'svg' | 'png';
  outputFormatStorybook?: 'ts' | 'js';
  outputFormatTokens?: 'ts' | 'mjs' | 'js';
  outputScaleGraphics?: number;
  outputDataTypeToken?: null | 'enum';
  recompileLocal?: boolean;
  remSize?: number;
  skipFileGeneration?: {
    forceUpdate?: boolean;
    skipCss?: boolean;
    skipDescription?: boolean;
    skipReact?: boolean;
    skipStorybook?: boolean;
    skipStyled?: boolean;
  };
  spacingUnit?: 'rem' | 'em';
  syncElements?: boolean;
  syncGraphics?: boolean;
  syncTokens?: boolean;
  templates?: {
    templatePathReact?: string;
    templatePathStorybook?: string;
    templatePathStyled?: string;
  };
  token?: string | null;
  url?: string | null;
  usePostscriptFontNames?: boolean;
};
