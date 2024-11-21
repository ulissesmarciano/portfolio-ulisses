import { css } from "styled-components";

export const linkStyles = {
    headerPrimaryLink: css`
        z-index: 1;
        font-weight: 900;
        padding-bottom: .3rem;
        position: relative;
        color: ${({ theme }) => theme.text};

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
        z-index: 1;
        padding: .8rem 1.5rem;
        font-weight: 900;
        border: 2px solid ${({ theme }) => theme.border};
        border-radius: 1rem;
        transition: 0.3s;
        color: ${({ theme }) => theme.text};

        &:hover {
            color: ${({ theme }) => theme.secondaryLinkTextColor};
            background-color: ${({ theme }) => theme.linkBackgroundColor};
        }
    `,

    greetingsContactLink: css`
        padding: 0.8rem 1.5rem;
        z-index: 1;
        
        position: relative;
        overflow: hidden;
        
        font-weight: 500;
        color: ${({ theme }) => theme.text};
        border: 2px solid ${({ theme }) => theme.border};
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
        z-index: 1;
        padding: .8rem 1.2rem .8rem 1rem;
        
        position: relative;
        overflow: hidden;
        
        font-weight: 500;
        color: ${({ theme }) => theme.text};
        border: 2px solid ${({ theme }) => theme.border};
        border-radius: 1rem;

        display: flex;
        align-items: center;
        gap: .5rem;

        img {
            filter: ${({ theme }) => theme.imageFilter};
        }
        
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
                background-color: transparent;
            }
        }

        img {
            height: 1.2rem;
            width: 1.2rem;
        }
    `,

    sidebarLink: css`
        z-index: 1000;
        padding: 1rem;
        min-width: 6rem;

        font-size: 1.75rem;
        font-weight: bold;
        color: ${({ theme }) => theme.text};

        transition: 0.3s;

        &:hover {
            background-color: #05a1ad;
            color: #fff;
        }
    `,
}