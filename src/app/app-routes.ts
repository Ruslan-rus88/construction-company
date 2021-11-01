export const paths = {
    home: '',
    Leistungen: 'Leistungen',
    trockenbau: 'Leistungen/Trockenbau',
    abbruch: 'Leistungen/abbruch-entkernung',
    schadstoffsanierung: 'Leistungen/Schadstoffsanierung',
    gartenpflegearbeiten: 'Leistungen/Gartenpflegearbeiten',
    Karriere: 'Karriere',
    Kontakt: 'Kontakt'
}

export const navRoutes = [
    {
        title: 'Home',
        path: paths.home,
        exact: true,
        subRoutes: []
    },
    {
        title: 'Leistungen',
        path: paths.Leistungen,
        exact: true,
        subRoutes: [
            {
                title: 'Trockenbau',
                path: paths.trockenbau,
                exact: true,        
            },
            {
                title: 'Abbruch/Entkernung',
                path: paths.abbruch,
                exact: true,        
            },
            {
                title: 'Schadstoffsanierung',
                path: paths.schadstoffsanierung,
                exact: true,        
            },
            {
                title: 'Gartenpflegearbeiten',
                path: paths.gartenpflegearbeiten,
                exact: true,        
            },            
        ]
    },
    {
        title: 'Karriere',
        path: paths.Karriere,
        exact: true,
        subRoutes: []
    },
    {
        title: 'Kontakt',
        path: paths.Kontakt,
        exact: true,
        subRoutes: []
    },
];
