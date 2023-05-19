import styled from 'styled-components';

export const SignupPageStyles = styled.div`
 width: 100%;
 height: calc(100vh - 60px);
 display: grid;
 place-items: center;
 margin-top: 4rem;
`

export const SignupCard = styled.div`
 width: 100%;
 padding: .2rem .4rem;
 background: white;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
 grid-gap: 1rem;
 @media (min-width: 426px){
  width: 70%;
  padding: 1rem 1rem;
 }
 @media (min-width: 769px){
  width: 60%;
  padding: 1rem 1rem;
 }

 & .Leftsection{
  width: 100%;
  background: whitesmoke;
  border-radius: 3px;
  padding: 1rem .2rem;
  & > div{
   width: 90%;
   padding: .4rem 1rem;
   border-bottom: 1px solid rgba(0, 0, 0, .2);
   margin: .1rem auto;
   & > h1{
    font-size: 1.5rem;
    color: skyblue;
    text-align: center;
   }
  }

  & > form{
   width: 90%;
   padding: .4rem 1rem;

   & .Formgroups{
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    & > span{
     font-size: 1.2rem;
     padding-bottom: .4rem;
     color: grey;
    }

    & > input{
     padding: .8rem 1rem;
     border: none;
     outline: none;
     border-radius: 3px;
    }

    & input[type='submit']{
     color: white;
     background: black;
     cursor: pointer;
     transition: all 500ms;
     &:hover{
      transform: scale(.99);
     }
    }

    & > p{
     font-size: .8rem;
     padding: 1rem .4rem;
     border-top: 5px solid goldenrod;
     border-radius: 3px;
     margin-top: 1rem;
     font-style: italic;
    }
   }
  }
 }

 & .Rightsection{
  width: 100%;
  border-radius: 3px;
  padding: 1rem .2rem;
  position: relative;
  & > .Title{
   width: 90%;
   padding: .4rem 1rem;
   margin: 1rem auto;
   & > h1{
    font-size: 1.5rem;
    color: skyblue;
    text-align: center;
   }
  }

  & .Alternatives{
   width: 80%;
   padding: 1rem 1rem;
   border-radius: 3px;
   background: skyblue;
   margin: 1.5rem auto;
   cursor: pointer;
   transition: all 500ms;
   &:hover{
    transform: scale(.99);
   }
   & > p{
    text-align: center;
    padding: .2rem auto;
    color: white;
   }
  }

  & .Copyright{
   width: 100%;
   position: absolute;
   bottom: 1rem;
   & > p{
    text-align: center;
    font-size: .8rem;
   }
  }
 }

`

// ******************************* SHopping page *******************************
export const ShoppingPageStyles = styled.section`
 width: 100%;
 height: calc(100vh - 60px);
 margin-top: 6rem;
`

export const ProductConatiner = styled.div`
 width: 98%;
 margin: 1rem auto;
 @media (min-width: 426px){
  width: 90%;
  padding: 1rem 1rem;
  background: white;
  border-radius: 3px;
 }
 @media (min-width: 769px){
  width: 82%;
  padding: 1rem 1rem;
  background: white;
  border-radius: 3px;
 }

 & .Producttitle{
  width: 100%;
  padding: 1rem .1rem;
  
  & h1{
   font-size: 1.5rem;
   color: orange;
  }
 }

 & .Products{
  width: 100%;
  padding: 1rem .1rem;
  background: whitesmoke;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  grid-gap: 1rem;

  & .ProductCard{
   width: 290px;
   padding: 1rem .4rem;
   border-radius: 3px;
   margin: .2rem auto;

   & > .Image{
    width: 100%;
    height: 230px;
    background: skyblue;
    overflow: hidden;
   }

   & > .Title{
    width: 100%;
    & h2{
     text-align: center;
    }
   }

   & > .Amount{
    width: 100%;
    & p{
     text-align: center;
    }
   }

   & > .Button{
    width: 100%;
    display: grid;
    place-items: center;
    & button{
     background: black;
     color: white;
     text-align: center;
     padding: .4rem 1rem;
     border-radius: 15px;
     outline: none;
     border: none;
     cursor: pointer;
     margin-top: .6rem;
    }
   }
  }
 }
`