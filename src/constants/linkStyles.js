import { css } from "styled-components";

export const linkStyles = {
    headerPrimeryLink: css`
        font-weight: 900;
        padding-bottom: .3rem;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: .3rem;
            background-color: #05a1ad;
            transition: width 200ms ease;
        }

        &:hover {
            &:after {
                width: 100%;
            }
        }
    `,

    headerSecondaryLink: css`
        padding: .8rem 1.5rem;
        font-weight: 900;
        border: 2px solid #000;
        border-radius: 1rem;

        &:hover {
            color: #fff;
            background-color: #000;
        }
    `,

    greetingsContactLink: css`
        padding: 0.8rem 1.5rem;
        
        position: relative;
        overflow: hidden;
        
        font-weight: 500;
        border: 2px solid #000;
        border-radius: 1rem;

        display: flex;
        align-items: center;
        
        &:after {
            content: '';
            
            position: absolute;
            left: 0;
            bottom: 0;

            width: 0;
            height: 100%;

            background-color: #05a1ad;
            
            z-index: -1;

            transition: width 200ms ease;
        }

        &:hover {
            &:after {
                width: 100%;
            }
            
            color: #fff;
        }
    `,
}