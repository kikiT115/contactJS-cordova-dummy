/**
 * Created by tobias on 11.11.15.
 */
require.config({
    baseUrl: 'scripts',
    packages: [
        {
            name: 'widgets',
            location: 'contactJS/widgets',
            main: 'widgets'
        },
        {
            name: 'interpreters',
            location: 'contactJS/interpreters',
            main: 'interpreters'
        }
    ],
    paths: {
        // external libraries
        jquery: 'lib/jquery-2.1.4.min',
        MathUuid: 'lib/Math.uuid',
        contactJS: 'lib/contactJS',
        urijs: 'lib/urijs'
    },
    shim:{
        'jquery': {
            exports: '$'
        },
        'MathUuid': {
            exports: 'MathUuid'
        }
    }
});