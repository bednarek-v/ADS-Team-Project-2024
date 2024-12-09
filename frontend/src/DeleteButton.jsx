import React from 'react';
import styled from 'styled-components';


/**
 * DeleteButton is a React functional component that renders a styled button.
 * Upon being clicked, it triggers a deletion action for a specific offer.
 *
 * This button was created by aaronross1 on https://uiverse.io/aaronross1/swift-seahorse-12
 *
 * @param {Object} props - The component's props.
 * @param {function} props.onDelete - A callback function to execute when the button is clicked.
 *   It receives the `id` of the offer as an argument.
 * @param {Object} props.offer - An object representing the offer to be deleted.
 *   It must contain an `id` property.
 *
 * @returns {JSX.Element} A JSX element*/


const DeleteButton = ({onDelete, offer}) => {
  return (
    <StyledWrapper>
      <button className="delete-button" onClick={() => onDelete(offer.id)}>
        <svg className="delete-svgIcon" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .delete-button {
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
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;  
    flex-shrink: 0;
    padding: 0;    
  }

  .delete-svgIcon {
    width: 15px;
    transition-duration: 0.6s;
      flex: 0 0 auto;
  }

  .delete-svgIcon path {
    fill: #fafafa;
  }

  .delete-button:hover {
    width: 90px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
  }

  .delete-button:hover .delete-svgIcon {
    width: 20px;
    transition-duration: 0.6s;
    transform: translateY(60%);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  .delete-button::before {
    display: none;
    content: "Delete";
    color: #fafafa;
    transition-duration: 0.6s;
    font-size: 2px;
  }

  .delete-button:hover::before {
    display: block;
    padding-right: 10px;
    font-size: 13px;
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.6s;
  }`;

export default DeleteButton;
