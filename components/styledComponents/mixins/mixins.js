import {css} from 'styled-components';

export const margin = css`
  ${({margin}) => margin && `margin: ${margin}`}
  ${({mt}) => mt && `margin-top: ${mt}`}
  ${({mb}) => mb && `margin-bottom: ${mb}`}
  ${({ml}) => ml && `margin-left: ${ml}`}
  ${({mr}) => mr && `margin-right: ${mr}`}
`;
export const padding = css`
  ${({padding}) => padding && `padding: ${padding}`}
  ${({pt}) => pt && `padding-top: ${pt}`}
  ${({pb}) => pb && `padding-bottom: ${pb}`}
  ${({pl}) => pl && `padding-left: ${pl}`}
  ${({pr}) => pr && `padding-right: ${pr}`}
`;
