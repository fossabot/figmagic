import { ParsedElementMetadataInterface } from '../../../../contracts/ParsedElementMetadataInterface';
import { OutputFormatColors } from '../../../../contracts/Config';

import { getTokenMatch } from '../getTokenMatch';
import { updateParsing } from './updateParsing';

import { ErrorParseBorderWidth } from '../../../../frameworks/errors/errors';

type BorderWidthParams = {
  borderWidths: Record<string, unknown>;
  borderWidth: string;
  remSize: number;
  outputFormatColors: OutputFormatColors;
};

export function parseBorderWidth(
  css: string,
  imports: any[],
  params: BorderWidthParams
): ParsedElementMetadataInterface {
  try {
    if (!css || !imports || !params) throw Error(ErrorParseBorderWidth);
    const { borderWidths, borderWidth, remSize, outputFormatColors } = params;

    const { updatedCss, updatedImports } = getTokenMatch(
      borderWidths,
      'borderWidths',
      'border-width',
      borderWidth,
      remSize,
      outputFormatColors
    );

    return updateParsing(css, updatedCss, imports, updatedImports);
  } catch (error: any) {
    throw Error(error);
  }
}
