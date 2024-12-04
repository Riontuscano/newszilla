import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class News extends Component {
  constructor(){
    const articles = [
      {
    "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "Amy Skorheim",
      "title": "The best Cyber Monday Apple deals on AirPods, iPads, MacBooks and AirTags we could find",
      "description": "If you’ve been waiting for the right time to buy a new iPad, AirPods or Mac, Cyber Monday is your chance. Starting about a week before Black Friday, we began seeing all-time lows and first-time discounts on nearly everything Apple released this year and nearl…",
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7ea7f655-c914-4b39-a0d5-45c8da8bee3e",
      "urlToImage": null,
      "publishedAt": "2024-12-02T05:10:35Z",
      "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed1.com",
      "urlToImage": null,
      "publishedAt": "2024-12-02T05:01:27Z",
      "content": "[Removed]"
      },
      {
    "source": {
      "id": null,
      "name": "Android Central"
      },
      "author": "michael.hicks@futurenet.com (Michael L Hicks)",
      "title": "How to use your new Cyber Monday smartwatch to shed Thanksgiving pounds",
      "description": "From calorie-counting apps to AI-generated training plans, watches can motivate and guide you towards losing weight without unhealthy dieting.",
      "url": "https://www.androidcentral.com/wearables/how-to-use-your-new-cyber-monday-smartwatch-to-shed-thanksgiving-pounds",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/5xtzUTUEH7f4PQTujsfYi5-1200-80.jpg",
      "publishedAt": "2024-12-02T00:00:00Z",
      "content": "(Image credit: Android Central)\r\nIn this weekly column, Android Central Wearables Editor Michael Hicks talks about the world of wearables, apps, and fitness tech related to running and health, in his… [+9062 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Android Central"
      },
      "author": "derrek.lee@futurenet.com (Derrek Lee)",
      "title": "These are the Cyber Monday deals that the Android Central staff spent their money on",
      "description": "Android Central staff presents some of the Black Friday and Cyber Monday deals they've taken advantage of.",
      "url": "https://www.androidcentral.com/accessories/black-friday-cyber-monday-2024-what-android-central-staff-bought",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/L4EK66GnpZ6gW2m3gGWgTT-1200-80.jpg",
      "publishedAt": "2024-12-02T03:00:00Z",
      "content": "We're in the thick of the biggest sales event of the year as Black Friday merges into Cyber Monday, and we're swarmed with deals upon deals. We have plenty of deal hubs to help you all make informed … [+5753 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Xataka.com"
      },
      "author": "Fran San Nicolás",
      "title": "Los mejores descuentos y ofertas en tecnología durante el Cyber Monday",
      "description": "Después de más de una semana intensa repleta de descuentos en todo tipo de productos, el Black Friday ha llegado a su fin. Sin embargo, todos aquellos que no hayan podido aprovechar al máximo las ofertas durante este tiempo todavía tienen una última oportunid…",
      "url": "https://www.xataka.com/seleccion/mejores-descuentos-ofertas-tecnologia-durante-cyber-monday-1",
      "urlToImage": "https://i.blogs.es/b7d0a7/xtk-bfrecopilatorio-cyber/840_560.jpeg",
      "publishedAt": "2024-12-02T09:00:18Z",
      "content": "Después de más de una semana intensa repleta de descuentos en todo tipo de productos, el Black Friday ha llegado a su fin. Sin embargo, todos aquellos que no hayan podido aprovechar al máximo las ofe… [+5452 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Xataka.com"
      },
      "author": "Javier Lacort",
      "title": "OpenAI ya no quiere ser solo ChatGPT: quiere ser la próxima Google",
      "description": "La empresa de Sam Altman está en plena transformación: tras crear el chatbot más famoso del mundo y redefinir el término \"IA\" para todo un planeta, ahora aspira a convertirse en un verdadero gigante tecnológico global.\n<!-- BREAK 1 -->\nPor qué es importante. …",
      "url": "https://www.xataka.com/empresas-y-economia/openai-no-quiere-ser-solo-chatgpt-quiere-ser-proxima-google",
      "urlToImage": "https://i.blogs.es/e4fbbb/sam-altman-pop-art-portrait/840_560.jpeg",
      "publishedAt": "2024-12-02T10:00:18Z",
      "content": "La empresa de Sam Altman está en plena transformación: tras crear el chatbot más famoso del mundo y redefinir el término \"IA\" para todo un planeta, ahora aspira a convertirse en un verdadero gigante … [+2541 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Digital Trends"
      },
      "author": "Trevor Mogg",
      "title": "Apple reveals how Aardman shot its festive animation on an iPhone",
      "description": "The team behind Wallace & Gromit have collaborated with Apple on a festive animation that’s being beamed nightly onto one of London’s most iconic buildings.",
      "url": "https://www.digitaltrends.com/mobile/apple-aardman-collab/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/12/apple-aardman.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2024-12-02T07:10:40Z",
      "content": "Wallace &amp; Gromit | Shot on iPhone | The Making of\r\nThe stop-motion specialists at Aardman Animations have collaborated with Apple on a festive film that’s being beamed nightly onto Battersea Powe… [+2087 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "FaceTime-Kameras: Rauschprobleme mit bestimmten Macs unter Sequoia",
      "description": "Nutzer der aktuellen macOS-Sequoia-Version berichten über teils starkes Bildrauschen bei Videochats. Offenbar ist Apple bereits dran.",
      "url": "https://www.heise.de/news/FaceTime-Kameras-Rauschprobleme-mit-bestimmten-Macs-unter-Sequoia-10183984.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/5/5/1/2/1/CleanShot_2024-12-01_at_02.22.41_2x-aa2986d7bfd78cae.png",
      "publishedAt": "2024-12-02T10:22:00Z",
      "content": "Apples in iMac, Studio Display, MacBook Pro und MacBook Air eingebaute Webcam, FaceTime-HD- oder (bei höherer Auflösung) auch Center-Stage-Camera genannt, hat keinen besonders guten Ruf. Ausleuchtung… [+1979 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Steffen Herget",
      "title": "heise+ | Android vs. iOS – der große Systemvergleich",
      "description": "Zu iPhones und Android-Geräten gibt es gleichermaßen Vorurteile. Doch sie sind nur ein Teil der Wahrheit, denn bei Android und iOS hat sich viel getan.",
      "url": "https://www.heise.de/ratgeber/Android-vs-iOS-der-grosse-Systemvergleich-10082630.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/2/9/3/7/7/ct2724android1v_131230_sht_a_online-7a04ad3a71d2c6de.jpg",
      "publishedAt": "2024-12-02T09:30:00Z",
      "content": "Inhaltsverzeichnis\r\nWer ein Smartphone kaufen möchte, hat die Wahl: Entweder ein iPhone aus dem Hause Apple oder ein Smartphone mit dem Google-Betriebssystem Android, mehr gibt der Markt nicht her. K… [+1302 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "Ab 2028: TSMC hofft, früher 2-nm-SoCs in den USA zu produzieren",
      "description": "Der taiwanische Chiphersteller baut bekanntermaßen in Arizona auf, doch die neuesten Chips entstehen weiter in der Heimat. Könnte sich das nun beschleunigen?",
      "url": "https://www.heise.de/news/Ab-2028-TSMC-hofft-frueher-2-nm-SoCs-in-den-USA-zu-produzieren-10183110.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/5/4/6/6/9/about_arizona-865258d29a8b3fa1.png",
      "publishedAt": "2024-12-02T09:02:00Z",
      "content": "TSMC könnte in den USA schneller moderne 2-nm-SoCs produzieren als bislang gedacht. Das geht aus Unterlagen hervor, die das Unternehmen beim US-Handelsministerium eingereicht hat. Bislang sollten die… [+1952 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Genbeta.com"
      },
      "author": "Antonio Vallejo",
      "title": "Si te perdiste las ofertas del Black Friday, estos son los mejores chollos en software y cursos online del Cyber Monday",
      "description": "Tras todos los increíbles descuentos durante el Black Friday, la cosa no ha acabado aún. Y es que gran parte de estos descuentos se mantienen hasta hoy lunes 2 de diciembre, dando paso al Cyber Monday. Además de ello, también llegan otros tantos productos con…",
      "url": "https://www.genbeta.com/a-fondo/cyber-monday-2024-mejores-ofertas-dia-software-cursos-online-despues-black-friday",
      "urlToImage": "https://i.blogs.es/269bf1/cybermonday/840_560.jpeg",
      "publishedAt": "2024-12-02T09:24:17Z",
      "content": "Tras todos los increíbles descuentos durante el Black Friday, la cosa no ha acabado aún. Y es que gran parte de estos descuentos se mantienen hasta hoy lunes 2 de diciembre, dando paso al Cyber Monda… [+9657 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (AppleInsider Staff)",
      "title": "The $529 Mac mini M4 deal is back for Cyber Monday, but supply is limited",
      "description": "It's back! After the $529 M4 Mac mini deal sold out on Black Friday, Apple resellers have replenished inventory and reinstated the $70 discount. This deal may sell out before Cyber Monday concludes.Get Apple's new M4 Mac mini for just $529 on Cyber Monday.Whe…",
      "url": "https://appleinsider.com/articles/24/12/02/the-529-mac-mini-m4-deal-is-back-for-cyber-monday-but-supply-is-limited",
      "urlToImage": "https://photos5.appleinsider.com/gallery/61913-128188-m4-mac-mini-cyber-monday-deal-xl.jpg",
      "publishedAt": "2024-12-02T07:47:57Z",
      "content": "It's back! After the $529 M4 Mac mini deal sold out on Black Friday, Apple resellers have replenished inventory and reinstated the $70 discount. This deal may sell out before Cyber Monday concludes.\r… [+875 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Christine McKee)",
      "title": "Deals: grab a MacBook Air with 16GB RAM for $799 this Cyber Monday",
      "description": "Apple retailers Amazon and Best Buy are competing for the best price on Apple's MacBook Air, with both sitting at $799 this Cyber Monday.Cyber Monday MacBook Air deals start at just $799 for 16GB RAM models.You can head straight to Amazon and Best Buy to pick…",
      "url": "https://appleinsider.com/articles/24/12/02/deals-grab-a-macbook-air-with-16gb-ram-for-799-this-cyber-monday",
      "urlToImage": "https://photos5.appleinsider.com/gallery/61912-128184-cyber-monda-macbook-air-sale-xl.jpg",
      "publishedAt": "2024-12-02T01:08:09Z",
      "content": "Apple retailers Amazon and Best Buy are competing for the best price on Apple's MacBook Air, with both sitting at $799 this Cyber Monday.\r\nYou can head straight to Amazon and Best Buy to pick up the … [+715 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Appleinsider Staff)",
      "title": "Best MacBook Pro Cyber Monday deals slash prices by up to $600, better than Black Friday",
      "description": "Upgrade your tech this Cyber Monday with aggressive deals on the MacBook Pro, a powerful notebook for creatives and professionals.Save up to $600 with these Cyber Monday MacBook Pro deals - Image credit: AppleWhether you're eyeing closeout deals on M3 models …",
      "url": "https://appleinsider.com/articles/24/12/02/best-macbook-pro-cyber-monday-deals-slash-prices-by-up-to-600-better-than-black-friday",
      "urlToImage": "https://photos5.appleinsider.com/gallery/61691-128186-cyber-monday-2024-macbook-pro-deals-xl.jpg",
      "publishedAt": "2024-12-02T06:42:55Z",
      "content": "Upgrade your tech this Cyber Monday with aggressive deals on the MacBook Pro, a powerful notebook for creatives and professionals.\r\nWhether you're eyeing closeout deals on M3 models or the lowest pri… [+1754 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Gizmodo.jp"
      },
      "author": "そうこ",
      "title": "Appleセキュリティカメラは歩き方や体型でも個人を特定できるかも",
      "description": "Image:Shutterstock.comちらほら聞こえてくるApple（アップル）のスマートホーム系端末の噂。AppleのAI、AppleIntelligenceを搭載し、自社AIのさらなる普及を狙っていると思われます。スマートホーム端末の中でも2026年にリリースが期待（予想）されているお家用セキュリティカメラは、今以上に賢くなるようです。個人認識は、もう顔だけの時代ではありません。来ている",
      "url": "https://www.gizmodo.jp/2024/12/apple-security-camera.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/12/02/shutterstock_2498326933.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "2024-12-02T06:00:00Z",
      "content": "AppleAppleAIApple IntelligenceAI\r\n2026\r\nAppleApple\r\nAAB\r\nSource: 9to5Mac"
      },
      {
    "source": {
      "id": null,
      "name": "CNET"
      },
      "author": "Adam Oram",
      "title": "Best Cyber Monday Apple Deals: Get $400 Off MacBooks, $100 Off iPads, Apple Watches and More",
      "description": "Cyber Monday is here and Apple has some amazing holiday discounts on MacBooks, AirPods, and more.",
      "url": "https://www.cnet.com/deals/best-cyber-monday-apple-deals-2024-12-02/",
      "urlToImage": "https://www.cnet.com/a/img/resize/365c0f5552d646425ca4fad8ccd5924e887c38ae/hub/2024/11/21/b197b65c-57fa-4778-a942-66ab7f91301c/cmbg-06-apple.png?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2024-12-02T02:35:00Z",
      "content": "Cyber Monday is here, giving us rare savings on Apple products worth taking advantage of right now, including the best AirPods Pro 2 price we've ever seen. Retailers like Best Buy, Walmart and Amazon… [+6413 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Journal du geek"
      },
      "author": "Olivier",
      "title": "La fin du taux réduit de TVA pour Canal+ et OCS pourrait augmenter les prix des abonnements (encore une fois)",
      "description": "Le replay coûte cher. La cour administrative d’appel de Paris vient de décider que la TVA applicable aux abonnements des chaînes comme Canal+ ou OCS devait passer de 10 % à 20 %. Une décision qui s’appuie sur l’importance croissante des contenus à la demande …",
      "url": "https://www.journaldugeek.com/2024/12/02/la-fin-du-taux-reduit-de-tva-pour-canal-et-ocs-pourrait-augmenter-les-prix-des-abonnements-encore-une-fois/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/01/canal-plus-amende-confinement-tf1.jpg",
      "publishedAt": "2024-12-02T07:29:55Z",
      "content": "Les abonnés à la télévision payante sont de plus en plus nombreux à consommer des programmes à la demande, que ce soit via des box ou sur internet. Cest ce constat qui a poussé ladministration fiscal… [+2919 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Journal du geek"
      },
      "author": "Journal du Geek",
      "title": "Sonos Arc : non remisée à Black Friday, elle s’écroule de 300€ pour Cyber Monday ",
      "description": "En ce dernier jour de Black Friday, Amazon n'en a pas encore fini avec les réductions. Parmi les meilleures offres, on retrouve l'excellente barre de son Sonos Arc accompagnée par une remise immédiate de -33%.",
      "url": "https://www.journaldugeek.com/bon-plan/sonos-arc-non-remisee-a-black-friday-elle-secroule-de-300e-pour-cyber-monday-💥/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/12/sonos-arc-barre-de-son.jpg",
      "publishedAt": "2024-12-02T08:48:26Z",
      "content": "Chez Amazon, la barre de son Sonos Arc s’effondre au tarif de 599 euros au lieu de 899 euros. C’est simple, vous réalisez une économie immédiate de -33% sur ce modèle haut de gamme. La seule conditio… [+3638 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Journal du geek"
      },
      "author": "Journal du Geek",
      "title": "Black Friday : Amazon a viré toute sa marge, voici 12 deals fou ce lundi ",
      "description": "Black Friday sur Amazon, Fnac, Darty et Boulanger, c'est bientôt la fin. Néanmoins, vous pouvez encore profiter de ce lundi matin pour dénicher les dernières pépites de cette édition 2024. Voici notre liste des meilleures offres encore valables.",
      "url": "https://www.journaldugeek.com/bon-plan/black-friday-amazon-a-vire-toute-sa-marge-voici-12-deals-fou-ce-dimanche-soir-💣/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2023/11/Black-Friday-Direct-2023.jpg",
      "publishedAt": "2024-12-02T05:46:10Z",
      "content": "Black Friday sur Amazon est sur le point de s’achever dans quelques heures. Pour cette édition de 2024, les sites se sont focalisés sur une semaine de deals en affichant des réductions dès ce début d… [+5685 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Applesfera.com"
      },
      "author": "Guille Lomener",
      "title": "Esta estrella del fútbol le puede dar las gracias a Apple (y al constructor de su casa). Ha ganado 600.000 dólares y nos hace pensar que aún estamos a tiempo de aprovechar la oportunidad",
      "description": "Seguro que has soñado alguna vez con levantarte un día y ver que te has vuelto millonario. La realidad es que en pocas ocasiones pasa, pero el mundo de las inversiones está lleno de historias curiosas. Una de ellas es cómo Rob Gronkowski (la estrella de la NF…",
      "url": "https://www.applesfera.com/curiosidades/esta-estrella-futbol-le-puede-dar-gracias-a-apple-al-constructor-su-casa-ha-ganado-600-000-dolares-nos-hace-pensar-que-estamos-a-tiempo-aprovechar-oportunidad",
      "urlToImage": "https://i.blogs.es/6f7831/acciones-de-apple/840_560.jpeg",
      "publishedAt": "2024-12-02T11:00:18Z",
      "content": "Seguro que has soñado alguna vez con levantarte un día y ver que te has vuelto millonario. La realidad es que en pocas ocasiones pasa, pero el mundo de las inversiones está lleno de historias curiosa… [+4666 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Applesfera.com"
      },
      "author": "Álvaro Núñez",
      "title": "¿No llegaste al Black Friday? Estos son los mejores descuentos en Apple durante el Cyber Monday",
      "description": "Aunque el Black Friday ya ha llegado a su fin, aún estás a tiempo de hacerte con unas buenas ofertas para tus dispositivos de Apple si no llegaste a tiempo el viernes pasado, ya que hoy muchas de nuestras tiendas favoritas han extendido las rebajas por el Cyb…",
      "url": "https://www.applesfera.com/seleccion/no-llegaste-al-black-friday-estos-mejores-descuentos-apple-durante-cyber-monday-1",
      "urlToImage": "https://i.blogs.es/e8c97d/portada-cyber-monday/840_560.jpeg",
      "publishedAt": "2024-12-02T09:00:17Z",
      "content": "Aunque el Black Friday ya ha llegado a su fin, aún estás a tiempo de hacerte con unas buenas ofertas para tus dispositivos de Apple si no llegaste a tiempo el viernes pasado, ya que hoy muchas de nue… [+6481 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Applesfera.com"
      },
      "author": "Álvaro García M.",
      "title": "Los iPhone 16 se estrellan en China. Han caído casi a la mitad y los expertos señalan dos grandes culpables",
      "description": "A nadie se le escapa que Apple está ante su gran oportunidad en China con los iPhone 16. Tras un año en el que los iPhone 15 fueron perdiendo fuelle en el gran país asiático a la par que rivales como Huawei les superaban en ventas de gama alta, Apple tenía un…",
      "url": "https://www.applesfera.com/apple-1/iphone-16-se-estrellan-china-han-caido-casi-a-mitad-expertos-senalan-dos-grandes-culpables",
      "urlToImage": "https://i.blogs.es/3ba317/apple-store/840_560.jpeg",
      "publishedAt": "2024-12-02T10:11:27Z",
      "content": "A nadie se le escapa que Apple está ante su gran oportunidad en China con los iPhone 16. Tras un año en el que los iPhone 15 fueron perdiendo fuelle en el gran país asiático a la par que rivales como… [+3746 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Applesfera.com"
      },
      "author": "Álvaro García M.",
      "title": "Como saber si tienes derecho a la ayuda de 1.500 euros que regala Madrid por pasarse a la movilidad eléctrica",
      "description": "La Comunidad de Madrid ha abierto recientemente el plazo de solicitud de ayudas para la movilidad eléctrica. Se engloba dentro del conocido como Plan Mueve Madrid y son varias las líneas de ayuda que se abren. Desde aquellos que quieran comprar una bicicleta …",
      "url": "https://www.applesfera.com/tutoriales/como-saber-tienes-derecho-a-ayuda-1-500-euros-que-regala-madrid-pasarse-a-movilidad-electric",
      "urlToImage": "https://i.blogs.es/e81491/madrid-bici/840_560.jpeg",
      "publishedAt": "2024-12-02T08:00:43Z",
      "content": "La Comunidad de Madrid ha abierto recientemente el plazo de solicitud de ayudas para la movilidad eléctrica. Se engloba dentro del conocido como Plan Mueve Madrid y son varias las líneas de ayuda que… [+4427 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Presse-citron"
      },
      "author": "Mathilde Rochefort",
      "title": "L’astucieuse stratégie de BYD pour générer plus de revenus que Tesla",
      "description": "BYD n’est pas seulement un fabricant de voitures électriques…",
      "url": "https://www.presse-citron.net/lastucieuse-strategie-de-byd-pour-generer-plus-de-revenus-que-tesla/",
      "urlToImage": "https://www.presse-citron.net/app/uploads/2024/12/byd-logo.jpg",
      "publishedAt": "2024-12-02T11:00:00Z",
      "content": "Au troisième trimestre 2024, le chiffre daffaires du constructeur de voitures électriques chinois, BYD, a atteint les 28 milliards de dollars. Cest mieux que sa grande rivale américaine, Tesla, qui a… [+3291 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Presse-citron"
      },
      "author": "Presse-citron",
      "title": "Pourquoi le vidéoprojecteur BenQ GP520 est idéal pour vos soirées ciné",
      "description": "Oubliez votre téléviseur, le vidéoprojecteur BenQ GP520 est la perle rare pour plonger dans vos films et vos séries préférés.",
      "url": "https://www.presse-citron.net/pourquoi-le-videoprojecteur-benq-gp520-est-ideal-pour-vos-soirees-cine/",
      "urlToImage": "https://www.presse-citron.net/app/uploads/2024/11/benq-gp520.jpg",
      "publishedAt": "2024-12-02T10:46:16Z",
      "content": "Aujourdhui, les vidéoprojecteurs sont de plus en plus populaires. Face aux téléviseurs, ces appareils ont de lourds arguments, offrant une image généralement plus grande et plus lumineuse. Que cela s… [+4586 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Golem.de"
      },
      "author": "Tobias Költzsch",
      "title": "Apple: BYD baut mehr als 30 Prozent der iPads",
      "description": "Der Autohersteller BYD ist einer von Apples größten Auftragsfertigern - bei den iPads, aber auch bei der Produktion von iPhone-Teilen. (Apple, iPhone)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fapple-byd-baut-mehr-als-30-prozent-der-ipads-2412-191323.html&referer=https%3A%2F%2Ft.co%2Ffb5d2f0940",
      "urlToImage": null,
      "publishedAt": "2024-12-02T10:29:02Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Golem.de"
      },
      "author": "Tobias Billmeier",
      "title": "Anzeige: Nur noch heute - Bestseller-Mini-PC für nur 179 Euro",
      "description": "Nur noch bis Mitternacht: Der Bestseller Acemagician Mini-PC ist im Black-Friday-Angebot auf Amazon für günstige 179 Euro erhältlich. (Technik/Hardware, Apple)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fanzeige-nur-noch-heute-bestseller-mini-pc-fuer-nur-179-euro-2412-191313.html&referer=https%3A%2F%2Ft.co%2F71a765dfed",
      "urlToImage": null,
      "publishedAt": "2024-12-02T07:44:02Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Golem.de"
      },
      "author": "Oliver Nickel",
      "title": "Apples Mini-PC: Bastler nutzen den Mac Mini mit Powerbanks",
      "description": "Als Display kommen portable Monitore oder sogar das Vision Pro zum Einsatz. Das funktioniert gut, wird in Summe aber teuer. (Mac Mini, Apple)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fapples-mini-pc-bastler-nutzen-den-mac-mini-mit-powerbanks-2412-191317.html&referer=https%3A%2F%2Ft.co%2F672088bf5d",
      "urlToImage": null,
      "publishedAt": "2024-12-02T09:00:01Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Xataka Android"
      },
      "author": "Ana Suárez",
      "title": "Samsung Foundry sale del tablero para dejar paso a TSMC: los próximos Exynos cambian de fabricante",
      "description": "TSMC es bien conocido por ser uno de los referentes en cuanto a producción de semiconductores. Qualcomm, AMD, MediaTek, Apple o Intel son sólo algunos de sus principales clientes. Y ahora empieza a valorarse la firme posibilidad de que Samsung firmase un acue…",
      "url": "https://www.xatakandroid.com/territorio-ese/samsung-foundry-sale-tablero-para-dejar-paso-a-tsmc-proximos-exynos-cambian-fabricante",
      "urlToImage": "https://i.blogs.es/27daa6/1366_2000/840_560.jpeg",
      "publishedAt": "2024-12-02T09:30:40Z",
      "content": "TSMC es bien conocido por ser uno de los referentes en cuanto a producción de semiconductores. Qualcomm, AMD, MediaTek, Apple o Intel son sólo algunos de sus principales clientes. Y ahora empieza a v… [+1864 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "HYPEBEAST"
      },
      "author": "info@hypebeast.com (Hypebeast)",
      "title": "Kendrick Lamar's \"Not Like Us\" Could See Surge in Sales Following Drake's Legal Filings Against UMG, Spotify",
      "description": "Kendrick Lamar’s “Not Like Us” has experienced a boost in popularity after Drake filed legal petitions against Universal Music Group (UMG), Spotify and iHeartRadio over the diss track.Talk of the Charts revealed on X that \"Not Like Us\" is projected to experie…",
      "url": "https://hypebeast.com/2024/12/kendrick-lamar-not-like-us-sales-streams-surge-after-drake-universal-music-group-legal-filing",
      "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F12%2F01%2Fkendrick-lamar-not-like-us-sales-streams-surge-after-drake-universal-music-group-legal-filing-tw.jpg?w=1080&cbr=1&q=90&fit=max",
      "publishedAt": "2024-12-02T08:29:54Z",
      "content": "Kendrick Lamars Not Like Us has experienced a boost in popularity after Drake filed legal petitions against Universal Music Group (UMG), Spotify and iHeartRadio over the diss track.\r\nTalk of the Char… [+1201 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "HYPEBEAST"
      },
      "author": "info@hypebeast.com (Hypebeast)",
      "title": "LL Cool J Claims He \"Is the Most Important Rapper That Ever Existed\"",
      "description": "LL Cool J recently appeared on Apple Music's Le Code and spoke about his place in the industry. Speaking on his career over the decades, the rap legend responded to questions about a possible movie. While he did state that it would be difficult to accomplish,…",
      "url": "https://hypebeast.com/2024/12/ll-cool-j-claims-he-is-the-most-important-rapper-that-ever-existed-news",
      "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F12%2F01%2Fll-cool-j-claims-he-is-the-most-important-rapper-that-ever-existed-news-tw.jpg?w=1080&cbr=1&q=90&fit=max",
      "publishedAt": "2024-12-02T09:09:34Z",
      "content": "LL Cool J recently appeared on Apple Music‘s Le Code and spoke about his place in the industry. \r\nSpeaking on his career over the decades, the rap legend responded to questions about a possible movie… [+1519 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "NPR"
      },
      "author": "Alina Selyukh",
      "title": "The scientific reasons you can't resist holiday sales on Cyber Monday",
      "description": "This Cyber Monday, a meditation on holiday sales. A quick trip to pick up presents can turn into an hours-long shopping spree thanks to all the ways stores use research from fields like consumer neuroscience and neuromarketing to entice you. Retailers create …",
      "url": "https://www.npr.org/2024/12/02/1216727937/cyber-monday-sales-holidays-shopping-discounts",
      "urlToImage": "https://media.npr.org/assets/img/2024/11/25/12.2.24-ep_wide-a02deae4a3480ff849100d223f1f0c3fdd710918.jpg?s=1400&c=100&f=jpeg",
      "publishedAt": "2024-12-02T08:00:59Z",
      "content": "When you shop, there's often a standoff in your brain between what can be described as its emotional and rational parts.\r\nBlackJack3D/Getty Images\r\nIt's Cyber Monday and you know what that means: Sal… [+1099 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Habr.com"
      },
      "author": "Suvitruf",
      "title": "Недельный геймдев: #202 — 1 декабря, 2024",
      "description": "Из новостей: в открытый доступ вышла бета-версия Nau Engine, мобильный Balatro заработал больше 4 миллионов, Bevy 0.15, ИРИ выделит 2 млрд рублей.Из интересностей: почему CDPR перешла на UE и какие уроки вынесла из Cyberpunk 2077, как рендерится Detroit Becom…",
      "url": "https://habr.com/ru/articles/862930/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/fae/6b9/516/fae6b951614064c57ec594162ef032d8.jpeg",
      "publishedAt": "2024-12-02T08:09:00Z",
      "content": ": - Nau Engine, Balatro 4 , Bevy 0.15, 2 .\r\n : CDPR UE Cyberpunk 2077, Detroit Become Human, Analytical Anti-Aliasing, Source Engine.\r\n//\r\n - Nau Engine\r\n3-Clause BSD. .\r\n Microsoft Obsidian - \r\n«» -… [+1465 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Xatakamovil.com"
      },
      "author": "Eva Rodriguez de Luis",
      "title": "Después del Black Friday, estas son las mejores ofertas en teléfonos móviles del Cyber Monday",
      "description": "El Black Friday 2024 ya es historia, pero si no llegaste a tiempo para renovar tu móvil o comprar ese teléfono para regalar en Navidad, todavía te queda otra oportunidad hoy lunes, el Cyber Monday. Aprovecha porque vas a encontrar auténticos chollos de las me…",
      "url": "https://www.xatakamovil.com/guias-de-compra/despues-black-friday-estas-mejores-ofertas-telefonos-moviles-cyber-monday-1",
      "urlToImage": "https://i.blogs.es/b215bb/portada-cybermonday-xtm-rojo/840_560.jpeg",
      "publishedAt": "2024-12-02T09:00:18Z",
      "content": "El Black Friday 2024 ya es historia, pero si no llegaste a tiempo para renovar tu móvil o comprar ese teléfono para regalar en Navidad, todavía te queda otra oportunidad hoy lunes, el Cyber Monday. A… [+6988 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Xatakamovil.com"
      },
      "author": "Pepu Ricca",
      "title": "Si todavía tienes uno de estos iPhone, vas a quedarte sin WhatsApp. Esta es la fecha límite",
      "description": "WhatsApp, tanto en Android como en iOS, procura ser cuidadoso con sus requisitos de software, no en vano es una aplicación utilizada por miles de millones de usuarios. En el sistema operativo de Google, hace tiempo que no cambia sus requisitos, siendo Android…",
      "url": "https://www.xatakamovil.com/aplicaciones/todavia-tienes-uno-estos-iphone-vas-a-quedarte-whatsapp-esta-fecha-limite",
      "urlToImage": "https://i.blogs.es/dddd41/whatsapp-iphone-fin-soporte/840_560.jpeg",
      "publishedAt": "2024-12-02T10:16:18Z",
      "content": "WhatsApp, tanto en Android como en iOS, procura ser cuidadoso con sus requisitos de software, no en vano es una aplicación utilizada por miles de millones de usuarios. En el sistema operativo de Goog… [+3256 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Caschys Blog"
      },
      "author": "Felix Frank",
      "title": "Tesla bringt Apple-Watch-Schlüssel und weitere Funktionen im Holiday-Update-2024",
      "description": "Alljährlich veröffentlicht der US-Autobauer Tesla zu den Feiertagen ein größeres Software-Update für seine Fahrzeugflotte, das sogenannte „Holiday Update“. Auch in diesem Jahr hat man im Rahmen des Updates wieder eine ganze Palette an Neuerungen im Gepäck. Da…",
      "url": "https://stadt-bremerhaven.de/tesla-bringt-apple-watch-schluessel-und-weitere-funktionen-im-holiday-update-2024/",
      "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2024/12/GdvT_X5akAE9fZ6.jpg",
      "publishedAt": "2024-12-02T08:30:13Z",
      "content": "Alljährlich veröffentlicht der US-Autobauer Tesla zu den Feiertagen ein größeres Software-Update für seine Fahrzeugflotte, das sogenannte „Holiday Update“. Auch in diesem Jahr hat man im Rahmen des U… [+4228 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Frandroid"
      },
      "author": "Clément Gareau",
      "title": "Apple MacBook, Asus Zenbook, Surface, Chromebook… voici les dernières offres de PC portables du Cyber Monday",
      "description": "Ce sont les offres de dernières minutes. Que vous cherchiez un MacBook, un ultrabook, un PC portable gamer ou un ordinateur pas cher, les promos du Cyber Monday sont là (et nous aussi) pour vous aider.",
      "url": "https://www.frandroid.com/bons-plans/2422248_apple-macbook-asus-zenbook-surface-chromebook-voici-les-dernieres-offres-de-pc-portables-du-cyber-monday",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/12/selection-pc-portables-cyber-monday.jpg?resize=1600,900&key=01272cc8&watermark",
      "publishedAt": "2024-12-02T09:49:28Z",
      "content": "Ce sont les offres de dernières minutes. Que vous cherchiez un MacBook, un ultrabook, un PC portable gamer ou un ordinateur pas cher, les promos du Cyber Monday sont là (et nous aussi) pour vous aide… [+10670 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Frandroid"
      },
      "author": "Axel Savoye",
      "title": "Cyber Monday : les smartphones Samsung Galaxy et Apple sont encore en promotion pour les retardataires ! Le top 17 des offres",
      "description": "Le Black Friday joue les prolongations pour les retardataires n'ayant pas eu le temps de profiter des promotions de ce week-end ! Avec le Cyber Monday, vous avez encore toute une journée pour choisir le smartphone qui vous accompagnera ces prochaines années.",
      "url": "https://www.frandroid.com/bons-plans/2421516_cyber-monday-les-smartphones-samsung-galaxy-et-apple-sont-encore-en-promotion-pour-les-retardataires-le-top-17-des-offres",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/12/guide-smartphones-cm-2024.jpg?resize=1600,900&key=9aa8a6ed&watermark",
      "publishedAt": "2024-12-02T09:54:45Z",
      "content": "Le Black Friday joue les prolongations pour les retardataires n’ayant pas eu le temps de profiter des promotions de ce week-end ! Avec le Cyber Monday, vous avez encore toute une journée pour choisir… [+11720 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Frandroid"
      },
      "author": "Paul-Emile Cassoret",
      "title": "Tesla Phone : pourquoi Elon Musk ne veut pas d’un smartphone Tesla",
      "description": "Après PayPal, Tesla, SpaceX, Starlink et, plus récemment, la politique, une rumeur attribuait un nouveau domaine d'activité à Elon Musk : les smartphones, avec l'hypothétique téléphone Tesla. Mais, malheureusement, cette rumeur était fausse, comme l'a confirm…",
      "url": "https://www.frandroid.com/marques/tesla/2425064_tesla-phone-pourquoi-elon-musk-ne-veut-pas-dun-smartphone-tesla",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/12/33944890310-bcbc906514-o-1200x800-1.jpg?key=888a8654&watermark",
      "publishedAt": "2024-12-02T10:01:28Z",
      "content": "Après PayPal, Tesla, SpaceX, Starlink et, plus récemment, la politique, une rumeur attribuait un nouveau domaine d’activité à Elon Musk : les smartphones, avec l’hypothétique téléphone Tesla. Mais, m… [+3666 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Frandroid"
      },
      "author": "Yann Lethuillier",
      "title": "On a essayé le MG Cyberster, une des très rares voitures électriques cabriolet du marché",
      "description": "Après avoir conquis l'Europe avec ses SUV et ses compactes à prix serrés, c'est un retour aux sources pour MG. Malgré un passage sous pavillon chinois il y a quelques années, la marque sino-britannique n'a pas tiré un trait sur son illustre passé, bien au con…",
      "url": "https://www.frandroid.com/marques/mg/2406750_on-a-essaye-le-mg-cyberster-une-des-tres-rares-voitures-electriques-cabriolet-du-marche",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/11/essai-mg-cyberster-2024-17.jpg?key=2dfed192&watermark",
      "publishedAt": "2024-12-02T07:15:00Z",
      "content": "En 2024, MG Motor célèbre ses 100 ans. En Europe, quand on parle de la marque, on pense évidemment aux petits roadsters des années 60, 70, 80 et 90, et le constructeur ne compte clairement pas balaye… [+15465 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Slickdeals.net"
      },
      "author": "sujacob",
      "title": "Citi Cardholders w/ ThankYou Points: Apple eGift Cards 20% Off (Must Redeem Points)",
      "description": "Citi Thank You rewards Cyber Monday deal is now live, offering 20% Off Apple eGift Cards valid for Citi Cardholders.\n\n+10% points back if you hold a Rewards+ card, making a $100 redemption effectively",
      "url": "https://slickdeals.net/f/17955267-citi-cardholders-w-thankyou-points-20-off-apple-egift-cards-and-more?utm_source=rss&utm_content=fp&utm_medium=RSS2",
      "urlToImage": "https://static.slickdealscdn.com/images/sd_share_logo.png?9261",
      "publishedAt": "2024-12-02T06:11:53Z",
      "content": "This collaborative space allows users to contribute additional information, tips, and insights to enhance the original deal post. Feel free to share your knowledge and help fellow shoppers make infor… [+474 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Ifanr.com"
      },
      "author": "Selina",
      "title": "这个中国歌手用 iPhone 把 MV 当电影拍，让库克也大呼惊奇",
      "description": "再塑手机拍摄工作流#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      "url": "https://www.ifanr.com/1607682",
      "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2024/12/on-site-2.jpg",
      "publishedAt": "2024-12-02T09:56:08Z",
      "content": "17 Tomorrow Land BMG Chace Tunnel Vision\r\n Michael Jackson Chace Tunnel Vision\r\nChace MVMV iPhone 16 Pro iPhone 16 Pro Max Mac Book Pro \r\nMV Chace iPhone 16 \r\nChace@\r\niPhone \r\n9 Chace Apple The Weeke… [+610 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Touchlab.jp"
      },
      "author": "Nakimo",
      "title": "【20%OFF】AWも充電できる1台3役「Anker MagGo Power Bank (10000mAh, 35W, For Apple Watch)」がセール中",
      "description": "Amazonブラックフライデーで、モバイルバッテリー「Anker Power Bank (10000mAh, Fusion, Built-In USB-C ケーブル)」が20%OFFで販売されています。 このバッテリーの […]©2019 \"Touch Lab - タッチ ラボ\".",
      "url": "https://touchlab.jp/2024/12/anker-maggo-powerbank-10000mah-for-apple-watch-sale/",
      "urlToImage": "https://touchlab.jp/wp-content/uploads/2024/12/amazon_bf2024_item_9.jpg",
      "publishedAt": "2024-12-02T08:48:17Z",
      "content": "Amazonブラックフライデーで、モバイルバッテリー「Anker Power Bank (10000mAh, Fusion, Built-In USB-C ケーブル)」が20%OFFで販売されています。\nこのバッテリーの主な特徴は次のとおり：\n<ul>\n<li>Apple Watch充電パッド (急速充電対応)</li>\n<li>容量10,000mAh</li>\n<li>ビルトインUSB-Cケー… [+1028 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "PCWorld"
      },
      "author": "Alaina Yee",
      "title": "Best Buy’s best Cyber Monday tech deals",
      "description": "Best Buy’s Cyber Monday deals are in full swing—so now’s the time to pick up laptops, TVs, streaming devices, Apple gear, and more for a whole lot less than usual.\r\n\n\n\n\nOf course, not every discount is a good one, but that’s where we come in. Our selections f…",
      "url": "https://www.pcworld.com/article/1383415/cyber-monday-best-buy-deals-2024.html",
      "urlToImage": "https://www.pcworld.com/wp-content/uploads/2024/12/Best_Buy_logo_large-2.jpg?quality=50&strip=all&w=1024",
      "publishedAt": "2024-12-02T05:00:00Z",
      "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nBest Buy’s Cyber Mon… [+6547 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "PCWorld"
      },
      "author": "Sam Singleton",
      "title": "Best Cyber Monday desktop computer deals",
      "description": "Cyber Monday is here and the deals are well underway. Retailers are offering killer discounts on everything from home-office PCs to decked-out gaming rigs and sleek all-in-ones. Still, not all computer deals are built the same.\r\n\n\n\n\nWhen shopping for a new de…",
      "url": "https://www.pcworld.com/article/1382181/cyber-monday-desktop-pc-computer-deals-2024.html",
      "urlToImage": "https://www.pcworld.com/wp-content/uploads/2024/12/pcw-desktoppc-prime-1-1.jpg?quality=50&strip=all&w=1024",
      "publishedAt": "2024-12-02T05:00:00Z",
      "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nCyber Monday is here… [+8772 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "PCWorld"
      },
      "author": "Katherine Stevenson",
      "title": "The 32 best Amazon Cyber Monday tech deals our experts found",
      "description": "Once again, Cyber Monday is upon us, promising savings on every kind of product imaginable. Even the tech deals alone can feel overwhelming.\r\n\n\n\n\nThis guide to the best Amazon Cyber Monday tech deals will point you to the best bargains in all the most popular…",
      "url": "https://www.pcworld.com/article/1384292/cyber-monday-amazon-tech-deals-2024.html",
      "urlToImage": "https://www.pcworld.com/wp-content/uploads/2024/12/Amazon-logo-orange-smile-on-black-background.jpg?quality=50&strip=all&w=1024",
      "publishedAt": "2024-12-02T05:00:00Z",
      "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nOnce again, Cyber Mo… [+3672 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "PCWorld"
      },
      "author": "Michael Crider",
      "title": "Best Cyber Monday monitor deals",
      "description": "The yearly fray of Cyber Monday consumerism is upon us. Yet, as I’ve been covering monitor deals in the days leading up to the post-turkey blitz, I’ve gotta say… this year’s deals are especially delicious. That’s doubly true if you’re searching for an OLED mo…",
      "url": "https://www.pcworld.com/article/1383757/cyber-monday-monitor-deals-2024.html",
      "urlToImage": "https://www.pcworld.com/wp-content/uploads/2024/12/Monitor-deal-roundup-1.png?w=1024",
      "publishedAt": "2024-12-02T05:00:00Z",
      "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nThe yearly fray of C… [+4793 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Geekissimo.com"
      },
      "author": "Antonio Mele",
      "title": "Voci sui prossimi Chromebook Galaxy: possibile utilizzo di ChromeOS basato su Android",
      "description": "Potenziale svolta a medio termine per i Chromebook Galaxy, secondo le ultime voci raccolte",
      "url": "https://geekissimo.com/2024/12/02/voci-sui-prossimi-chromebook-galaxy-possibile-utilizzo-di-chromeos-basato-su-android/",
      "urlToImage": null,
      "publishedAt": "2024-12-02T09:44:03Z",
      "content": "Stanno prendendo piede voci molto interessanti sui prossimi Chromebook Galaxy, al punto da ipotizzare il possibile utilizzo di ChromeOS basato su Android. Mentre Apple e Google hanno piattaforme conc… [+2483 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Deadline"
      },
      "author": "Stewart Clarke",
      "title": "English-Language Version Of Hit Israeli Comedy-Drama About Male Escorts In The Works From ‘Tehran’ Co-Producer Paper Entertainment",
      "description": "Get ready for the Honey Boys. That’s the title of the English-language version of Israeli comedy-drama Johnny and the Knights of the Galilee, which is being worked up by Tehran co-producer Paper Entertainment. The yes Studios-distributed series has already be…",
      "url": "http://deadline.com/2024/12/honey-boys-escort-comedy-drama-israel-france-yes-studios-paper-entertainment-1236190785/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/12/yestv.jpg?w=1024",
      "publishedAt": "2024-12-02T09:28:59Z",
      "content": "Get ready for the Honey Boys. That’s the title of the English-language version of Israeli comedy-drama Johnny and the Knights of the Galilee, which is being worked up by Tehran co-producer Paper Ente… [+2092 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Deadline"
      },
      "author": "Melanie Goodfellow",
      "title": "‘Gangs of New York’ Producer Thomas Benski Launches Talent & IP-Led Media Group Lumina",
      "description": "Thomas Benski, former CEO and co-founder of Gangs of London producer Pulse Films, has announced new London, New York, Paris and Los Angeles-based venture Lumina. The new company is billed as a “well-capitalized talent & IP-led media group” backed by a first r…",
      "url": "http://deadline.com/2024/12/thomas-benski-launches-talent-ip-led-media-group-lumina-1236190757/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/12/MixCollage-02-Dec-2024-08-39-AM-9930.jpg?w=1024",
      "publishedAt": "2024-12-02T07:45:21Z",
      "content": "Thomas Benski, former CEO and co-founder ofGangs of London producer Pulse Films, has announced new London, New York, Paris and Los Angeles-based venture Lumina.\r\nThe new company is billed as a “well-… [+5218 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "20 Minutes"
      },
      "author": "Fabien Randanne, avec AFP (20 Minutes)",
      "title": "Niels Arestrup, acteur de « Diplomatie » et « Un prophète », est mort",
      "description": "Le comédien français, qui a remporté trois César et un Molière dans sa carrière, est décédé chez lui ce dimanche, à l'âge de 75 ans",
      "url": "https://www.20minutes.fr/arts-stars/culture/4124370-20241201-niels-arestrup-acteur-diplomatie-prophete-mort",
      "urlToImage": "https://img.20mn.fr/UpTQvtJ8TkOU-ttJeg9MUSk/1444x920_niels-arestrup-a-recu-le-moliere-du-meilleur-comedien-du-theatre-prive-pour-rouge-en-2020-la-32eme-nuit-des-molieres-au-theatre-du-chatelet-presentee-par-marie-sophie-lacarrau-sur-france-television-le-mardi-23-juin-2020-paris-france-22-06-2020-04meigneux-2311107-2006232337-credit-romuald-meigneux-sipa-2006232343-ville-paris-pays-france-date-photo-22-06-2020-titre-paris-ceremonie-de-la-32eme-nuit-des-molieres-auteur-romuald-meigneux-sipa",
      "publishedAt": "2024-12-02T07:00:26Z",
      "content": "Il était une figure du théâtre et du cinéma français. L'acteur Niels Arestrup est mort ce dimanche, chez lui, à Ville-d'Avray (Hauts-de-Seine), ont annoncé son attachée de presse et son épouse à l'AF… [+4047 chars]"
      },
      {
    "source": {
      "id": "espn",
      "name": "ESPN"
      },
      "author": "ESPN Staff",
      "title": "Jalen Hurts' purple suit headlines stylish cold-weather arrivals for Week 13",
      "description": "NFL players brought the heat with stylish cold-weather arrivals for Week 13.",
      "url": "https://www.espn.com/nfl/story/_/id/42717808/nfl-week-13-player-arrivals",
      "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1201%2Fr1422344_2_1296x729_16%2D9.jpg",
      "publishedAt": "2024-12-02T00:04:23Z",
      "content": "As the crisp December air sweeps through stadium tunnels, Week 13 of the NFL season brings a runway of various looks.\r\nThe league's most fashion-forward players are taking on the chilly weather with … [+3298 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "La Vanguardia"
      },
      "author": "Fran Besora",
      "title": "Si tienes un iPhone o dispositivo de Apple, mucho cuidado con esta estafa",
      "description": "Una nueva estafa está afectando a los usuarios de Apple, ya que intenta robar las credenciales de su Cuenta de Apple a través de un correo electrónico falso que alerta sobre una posible suspensión de la misma y solicita la introducción de los datos de inicio …",
      "url": "https://www.lavanguardia.com/andro4all/apple/si-tienes-un-iphone-o-dispositivo-de-apple-mucho-cuidado-con-esta-estafa",
      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/12/estafa-apple-id.jpg?width=1200",
      "publishedAt": "2024-12-02T07:42:30Z",
      "content": "Así es la nueva estafa que afecta a los usuarios de Apple\r\nUna nueva estafa está afectando a los usuarios de Apple, ya que intenta robar las credenciales de su Cuenta de Apple a través de un correo e… [+1756 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Amazon.com"
      },
      "author": "Elizabeth Fuentes",
      "title": "Newly enhanced Amazon Connect adds generative AI, WhatsApp Business, and secure data collection",
      "description": "Use innovative tools like generative AI for segmentation and campaigns, WhatsApp Business, data privacy controls for chat, AI guardrails, conversational AI bot management, and enhanced analytics to elevate customer experiences securely and efficiently.",
      "url": "https://aws.amazon.com/blogs/aws/newly-enhanced-amazon-connect-adds-generative-ai-whatsapp-business-and-secure-data-collection/",
      "urlToImage": "https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2024/11/17/AWSNewsBlog-Thumbnail-Connect-800x400-1.png",
      "publishedAt": "2024-12-02T03:19:19Z",
      "content": "Today, Amazon Connect introduces a set of new features that help businesses enhance their contact center operations through generative AI, advanced security features, and streamlined bot management. … [+6646 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Clubic"
      },
      "author": "Naïm Bada",
      "title": "Cette fonction bien pratique de Google Maps sur Android Auto et Apple Car Play n'arrivera pas de sitôt en France...",
      "description": "Les utilisateurs de Google Maps aux États-Unis bénéficient désormais d'une intégration poussée des signalements communautaires de Waze. Cette évolution majeure, qui facilite considérablement la navigation routière, reste toutefois cantonnée au marché américai…",
      "url": "https://www.clubic.com/actualite-545642-cette-fonction-bien-pratique-de-google-maps-sur-android-auto-et-apple-car-play-n-arrivera-pas-de-sitot-en-france.html",
      "urlToImage": "https://pic.clubic.com/v1/images/2260361/raw",
      "publishedAt": "2024-12-02T05:25:00Z",
      "content": "La mise à jour concerne dans un premier temps les signalements de présence policière, avec une interface repensée pour plus d'ergonomie. Les conducteurs peuvent désormais valider ou invalider ces ale… [+567 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Nextpit.de"
      },
      "author": "Jade Bryan",
      "title": "Google Maps zeigt Waze-Meldungen zu Unfällen, Radarfallen und mehr",
      "description": "Google fügt Waze-gestützte Live-Verkehrsmeldungen in Google Maps ein, um die Navigation zu verbessern und genauer zu machen. Alles Weitere im Artikel.",
      "url": "https://www.nextpit.de/google-maps-zeigt-waze-meldungen-zu-unfaellen-radarfallen-und-mehr",
      "urlToImage": "https://fs.npstatic.com/userfiles/7734655/image/Google-Maps-on-a-Samsung-Galaxy-Phone.jpg",
      "publishedAt": "2024-12-02T09:00:01Z",
      "content": "Google spendierte Google Maps vor ein paar Jahren erstmals Verkehrsmeldungen und bot Funktionen wie Unfall- und Radarfallenwarnungen an. Zunächst war diese Funktion auf die mobile App beschränkt, doc… [+2100 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Nextpit.de"
      },
      "author": "Jade Bryan",
      "title": "Zu wenig Akku? OnePlus- und Realme-Handys mit 8.000-mAh-Akku möglich",
      "description": "Das nächste Realme-Handy könnte einen 8.000-mAh-Akku enthalten, den größten in einem Flaggschiff. Dürfen wir das auch in OnePlus- & Oppo-Geräten erwarten?",
      "url": "https://www.nextpit.de/zu-wenig-akku-oneplus-und-realme-handys-mit-8-000-mah-akku-moeglich",
      "urlToImage": "https://fs.npstatic.com/userfiles/7687254/image/OnePlus_12/nextpit_OnePlus_12.jpg",
      "publishedAt": "2024-12-02T07:00:00Z",
      "content": "In diesem Jahr überschritten Unternehmen wie OnePlus bereits die gewohnten Akku-Grenzen und überquerten die 6.000-mAh-Marke. Das OnePlus 13 hat zum Beispiel einen 6.100-mAh-Akku ein beeindruckender S… [+3170 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Tomshw.it"
      },
      "author": "Dario De Vita",
      "title": "2 dicembre: il portachiavi futuristico del Calendario dell'Avvento 2024",
      "description": "Il nostro Calendario dell'Avvento 2024 ha in serbo per il 2 dicembre una sorpresa davvero utile e tecnologica: un portachiavi futuristico che farà risparmiare tempo e stress a chiunque abbia ma...",
      "url": "https://www.tomshw.it/offerte/2-dicembre-il-portachiavi-futuristico-del-calendario-dellavvento-2024",
      "urlToImage": "https://www.tomshw.it/storage/media/2024/12/43009/portachiavi-futuristico-del-Calendario-dell'Avvento-2024.jpg",
      "publishedAt": "2024-12-02T10:19:42Z",
      "content": "Il nostro Calendario dell'Avvento 2024 ha in serbo per il 2 dicembre una sorpresa davvero utile e tecnologica: un portachiavi futuristico che farà risparmiare tempo e stress a chiunque abbia mai pers… [+2006 chars]"
      },
      {
    "source": {
      "id": "el-mundo",
      "name": "El Mundo"
      },
      "author": "elmundo.es",
      "title": "Black Friday y Cyber Monday 2024 en Amazon, último día de chollos, en directo: aspiradora sin cable Rowenta al 44%, un proyector de estrellas por 23 euros...",
      "description": "El Black Friday 2024 llega a su fin. Este lunes, 2 de diciembre, es el último día de ofertas y descuentos, para que encuentres todo lo que necesitas a precio de chollo. Además,...",
      "url": "https://www.elmundo.es/ofertas-regalos/black-friday/2024/12/02/674c90d9e85ece062f8b4678.html",
      "urlToImage": "https://phantom-elmundo.unidadeditorial.es/1a94605b6274b2c088654719f15e2720/resize/1200/f/webp/assets/multimedia/imagenes/2024/12/01/17330721010032.jpg",
      "publishedAt": "2024-12-02T07:01:23Z",
      "content": "El Black Friday 2024 llega a su fin. Este lunes, 2 de diciembre, es el último día de ofertas y descuentos, para que encuentres todo lo que necesitas a precio de chollo. Además, este último día coinci… [+46839 chars]"
      },
      {
    "source": {
      "id": "marca",
      "name": "Marca"
      },
      "author": "D. A.",
      "title": "Black Friday y Cyber Monday en Amazon: los chollos del último día, en directo",
      "description": "Hoy es el último día para aprovechar los descuentos y ofertas de Black Friday en Amazon. Aquí te dejamos una selección que iremos actualizando con las mejores ofertas y los chollos más vendidos  Leer",
      "url": "https://www.marca.com/regalos-promociones/black-friday/2024/12/02/674c840ae2704ee8088b4596.html",
      "urlToImage": "https://phantom-marca.unidadeditorial.es/bde32cf20f856c00e6115ee5b5a68c45/resize/1200/f/webp/assets/multimedia/imagenes/2024/12/01/17330684271165.jpg",
      "publishedAt": "2024-12-02T06:30:14Z",
      "content": "Hoy, lunes 2 de diciembre, es el último día para aprovechar los descuentos de Black Friday en Amazon que coincide, además, con el conocido Cyber Monday.\r\nEn BAZAR hemos preparado una selección que ir… [+46060 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Digiday"
      },
      "author": "Ronan Shields",
      "title": "Assessing the fallout of Google’s ad tech antitrust trial",
      "description": "Parsing the probable, possible, and plain absurd, including what a divested entity may look like.",
      "url": "http://digiday.com/media/assessing-the-fallout-of-googles-ad-tech-antitrust-trial/",
      "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2024/08/google-fallout-digiday.jpg",
      "publishedAt": "2024-12-02T05:01:00Z",
      "content": "Per Googles critics, the online giants overlapping monopolies have held the entirety of the media industry hostage to fortune in a game where it short-changes every tier of the sector. During the las… [+8411 chars]"
      },
      {
    "source": {
      "id": "ign",
      "name": "IGN"
      },
      "author": "Eric Song",
      "title": "The Best Cyber Monday Apple Watch Deals of 2024",
      "description": "Get a brand new Apple Watch for only $149.",
      "url": "https://www.ign.com/articles/best-apple-watch-deals-cyber-monday-2024",
      "urlToImage": "https://assets-prd.ignimgs.com/2024/12/02/cybermonday2024-blogroll-1-1733101101552.jpg?width=1280",
      "publishedAt": "2024-12-02T06:15:00Z",
      "content": "For Cyber Monday, two of the three tiers of Apple Watches the Apple Watch SE and the Apple Watch Series 10 are still on sale right now at Amazon, Target, and Walmart. The Apple Watch Ultra had also b… [+6460 chars]"
      },
      {
    "source": {
      "id": "ign",
      "name": "IGN"
      },
      "author": "Eric Song",
      "title": "Save 40% Off the Apple AirPods Pro for Cyber Monday",
      "description": "Horrrrya ! The Apple AirPods Pro are on sale for 40% off for Cyber Monday.",
      "url": "https://www.ign.com/articles/apple-airpods-pro-cyber-monday-deal-2024",
      "urlToImage": "https://assets-prd.ignimgs.com/2024/12/01/appleairpodspro-1733086255645.jpg?width=1280",
      "publishedAt": "2024-12-02T06:10:00Z",
      "content": "The best Cyber Monday AirPods deal is still available, although it looks to be selling out quickly. The Apple AirPods Pro wireless noise-canceling earbuds dropped to $154 during the leadup to Black F… [+5202 chars]"
      },
      {
    "source": {
      "id": "ign",
      "name": "IGN"
      },
      "author": "Lindsey Salzer",
      "title": "The Best Apple Cyber Monday Deals You Can Score Right Now",
      "description": "From iPads and MacBooks to AirPods and AirTags, these are all the best Apple deals still available for Cyber Monday.",
      "url": "https://www.ign.com/articles/best-apple-deals-cyber-monday-2024",
      "urlToImage": "https://assets-prd.ignimgs.com/2024/12/02/apple-cyber-monday-2024-blogroll-psd-1-1733131076028.png?width=1280",
      "publishedAt": "2024-12-02T09:21:04Z",
      "content": "Cyber Monday is here, and thankfully most of the Black Friday deals carried over to today across Apple's biggest product categories. If youre in the market for a new pair of AirPods, an Apple Watch, … [+5605 chars]"
      },
      {
    "source": {
      "id": "ign",
      "name": "IGN"
      },
      "author": "Brian Barnett",
      "title": "3D Printer Cyber Monday Deals: Our Favorite 3D Printers for D&D Miniatures Are on Sale",
      "description": "If you're into miniatures and model kits, you may want to look into 3D printer deals this Cyber Monday and let your imagination soar.",
      "url": "https://www.ign.com/articles/best-3d-printer-deals-cyber-monday-2024",
      "urlToImage": "https://assets-prd.ignimgs.com/2024/12/02/3d-printer-cyber-monday-2024-blogroll-psd-1733117720907.png?width=1280",
      "publishedAt": "2024-12-02T05:39:09Z",
      "content": "3D printers are the future. In fact, according to Fortune Business Insights, \"The global 3D printing market size was valued at $22.39 billion in 2023 and is projected to grow from $27.52 billion in 2… [+2198 chars]"
      },
      {
    "source": {
      "id": "ign",
      "name": "IGN"
      },
      "author": "Eric Song",
      "title": "The Best Buy Cyber Monday Sale Is Live: The Best Deals on PlayStation 5, Gaming PCs, Laptops, and TVs",
      "description": "Best Buy has always been a tech and gaming focused retailer, perfect for our audience.",
      "url": "https://www.ign.com/articles/best-buy-cyber-monday-sales-and-deals-2024",
      "urlToImage": "https://assets-prd.ignimgs.com/2024/12/01/cmbestbuy-1733080287233.jpg?width=1280",
      "publishedAt": "2024-12-02T06:10:00Z",
      "content": "Move over Black Friday, the Best Buy Cyber Monday Sale is now live! So far I've seen a mix of deals that include several that have been carried over from Black Friday as well as others that are exclu… [+9249 chars]"
      },
      {
    "source": {
      "id": "ign",
      "name": "IGN"
      },
      "author": "Brian Barnett",
      "title": "The Best VPN Deals on Cyber Monday Includes Our Top VPN for Streaming and Gaming",
      "description": "There are many high-quality VPN services to consider, each with different subscription options that are heavily discounted for Cyber Monday.",
      "url": "https://www.ign.com/articles/best-cyber-monday-vpn-deals-2024",
      "urlToImage": "https://assets-prd.ignimgs.com/2024/12/02/vpn-cyber-monday-2024-blogroll-psd-1733116086734.png?width=1280",
      "publishedAt": "2024-12-02T05:15:49Z",
      "content": "If you don't like people telling you what you can and can't have access to, especially for streaming content in different regions, VPNs provide a great way to gain that access and privacy. A VPN\r\n, o… [+5918 chars]"
      },
      {
    "source": {
      "id": "techradar",
      "name": "TechRadar"
      },
      "author": "James Rogerson",
      "title": "Samsung Galaxy S25 Ultra specs predictions: all the key rumored specs for the top model",
      "description": "Thanks to leaks and rumors we have a good idea of what Samsung Galaxy S25 Ultra specs to expect.",
      "url": "https://www.techradar.com/phones/samsung-galaxy-phones/samsung-galaxy-s25-ultra-specs",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/4BkApRn9ShNCXWXEvPzJgK-1200-80.jpg",
      "publishedAt": "2024-12-02T08:30:59Z",
      "content": "The still-rumored Samsung Galaxy S25 Ultra has a very good shot at being the best phone of 2025. It’s not even out yet but we’re already confident in saying that, as Samsung’s ‘Ultra’ models are almo… [+5211 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Numerama"
      },
      "author": "Julien Cadot",
      "title": "L’application Apple Watch pour Tesla n’est pas la meilleure nouveauté de la mise à jour de Noël",
      "description": "La mise à jour Tesla de Noël 2024 est là ! Quelles sont les fonctionnalités ajoutées aux Model 3, Y, S et X ? Tous les ans, Tesla annonce une mise à jour de Noël, comme un cadeau sous le sapin des conducteurs et conductrices de Model S, Y, 3, X ou Cybertruck.…",
      "url": "https://www.numerama.com/vroom/1856932-lapplication-apple-watch-pour-tesla-nest-pas-la-meilleure-nouveaute-de-la-mise-a-jour-de-noel.html",
      "urlToImage": "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/12/design-sans-titre-29.jpg?resize=1600,900&key=ae171bd3&watermark",
      "publishedAt": "2024-12-02T08:34:59Z",
      "content": "La mise à jour Tesla de Noël 2024 est là ! Quelles sont les fonctionnalités ajoutées aux Model 3, Y, S et X ? \r\nTous les ans, Tesla annonce une mise à jour de Noël, comme un cadeau sous le sapin des … [+4447 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Numerama"
      },
      "author": "Julien Lausson",
      "title": "Le principal point fort de Waze arrive dans Google Maps",
      "description": "Dans sa nouvelle mise à jour, Google Maps gagne le support des signalements provenant de Waze. Le GPS communautaire, que Google a racheté en 2013, fusionne lentement, mais sûrement, avec Google Maps. Le principal atout de Waze fait son apparition dans Google …",
      "url": "https://www.numerama.com/tech/1856938-le-principal-point-fort-de-waze-arrive-dans-google-maps.html",
      "urlToImage": "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/12/google-maps-waze.jpg?resize=1600,900&key=27e90345&watermark",
      "publishedAt": "2024-12-02T09:33:43Z",
      "content": "Dans sa nouvelle mise à jour, Google Maps gagne le support des signalements provenant de Waze. Le GPS communautaire, que Google a racheté en 2013, fusionne lentement, mais sûrement, avec Google Maps.… [+4882 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Paul Caputo, Contributor, \n Paul Caputo, Contributor\n https://www.forbes.com/sites/paulcaputo/",
      "title": "The Best Places To Eat And Drink In Style In Ireland",
      "description": "The best restaurants for food, dining, and wine in Ireland. From Michelin starred venues to Dublin's best wine bars, to the best restaurant's in the Irish countryside",
      "url": "https://www.forbes.com/sites/paulcaputo/2024/12/02/the-best-places-to-eat-and-drink-in-style-in-ireland/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6749a739f99f56934649e5bf/0x0.jpg?format=jpg&crop=2253,1303,x0,y198,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-12-02T10:31:37Z",
      "content": "The Rock of Cashel, also known as Cashel of the Kings and St Patrick's Rock, County Tipperary, Ireland.\r\nDe Agostini via Getty Images\r\nIrelands global reputation for hospitality has long been dominat… [+11911 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Antyweb.pl"
      },
      "author": "Tomasz Szwast",
      "title": "Allegro nie zwalnia tempa. Obok tych okazji ciężko przejść obojętnie",
      "description": "Promocja Black Weeks na Allegro zbliża się do końca. Nie oznacza to jednak, że przygotowane oferty stają się mniej atrakcyjne, a wręcz przeciwnie! Specjalnie dla Was wybraliśmy kilka najciekawszych z różnych kategorii. Wśród nich znalazła się prawdziwa bomba …",
      "url": "https://antyweb.pl/black-weeks-i-cyber-monday-na-allegro",
      "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2024/11/black-weeks.jpg",
      "publishedAt": "2024-12-02T07:30:53Z",
      "content": "Oferty przygotowywane przez róne sklepy i platformy internetowe z okazji Black Friday to czsto okazja do zakupu sprztu elektronicznego w korzystnej cenie. Skorzystaj na tym zwaszcza ci, którzy od daw… [+4381 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Olhardigital.com.br"
      },
      "author": "Camila Oliveira",
      "title": "Como usar Image Wand no iOS 18",
      "description": "Veja como usar o Image Wand, recurso de edição de imagens da Apple que utiliza a tecnologia de Inteligência Artificial\nO post Como usar Image Wand no iOS 18 apareceu primeiro em Olhar Digital.",
      "url": "https://olhardigital.com.br/2024/12/02/dicas-e-tutoriais/como-usar-image-wand-no-ios-18/",
      "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2024/09/iOS-18-via-QubixStudio-Shutterstock-1-scaled.jpg",
      "publishedAt": "2024-12-02T09:20:00Z",
      "content": "Recentemente, o iOS 18 foi lançado para os usuários da Apple, trazendo diversas novidades. Uma delas é o novo Image Wand, uma ferramenta que promete ajudar os usuários a converter os esboços do aplic… [+2114 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "\"Nunca me imaginé que los derechos de las mujeres se perderían tan fácilmente\": Malala Yousafza, premio Nobel de la Paz",
      "description": "La Nobel de la Paz, que es la productora ejecutiva del documental Bread & Roses sobre la situación de las mujeres en Afganistán, dice estar sorprendida del retroceso que han tenido sus derechos desde el regreso del Talibán.",
      "url": "https://www.bbc.com/mundo/articles/cp3561pqr59o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_mundo/4c4f/live/5e6e9320-a836-11ef-8ab9-9192db313061.jpg",
      "publishedAt": "2024-12-02T08:48:42Z",
      "content": "Fuente de la imagen, Getty Images\r\nPie de foto, Malala Yousafzai ha hecho campaña por los derechos de las mujeres desde que un talibán disparó contra ella en 2012.\r\nInformación del artículo<ul><li>Au… [+8751 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Actualidadiphone.com"
      },
      "author": "Isaac",
      "title": "Cyber Monday: conoce las ofertas más locas",
      "description": "El Cyber Monday trae grandes ofertas en sorprendentes artículos compatibles con tus dispositivos Apple y no deberías perder esta oportunidad",
      "url": "https://www.actualidadiphone.com/cyber-monday-conoce-las-ofertas-mas-locas/",
      "urlToImage": "https://www.actualidadiphone.com/wp-content/uploads/2024/12/cyber-monday-black-friday-apple-ofertas-1.jpg",
      "publishedAt": "2024-12-02T09:09:35Z",
      "content": "El Cyber Monday ha llegado, y con él, las mejores ofertas en productos y accesorios compatibles con tus dispositivos Apple. Si eres un fan de la manzana y estás buscando renovar tu dispositivo o adqu… [+3176 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Actualidadiphone.com"
      },
      "author": "Isaac",
      "title": "Cyber Monday te trae ofertas para que te conectes a la cyber velocidad que mereces",
      "description": "Si quieres estar conectado con la máxima rapidez, cobertura de red, y seguridad, estas ofertas del Cyber Monday te van a encantar...",
      "url": "https://www.actualidadiphone.com/cyber-monday-te-trae-ofertas-para-que-te-conectes-a-la-cyber-velocidad-que-mereces/",
      "urlToImage": "https://www.actualidadiphone.com/wp-content/uploads/2024/12/cyber-monday-black-friday-redes.jpg",
      "publishedAt": "2024-12-02T09:53:35Z",
      "content": "¿Buscas mejorar tu red doméstica y optimizar la conexión de tus dispositivos Apple? El Cyber Monday es la oportunidad perfecta para encontrar los mejores descuentos en routers, repetidores de señal, … [+2262 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Actualidadiphone.com"
      },
      "author": "Isaac",
      "title": "Cyber Monday revienta los precios del iPad Pro",
      "description": "¿Buscas un iPad Pro de alta gama sin gastar una fortuna? El Cyber Monday es la oportunidad perfecta para hacerte...",
      "url": "https://www.actualidadiphone.com/cyber-monday-revienta-los-precios-del-ipad-pro/",
      "urlToImage": "https://www.actualidadiphone.com/wp-content/uploads/2024/12/cyber-monday-black-friday-ipad-pro.jpg",
      "publishedAt": "2024-12-02T10:46:20Z",
      "content": "¿Buscas un iPad Pro de alta gama sin gastar una fortuna? El Cyber Monday es la oportunidad perfecta para hacerte con el iPad Pro de 12.9 pulgadas de 5ª generación a un precio increíble. Aunque este m… [+1874 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "3dnews.ru"
      },
      "author": null,
      "title": "Китайский автопроизводитель BYD стал крупнейшим производителем iPad",
      "description": "Исторически именно тайваньская компания Foxconn являлась крупнейшим контрактным производителем продукции Apple, но с годами стремление к диверсификации поставщиков привело в их ряды даже китайскую BYD, которая более известна своими аккумуляторами и электромоб…",
      "url": "https://3dnews.ru/1114820/kitayskomu-avtoproizvoditelyu-byd-udalos-stat-krupneyshim-podryadchikom-apple-po-sborke-ipad",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/12/02/1114820/ipad_01.jpg",
      "publishedAt": "2024-12-02T07:16:00Z",
      "content": "Foxconn Apple, BYD, . , iPad BYD 100 .\r\n: Apple\r\nThe Wall Street Journal. , BYD 30 % Apple. 100 000 10 000 , BYD. , , , .\r\n, BYD Apple, . Luxshare Apple iPhone. , Apple . Apple (Tim Cook) : « , , ».\r… [+203 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Tinhte.vn"
      },
      "author": "no-reply@tinhte.vn (nw_47), nw_47",
      "title": "Lý do mua Anker 3-in-1 Cube with MagSafe",
      "description": "Bạn có biết về phụ kiện sạc Anker 3-in-1 Cube with MagSafe không? Đây là một thiết bị sạc không dây thông minh, tiện lợi và đa năng, có thể sạc cùng lúc ba thiết bị Apple như iPhone, AirPods và Apple Watch.",
      "url": "https://tinhte.vn/thread/ly-do-mua-anker-3-in-1-cube-with-magsafe.3738400/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/11/8184960_y1811.jpg",
      "publishedAt": "2024-12-02T07:01:32Z",
      "content": "Mình là mt ngi dùng trung thành ca các sn phm Apple. mình có mt chic iPhone 15 Max, AirPods Pro i u và Apple Watch SE2. Mình thng phi sc ng h mi ngày, in thoi mi 2 ngày và tai nghe mi tun, nhng vic s… [+1716 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Tinhte.vn"
      },
      "author": "no-reply@tinhte.vn (Cáo - Foxtek), Cáo - Foxtek",
      "title": "Liệu công nghệ AI của Apple đang đi sau các đối thủ ít nhất hai năm?",
      "description": "Theo bản tin Power On mới nhất của Mark Gurman và được trích dẫn bởi trang 9to5Mac (20/10/2024), một số nhân viên tại Apple tin rằng công ty đã chậm chân khoảng hai năm trong việc phát triển trí tuệ nhân tạo (AI) khi so với những thương hiệu như:…",
      "url": "https://tinhte.vn/thread/lieu-cong-nghe-ai-cua-apple-dang-di-sau-cac-doi-thu-it-nhat-hai-nam.3841682/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/10/8491070_apple-intelligence.jpeg",
      "publishedAt": "2024-12-02T07:00:35Z",
      "content": "Apple thm chí còn chiêu m nhiu chuyên gia v trí tu nhân to n t Google (nh minh ha: Ngun: Financial Times.Mc dù Apple có th \"chm chân hay i sau\" trong vic phát trin AI nu so sánh vi nhng sn phm AI côn… [+429 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "3dnews.ru"
      },
      "author": null,
      "title": "Спрос на Apple iPhone 16 пока немного опережает ожидания",
      "description": "Некоторые опросы общественного мнения показывают, что iPhone не так часто становятся подарком, как iPad или Apple Watch, но именно смартфоны до сих пор определяют половину выручки компании, поэтому статистика их продаж важна для бизнеса Apple в целом. Аналити…",
      "url": "https://3dnews.ru/1114811/spros-na-apple-iphone-16-poka-nemnogo-operegaet-ogidaniya",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/12/02/1114811/iphone_16.jpg",
      "publishedAt": "2024-12-02T01:49:00Z",
      "content": ", iPhone , iPad Apple Watch, , Apple . Wedbush Securities , iPhone 16 .\r\n: Apple\r\nApple , , Apple Intelligence. Wedbush, iPhone 16 . Apple Intelligence , , .\r\n iOS 18.2 iPhone 16 , iOS 18.1, Siri - C… [+95 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Courrier International"
      },
      "author": null,
      "title": "“Les Sentinelles” : qu’est-ce que le créole ?",
      "description": "Peut-on définir le créole ? C’est la question que nous avons posée au linguiste Salikoko Mufwene dans le premier épisode de notre nouvelle série de podcasts consacrée au français, une langue dans tous ses états. La réponse est complexe : culturelle, économiqu…",
      "url": "https://www.courrierinternational.com/article/podcast-les-sentinelles-qu-est-ce-que-le-creole_222343",
      "urlToImage": "https://focus.courrierinternational.com/2023/08/03/0/0/2559/1706/1200/630/60/0/4789158_1691073765625-sentinelles-site.png",
      "publishedAt": "2024-12-02T04:00:12Z",
      "content": "Y a-t-il une seule langue française ? Ou plutôt une mosaïque de langues bien vivantes ? Du créole au québécois, la langue se métisse, évolue, senrichit Mais elle est de plus en plus contestée dans le… [+1835 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Applesfera.com"
          },
          "author": "Álvaro García M.",
          "title": "Como saber si tienes derecho a la ayuda de 1.500 euros que regala Madrid por pasarse a la movilidad eléctrica",
          "description": "La Comunidad de Madrid ha abierto recientemente el plazo de solicitud de ayudas para la movilidad eléctrica. Se engloba dentro del conocido como Plan Mueve Madrid y son varias las líneas de ayuda que se abren. Desde aquellos que quieran comprar una bicicleta …",
          "url": "https://www.applesfera.com/tutoriales/como-saber-tienes-derecho-a-ayuda-1-500-euros-que-regala-madrid-pasarse-a-movilidad-electrica",
          "urlToImage": "https://i.blogs.es/e81491/madrid-bici/840_560.jpeg",
          "publishedAt": "2024-12-02T08:00:43Z",
          "content": "La Comunidad de Madrid ha abierto recientemente el plazo de solicitud de ayudas para la movilidad eléctrica. Se engloba dentro del conocido como Plan Mueve Madrid y son varias las líneas de ayuda que… [+4427 chars]"
          },
      {
    "source": {
      "id": null,
      "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "2024-12-02T06:58:00Z",
      "content": "[Removed]"
      },
      {
    "source": {
      "id": null,
      "name": "Elespanol.com"
      },
      "author": "César Rebolledo",
      "title": "FREE FIRE MAX | Códigos de hoy lunes 2 de diciembre de 2024 - Recompensas gratis",
      "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire MAX que podrás canjear hoy, lunes 2 de diciembre de 2024. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibid…",
      "url": "https://vandal.elespanol.com/noticia/1350776211/free-fire-max-codigos-de-hoy-lunes-2-de-diciembre-de-2024-recompensas-gratis/",
      "urlToImage": "https://media.vandal.net/ivandal/12/63/1200x630/12/12-2024/2/20241229162191_1.jpg",
      "publishedAt": "2024-12-02T08:16:00Z",
      "content": "El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido nuevos códigos diarios para hoy lunes 2 de diciembre de 2024.\r\nLos jugadores pueden canjear estos códigos para recibir recompens… [+2541 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Anaitgames.com"
      },
      "author": "Víctor Martínez",
      "title": "Podcast Reload: S16E12 – Consolas portátiles, Shuhei Yoshida, The Rise of the Golden Idol, Cameltry",
      "description": "Podcast Reload: S16E12 – Consolas portátiles, Shuhei Yoshida, The Rise of the Golden Idol, Cameltry ️\nCon o sin consola portátil, asegúrate de llevarte este episodio de Reload a todos lados.\n Léelo en AnaitGames:",
      "url": "https://www.anaitgames.com/podcast/reload/podcast-reload-s16e12-consolas-portatiles-shuhei-yoshida-the-rise-of-the-golden-idol-cameltry/",
      "urlToImage": "https://www.anaitgames.com/wp-content/uploads/2024/12/reload-s16e12-ico.jpg",
      "publishedAt": "2024-12-02T06:00:00Z",
      "content": "¡Atención! Esta temporada, nos puedes ver las caras en la versión de YouTube, donde puedes ver la conversación del podcast en vídeo. ¿Prefieres simplemente escucharnos? ¡Sin problema! Las versiones e… [+2008 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Taisy0.com"
      },
      "author": "taisy0",
      "title": "12月4日スタートの｢RakutenスーパーSALE｣で｢AirPods 4｣と｢AirPods Pro 2｣が値引き対象に ｰ ただ、｢AirPods Pro 2｣はAmazonの方が安い…",
      "description": "楽天モバイル公式 楽天市場店が、12月4日よりスタートする「RakutenスーパーSALE」において、Appleの「AirPods 4」と「AirPods Pro 2」を特価で販売することを案内しています。 セール対象となるのは、「AirP",
      "url": "https://taisy0.com/2024/12/02/206550.html",
      "urlToImage": "https://taisy0.com/wp-content/uploads/2024/09/airpods431.jpg",
      "publishedAt": "2024-12-02T04:36:28Z",
      "content": "124RakutenSALEAppleAirPods 4AirPods Pro 2\r\nAirPods 429,8001,81027,990\r\nAirPods Pro 239,8001,90037,900\r\n124201211159AirPods Pro 2Amazon AirPods 4RakutenSALE"
      },
      {
    "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Pubblicità",
      "title": "Black Friday ultimo giorno, Belkin BoostCharge tripla carica veloce a 69,99€ caricabatterie incluso",
      "description": "Amazon sconta a 69,99 euro il Belkin BoostCharge, un caricabatterie wireless che ricarica velocemente iPhone, Apple Watch e Airpods. Il caricabatterie è incluso e si piega per nadare in viaggio.\n- su macitynet.it Black Friday ultimo giorno, Belkin BoostCharge…",
      "url": "https://www.macitynet.it/sconto-belkin-boostcharge-qi2/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/12/caricabatterie-Belkin-BoostCharge-.jpg",
      "publishedAt": "2024-12-02T10:46:39Z",
      "content": "Il Magsafe Apple troppo limitato o troppo caro? Non c’è problema, con il Black Friday comprate ad un prezzo superlativo il Belkin BoostCharge che fa molto di più e che pagate solo 69,99 , caricabatte… [+1716 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Mauro Notarianni",
      "title": "Come sfruttare le operazioni matematiche nelle Note di macOS Sequoia",
      "description": "Tar le peculiarità di Note su macOS Sequoia, la possiiblità di ottenere risultati con spressioni aritmetiche di base e complesse, e anche lavorare con le variabili.\n- su macitynet.it Come sfruttare le operazioni matematiche nelle Note di macOS Sequoia",
      "url": "https://www.macitynet.it/come-sfruttare-le-operazioni-matematiche-nelle-note-di-macos-sequoia/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/11/variabileesempio.jpg",
      "publishedAt": "2024-12-02T08:29:05Z",
      "content": "Tra le novità di macOS Sequoia, il sistema operativo per Mac che Apple ha distribuito ufficialmente a partire da fine settembre 2024, vi sono alcune novità che riguardano l’app Note: non solo è possi… [+2707 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Pubblicità",
      "title": "Super sconto per la soundbar di design Sonos Ray con Airplay 2",
      "description": "Sconto super perla soundbar Ray di Sonos: il piccolo mostro audio è ottima per TV, gioco e collegamento airplay con Mac, iPhone e iPad e si adatta alla vostra stanza.\n- su macitynet.it Super sconto per la soundbar di design Sonos Ray con Airplay 2",
      "url": "https://www.macitynet.it/super-sconto-per-la-soundbar-di-design-sonos-ray-con-airplay-2/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/12/sonos-ray-living.jpg",
      "publishedAt": "2024-12-02T08:42:40Z",
      "content": "E’ stata ed è una delle offerte più apprezzate dai nostri lettori per il Black Friday: Sonos Ray una soundbar indipendente di piccole dimensioni con collegamento Airplay 2 wireless ai dispositivi App… [+3794 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "ELAINE KURTENBACH",
      "title": "Stock market today: World shares are mixed as Chinese stocks get a boost from strong factory orders",
      "description": "World shares were mixed on Monday, with China leading gains as monthly surveys showed improving conditions for manufacturing, partly driven by a surge in...",
      "url": "https://finance.yahoo.com/news/stock-market-today-asian-shares-053908825.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/1ah2eXF.MBGxKhQFwP1G6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/1918811ee6ec8f9f5f23ae5e166484d7",
      "publishedAt": "2024-12-02T05:39:08Z",
      "content": "<ul><li>World shares were mixed on Monday, with China leading gains as monthly surveys showed improving conditions for manufacturing, partly driven by a surge in orders ahead of President-elect Donal… [+4335 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Ultime ore di Black Friday: tornano le AirPods Pro 2 a 189, iPhone 15 e 16, iPad, Apple Watch e 4 AirTag a 79!",
      "description": "Ecco le offerte aggiornate per i prodotti Apple Black Friday: spiccano iPhone, AirTag, AirPods e iPad economici, oltre a Apple Watch. Si risparmia veramente tanto, oggi ultimo giorno con prezzi così!",
      "url": "https://www.hwupgrade.it/news/apple/ultime-ore-di-black-friday-tornano-le-airpods-pro-2-a-189-iphone-15-e-16-ipad-apple-watch-e-4-airtag-a-79_133375.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/iphone16_9sept_720.jpg",
      "publishedAt": "2024-12-02T09:29:08Z",
      "content": "Un click qui per cercare articoli Amazon Seconda mano ex Warehouse scontati del \r\n30%!\r\nOggi è l'ultimo giorno della cosiddetta Settimana del Black Friday, ovvero il periodo di sconti su Amazon, che … [+1101 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Ultimo giorno a -400 per ECOVACS DEEBOT X5 OMNI e Black Friday: 12.800Pa e pulizia perfetta!",
      "description": "Ultimo giorno per lo sconto di 400 sull'ottimo Ecovacs Deebot X5 OMNI, visto che il Black Friday finisce a mezzanotte. L'occasione è unica per godere di uno sconto così importante, non lasciatevelo sfuggire.",
      "url": "https://smarthome.hwupgrade.it/news/casa/ultimo-giorno-a-400-per-ecovacs-deebot-x5-omni-e-black-friday-12800pa-e-pulizia-perfetta_133364.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/ecovacsx5omni_720.jpg",
      "publishedAt": "2024-12-02T06:35:46Z",
      "content": "Un click qui per cercare articoli Amazon Seconda mano ex Warehouse scontati del \r\n30%!\r\nECOVACS Deebot X5 Omni è il top di gamma di una nuova gamma di robot aspirapolvere di ECOVACS che punta su una … [+1710 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "WhatsApp non sarà più compatibile su questi iPhone a partire da maggio 2025",
      "description": "WhatsApp interromperà il supporto per alcune versione obsolete di iOS dal 5 maggio 2025, colpendo principalmente gli utenti di iPhone 5s, 6 e 6 Plus. L'obiettivo è migliorare l'esperienza utente attraverso l'adozione delle ultime tecnologie disponibili.",
      "url": "https://www.hwupgrade.it/news/apple/whatsapp-non-sara-piu-compatibile-su-questi-iphone-a-partire-da-maggio-2025_133374.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/WahtsAppTrasnfer_720.jpg",
      "publishedAt": "2024-12-02T09:31:01Z",
      "content": "WhatsApp ha comunicato che a partire dal 5 maggio 2025 l'app non supporterà più le versioni di iOS precedenti alla 15.1. Questa decisione impatterà principalmente gli utenti di iPhone 5s, iPhone 6 e … [+2665 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Shutterbean.com"
      },
      "author": null,
      "title": "Intentions for the Week",
      "description": "Intentions for the Week- Week 49 in 2024\nHi hiiiiii! Happy Monday, folks! How was your weekend? We got back from our trip up north Saturday night. I did Self-Check-In yesterday to map out my Intentions for the Week. Since I was gone, I had some catching up to…",
      "url": "https://www.shutterbean.com/2024/intentions-for-the-week-387/",
      "urlToImage": "https://www.shutterbean.com/wp-content/uploads/2021/11/intentionsfortheweekworkbook-10.jpg",
      "publishedAt": "2024-12-02T09:22:26Z",
      "content": "Intentions for the Week- Week 49 in 2024\r\nHi hiiiiii! Happy Monday, folks! How was your weekend? We got back from our trip up north Saturday night. I did Self-Check-In yesterday to map out my Intenti… [+4057 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Sspai.com"
      },
      "author": "少数派编辑部",
      "title": "派评 | 近期值得关注的 App",
      "description": "欢迎收看本期《派评》。你可以通过文章目录快速跳转到你感兴趣的内容。如果发现了其它感兴趣的App或者关注的话题，也欢迎在评论区和我们讨论。值得关注的新App虽然少数派一直在为大家发现和介绍各平台上的优质 ...查看全文",
      "url": "https://sspai.com/post/94421",
      "urlToImage": "https://cdnfile.sspai.com/2024/12/1/article/8d12b1b5-9da3-d117-7fee-681dfb27fb4d.png",
      "publishedAt": "2024-12-02T09:30:00Z",
      "content": "App \r\n App\r\n App App App App\r\nRecraft AI \r\n<ul><li>iOS / iPadOS / Web / Android</li><li>AI </li></ul>@ElijahLeeRecraft AI AI \r\nRecraft AI Recraft Recraft V3 Recraft V20B \r\nRecraft Recraft a wand and … [+1359 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Ultime ore di Black Friday: tornano le AirPods Pro 2 a 189, iPhone 16, iPad, Apple Watch e 4 AirTag a 79!",
      "description": "Ecco le offerte aggiornate per i prodotti Apple Black Friday: spiccano iPhone, AirTag, AirPods e iPad economici, oltre a Apple Watch. Si risparmia veramente tanto, oggi ultimo giorno con prezzi così!",
      "url": "https://www.hwupgrade.it/news/apple/ultime-ore-di-black-friday-tornano-le-airpods-pro-2-a-189-iphone-16-ipad-apple-watch-e-4-airtag-a-79_133375.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/iphone16_9sept_720.jpg",
      "publishedAt": "2024-12-02T09:29:08Z",
      "content": "Un click qui per cercare articoli Amazon Seconda mano ex Warehouse scontati del \r\n30%!\r\nOggi è l'ultimo giorno della cosiddetta Settimana del Black Friday, ovvero il periodo di sconti su Amazon, che … [+998 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Oggi è il Cyber Monday: ecco i super sconti che mettono fine al Black Friday, super offerte fino a mezzanotte!",
      "description": "Tradizionalmente, il Cyber Monday è l'ultimo giorno di offerte Black Friday, e questo vale su Amazon come su altri store. Ecco quindi le offerte migliori in queste ultime ore: quasi tutti i prodotti che trovate qui, infatti, domani avranno prezzi in rialzo",
      "url": "https://www.hwupgrade.it/news/telefonia/oggi-il-cyber-monday-ecco-i-super-sconti-che-mettono-fine-al-black-friday-super-offerte-fino-a-mezzanotte_133381.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/cyb-mon_amz-720.jpg",
      "publishedAt": "2024-12-02T10:35:20Z",
      "content": "Sconti del 30% in Amazon Seconda Mano - Warehouse!\r\nSi definisce come i termini \"Cyber Monday\" l'ultimo giorno di offerte del periodo Black Friday. Come da tradizione il Cyber Monday è quindi il lune… [+9231 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "MLB Trade Rumors"
      },
      "author": "Mark Polishuk",
      "title": "Mets Sign Frankie Montas",
      "description": "The Mets have signed free agent right-hander Frankie Montas to a two-year, $34MM deal that contains an opt-out clause for Montas following the 2025 season.  Montas will earn $17MM in both the 2025 and 2026 seasons.  The contract will become official when the …",
      "url": "https://www.mlbtraderumors.com/2024/12/mets-sign-frankie-montas.html",
      "urlToImage": "https://cdn.mlbtraderumors.com/files/2024/11/FrankieMontas-Brewers-1024x658.jpg",
      "publishedAt": "2024-12-02T04:55:23Z",
      "content": "The Mets have signed free agent right-hander Frankie Montas to a two-year, $34MM deal that contains an opt-out clause for Montas following the 2025 season.  Montas will earn $17MM in both the 2025 an… [+5350 chars]"
      },
      {
    "source": {
      "id": null,
      "name": "Slate Magazine"
      },
      "author": "Yasmeen Khan",
      "title": "The House’s Gift to Trump",
      "description": "Why give more power to a president who said he thinks protestors should be shot in the legs?",
      "url": "https://slate.com/podcasts/what-next/2024/12/are-democrats-giving-trump-even-more-power",
      "urlToImage": "https://compote.slate.com/images/8cf54cad-e209-483e-83bb-e5f3d4ed74fe.jpeg?width=1560",
      "publishedAt": "2024-12-02T10:00:00Z",
      "content": "The House already voted to pass the The Stop Terror-Financing and Tax Penalties on American Hostages Act. But with Donald Trump returning to the White House next year, some Democrats are viewing the … [+664 chars]"
      },
      {
    "source": {
      "id": "nbc-news",
      "name": "NBC News"
      },
      "author": "Harry Rabinowitz",
      "title": "The best Cyber Monday Apple deals",
      "description": "Shop the best Cyber Monday Apple deals. Discover the best discounts on Apple products like iPads, MacBooks and more.",
      "url": "https://www.nbcnews.com/select/shopping/apple-cyber-monday-deals-2024-rcna181649",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-11/241121-cyber-monday-apple-deals-lm-social-v2-1f286d.jpg",
      "publishedAt": "2024-12-02T09:19:07Z",
      "content": "Cyber Monday is here, and were seeing great Apple deals leading up to the event. Youll also find early sales on TVs, smartwatches, laptops and more.\r\nI have covered shopping events for years as a tec… [+11771 chars]"
      }
      ]

    super();

    this.state = {
      articles: articles,
      loading:false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-11-04&sortBy=publishedAt&apiKey=5b0e5a2087524fc3bf62bc17e96cfa33"
    // let data = await fetch(url)
    let parsedData = await data.json()

    // console.log(parsedData)
    this.setState({articles:parsedData.articles})

  }
  render() {
    return (
      
      <div className='container my-3'>
      <h2 className='top-heading m-4'>Today's News - Know all about Tesla and Musk</h2>

      <div className='row'>
     { this.state.articles.map((ele)=>{
      if (ele.title === '[Removed]') {
        return null; 
      }
        return <div className='col md-4' key={ele.url}>
        <Newsitem 
          title={ele.title.length > 35 ? `${ele.title.slice(0, 35)}...` : ele.title} 
          description={ele.description.length > 90 ? `${ele.description.slice(0,90)}....` : ele.description} 
          imgurl={ele.urlToImage == null ? "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg":ele.urlToImage} 
          newurl={ele.url} 
        />

    </div>
   
      })}
      
   
    </div>

      </div>
    )
  }
}

export default News
