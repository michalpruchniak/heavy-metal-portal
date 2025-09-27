const ResultsVariants = {
    bands: {
        label: 'Bands',
        imageKey: 'logo',
        containerClass: 'h-20 w-20 transition-transform duration-300 hover:scale-110 ',
        imageClass: 'h-20 w-20 object-contain',
        altText: 'Logo',
        route: {
            name: 'band.show',
            paramKey: 'band',
        },
    },
    albums: {
        label: 'Albums',
        imageKey: 'cover',
        containerClass: 'group relative h-[130px] w-[130px] transform overflow-hidden border transition-transform duration-300 hover:scale-105',
        imageClass: 'h-full w-full object-cover',
        altKey: 'name',
        route: {
            name: 'album.show',
            paramKey: 'album',
        },
    },
};

export default ResultsVariants;
