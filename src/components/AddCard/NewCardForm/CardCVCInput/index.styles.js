import styled from 'styled-components';
import { FONT_SIZE } from '../../../../constants/constant';

export const CardCVCInputWrapper = styled.div`
  margin-bottom: 10px;
  font-size: ${FONT_SIZE.LARGE};

  .input-label {
    font-size: ${FONT_SIZE.SMALL};
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: -0.085rem;
  }

  .input-main {
    display: flex;
    align-items: center;
  }

  .cvc-container {
    width: 40%;

    input {
      margin-right: 0.5rem;
    }

    .help {
      border-radius: 50%;
      border: 1px solid #bababa;
      min-height: 2rem;
      min-width: 2rem;
      align-items: center;
      justify-content: center;
      display: flex;
      cursor: pointer;
      color: #969696;
      font-size: 1.25rem;
    }
  }
`;
