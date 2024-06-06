import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <EmailContext.Provider value={{ emailSent, setEmailSent }}>
      {children}
    </EmailContext.Provider>
  );
};

EmailProvider.propTypes = {
    children: PropTypes.any,
    };

export default EmailContext;
