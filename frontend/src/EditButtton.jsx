import React from 'react';
import styled from 'styled-components';

/**
 * EditButton is a React functional component that renders a styled button for editing a job offer.
 *
 * This button was created by aaronross1 on https://uiverse.io/aaronross1/kind-bobcat-81
 *
 * When the button is clicked, it triggers the `updateJobOffer` function with the current `offer` as its argument.
 * It makes use of an SVG icon for visual representation of the edit action.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.updateJobOffer - The function to invoke when the edit button is clicked, taking the current offer as its parameter.
 * @param {Object} props.offer - The current job offer object to be passed to the update function.
 *
 * @returns {JSX.Element} A JSX element rendering the styled edit button.
 */

const EditButton = ({updateJobOffer, offer}) => {
  return (
    <StyledWrapper>
      <button className="edit-button" onClick={() => updateJobOffer(offer)}>
        <svg className="edit-svgIcon" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .edit-button {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #121212;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.6s;
    overflow: hidden;
    position: relative;
    text-decoration: none !important;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0;    
  }

  .edit-svgIcon {
    width: 17px;
    transition-duration: 0.6s;
      flex: 0 0 auto;
  }

  .edit-svgIcon path {
    fill: #fafafa;
  }

  .edit-button:hover {
    width: 90px;
    border-radius: 50px;
    transition-duration: 0.6s;
    background-color: #535bf2;
    align-items: center;
  }

  .edit-button:hover .edit-svgIcon {
    width: 17px;
    transition-duration: 0.6s;
    transform: translateY(60%);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  .edit-button::before {
    display: none;
    content: "Edit";
    color: #fafafa;
    transition-duration: 0.6s;
    font-size: 2px;
  }

  .edit-button:hover::before {
    display: block;
    padding-right: 10px;
    font-size: 13px;
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.6s;
  }`;

export default EditButton;
