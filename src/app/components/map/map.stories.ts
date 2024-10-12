import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test';
import { MapComponent } from './map.component';

const meta: Meta<MapComponent> = {
    title: 'Map',
    component: MapComponent,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args: {
    },
};

export default meta;
type Story = StoryObj<MapComponent>;

export const Default: Story = {
    args: {

    },
};
