import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const { link, image } = props.socProf;
    return (
        <span>
            <a href={link}><img src={image} alt='social-profile' style={{ width: '35px', margin: 10 }} /></a>
        </span>
    )

}

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {SOCIAL_PROFILES.map(prof => (
                <SocialProfile key={prof.id} socProf={prof} />
            ))
            }
        </div>
    </div>
)

export default SocialProfiles;