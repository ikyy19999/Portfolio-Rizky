// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// SkillCard component to display individual skill details
const SkillCard = ({
    imgSrc,    // Source of skill icon
    label,     // Name of the skill
    desc,      // Description of the skill
    classes    // Additional CSS classes
}) => {
    return (
        // Main card container with dynamic classes and hover effects
        <div className={
            'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group' 
            + classes
        }>
            {/* Skill icon container with hover effects */}
            <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
                <img
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label} 
                />
            </figure>

            {/* Skill details section */}
            <div>
                <h3>{label}</h3>
                <p className='text-zinc-900 text-sm'>{desc}</p>
            </div>
        </div>
    );
};

// PropTypes for type checking and documentation
SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,   // Skill icon source (required)
    label: PropTypes.string.isRequired,    // Skill name (required)
    desc: PropTypes.string.isRequired,     // Skill description (required)
    classes: PropTypes.string.isRequired,  // Additional CSS classes (required)
};

export default SkillCard;