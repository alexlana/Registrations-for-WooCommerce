module.exports = {
    themeConfig: {
        nav: [{
                text: 'Getting Started',
                link: '/docs/'
            },
            {
                text: 'Download',
                link: 'https://wordpress.org/plugins/registrations-for-woocommerce/'
            },
        ],

        displayAllHeaders: false,

        sidebar: [
            ['/docs/getting-started/', 'Menu'],
            {
                title: 'Getting Started',
                collapsable: true,
                children: [
                    ['docs/getting-started/installing', 'Installing'],
                    ['docs/getting-started/downloading', 'Downloading'],
                ]
            },
        ]
    },

    sidebar: 'auto',

    markdown: {
        lineNumbers: true
    },

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'en-US', // this will be set as the lang attribute on <html>
          title: 'Registrations for WooCommerce',
          description: 'Official Documentation.',
        },
        '/docs/pt-BR/': {
          lang: 'pt-BR',
          title: 'Registrations for WooCommerce',
          description: 'Documentação Oficial.',
        }
    }
}