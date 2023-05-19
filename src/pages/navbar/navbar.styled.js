import styled from 'styled-components';

export const NavbarSection = styled.div`
 width: 100%;
 height: 60px;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
 display: flex;
 align-items: center;
 justify-content: space-around;
 background: white;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 99;
 
 & .Logo{
  padding: .2rem .2rem;
  display: flex;

  & .Img{
   width: 80px;
   height: 45px;
   overflow: hidden;
   background: black;
   color: white;
   text-align: center;
   display: grid;
   place-items: center;
   border-radius: 5px 0;
  }

  & div{
   margin-left: .3rem;
   @media (min-width: 426px){
    margin-left: 1rem;
   }
   & > p{
    font-size: 3rem;
    color: skyblue;
    display: none;
    @media (min-width: 426px){
      display: block;
    }
   }
  }
 }

 & .Links{
  display: flex;
  flex-direction: column;
  @media (min-width: 426px){
    flex-direction: row;
  }
  & div{
   height: 25px;
   display: grid;
   place-items: center;
   @media (min-width: 426px){
    margin-left: 1rem;
   }

   & .Link{
    text-decoration: none;
    font-size: 1rem;
    @media (min-width: 426px){
     font-size: 1.5rem;
    }
   } 
  }
 }

 & .Buttons{
  display: flex;
  flex-direction: column;
  @media (min-width: 426px){
    flex-direction: row;
  }
  & div{
   width: 80px;
   @media (min-width: 426px){
     padding: .4rem 1rem;
     background: skyblue;
     border-radius: 3px;
     width: auto;
     margin-left: 1rem;
     &:nth-last-child(1){
      background: green;
      color: white;
     }
   }

   & .Link{
    text-decoration: none;
    font-size: 1rem;
    @media (min-width: 426px){
     font-size: 1.5rem;
     text-align: center;
     color: white;
    }
   }
  }
 }
`