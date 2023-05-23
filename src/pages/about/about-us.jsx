import React, { useState } from 'react';
import { AboutUsPageStyles, TopAboutSection, FooterSection} from './aboutus.styled';
import { AboutUsData } from '../../constants/aboutdata';

const AboutUs = () => {
 const[toggleLink, setToggleLink] = useState(false);

  return (
    <AboutUsPageStyles>

     {AboutUsData.map((data, id) => {
      return <TopAboutSection key={id}>
        <div className='Button' onClick={() => {setToggleLink(!toggleLink)}}><h1>{data.title}</h1></div>
        {toggleLink && <div>
         <p>{data.description}</p>
        </div>}
      </TopAboutSection>
     })}


      <FooterSection>
       <div><p>Copyright&copy;2023Gtechdevelopers.com || All rights reserved.</p></div>
      </FooterSection>
    </AboutUsPageStyles>
  );
}

export default AboutUs;
