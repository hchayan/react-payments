import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../../constants/constant';

export const CardExpireDateInputWrapper = styled.div`
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

  input {
    &:first-child {
      text-align: right;
    }
    &:last-child {
      text-align: left;
    }
  }

  .input-container {
    display: flex;
    background-color: ${COLOR.DEFAULT_BG};
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    .input-separator {
      display: inline-block;
      min-width: 0.8rem;
      height: 45px;
      line-height: 41px;
      text-align: center;
      color: ${COLOR.MINT};
    }

    .gray {
      color: ${COLOR.DEFAULT};
    }
  }

  .expire-date-container {
    width: 40%;

    input[name='month'] {
      text-align: right;
    }

    input[name='year'] {
      text-align: left;
    }
  }
`;
