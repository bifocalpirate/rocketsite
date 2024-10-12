import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test';
import { DopeStatsComponent } from './dopestats.component';
import { TradingService } from '../../services/trading.service';


const meta: Meta<DopeStatsComponent> = {
    title: 'DopeStats',
    component: DopeStatsComponent,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators:[
        moduleMetadata({
            providers:[TradingService]
        })
    ],
    args: {        
    },
};

export default meta;
type Story = StoryObj<DopeStatsComponent>;

export const Default: Story = {
    
    args: {
        
        dopeStat: {
            cash: 100,
            day: 1,
            debt:-100,
            stokvel:0            
        },
    },
};
