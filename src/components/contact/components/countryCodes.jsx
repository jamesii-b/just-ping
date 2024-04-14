import React from 'react';

const countryCodes = [
    { code: '+1', name: 'USA' },
    { code: '+1', name: 'Canada' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    { code: '+33', name: 'France' },
    { code: '+34', name: 'Spain' },
    { code: '+39', name: 'Italy' },
    { code: '+41', name: 'Switzerland' },
    { code: '+44', name: 'UK' },
    { code: '+46', name: 'Sweden' },
    { code: '+48', name: 'Poland' },
    { code: '+49', name: 'Germany' },
    { code: '+52', name: 'Mexico' },
    { code: '+55', name: 'Brazil' },
    { code: '+61', name: 'Australia' },
    { code: '+62', name: 'Indonesia' },
    { code: '+66', name: 'Thailand' },
    { code: '+7', name: 'Russia' },
    { code: '+81', name: 'Japan' },
    { code: '+82', name: 'South Korea' },
    { code: '+86', name: 'China' },
    { code: '+886', name: 'Taiwan' },
    { code: '+90', name: 'Turkey' },
    { code: '+91', name: 'India' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+977', name: 'Nepal' }
];

function CountryCodes() {
    return (

        <>
            {countryCodes.map((country, index) => (
                <option key={index} value={country.code}>{country.code} ({country.name})</option>
            ))}
        </>
    );
}

export default CountryCodes;

