export const paths = {
    home: '',
    leistungen: 'leistungen',
    trockenbau: 'leistungen/trockenbau',
    altbausanierung: 'leistungen/altbausanierung',
    abbruch: 'leistungen/abbruch-entkernung',
    schadstoffsanierung: 'leistungen/schadstoffsanierung',
    mobelmontage: 'leistungen/mobelmontage',
    referenzen: 'referenzen',
    karriere: 'karriere',
    kontakt: 'kontakt'
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
        path: paths.leistungen,
        exact: true,
        subRoutes: [
            {
                title: 'Altbausanierung',
                path: paths.altbausanierung,
                exact: true,
            },
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
                title: 'Möbelmontage',
                path: paths.mobelmontage,
                exact: true,
            }
        ]
    },
    {
        title: 'Referenzen',
        path: paths.referenzen,
        exact: true,
        subRoutes: []
    },
    {
        title: 'Karriere',
        path: paths.karriere,
        exact: true,
        subRoutes: []
    },
    {
        title: 'Kontakt',
        path: paths.kontakt,
        exact: true,
        subRoutes: []
    },
];
