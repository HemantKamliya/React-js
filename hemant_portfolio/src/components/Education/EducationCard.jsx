import React from 'react';
import { styled } from '@mui/material/styles';
import { Fade } from 'react-awesome-reveal';
import eduImgWhite from '../../assets/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/education/eduImgBlack.svg';
import './Education.css';

// Your exact original theme
const theme = {
    type: 'dark',
    primary: '#823ae0',
    primary1: '#fbd9ad',
    primary400: '#9456e5',
    primary600: '#762ad9',
    primary80: '#823ae0cc',
    primary50: '#823ae080',
    primary30: '#823ae04d',
    secondary: '#212121',
    secondary70: '#212121b3',
    secondary50: '#21212180',
    tertiary: '#eaeaea',
    tertiary80: '#eaeaeacc',
    tertiary70: '#eaeaeab3',
    tertiary50: '#eaeaea80',
};

const EducationCardStyle = styled('div')(() => ({
    backgroundColor: theme.primary30,
    '&:hover': {
        backgroundColor: theme.primary50,
    },
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '16px',
}));

const EducardImg = styled('div')(() => ({
    backgroundColor: theme.primary,
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '24px',
    flexShrink: 0,
    '@media (max-width: 336px)': {  // Only change for very small screens
        width: '50px',
        height: '50px',
        marginRight: '12px',
    }
}));

const EducationDetails = styled('div')(() => ({
    flex: 1,
    '& h4': {
        color: theme.tertiary,
        marginBottom: '8px',
        fontSize: '18px',
    },
    '& h5': {
        color: theme.tertiary80,
        marginBottom: '4px',
        fontSize: '16px',
    },
    '& h6': {
        color: theme.primary1,
        marginBottom: '12px',
        fontSize: '14px',
    }
}));

function EducationCard({ id, institution, course, startYear, endYear, percentage }) {
    return (
        <Fade bottom className="w-full">
            <EducationCardStyle key={id}>
                <EducardImg>
                    <img 
                        src={theme.type === 'light' ? eduImgBlack : eduImgWhite} 
                        alt=""
                        style={{ width: '50%', height: '50%' }}
                    />
                </EducardImg>
                <EducationDetails>
                    <h6>{startYear}-{endYear}</h6>
                    <h4>{course}</h4>
                    <h5>{institution}</h5>
                    <h5>Passed with: {percentage}</h5>
                </EducationDetails>
            </EducationCardStyle>
        </Fade>
    );
}

export default EducationCard;