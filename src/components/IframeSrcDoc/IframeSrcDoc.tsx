import * as React from 'react';
import { IframeSize } from '../../constants/iframe.constants';

interface Props {
    html: string;
    onLoad?: () => void;
    width: IframeSize;
}

export const IframeSrcDoc = React.memo(
    React.forwardRef<HTMLIFrameElement, Props>(
        ({ html, onLoad, width }, ref) => {
            return (
                <iframe
                    ref={ref}
                    style={{
                        width: `${width}px`,
                        minHeight: '100vh',
                        border: 'none',
                    }}
                    id="myiframe"
                    srcDoc={html}
                    onLoad={onLoad}
                />
            );
        },
    ),
);
