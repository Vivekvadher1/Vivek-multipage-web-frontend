// // Using formsfree to submit form

// import styled from "styled-components";

// const Contact = () => {
//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;

//     .container {s
//       margin-top: 6rem;
//       text-align: center;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;
            

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading">Feel Free to Contact us</h2>

//       <div className="container">
//         <div className="contact-form">
//           <form action="#" method="POST" className="contact-inputs">
//             <input
//               type="text"
//               name="username"
//               placeholder="Name"
//               autoComplete="off"
//               required
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               required
//             />

//             <textarea
//               name="message"
//               cols="30"
//               rows="6"
//               placeholder="Message"
//               autoComplete="off"
//               required
//             ></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Contact;



// Using formsfree to submit form

import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    background: ${({ theme }) => theme.colors.bg};

    .common-heading {
      text-align: center;
      font-size: 3.6rem;
      margin-bottom: 4rem;
    }

    .container {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
    }

    .contact-form {
      max-width: 50rem;
      width: 100%;
      background: ${({ theme }) => theme.colors.white};
      padding: 4rem;
      border-radius: 1.2rem;
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.15);
    }

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      input,
      textarea {
        width: 100%;
        padding: 1.4rem 1.6rem;
        font-size: 1.6rem;
        border-radius: 0.8rem;
        border: 1px solid #ccc;
        outline: none;
        transition: all 0.25s ease;
        font-family: inherit;
      }

      input::placeholder,
      textarea::placeholder {
        color: #999;
      }

      input:focus,
      textarea:focus {
        border-color: ${({ theme }) => theme.colors.btn};
        box-shadow: 0 0 0 3px
          rgba(56, 189, 248, 0.25);
      }

      textarea {
        resize: none;
      }

      input[type="submit"] {
        max-width: 18rem;
        align-self: center;
        padding: 1.2rem;
        font-size: 1.7rem;
        font-weight: 600;
        border-radius: 5rem;
        cursor: pointer;
        border: none;
        background-color: ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.white};
        transition: all 0.3s ease;
      }

      input[type="submit"]:hover {
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.btn};
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      }

      input[type="submit"]:active {
        transform: translateY(0);
        box-shadow: none;
      }
    }

    /* mobile */
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .contact-form {
        padding: 3rem 2.5rem;
      }

      .common-heading {
        font-size: 3rem;
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>

      <div className="container">
        <div className="contact-form">
          <form action="#" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Message"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
