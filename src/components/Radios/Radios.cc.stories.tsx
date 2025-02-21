import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import Radios from './Radios';

export default {
    title: '2.Forms/CreditCard',
    component: Radios,
    parameters: {
        actions: {
            handles: ['onChange', 'changed', 'onBlur'],
        },
    },
} as ComponentMeta<typeof Radios>;

const Template: ComponentStory<typeof Radios> = (args) => <Radios {...args} />;

export const CreditCardSelector = Template.bind({});
CreditCardSelector.args = {
    id: 'radios',
    items: [
        {
            id: 'marty-mc-fly-visa-id',
            fingerprint: 'foo-bar-visa',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'visa',
            lastDigits: '1177',
            expiresAt: {
                month: '04',
                year: '22',
            },
        },
        {
            id: 'marty-mc-fly-master-id',
            fingerprint: 'foo-bar-master',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'mastercard',
            lastDigits: '1177',
            expiresAt: {
                month: '11',
                year: '24',
            },
        },
        {
            id: 'marty-mc-fly-amex-id',
            fingerprint: 'foo-bar-amex',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'amex',
            lastDigits: '1177',
            expiresAt: {
                month: '11',
                year: '24',
            },
        },
        {
            id: 'marty-mc-fly-amex-id',
            fingerprint: 'foo-bar-diners',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'diners',
            lastDigits: '1177',
            expiresAt: {
                month: '11',
                year: '24',
            },
        },
    ],
    title: 'How would you like pay for that?',
};

export const CreditCardSelectorSuffix = Template.bind({});
CreditCardSelectorSuffix.args = {
    id: 'radios',
    items: [
        {
            id: 'marty-mc-fly-visa-id',
            fingerprint: 'foo-bar-visa',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'visa',
            lastDigits: '1177',
            expiresAt: {
                month: '04',
                year: '22',
            },
            isRemovable: false,
        },
        {
            id: 'marty-mc-fly-master-id',
            fingerprint: 'foo-bar-master',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'mastercard',
            lastDigits: '1177',
            expiresAt: {
                month: '11',
                year: '24',
            },
            isRemovable: true,
        },
        {
            id: 'marty-mc-fly-amex-id',
            fingerprint: 'foo-bar-amex',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'amex',
            lastDigits: '1177',
            expiresAt: {
                month: '11',
                year: '24',
            },
        },
        {
            id: 'marty-mc-fly-amex-id',
            fingerprint: 'foo-bar-diners',
            isExpired: false,
            name: 'Marty McFly',
            brand: 'diners',
            lastDigits: '1177',
            expiresAt: {
                month: '11',
                year: '24',
            },
        },
    ],
    isRow: true,
    suffix: <div style={{ height: '2rem' }}>
    <Button text="Add new card" theme="primary" />
    </div>,
    title: 'How would you like pay for that?',
};
