/**
 * 文本风险识别
 */
declare namespace my {
  type TextRiskIdentificationType = 'keyword' | '0' | '1' | '2' | '3';
  interface ITextRiskIdentificationSuccessResult {
    type: TextRiskIdentificationType;
    hitKeywords?: string[];
    score: string;
  }
  interface ITextRiskIdentificationFailResult {
    error: string;
    errorMessage: string;
  }
  interface ITextRiskIdentificationOptions {
    content: string;
    type: TextRiskIdentificationType[];
    success?(res: ITextRiskIdentificationSuccessResult): void;
    fail?(res: ITextRiskIdentificationFailResult): void;
    complete?(): void;
  }
  function textRiskIdentification(options: ITextRiskIdentificationOptions): void;
}
