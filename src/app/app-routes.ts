export const paths = {
    home: 'home',
    services: 'services',
    trockenbau: 'services/Trockenbau',
    abbruch: 'services/abbruch-entkernung',
    schadstoffsanierung: 'services/Schadstoffsanierung',
    gartenpflegearbeiten: 'services/Gartenpflegearbeiten',
    career: 'career',
    contacts: 'contacts'
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
        path: paths.services,
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
        path: paths.career,
        exact: true,
        subRoutes: []
    },
    {
        title: 'Kontakt',
        path: paths.contacts,
        exact: true,
        subRoutes: []
    },
];
