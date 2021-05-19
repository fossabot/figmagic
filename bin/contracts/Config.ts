export type Config = {
  debugMode: boolean;
  fontUnit: FontUnits;
  letterSpacingUnit: LetterSpacingUnits;
  opacitiesUnit: OpacitiesUnits;
  figmaData: string;
  figmagicFolder: string;
  outputFolderElements: string;
  outputFolderGraphics: string;
  outputFolderTokens: string;
  outputFormatCss: OutputFormatCss;
  outputFormatDescription: OutputFormatDescription;
  outputFormatElements: OutputFormatElements;
  outputFormatGraphics: OutputFormatGraphics;
  outputFormatStorybook: OutputFormatStorybook;
  outputFormatTokens: OutputFormatTokens;
  outputGraphicElements: boolean;
  outputGraphicElementsMap: boolean;
  outputScaleGraphics: number;
  outputDataTypeToken: OutputDataTypeToken;
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
  spacingUnit: SpacingUnit;
  syncElements: boolean;
  syncGraphics: boolean;
  syncTokens: boolean;
  templates: {
    templatePathGraphic: string;
    templatePathReact: string;
    templatePathStorybook: string;
    templatePathStyled: string;
  };
  token: string | null;
  unitlessPrecision: number;
  url: string | null;
  usePostscriptFontNames: boolean;
};

export type ConfigDTO = {
  debugMode?: boolean;
  fontUnit?: FontUnits;
  letterSpacingUnit?: LetterSpacingUnits;
  opacitiesUnit?: OpacitiesUnits;
  figmaData?: string;
  figmagicFolder?: string;
  outputFolderElements?: string;
  outputFolderGraphics?: string;
  outputFolderTokens?: string;
  outputFormatCss?: OutputFormatCss;
  outputFormatDescription?: OutputFormatDescription;
  outputFormatElements?: OutputFormatElements;
  outputFormatGraphics?: OutputFormatGraphics;
  outputFormatStorybook?: OutputFormatStorybook;
  outputFormatTokens?: OutputFormatTokens;
  outputGraphicElements?: boolean;
  outputGraphicElementsMap?: boolean;
  outputScaleGraphics?: number;
  outputDataTypeToken?: OutputDataTypeToken;
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
  spacingUnit?: SpacingUnit;
  syncElements?: boolean;
  syncGraphics?: boolean;
  syncTokens?: boolean;
  templates?: {
    templatePathGraphic?: string;
    templatePathReact?: string;
    templatePathStorybook?: string;
    templatePathStyled?: string;
  };
  token?: string | null;
  unitlessPrecision?: number;
  url?: string | null;
  usePostscriptFontNames?: boolean;
};

export type FontUnits = 'rem' | 'em' | 'px';
export type LetterSpacingUnits = 'em' | 'px';
export type OpacitiesUnits = 'float' | 'percent';
export type OutputFormatCss = 'ts' | 'mjs' | 'js';
export type OutputFormatDescription = 'md' | 'txt';
export type OutputFormatElements = 'tsx' | 'jsx';
export type OutputFormatGraphics = 'svg' | 'png';
export type OutputFormatStorybook = 'ts' | 'js';
export type OutputFormatTokens = 'ts' | 'mjs' | 'js' | 'json';
export type OutputDataTypeToken = null | 'enum';
export type SpacingUnit = 'rem' | 'em';
