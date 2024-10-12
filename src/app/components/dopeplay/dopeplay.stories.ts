import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test';
import { DopeplayComponent } from './dopeplay.component';


const meta: Meta<DopeplayComponent> = {
    title: 'DopePlay',
    component: DopeplayComponent,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args: {
    },
};

export default meta;
type Story = StoryObj<DopeplayComponent>;

export const Default: Story = {
    args: {
    },
};
