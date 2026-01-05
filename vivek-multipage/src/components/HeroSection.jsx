// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles/Button";
// import { useGlobalContext } from "../custom-hooks/globalcontext";

// function HeroSection({name, image}) {
//   // using the useContext and AppContext
//   //   const firstName = useContext(AppContext);

//   const {fname , age} = useGlobalContext();
//   // const { name , image} = useGlobalContext();
//   return (
//     <Wrapper>
//       <div className="container grid grid-two-column">
//         {/* div for text */}
//         <div className="section-hero-data ">
//           <p className="hero-top-data">THIS IS ME</p>
//           <h1 className="hero-heading">{name}</h1>
//           <p className="hero-para">
//             Hii, Myself {fname} and my age is {age}. An enthusatic webdeveloper.
//           </p>

//           <Button className="btn hireme-btn">
//             <NavLink to="/contact">Hire Me!</NavLink>
//           </Button>
//         </div>

//         {/* div for image */}
//         <div className="section-hero-image">
//           <picture>
//             <img src={image} alt="hero image" className="hero-img" />
//           </picture>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .section-hero-data {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }

//   .btn {
//     max-width: 16rem;
//   }

//   .hero-top-data {
//     text-transform: uppercase;
//     font-weight: 500;
//     font-size: 1.5rem;
//     color: ${({ theme }) => theme.colors.helper};
//   }

//   .hero-heading {
//     text-transform: uppercase;
//     font-size: 6.4rem;
//   }

//   .hero-para {
//     margin-top: 1.5rem;
//     margin-bottom: 3.4rem;
//     max-width: 60rem;
//   }

//   .section-hero-image {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   picture {
//     text-align: center;
//   }

//   .hero-img {
//     max-width: 80%;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 7.2rem;
//     }
//   }
// `;

// export default HeroSection;


 import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../custom-hooks/globalcontext";

function HeroSection({ name, image }) {
  const { fname, age } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        {/* text section */}
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            Hi, Myself {fname} and my age is {age}. An enthusiastic web developer.
          </p>

          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire Me!</NavLink>
          </Button>
        </div>

        {/* image section */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;

  /* subtle background */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.bg} 70%,
    ${({ theme }) => theme.colors.helper}15%
  );

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
    letter-spacing: 0.2rem;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
    line-height: 1.2;
    letter-spacing: 0.3rem;
    position: relative;
  }

  /* accent underline */
  .hero-heading::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 6rem;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.helper};
  }

  .hero-para {
    margin-top: 2.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-size: 1.8rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }

  .hireme-btn {
    transition: all 0.3s ease;
  }

  .hireme-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
    border-radius: 1.2rem;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .hero-img:hover {
    transform: scale(1.05);
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.3);
  }

  /* responsive */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }

    .section-hero-data {
      align-items: center;
      text-align: center;
    }

    .hero-heading {
      font-size: 4.2rem;
    }

    .hero-heading::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .hero-img {
      max-width: 90%;
    }
  }
`;



 export default HeroSection;

