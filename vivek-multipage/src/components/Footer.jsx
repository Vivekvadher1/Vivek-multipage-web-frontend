import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Vivek Vadher</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebookF className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

// const Wrapper = styled.section`
//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 2rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);
//   }
//   .contact-short-btn {
//     justify-self: end;
//     align-self: center;
//   }

//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};

//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }

//     .footer-bottom--section {
//       padding-top: 9rem;

//       hr {
//         margin-bottom: 2rem;
//         color: ${({ theme }) => theme.colors.hr};
//         height: 0.1px;
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 95vw;
//       padding: 2rem 0rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       .contact-short-btn {
//         text-align: center;
//         justify-self: flex-start;
//       }
//     }

//     footer .footer-bottom--section {
//       padding-top: 3.2rem;
//     }
//   }
// `;

const Wrapper = styled.section`
  /* =========================
     CONTACT SHORT SECTION
  ========================== */
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 8rem;
    background: linear-gradient(
      135deg,
      #020617ff, 
      #c6c7ceff
    );
    border-radius: 2.5rem;
    box-shadow: 0 2rem 5rem rgba(255, 255, 255, 0.25);
    transform: translateY(50%);
    color: ${({ theme }) => theme.colors.white};
  }

  .contact-short h3 {
    margin-bottom: 1rem;
    font-size: 2.4rem;
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  /* =========================
     FOOTER MAIN
  ========================== */
  footer {
    padding: 16rem 0 9rem 0;
    background: linear-gradient(
      180deg,
      #020617,
      ${({ theme }) => theme.colors.footer_bg}
    );

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: 2rem;
      letter-spacing: 0.05rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      line-height: 1.7;
      font-size: 1.6rem;
    }

    /* =========================
       SUBSCRIBE FORM
    ========================== */
    .footer-subscribe form {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    .footer-subscribe input[type="email"] {
      padding: 1.2rem 1.6rem;
      border-radius: 0.6rem;
      border: none;
      outline: none;
      font-size: 1.5rem;
    }

    .footer-subscribe input[type="submit"] {
      padding: 1.1rem;
      border-radius: 0.6rem;
      border: none;
      cursor: pointer;
      font-size: 1.6rem;
      font-weight: 600;
      background: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease;
    }

    .footer-subscribe input[type="submit"]:hover {
      background: ${({ theme }) => theme.colors.helper};
      transform: translateY(-2px);
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.6);
    }

    /* =========================
       SOCIAL ICONS
    ========================== */
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1.2rem;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.25);
        transition: all 0.3s ease;

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.2rem;
          cursor: pointer;
        }

        &:hover {
          background: ${({ theme }) => theme.colors.btn};
          border-color: ${({ theme }) => theme.colors.btn};
          transform: translateY(-4px);
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.7);
        }
      }
    }

    /* =========================
       FOOTER BOTTOM
    ========================== */
    .footer-bottom--section {
      padding-top: 8rem;

      hr {
        margin-bottom: 3rem;
        border: none;
        height: 0.1rem;
        background-color: rgba(255, 255, 255, 0.15);
      }

      p {
        font-size: 1.4rem;
      }

      div p {
        cursor: pointer;
        transition: color 0.3s ease;
      }

      div p:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  /* =========================
     MOBILE
  ========================== */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 3rem 2.5rem;
      transform: translateY(35%);
      text-align: center;
    }

    .contact-short-btn {
      justify-self: center;
      margin-top: 2rem;
    }

    footer {
      padding-top: 14rem;
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
      text-align: center;
    }
  }
`;


export default Footer;
