import html2canvas from 'html2canvas';
import { IframeSize } from '../constants/iframe.constants';

export async function getImages(
    doc: Document | undefined | null,
    targetWidth: IframeSize,
    classNames: string[],
) {
    if (!doc) {
        return [];
    }

    return await Promise.all(
        classNames.map(async (className) => {
            const element = doc.querySelector(`.${className}`);

            const image = await html2canvas(element as HTMLElement, {
                useCORS: true,
                scale: 1,
            });

            return { className, image, targetWidth };
        }),
    );
}
