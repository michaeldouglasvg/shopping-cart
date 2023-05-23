import styled from 'styled-components';

export const AboutUsPageStyles = styled.div`
 width: 100%;
 height: calc(100vh - 100px);
 margin-top: 7rem;
`

export const TopAboutSection = styled.div`
 width: 94%;
 padding: 1rem .2rem;
 background: white;
 margin: .1rem auto;
 cursor: pointer;
 border-left: 5px solid goldenrod;
 
 & .Button{
  width: 100%;
  height: 30px;

  & h1{
   padding-left: .2rem;
   padding-top: .4rem;
  }
 }

 &:hover{
  transition: all 500ms;
  background: skyblue;
 }

 @media (min-width: 769px){
  width: 80%;
  padding: 1rem 1rem;
  border-radius: 3px;
 }
`

export const FooterSection = styled.div`
 width: 100%;
 padding: 2rem .2rem;
 background: white;
 margin: 2rem auto;

 & > div{
  display: grid;
  place-items: center;
  & > p{
   color: grey;
   font-size: .8rem;
  }
 }

 &:hover{
  transition: all 500ms;
  background: black;
 }
 @media (min-width: 769px){
  width: 80%;
  padding: 1rem 1rem;
  border-radius: 3px;
 }
`