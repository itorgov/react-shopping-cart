export const Price = ({value}) => {
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

    return formatter.format(value / 100);
};
