import styled from 'styled-components'
import bearImage from 'images/bear.svg'
import thiefImage from 'images/thief.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    padding: .5em;
    gap: .5em;
    max-width: 150vh;
    margin: 0 auto;
`

export const SubtleText = styled.span`
    color: grey;
    font-style: italic;
    padding-bottom: .1em;
`

export const HighlightText = styled.span`
    color: ${p => p.theme.primaryLight};
`

export const SummaryContainer = styled.div`
    display: flex;
    gap: .1em;
    height: 6.5em;
    background: ${p => p.theme.backgroundSecondary};
    font-family: ${p => p.theme.featureFont};
    font-size: 2.5rem;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    &.small {
        background: radial-gradient(${p => p.theme.backgroundSecondaryLight} 1%, ${p => p.theme.backgroundSecondary} 80%);
        font-size: 1.3rem;
        height: max-content;
        padding: 1.5em 0em;
    }

    &.warning {
        background: radial-gradient(#af4242 1%,#6a2626 80%);
        span {
            color: #dd7f7f;
        }
    }
`

export const SkillSliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    gap: .5em;
    width: 100%;
    height: 14vw;

    > * {
        flex-grow: 1;
        width: calc(100% / var(--count));
    }
`

export const SkillBox = styled.div`
    background-color: ${p => p.theme.backgroundSecondaryLight}; /*66666666*/
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: overlay;
    background-size: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    
    cursor: pointer;
    font-size: 10vw;
    mix-blend-mode: lighten;
    font-family: ${p => p.theme.featureFont};

    &.active {
        background-color: ${p => p.theme.primary};
    }

    &.start {
        background-image: url(${bearImage});
        background-position: 60% 40%;
        background-size: 75%;
    }

    &.end {
        background-image: url(${thiefImage});
    }

    span {
        display: flex;
        background: radial-gradient(#bdbdbdeb, transparent);
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`