import styled from 'styled-components';

export const CartProductDisplay = styled.div`
 width: 100%;
 height: calc(100vh - 60px);
 margin-top: 6rem;
`

export const CardProducts = styled.div`
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

 & .ShoppingBtn{
  border: none;
  outline: none;
  padding: .6rem 1rem;
  background: skyblue;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 3px;
  box-shadow: 0 0 2px 2px rgba(0,0,0,.2);
  height: 40px;
  width: 160px;
 }

 & .Productssection{
  width: 100%;
  padding: .5rem .1rem;
  background: whitesmoke;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  grid-gap: 1rem;

  & > .Products{
   width: 100%;
   overflow-y: scroll;
   height: 70vh;
   &::-webkit-scrollbar{
    display: none;
   }

   & .ProductCard{
   width: 90%;
   padding: 1rem 1rem;
   display: flex;
   align-items: center;
   background: white;
   border-radius: 5px;
   margin: 1rem auto;
   flex-wrap: wrap;
   box-shadow: 0 0 5px 3px rgba(0,0,0,.2);

   & .Image{
    width: 120px;
    height: 100px;
    overflow: hidden;
    background: silver;
    border-radius: 3px;
    & > img{
     width: 100%;
     height: 100%;
    }
   }

   & .Leftcard{
    margin-left: 1rem;
    & > .Title{
     width: 100%;
     & h2{
      padding: .4rem .4rem;
      font-size: 1.3rem;
     }
    }

    & > .Amount{
     width: 100%;
     & p{
      padding: .6rem .4rem;
      font-size: 1.3rem;
     }
    }
   }

   & .Buttons{
    width: 100%;

    & button{
     outline: none;
     border: none;
     padding: .2rem 1rem;
     font-size: 1.5rem;
     font-weight: 600;
     cursor: pointer;
    }
    & input{
     width: 50px;
     padding: .2rem 1rem;
     font-size: 1.2rem;
     outline: none;
     border: none;
     text-align: center;
    }
   }
  }
  }

  & .Shoppingsummary{
   width: 96%;
   margin-top: 1rem;
   
   & .Topsummary{
    width: 100%;
    padding: 1rem .2rem;
    background: white;
    box-shadow: 0 0 5px 3px rgba(0,0,0,.2);
    border-radius: 3px;

    & h1{
     width: 100%;
     font-size: 1.5rem;
     color: skyblue;
     padding-bottom: 1rem;
     border-bottom: 1px solid rgba(0,0,0,.2);
    }

    & > p{
     width: 100%;
     padding: .4rem .2rem;
    }
   }

   & > .Paymethods{
    width: 100%;
    padding: 1rem .2rem;
    background: white;
    margin-top: 1rem;
    box-shadow: 0 0 5px 3px rgba(0,0,0,.2);
    border-radius: 3px;

    & h1{
     width: 100%;
     font-size: 1.5rem;
     color: skyblue;
     padding-bottom: 1rem;
     border-bottom: 1px solid rgba(0,0,0,.2);
    }
   }
  }
 }
`