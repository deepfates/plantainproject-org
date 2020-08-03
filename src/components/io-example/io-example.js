import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <a href="https://www.paypal.com/donate/?token=BEiCDY1OjBIiHfgWeCQI2wjzNXKjHCGNN3cWguM7dEqfbZRT3FPtmN-K0PMJXrUlIxmGNG&country.x=US&locale.x=US">
      <Container isVisible={isVisible}>
        <Title as="h1" size="large" tag="span">Help Us grow</Title>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="AF3RUKY9GR4T2" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
      </Container></a>
    )}
  </IO>
);

export default IOExample;
