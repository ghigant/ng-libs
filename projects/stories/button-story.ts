import { storiesOf } from '@storybook/angular';

import { ButtonComponent } from '../buttons/src/lib/button/button.component';

export default storiesOf('My Button', module)
  .add('with text', () => ({
    component: ButtonComponent,
    props: {
      label: 'Demo Button',
      handleClick: alert
    },
}));
