import { css } from "styled-components";

export const linkStyles = {
    headerPrimaryLink: css`
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
        transition: 0.3s;

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
    
    greetingsContactLinkIcon: css`
        padding: .8rem 1.2rem .8rem 1rem;
        
        position: relative;
        overflow: hidden;
        
        font-weight: 500;
        border: 2px solid #000;
        border-radius: 1rem;

        display: flex;
        align-items: center;
        gap: .5rem;
        
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
            img {
                filter: invert(100%);
            }
        }

        img {
            height: 1.2rem;
            width: 1.2rem;
        }
    `,

    sidebarLink: css`
        font-size: 1.75rem;
        font-weight: bold;
    `,
}