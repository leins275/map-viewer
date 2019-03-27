import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';

import messages from '../messages';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
`;

function Footer() {
  return (
    <Wrapper>
      <section>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
            Language
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/?locale=ru">Russian</Dropdown.Item>
            <Dropdown.Item href="/?locale=en">English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: (
              <a href="https://github.com/LanskovNV/MapViewer">MapViewer</a>
            )
          }}
        />
      </section>
    </Wrapper>
  );
}

export default injectIntl(Footer);
