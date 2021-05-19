export declare type Config = {
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
export declare type ConfigDTO = {
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
export declare type FontUnits = 'rem' | 'em' | 'px';
export declare type LetterSpacingUnits = 'em' | 'px';
export declare type OpacitiesUnits = 'float' | 'percent';
export declare type OutputFormatCss = 'ts' | 'mjs' | 'js';
export declare type OutputFormatDescription = 'md' | 'txt';
export declare type OutputFormatElements = 'tsx' | 'jsx';
export declare type OutputFormatGraphics = 'svg' | 'png';
export declare type OutputFormatStorybook = 'ts' | 'js';
export declare type OutputFormatTokens = 'ts' | 'mjs' | 'js' | 'json';
export declare type OutputDataTypeToken = null | 'enum';
export declare type SpacingUnit = 'rem' | 'em';
