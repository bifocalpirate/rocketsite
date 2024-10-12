import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test';
import { DopestocksComponent } from './dopestocks.component';



const meta: Meta<DopestocksComponent> = {
    title: 'DopeStocks',
    component: DopestocksComponent,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args: {
    },
};

export default meta;
type Story = StoryObj<DopestocksComponent>;

export const Default: Story = {
    args: {
        
    },
};
