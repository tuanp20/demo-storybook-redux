import { Tag } from './Tag';
export default {
    title: 'Component/Tag',
    component: Tag,
    tags: ['autodocs'],
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};

export const Hight = {
    args: {
        color: 'red',
        label: 'Hight',
    },
};
export const Medium = {
    args: {
        color: 'blue',
        label: 'Medium',
    },
};
export const Low = {
    args: {
        color: 'grey',
        label: 'Low',
    },
};