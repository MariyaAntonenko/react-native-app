import {css} from 'styled-components';
import {string} from 'prop-types';

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
`;
borderMixins.propTypes = {
  border: string,
  borderRadius: string,
  borderBottomWidth: string,
  borderBottomStyle: string,
  borderBottomColor: string,
  borderTopWidth: string,
  borderTopStyle: string,
  borderTopColor: string,
};
marginMixins.propTypes = {
  margin: string,
  mt: string,
  mb: string,
  mr: string,
  ml: string,
};
paddingMixins.propTypes = {
  padding: string,
  pt: string,
  pb: string,
  pr: string,
  pl: string,
};
