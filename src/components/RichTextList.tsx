import { RichText } from "./RichText";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const RichTextList = ({
  richText,
  customRichTextComponentMapper = {},
}: {
  richText: RichTextItemResponse[] | undefined;
  customRichTextComponentMapper?: object;
}) => {
  if (!richText) return null;

  return (
    <>
      {richText.map((richTextItem, index) => (
        <RichText
          richTextItem={richTextItem}
          customRichTextComponentMapper={customRichTextComponentMapper}
          key={`${index}_${richTextItem.plain_text}`}
        />
      ))}
    </>
  );
};
