import { css } from '@emotion/react';
import { Interpolation, Theme } from '@emotion/react/dist/emotion-react.cjs';

interface LoaderProps {
    css?: Interpolation<Theme>;
}

const style = css`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 20px;
  
  & div {
    position: absolute;
    top: calc(-4px + 50%);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-of-type(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  & div:nth-of-type(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-of-type(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-of-type(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
export default function Loader({ ...props }: LoaderProps) {
    return (
        <div css={style} {...props}>
            <div id="loader-dot" />
            <div id="loader-dot" />
            <div id="loader-dot" />
            <div id="loader-dot" />
        </div>
    );
}