import React from 'react';
import styled from 'styled-components';

/*
* The following SVG icon was retrieved from svgrepo.com. No changes have been made to the SVG itself.
* Many thanks to the Dazzle Line Icons collection. This button can be found on the following link:
* https://www.svgrepo.com/svg/533713/sort
* The animation comes from the Delete button, credits to aaronross1 on https://uiverse.io/aaronross1/swift-seahorse-12
* This animation was then changed to better fit the need of this component.
* */

const SortButton = ({handleSort, key}) => {
    return (
        <StyledWrapper>
            <button className="sort-button" onClick={() => handleSort(key)}>
                <svg className="sort-svgIcon" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2238 6.69602 15.3797 6.70858 15.5393C6.72305 15.7232 6.93724 15.9374 7.36561 16.3657L11.4342 20.4344C11.6323 20.6324 11.7313 20.7314 11.8454 20.7685C11.9458 20.8011 12.054 20.8011 12.1544 20.7685C12.2686 20.7314 12.3676 20.6324 12.5656 20.4344L16.6342 16.3657C17.0626 15.9374 17.2768 15.7232 17.2913 15.5393C17.3038 15.3797 17.2392 15.2238 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;  
  justify-content: flex-end;  

  .sort-button {
    width: 25px;
    height: 25px;
    border-radius: 15%;
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
    margin-left: auto;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0;  
  }

  .sort-svgIcon {
    width: 20px;
    transition-duration: 0.6s;
    flex: 0 0 auto;
  }

  .sort-svgIcon path {
    fill: #fafafa;
  }

  .sort-button:hover {
    transition-duration: 0.3s;
    background-color: #646cff;
    align-items: center;
  }

  .sort-button:hover .sort-svgIcon {
    width: 23px;
    transition-duration: 0.6s;
    transform: translateY(60%);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  
  .sort-button:hover::before {
    display: block;
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.6s;
  }
`;

export default SortButton;