import React from 'react';

export default function Core({children, core}){
    return <header className={core}>{children}</header>;
}

Core.defaultProps= {
    core:"defaultHero"
};