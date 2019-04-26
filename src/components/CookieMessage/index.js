import React, { useState } from 'react';

const CookieMessage = () => {
  const [visible, setVisible] = useState(true);

  const hide = () => {
    setVisible(false);
  };

  if (visible) {
    return (
      <div className="fixed-bottom bg-dark">
        <table className="table table-borderless m-0">
          <tbody>
            <tr>
              <td className="text-light">
                We use cookies to understand the performance of our web site,
                enable social media features, and serve more relevant content to
                you. We may also use cookies on our and our partners’ behalf to
                help us manage advertising and assess the performance of our
                campaigns. For further information please see our&nbsp;
                <a href="/cookiepolicy" title="Cookie Policy.">
                  Cookie Policy
                </a>
                .
              </td>
              <td className="align-middle">
                <button className="btn btn-light btn-sm" onClick={hide}>
                  I Agree
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default CookieMessage;
