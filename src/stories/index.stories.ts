import { storiesOf } from '@storybook/angular';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../../projects/buttons/src/lib/button/button.component';
import { Welcome, Button } from '@storybook/angular/demo';
import { createTNode } from '@angular/core/src/render3/instructions';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));

storiesOf('My Button', module)
  .add('with text', () => ({
    component: ButtonComponent,
    props: {
      label: 'Demo Button',
      click: alert
    },
  }))
  .add('primary button', () => ({
    component: ButtonComponent,
    props: {
      label: 'Primary Button',
      click: action('Primary Button - click')
    },
  }))
  .add('html label button', () => ({
    component: ButtonComponent,
    props: {
      label: '<strong>Primary Button<strong>',
      click: alert
    },
  }))
  .add('Submit', () => ({
    component: ButtonComponent,
    props: {
      type: 'submit',
      label: 'Submit Button',
      click: action('Primary Button - click')
    },
  }));

