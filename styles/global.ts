import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    height: auto !important;
  }

  body {
    background:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-family: 'Roboto', 'Philosopher', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-variant: none;
    line-height: inherit;
    font-feature-settings: none;
    height: auto !important;
  }

  h1,h2,h3,h4,h5,h6{
    margin-top: inherit;
    margin-bottom: initial;
    color: initial;
    font-weight: initial;
  }

  a {
    text-decoration: none;
    font-family: 'Roboto' 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  h1.title{
    font-family: 'Philosopher', sans-serif;
    text-align:center;
     font-size: clamp(20px, 3vh + 10px, 34px);
    margin-top: 60px;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.text}
  }


  .move-up-enter,
  .move-up-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-up-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-up-enter.move-up-enter-active,
  .move-up-appear.move-up-appear-active {
    -webkit-animation-name: antMoveUpIn;
            animation-name: antMoveUpIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .move-up-leave.move-up-leave-active {
    -webkit-animation-name: antMoveUpOut;
            animation-name: antMoveUpOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .move-up-enter,
  .move-up-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
            animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .move-up-leave {
    -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
            animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .move-down-enter,
  .move-down-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-down-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-down-enter.move-down-enter-active,
  .move-down-appear.move-down-appear-active {
    -webkit-animation-name: antMoveDownIn;
            animation-name: antMoveDownIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .move-down-leave.move-down-leave-active {
    -webkit-animation-name: antMoveDownOut;
            animation-name: antMoveDownOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .move-down-enter,
  .move-down-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
            animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .move-down-leave {
    -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
            animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .move-left-enter,
  .move-left-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-left-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-left-enter.move-left-enter-active,
  .move-left-appear.move-left-appear-active {
    -webkit-animation-name: antMoveLeftIn;
            animation-name: antMoveLeftIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .move-left-leave.move-left-leave-active {
    -webkit-animation-name: antMoveLeftOut;
            animation-name: antMoveLeftOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .move-left-enter,
  .move-left-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
            animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .move-left-leave {
    -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
            animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  .move-right-enter,
  .move-right-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-right-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .move-right-enter.move-right-enter-active,
  .move-right-appear.move-right-appear-active {
    -webkit-animation-name: antMoveRightIn;
            animation-name: antMoveRightIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .move-right-leave.move-right-leave-active {
    -webkit-animation-name: antMoveRightOut;
            animation-name: antMoveRightOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .move-right-enter,
  .move-right-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
            animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .move-right-leave {
    -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
            animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  }
  @-webkit-keyframes antMoveDownIn {
    0% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveDownIn {
    0% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes antMoveDownOut {
    0% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveDownOut {
    0% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @-webkit-keyframes antMoveLeftIn {
    0% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveLeftIn {
    0% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes antMoveLeftOut {
    0% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveLeftOut {
    0% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @-webkit-keyframes antMoveRightIn {
    0% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveRightIn {
    0% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes antMoveRightOut {
    0% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveRightOut {
    0% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @-webkit-keyframes antMoveUpIn {
    0% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes antMoveUpIn {
    0% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes antMoveUpOut {
    0% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @keyframes antMoveUpOut {
    0% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 0;
    }
  }
  @-webkit-keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  [ant-click-animating='true'],
  [ant-click-animating-without-extra-node='true'] {
    position: relative;
  }
  html {
    --antd-wave-shadow-color: #1890ff;
    --scroll-bar: 0;
  }
  [ant-click-animating-without-extra-node='true']::after,
  .ant-click-animating-node {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: inherit;
    -webkit-box-shadow: 0 0 0 0 #1890ff;
            box-shadow: 0 0 0 0 #1890ff;
    -webkit-box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
            box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
    opacity: 0.2;
    -webkit-animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1), waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
            animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1), waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    content: '';
    pointer-events: none;
  }
  @-webkit-keyframes waveEffect {
    100% {
      -webkit-box-shadow: 0 0 0 #1890ff;
              box-shadow: 0 0 0 #1890ff;
      -webkit-box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
              box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
    }
  }
  @keyframes waveEffect {
    100% {
      -webkit-box-shadow: 0 0 0 #1890ff;
              box-shadow: 0 0 0 #1890ff;
      -webkit-box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
              box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
    }
  }
  @-webkit-keyframes fadeEffect {
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeEffect {
    100% {
      opacity: 0;
    }
  }
  .slide-up-enter,
  .slide-up-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-up-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-up-enter.slide-up-enter-active,
  .slide-up-appear.slide-up-appear-active {
    -webkit-animation-name: antSlideUpIn;
            animation-name: antSlideUpIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .slide-up-leave.slide-up-leave-active {
    -webkit-animation-name: antSlideUpOut;
            animation-name: antSlideUpOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .slide-up-enter,
  .slide-up-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
            animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .slide-up-leave {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .slide-down-enter,
  .slide-down-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-down-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-down-enter.slide-down-enter-active,
  .slide-down-appear.slide-down-appear-active {
    -webkit-animation-name: antSlideDownIn;
            animation-name: antSlideDownIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .slide-down-leave.slide-down-leave-active {
    -webkit-animation-name: antSlideDownOut;
            animation-name: antSlideDownOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .slide-down-enter,
  .slide-down-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
            animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .slide-down-leave {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .slide-left-enter,
  .slide-left-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-left-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-left-enter.slide-left-enter-active,
  .slide-left-appear.slide-left-appear-active {
    -webkit-animation-name: antSlideLeftIn;
            animation-name: antSlideLeftIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .slide-left-leave.slide-left-leave-active {
    -webkit-animation-name: antSlideLeftOut;
            animation-name: antSlideLeftOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .slide-left-enter,
  .slide-left-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
            animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .slide-left-leave {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  .slide-right-enter,
  .slide-right-appear {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-right-leave {
    -webkit-animation-duration: 0.2s;
            animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
  .slide-right-enter.slide-right-enter-active,
  .slide-right-appear.slide-right-appear-active {
    -webkit-animation-name: antSlideRightIn;
            animation-name: antSlideRightIn;
    -webkit-animation-play-state: running;
            animation-play-state: running;
  }
  .slide-right-leave.slide-right-leave-active {
    -webkit-animation-name: antSlideRightOut;
            animation-name: antSlideRightOut;
    -webkit-animation-play-state: running;
            animation-play-state: running;
    pointer-events: none;
  }
  .slide-right-enter,
  .slide-right-appear {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
            animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .slide-right-leave {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @-webkit-keyframes antSlideUpIn {
    0% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideUpIn {
    0% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @-webkit-keyframes antSlideUpOut {
    0% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @keyframes antSlideUpOut {
    0% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @-webkit-keyframes antSlideDownIn {
    0% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
  }
  @keyframes antSlideDownIn {
    0% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
  }
  @-webkit-keyframes antSlideDownOut {
    0% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 0;
    }
  }
  @keyframes antSlideDownOut {
    0% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 0;
    }
  }
  @-webkit-keyframes antSlideLeftIn {
    0% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideLeftIn {
    0% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @-webkit-keyframes antSlideLeftOut {
    0% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @keyframes antSlideLeftOut {
    0% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @-webkit-keyframes antSlideRightIn {
    0% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 1;
    }
  }
  @keyframes antSlideRightIn {
    0% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 1;
    }
  }
  @-webkit-keyframes antSlideRightOut {
    0% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 0;
    }
  }
  @keyframes antSlideRightOut {
    0% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0.8);
              transform: scaleX(0.8);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
      opacity: 0;
    }
  }


.ant-carousel {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
          font-feature-settings: 'tnum';
}
.ant-carousel .slick-slider {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-touch-callout: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.ant-carousel .slick-list {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.ant-carousel .slick-list:focus {
  outline: none;
}
.ant-carousel .slick-list.dragging {
  cursor: pointer;
}
.ant-carousel .slick-list .slick-slide {
  pointer-events: none;
}
.ant-carousel .slick-list .slick-slide input.ant-radio-input,
.ant-carousel .slick-list .slick-slide input.ant-checkbox-input {
  visibility: hidden;
}
.ant-carousel .slick-list .slick-slide.slick-active {
  pointer-events: auto;
}
.ant-carousel .slick-list .slick-slide.slick-active input.ant-radio-input,
.ant-carousel .slick-list .slick-slide.slick-active input.ant-checkbox-input {
  visibility: visible;
}
.ant-carousel .slick-list .slick-slide > div > div {
  vertical-align: bottom;
}
.ant-carousel .slick-slider .slick-track,
.ant-carousel .slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.ant-carousel .slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}
.ant-carousel .slick-track::before,
.ant-carousel .slick-track::after {
  display: table;
  content: '';
}
.ant-carousel .slick-track::after {
  clear: both;
}
.slick-loading .ant-carousel .slick-track {
  visibility: hidden;
}
.ant-carousel .slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
.ant-carousel .slick-slide img {
  display: block;
}
.ant-carousel .slick-slide.slick-loading img {
  display: none;
}
.ant-carousel .slick-slide.dragging img {
  pointer-events: none;
}
.ant-carousel .slick-initialized .slick-slide {
  display: block;
}
.ant-carousel .slick-loading .slick-slide {
  visibility: hidden;
}
.ant-carousel .slick-vertical .slick-slide {
  display: block;
  height: auto;
}
.ant-carousel .slick-arrow.slick-hidden {
  display: none;
}
.ant-carousel .slick-prev,
.ant-carousel .slick-next {
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  padding: 0;
  color: transparent;
  font-size: 0;
  line-height: 0;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
}
.ant-carousel .slick-prev:hover,
.ant-carousel .slick-next:hover,
.ant-carousel .slick-prev:focus,
.ant-carousel .slick-next:focus {
  color: transparent;
  background: transparent;
  outline: none;
}
.ant-carousel .slick-prev:hover::before,
.ant-carousel .slick-next:hover::before,
.ant-carousel .slick-prev:focus::before,
.ant-carousel .slick-next:focus::before {
  opacity: 1;
}
.ant-carousel .slick-prev.slick-disabled::before,
.ant-carousel .slick-next.slick-disabled::before {
  opacity: 0.25;
}
.ant-carousel .slick-prev {
  left: -25px;
}
.ant-carousel .slick-prev::before {
  content: '←';
}
.ant-carousel .slick-next {
  right: -25px;
}
.ant-carousel .slick-next::before {
  content: '→';
}
.ant-carousel .slick-dots {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  padding-left: 0;
  list-style: none;
}
.ant-carousel .slick-dots-bottom {
  bottom: 12px;
}
.ant-carousel .slick-dots-top {
  top: 12px;
}
.ant-carousel .slick-dots li {
  position: relative;
  display: inline-block;
  -webkit-box-flex: 0;
      -ms-flex: 0 1 auto;
          flex: 0 1 auto;
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  width: 16px;
  height: 3px;
  margin: 0 2px;
  margin-right: 3px;
  margin-left: 3px;
  padding: 0;
  text-align: center;
  text-indent: -999px;
  vertical-align: top;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.ant-carousel .slick-dots li button {
  display: block;
  width: 100%;
  height: 3px;
  padding: 0;
  color: transparent;
  font-size: 0;
  background: #fff;
  border: 0;
  border-radius: 1px;
  outline: none;
  cursor: pointer;
  opacity: 0.3;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.ant-carousel .slick-dots li button:hover,
.ant-carousel .slick-dots li button:focus {
  opacity: 0.75;
}
.ant-carousel .slick-dots li.slick-active {
  width: 24px;
}
.ant-carousel .slick-dots li.slick-active button {
  background: #fff;
  opacity: 1;
}
.ant-carousel .slick-dots li.slick-active:hover,
.ant-carousel .slick-dots li.slick-active:focus {
  opacity: 1;
}
.ant-carousel-vertical .slick-dots {
  top: 50%;
  bottom: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 3px;
  height: auto;
  margin: 0;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.ant-carousel-vertical .slick-dots-left {
  right: auto;
  left: 12px;
}
.ant-carousel-vertical .slick-dots-right {
  right: 12px;
  left: auto;
}
.ant-carousel-vertical .slick-dots li {
  width: 3px;
  height: 16px;
  margin: 4px 2px;
  vertical-align: baseline;
}
.ant-carousel-vertical .slick-dots li button {
  width: 3px;
  height: 16px;
}
.ant-carousel-vertical .slick-dots li.slick-active {
  width: 3px;
  height: 24px;
}
.ant-carousel-vertical .slick-dots li.slick-active button {
  width: 3px;
  height: 24px;
}
.ant-carousel-rtl {
  direction: rtl;
}
.ant-carousel-rtl .ant-carousel .slick-track {
  right: 0;
  left: auto;
}
.ant-carousel-rtl .ant-carousel .slick-prev {
  right: -25px;
  left: auto;
}
.ant-carousel-rtl .ant-carousel .slick-prev::before {
  content: '→';
}
.ant-carousel-rtl .ant-carousel .slick-next {
  right: auto;
  left: -25px;
}
.ant-carousel-rtl .ant-carousel .slick-next::before {
  content: '←';
}
.ant-carousel-rtl.ant-carousel .slick-dots {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}
.ant-carousel-rtl.ant-carousel-vertical .slick-dots {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

`
