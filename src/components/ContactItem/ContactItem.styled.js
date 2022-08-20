import styled from 'styled-components';
import { Button } from '../ContactForm/ContactForm.styled';

export const Contact = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 4px;

  line-height: 1.4em;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactName = styled.span`
  max-width: 42%;
  flex-basis: 42%;
  margin-right: 10px;
  font-weight: 600;
  overflow-wrap: break-word;
`;

export const ContactNumber = styled.span`
  max-width: 35%;
  overflow-wrap: break-word;
`;

export const DelButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;

  padding: 4px 8px;

  transform: translate(0, -50%);
`;
