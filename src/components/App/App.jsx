import { GlobalStyle } from 'components/GlobalStyle';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
import { Container, Section, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>

        <ContactList />
      </Section>
      <ToastContainer autoClose={1500} transition={Slide} />
      <GlobalStyle />
    </Container>
  );
};
