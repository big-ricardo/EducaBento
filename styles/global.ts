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


    h1{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(15px,2vw - 6px,33px);
    @media screen and (max-width: 768px) {
      font-size: clamp(23px,2vh + 4px,36px);
    }
  }

  h2{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(15px,2vw - 8px,30px);
     @media screen and (max-width: 768px) {
      font-size: clamp(20px,2vh + 3px,28px);
    }
  }

  h3{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(22px,2vw - 5px, 27px);
     @media screen and (max-width: 768px) {
      font-size: clamp(15px,2vh + 2px,28px);
    }
  }

  h4{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(15px,2vw - 3px,24px);
     @media screen and (max-width: 768px) {
      font-size: clamp(15px,2vh + 1px,28px);
    }
  }

  p{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.text};
    font-size: clamp(17px,2vw - 6px,24px);
    line-height: 150%;
     @media screen and (max-width: 768px) {
      font-size: clamp(17px,2vh,28px);
    }
  }

  h1.title{
    font-family: 'Philosopher', sans-serif;
    text-align:center;
     font-size: clamp(20px, 3vh + 10px, 34px);
    margin-top: 60px;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.text}
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

.ant-avatar {
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
  position: relative;
  display: inline-block;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
}
.ant-avatar-image {
  background: transparent;
}
.ant-avatar .ant-image-img {
  display: block;
}
.ant-avatar-string {
  position: absolute;
  left: 50%;
  -webkit-transform-origin: 0 center;
          transform-origin: 0 center;
}
.ant-avatar.ant-avatar-icon {
  font-size: 18px;
}
.ant-avatar.ant-avatar-icon > .anticon {
  margin: 0;
}
.ant-avatar-lg {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
}
.ant-avatar-lg-string {
  position: absolute;
  left: 50%;
  -webkit-transform-origin: 0 center;
          transform-origin: 0 center;
}
.ant-avatar-lg.ant-avatar-icon {
  font-size: 24px;
}
.ant-avatar-lg.ant-avatar-icon > .anticon {
  margin: 0;
}
.ant-avatar-sm {
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
}
.ant-avatar-sm-string {
  position: absolute;
  left: 50%;
  -webkit-transform-origin: 0 center;
          transform-origin: 0 center;
}
.ant-avatar-sm.ant-avatar-icon {
  font-size: 14px;
}
.ant-avatar-sm.ant-avatar-icon > .anticon {
  margin: 0;
}
.ant-avatar-square {
  border-radius: 2px;
}
.ant-avatar > img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.ant-avatar-group {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.ant-avatar-group .ant-avatar {
  border: 1px solid #fff;
}
.ant-avatar-group .ant-avatar:not(:first-child) {
  margin-left: -8px;
}
.ant-avatar-group-popover .ant-avatar + .ant-avatar {
  margin-left: 3px;
}
.ant-avatar-group-rtl .ant-avatar:not(:first-child) {
  margin-right: -8px;
  margin-left: 0;
}
.ant-avatar-group-popover.ant-popover-rtl .ant-avatar + .ant-avatar {
  margin-right: 3px;
  margin-left: 0;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 3px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

`
