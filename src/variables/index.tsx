// guarda as variáveis que serão utilizadas nas css

const variables = {
    // fontes
    primaryFont: '"Poppins", sans-serif',

    // cores
    blue: '#4B69FD',
    lightBlue: 'aliceblue',
    orange: '#FE652B',
    lightOrange: '#ff936c',
    red: '#f86868',
    black: '#000',
    white: '#fff',
    lightPink: '#FFF9EB',
    darkGray: '#444444',
    regularGray: '#C4C4C4',

    // outros
    borderRadius: '68px',

    // breakpoints
    notebook: '1024px',
    tablet: '869px',
    smartphone: '669px',
    smallSmartphone: '400px',
}

const flex = (
    direction?: string,
    justify?: string,
    align?: string,
    gap?: string,
) => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `
}

const border = (px: string) => {
    return `
        ${px} solid ${variables.black}
    `
}

const cartoonBorder = (
    topPx: string,
    rightPx: string,
    bottomPx: string,
    leftPx: string,
) => {
    return `
        border-top: ${border(topPx)};
        border-right: ${border(rightPx)};
        border-bottom: ${border(bottomPx)};
        border-left: ${border(leftPx)};

        @media (max-width: ${variables.smartphone}) {
            border-top: ${border('1px')};
            border-right: ${border('4px')};
            border-bottom: ${border('4px')};
            border-left: ${border('1px')};
        }
    `
}

const listWidth = () => {
    return `
        width: 70%;

        @media (max-width: ${variables.tablet}) {
            width: 80%;
        }
        @media (max-width: ${variables.smartphone}) {
            
            width: 90%;
        }
        @media (max-width: ${variables.smallSmartphone}) {
            width: 100%;
        }
    `
}

export { variables, flex, cartoonBorder, listWidth }
