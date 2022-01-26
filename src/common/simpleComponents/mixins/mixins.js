import {css} from 'styled-components';

export const marginMixins = css`
  ${({margin}) => margin && `margin: ${margin}`}
  ${({mt}) => mt && `margin-top: ${mt}`}
  ${({mb}) => mb && `margin-bottom: ${mb}`}
  ${({ml}) => ml && `margin-left: ${ml}`}
  ${({mr}) => mr && `margin-right: ${mr}`}
`;
export const paddingMixins = css`
  ${({padding}) => padding && `padding: ${padding}`}
  ${({pt}) => pt && `padding-top: ${pt}`}
  ${({pb}) => pb && `padding-bottom: ${pb}`}
  ${({pl}) => pl && `padding-left: ${pl}`}
  ${({pr}) => pr && `padding-right: ${pr}`}
`;
export const borderMixins = css`
  ${({border}) => border && `border: ${border}`};
  ${({borderWidth}) => borderWidth && `borderWidth: ${borderWidth}`};
  ${({borderStyle}) => borderStyle && `borderStyle: ${borderStyle}`};
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
  ${({borderBottomWidth}) =>
    borderBottomWidth && `border-bottom-width: ${borderBottomWidth}`};
  ${({borderBottomStyle}) =>
    borderBottomStyle && `border-bottom-style: ${borderBottomStyle}`};
  ${({borderBottomColor}) =>
    borderBottomColor && `border-bottom-color: ${borderBottomColor}`};
  ${({borderTopWidth}) =>
    borderTopWidth && `border-top-width: ${borderTopWidth}`};
  ${({borderTopStyle}) =>
    borderTopStyle && `border-top-style: ${borderTopStyle}`};
  ${({borderTopColor}) =>
    borderTopColor && `border-top-color: ${borderTopColor}`};
  ${({borderRightWidth}) =>
    borderRightWidth && `border-right-width: ${borderRightWidth}`};
  ${({borderRightStyle}) =>
    borderRightStyle && `border-right-style: ${borderRightStyle}`};
  ${({borderRightColor}) =>
    borderRightColor && `border-right-color: ${borderRightColor}`};
  ${({borderLeftWidth}) =>
    borderLeftWidth && `border-left-width: ${borderLeftWidth}`};
  ${({borderLeftStyle}) =>
    borderLeftStyle && `border-left-style: ${borderLeftStyle}`};
  ${({borderLeftColor}) =>
    borderLeftColor && `border-left-color: ${borderLeftColor}`};
`;
