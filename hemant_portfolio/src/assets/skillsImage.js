import html from './skills/html.svg'
import css from './skills/css.svg'
import javascript from './skills/javascript.svg'
import react from './skills/react.svg'
import bootstrap from './skills/bootstrap.svg'
import tailwind from './skills/tailwind.svg'
import c from './skills/c.svg'
import cplusplus from './skills/cplusplus.svg'
import java from './skills/java.svg'
import python from './skills/python.svg'
import git from './skills/git.svg'
import materialui from './skills/materialui.svg'
import microsoftoffice from './skills/microsoftoffice.svg'
import ubantu from './skills/ubantu.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;

        case 'tailwind':
            return tailwind;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'microsoft office':
            return microsoftoffice;
        case 'ubuntu':
            return ubantu;
        default:
            break;
    }
}