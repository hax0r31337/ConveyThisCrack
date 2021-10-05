# ConveyThisCrack
A free version for [ConveyThis](https://www.conveythis.com/).

# Usages
It's more difficult for offical version, but it's more customizablilities!

~~~html
    <!-- ConveyThis code -->
    <div id="google_translate_element2"></div>
    <script src="https://cdn.jsdelivr.net/gh/liulihaocai/ConveyThisCrack@211005/conveythis-translator.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/liulihaocai/ConveyThisCrack@211005/conveythis-resources.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/liulihaocai/ConveyThisCrack@211005/s/conveythis.js"></script>
    <link href="https://cdn.jsdelivr.net/gh/liulihaocai/ConveyThisCrack@211005/hidegoogle.css" rel="stylesheet">
    <!-- conveythis is a better ui for web version of google translate, so converythis need to hide the google translate window
        If google access have restrictions in your country/region, you can change "google.com" to google domain in your place like "google.cn" -->
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>
    <script type="text/javascript">
        // set your default page language here
        var default_lang = 'en'

        function googleTranslateElementInit2() {
            new google.translate.TranslateElement({
                pageLanguage: default_lang,
                autoDisplay: false
            }, 'google_translate_element2');
        }

        function conveythis_init() {
            if (typeof conveythis !== 'undefined' && typeof conveythis.init !== 'undefined') {
                var json = []
                var sourceId = 0
                Object.keys(conveythis.languages).forEach(key => {
                    var element = conveythis.languages[key]
                    json.push({
                        id: key,
                        active: true
                    })
                    if (element.code2 == default_lang) {
                        sourceId = key
                    }
                });
                if (sourceId == 0)
                    throw "cannot find sourceId for language " + default_lang
                conveythis.init({
                    icon: "cir", // rect, cir, sqr, without-flag
                    text: "full-text", // full-text. shout-text. without-text
                    positionTop: null,
                    positionBottom: 12,
                    positionLeft: null,
                    positionRight: 24,
                    change: {},
                    languages: json,
                    source_language_id: sourceId,
                    auto_translate: false,
                    hide_conveythis_logo: false,
                    translate_media: false,
                    translate_document: false,
                    change_direction: false,
                    background_color: "#ffffff",
                    hover_color: "#f6f6f6",
                    border_color: "#e0e0e0",
                    text_color: "#000000",
                    corner_type: "cir", // cir, rect
                });
            } else {
                setTimeout(function() {
                    conveythis_init();
                }, 100);
            }
        }
        conveythis_init();
    </script>
    <!-- End ConveyThis code -->
~~~

