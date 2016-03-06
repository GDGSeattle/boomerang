angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Seattle',
        'id'            : '104304419342230315027',
        'googleApi'     : 'AIzaSyB9MOcBwx-T2RupDg_GeYgGIpQRiiu-iSs',
        'pwaId'         : '', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdgdevfest2015.com',
        'twitter'       : 'seattlegdg',
        'facebook'      : '',
        'youtube'       : 'UCWfeS6EKrOrq1YfzTtZJfug',
        'meetup'        : 'seattle-gdg',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Android Development for Beginners',
            subtitle: 'Google Developers Study Jams is a free series of global, community-run, in-person study groups.',
            button: {
                text: 'Learn More',
                url: 'http://developerstudyjams.com/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
