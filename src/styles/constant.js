import { css } from 'styled-components'

export const colors = {
    Green:      `#7AC142`,
    Navy:       `#0C2340`,
    Blue:       `#236192`,
    Silver:     `#9EA2A2`,
    offWhite:   `#FAFAFA`,
    lightGrey:  `#DFDFDF`,
}

export const fonts = {
    inter: 'Inter, sans-serif',
    upright: 'Inter-Up',
    italic: 'Inter-Italic',
    display: 'GT-Display',
    outline: 'HunnyStrawSansOutline',
    hunny: 'HunnyStrawSans',
}


export const mq = {
    sm:     '414px',
    md:     '768px',
    lg:     '1080px',
    mac:     '1280px',
    mlg:     '1440px',
    mon:     '1920px',
    ultra:     '2560px',
}

export const media = {

    sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,

    md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,

    lg: (...a) => css`
    @media (max-width: ${mq.lg}){
      ${css(...a)}
    }
  `,

    mac: (...a) => css`
    @media (min-width: ${mq.mac}) and (max-width: ${mq.mlg}){
      ${css(...a)}
    }
  `,

    mon: (...a) => css`
    @media (max-width: ${mq.mon}) {
      ${css(...a)}
    }
  `,

    ultra: (...a) => css`
    @media (min-width: 1921px) and (max-width: ${mq.ultra}) {
      ${css(...a)}
    }
  `,

    hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `
}
