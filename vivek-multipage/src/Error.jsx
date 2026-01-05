// import React from "react";
// import styled from "styled-components";
// import { Button } from "./styles/Button";
// import { NavLink } from "react-router-dom";

// function Error(){
//   return (
//     <Wrapper>
//       <img src="../images/error.svg" alt="error" />
//       <NavLink to="/">
//         <Button className="btn"> Go Back</Button>
//       </NavLink>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   .btn {
//     font-size: 1.8rem;
//     margin-top: 3rem;
//   }
// `;

// export default Error;

// // ------------------------------------------------

import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="content">
        <img src="../images/error.svg" alt="Page not found" />

        <h2>Page Not Found</h2>
        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <NavLink to="/">
          <Button className="btn">Go Back Home</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #626366ff, #979ec0ff);
  color: white;

  .content {
    text-align: center;
    max-width: 420px;
    padding: 3rem 2.5rem;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    animation: fadeInUp 0.6s ease-out;
  }

  img {
    width: 100%;
    max-width: 260px;
    margin: 0 auto 2rem;
    animation: float 4s ease-in-out infinite;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 600;
    color: #f8fafc;
    margin-bottom: 1rem;
  }

  p {
    font-size: 2rem;
    color: #f9f9f9ff;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    font-family: "Lobster", sans-serif;
    
  }

  .btn {
    font-size: 1.4rem;
    padding: 1rem 3rem;
    border-radius: 3rem;
    font-family: "Gluten", cursive;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default Error;

