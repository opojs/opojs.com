import difference from 'lodash/difference';

export default function index({ head, rootHtml, config, buildManifest }) {
    const { assets, routes: { sync: syncRoutes, async: asyncRoutes } } = buildManifest;
    const { routesToPrefetch } = config;

    // Warn if any of the routes to prefetch no longer exist
    if (__DEV__) {
        routesToPrefetch
        .forEach((route) => {
            if (!syncRoutes[route] && !asyncRoutes[route]) {
                console.warn(`[index.html.js] Unknown route "${route}" declared in \`config.routesToPrefetch\``);
            }
        });
    }

    return `
        <!DOCTYPE html>
        <html ${head.htmlAttributes.toString()}>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />

                ${head.title.toString()}
                ${head.meta.toString()}
                ${head.link.toString()}

                <!-- Rubik from Google-->
                <link href="//ajax.googleapis.com" rel="dns-prefetch">
                <link href="//fonts.googleapis.com" rel="dns-prefetch">
                <link href="//fonts.gstatic.com" rel="dns-prefetch">

                <!-- App stylesheet -->
                <link id="app-css" rel="stylesheet" href="${assets['app.css']}">

                <!-- Prefetch routes -->
                ${ routesToPrefetch.map((route) => asyncRoutes[route] ? `<link rel="prefetch" href="${asyncRoutes[route]}">` : '').join('\n') }

                ${config.googleTrackingId ? `
                <!-- Facebook Pixel Code -->
                <script>
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${config.facebookTrackingId}', {
                em: 'insert_email_variable,'
                });
                fbq('track', 'PageView');
                </script>
                <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=${config.facebookTrackingId}&ev=PageView&noscript=1"
                /></noscript>
                <!-- DO NOT MODIFY -->
                <!-- End Facebook Pixel Code -->
                ` : ''}


            </head>
            <body>
                <!-- Root element where app goes -->
                <div id="root">${rootHtml}</div>

                <!-- Load main file -->
                <script src="${assets['main.js']}"></script>

                ${ assets['deferrable.js'] ? `
                <!-- Load deferrable file -->
                <script src="${assets['deferrable.js']}" async defer></script>` : '' }

                ${config.googleTrackingId ? `
                <!-- Google Analytics -->
                <script>
                (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
                function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
                e=o.createElement(i);r=o.getElementsByTagName(i)[0];
                e.src='https://www.google-analytics.com/analytics.js';
                r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
                ga('create','${config.googleTrackingId}','auto');ga('send','pageview');
                </script>
                ` : ''}

                <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
                <script>
                  WebFont.load({
                    google: {
                      families: ['Rubik:300,400,500,700']
                    }
                  });
                </script>
            </body>
        </html>
    `;
}
