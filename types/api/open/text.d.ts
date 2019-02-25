/**
 * 文本风险识别
 */
declare namespace my {
  type TextRiskIdentificationType = 'keyword' | '0' | '1' | '2' | '3';
  interface ITextRiskIdentification {
    content: string;
    type: TextRiskIdentificationType[];
    success?(res: { type: TextRiskIdentificationType; hitKeywords?: string[]; score: string; }): void;
    fail?(res: { error: string; errorMessage: string; }): void;
    complete?(): void;
  }
  function textRiskIdentification(): void;
}
