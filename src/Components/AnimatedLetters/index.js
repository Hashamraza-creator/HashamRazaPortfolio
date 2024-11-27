import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span 
                    key={char + i} 
                    className={`${letterClass} _${i + idx}`}
                >
                     {char === ' ' ? '\u00A0' : char} {/* Preserve spaces */}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters;
