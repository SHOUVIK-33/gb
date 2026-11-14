/* =====================================================================
   PORICHOY  ·  পৰিচয়
   ---------------------------------------------------------------------
   Ei file tu hoi tomar website r "content" file.
   Isite tomar sob likha, kobita, rong, photo r gaan thakibo.
   HTML/CSS/JS r kotha natikoi — kewali ei file tu edit korilei hobo.
   ---------------------------------------------------------------------
   KENEDORE EDIT KORIBO:
   - Text r duyokhon "quote" r majot likha thake. Xei text tu salai dile hobo.
   - "..." r bhitorot text diye likha.
   - Comma (,) bur naaposiba. Bracket { } [ ] bur naaposiba.
   - Save kori browser t refresh koriba.
   ===================================================================== */

var CONTENT = {

  /* ------------------------------------------------------------------
     0 · SITE META  (website r naam, music, hero text)
     ------------------------------------------------------------------ */
  meta: {
    siteTitle: "PORICHOY",
    siteTitleAs: "পৰিচয়",
    heroKicker: "অসমীয়া প্ৰেম · an Assamese love",
    heroLine: "Seven chapters of a love that never asked for anything back.",
    heroNames: ["Ayush", "Gayatri"],

    // 🎵 MUSIC — mon-jai.mp3 file tu index.html r logot e rakhiba.
    //    (README.md t koi diya ase kenekoi koribo)
    music: "mon-jai.mp3",
    musicLabel: "Mon Jai — Zubeen Garg",

    // 🕵️ PRIVACY — jodi tai r asol naam tu website t dekhaibo nodore,
    //    tente "Gayatri" r salai "G" ba "Mal" likhiba.
    herName: "Gayatri"
  },

  /* ------------------------------------------------------------------
     1 · TAIK XOWA  ·  Gayatri — a pictorial description
     ------------------------------------------------------------------
     ✍️  EI SECTION TU TUMI INPUT DIBA.
     Gallery r bhitorot tomar chobi r caption bur likhiba.

     Kenekoi photo add koribo:
       1) photo tu index.html r logot e rakhiba (e.g. gayatri-1.jpg)
       2) tente src: "gayatri-1.jpg" likhiba
       3) jodi photo nai, tente src: ""  (frame tu khali thakibo)
     ------------------------------------------------------------------ */
  sec1: {
    no: "01",
    as: "তাইক চোৱা",
    title: "Her, In Pictures",
    sub: "A description in light, colour and memory",
    intro: "Ei section tu tomar. Chobi r caption bur content.js t likhiba — xei burok ekhon ekhon frame hoi ubhotibo.",
    gallery: [
      { src: "", caption: "Photo 1", note: "caption tu content.js t likhiba" },
      { src: "", caption: "Photo 2", note: "caption tu content.js t likhiba" },
      { src: "", caption: "Photo 3", note: "caption tu content.js t likhiba" },
      { src: "", caption: "Photo 4", note: "caption tu content.js t likhiba" },
      { src: "", caption: "Photo 5", note: "caption tu content.js t likhiba" },
      { src: "", caption: "Photo 6", note: "caption tu content.js t likhiba" }
    ]
  },

  /* ------------------------------------------------------------------
     2 · TAI R RONG  ·  The colours she wore
     ------------------------------------------------------------------
     ✍️  EI SECTION TU TUMI INPUT DIBA.
     Protitu rong r name, hex colour r ek xoru kotha.
     hex = colour code (e.g. #ffffff = white). Google t "colour picker" likhi
     search koriba, jodi colour code tu nalage.
     ------------------------------------------------------------------ */
  sec2: {
    no: "02",
    as: "তাইৰ ৰং",
    title: "The Colours She Wore",
    sub: "Every dress, a different sky",
    intro: "Tai r mekhela sador, tai r dress — protitu rong r ekta kotha ase. Ei burok tumi content.js t bhoriba.",
    colours: [
      { name: "White",   as: "বগা",  hex: "#f6f2ec", note: "9 October 2025 — the English oral. Tai boga rong r kapur pori ahisil." },
      { name: "Blue",    as: "নীলা", hex: "#3d6fa8", note: "11 October 2025 — the day results came. Xokulu school r majot xobahke dhuniya." },
      { name: "Mekhela Sador", as: "মেখেলা চাদৰ", hex: "#9b1b30", note: "Biennial function, Ita Machkhowa — tai r mekhela sador, purse aru gesture." }
    ]
  },

  /* ------------------------------------------------------------------
     3 · TAI R NAAMAT GAN  ·  Songs I listened to in her memory
     ------------------------------------------------------------------
     Ei list tu tomar prem kahini r pora e likhi diya hoi ase.
     Tumi notun gaan add koribo pariba — e.g.
        { title: "Gaan r naam", line: "ek line lyric", note: "kiya ei gaan tu" },
     ------------------------------------------------------------------ */
  sec3: {
    no: "03",
    as: "তাইৰ নামত গান",
    title: "Songs In Her Name",
    sub: "Zubeen Da, and every line that became her",
    intro: "Zubeen Da r xur r pora he mur prem tu jagi uthisil. Ei burok xei gaan bur — juntu muri tai r uposthitit anubhov kore.",
    songs: [
      { title: "Pritir Xubaxe Dhuwaei Dilehi", line: "", note: "Tai k prothom dekhi xesa r pichot e mur monot aha prothom gaan. 2023." },
      { title: "Junak Gola", line: "", note: "Class 8 r din bur — xur tu buji napai, kintu bhal lagisil." },
      { title: "Junake Kane Kane", line: "", note: "Tai r naame xuni thaka xur." },
      { title: "Aane Juwa Bate", line: "", note: "Prem t pori xesa r pichot he arth tu bujisilo." },
      { title: "Amanixa", line: "", note: "Xei xomoi r xur — tai r naam tu monot pori thake." },
      { title: "Maya", line: "", note: "Maya — tai r naam tu jene maya hoi goi ase." },
      { title: "Ki Naam Di Matim", line: "", note: "Xei xomoi trend t asil. Ei gaan e muri tai k naam disilo — MAL." },
      { title: "Bhulotu Nasaba Tumi", line: "", note: "Jitia tai k dekhisilo, tetia mukhe ahi goisil." },
      { title: "Mon Jai / Mon Jai O Bor Mon Jai", line: "", note: "Ei gaan r protitu line e tai k monot porai dise. Chobi r prem angle tu mur kahini r logot mili thake." },
      { title: "Dure Dure", line: "", note: "Punor milon r xomoi — 2024 r xesa bhag." },
      { title: "Aaina Bhonga Di", line: "", note: "Xei xomoi t bahut xunisilo." },
      { title: "Nohole Porichoy Hiyare", line: "", note: "Porichoy — ei website r naam tu enekoi ahisil." },
      { title: "Runjun Nupure Mate", line: "", note: "Tai r khuj r xur." },
      { title: "Bedona Bedona Mur Bhalpua", line: "Bedona bedona mur bhalpua, tumak heruwai bathor hiya", note: "Ei line r arth tu prem t pori he bujisilo." },
      { title: "Monore Priya Mur", line: "", note: "2025-26 — tai r prem t aru ghon hoi goisilo." },
      { title: "Hiyare Lakhimi", line: "", note: "Xei xomoi r addiction." },
      { title: "Mur Xuriya Geet (album)", line: "", note: "Gota album tu — tai r naam tu protitu xur t." },
      { title: "Kune Ringiyai", line: "", note: "19 September 2025 — Hindi half-yearly t xomaborote xunisilo, exam hall t xomaboloi." },
      { title: "Protidine Tumi", line: "Xagor tolit xubore mon", note: "Xei din bondhu r logot xomaboloi xur kori asilo. Ke jane xei line tu xote hoi jabo." }
    ]
  },

  /* ------------------------------------------------------------------
     4 · MUR PREM KAHINI  ·  The love story
     ------------------------------------------------------------------
     Ei section tu sobahke dhuniya — chapter, topic aru sub-topic hoi
     cloud bubble hoi dekha jai. Sob detail t thakibo.
     ------------------------------------------------------------------ */
  sec4: {
    no: "04",
    as: "মোৰ প্ৰেম কাহিনী",
    title: "My Love Story",
    sub: "Not a normal one — the kind that grows as it declines",
    intro: "Tini bosoror ekta kahini, n ta chapter t, xota xota muhurta t bhagi diya hoi ase. Protitu bubble e ekta smriti — protitu smriti e ekta xikha.",
    chapters: [

      /* ---------------- CHAPTER 1 ---------------- */
      {
        n: "I", title: "Porichoy", as: "পৰিচয়",
        sub: "April 2023 · the corridor",
        bubbles: [
          { t: "Ei prem xadharon noi", size: "wide", p: [
            "My prem kahini is not a normal one. It's one which increases my love towards her as it declines. It's true — when we love someone our heart replenishes towards them. But in true love the soul is involved.",
            "I might be a mad, or many may call it a blind love, but whatever I did, it was a call from my eternal soul. My love is not trendy, which is inspired by others. It is unique — that has no limits."
          ] },
          { t: "Xei prothom dine", p: [
            "The year 2023, April month, sunny weather. I still remember when I saw Gayatri for the first time in the corridor. The moment when my heartbeats rose and I was stunned."
          ] },
          { t: "Xei dinor pichot", p: [
            "The next day I too waited for her — to see her, to get her glance. My love was not lust, it was true devotion for her."
          ] },
          { t: "Xokulu brahmando t", p: [
            "After her I did not find any girl in the universe as beautiful as her."
          ] },
          { t: "Pichot pichot", size: "wide", p: [
            "Days passed. When she used to move I would follow her — not knowing her about my love, but just to get her attention. Still, neither time she noticed me. Indeed my love got deeper."
          ] },
          { t: "Tai r anuposthit din", p: [
            "The days when she remained absent were like obscurity for me. When I was not close to her, I used to listen to Zubeen Da's songs and feel her presence."
          ] },
          { t: "ZG — mur xur", p: [
            "ZG is the reason I am not a complete mad, but a mad for her — in her love."
          ] },
          { t: "Tezot naama", p: [
            "Sometimes I used to cut my hand and write her name with my raw blood. That sounds crazy, but true."
          ] },
          { t: "Mati xekhote panchta class", p: [
            "There were only a few classes she used to take as a substitute. In the 2023-24 session it was only 5 classes. My encounter with her was regular."
          ] },
          { t: "Haari nai, aru ghon", size: "wide", p: [
            "Many times I even lost my hope and tried to leave her, but a little farness from her deepened my love more. My friends too suggested me to move on from her — but now I realise that true love has no move-ons."
          ] }
        ]
      },

      /* ---------------- CHAPTER 2 ---------------- */
      {
        n: "II", title: "Mur Prothom Prem", as: "মোৰ প্ৰথম প্ৰেম",
        sub: "March 2023 · class 8",
        bubbles: [
          { t: "Prem t nopora manuh", size: "wide", p: [
            "Naturally I was not into love, neither any of the girls dared to speak to me. Since early days my behaviour had been very serious with girls. I got many proposals till now — and I ignored them."
          ] },
          { t: "KK sir aru Zubeen Da", p: [
            "My heart bet only on the voices of KK Sir and Zubeen Da's songs. Their songs kept me alive, both mentally and physically."
          ] },
          { t: "31 May 2022", p: [
            "On 31 May 2022 KK Sir passed away. That was a poisoned day for me."
          ] },
          { t: "March 2023 — class 8", p: [
            "Then I found my first love in March 2023. That time I was in class 8."
          ] },
          { t: "Pritir Xubaxe Dhuwaei Dilehi", p: [
            "After seeing her, the first song that took me was “Pritir Xubaxe Dhuwaei Dilehi”. I told all my friends — they were shocked and at the same time humorous."
          ] },
          { t: "Andha pyar — promanito", size: "wide", p: [
            "As days passed and I was more deepened in her love, they believed that I am a mad in her love. Some said “andha pyar” — hence proved. ZG was the reason my love arose for Gayatri."
          ] },
          { t: "Junak, Maya aru...", p: [
            "“Junak Gola”, “Junake Kane Kane”, “Aane Juwa Bate”, “Amanixa”, “Maya” and many songs I heard — but I could understand the meaning only when I fell into love."
          ] },
          { t: "Instagram r kotha", size: "wide", p: [
            "Many of my friends had girlfriends and exes — some 10, 20, 30. They would instigate me to open Instagram and chat with the girls, as they do. But I had only one mindset: I am ready for true love, but I would not receive true love."
          ] },
          { t: "Instagram — kewali tai r babe", p: [
            "I have an Instagram account only to see Gayatri. Though her profile is private, I message her to follow me back — never she replied. Still today I try, so that someday she sees the message and replies back. Still hope persists."
          ] },
          { t: "Ki Naam Di Matim → MAL", size: "wide", p: [
            "“Ki Naam Di Matim” was on trend during that time. So I also gave her a name — MAL, the most ambivert lady.",
            "Every step she used to give, I observed her. I found she was very similar to me — talk only when necessary. So she was a MAL. My friends also became familiar with the name."
          ] },
          { t: "Nakot xei til", p: [
            "Another similarity — she had a mole on her nose. And I too have it."
          ] },
          { t: "Top floor r opeskha", p: [
            "That time our Hindi class was held at the top floor; the next class was hers. I used to wait for her till she came out with one of my friends, just acting to have some serious talks. Rarely she noticed me then. As she went down, two stairs up, we would also follow her."
          ] },
          { t: "Jutor heel", p: [
            "Once my foot tip collided with the heel of her shoe. For a second she looked back — I too said sorry. But then too she just ignored me and moved forward."
          ] }
        ]
      },

      /* ---------------- CHAPTER 3 ---------------- */
      {
        n: "III", title: "Kisu Dinor Durotvo", as: "কিছু দিনৰ দূৰত্ব",
        sub: "March 2024 – June 2024 · the distance",
        bubbles: [
          { t: "Upanayan — March 2024", p: [
            "In March 2024 I had my Upanayan ceremony, and I was a Brahmin now. So I got deeply involved in spirituality and started focusing on my academics — and I did so."
          ] },
          { t: "Class 9, 2024-25", p: [
            "Then the 2024-25 session started for class 9. I tried my best to avoid Gayatri's thoughts, and I also got a little detached from her, as she remained mostly on the top floor and I on the first floor."
          ] },
          { t: "Classroom jibon", p: [
            "Maximum I lived in the classroom only and talked with friends. Everything was near to me except her. I heard ZG's songs and felt her presence."
          ] },
          { t: "Kintu xei muhurto", p: [
            "But rarely, when she passed by, I could not persist myself."
          ] },
          { t: "Lok Sabha 2024", p: [
            "I was very concentrated on the Lok Sabha elections of 2024. Whether BJP will win or not — that haunted me. June 2024 came, the results came, and I took a breath."
          ] },
          { t: "Xob kichu hari gol", p: [
            "I was not only separated from her, but also from my exercise and my love for music."
          ] },
          { t: "Bhulotu Nasaba Tumi", size: "wide", p: [
            "But whenever I saw her, “Bhulotu Nasaba Tumi” started vibrating through my mouth. Mon Jai o Bor Mon Jai — each line in this song reminded me of her. But I resisted myself every time."
          ] },
          { t: "JEE aru IIT", p: [
            "I thought only about JEE and IIT. Nothing else was on my mind more."
          ] }
        ]
      },

      /* ---------------- CHAPTER 4 ---------------- */
      {
        n: "IV", title: "Punor Milon", as: "পুনৰ মিলন",
        sub: "September 2024 – February 2025 · the return",
        bubbles: [
          { t: "Half yearly aru oral", p: [
            "Our half yearly arrived and I was well prepared. In the last of September we had oral examinations. The English oral was taken by her then."
          ] },
          { t: "Tai r xei duti sok", p: [
            "Her eyes, earrings, hair, face — everything I loved came again in front of me."
          ] },
          { t: "Notun level", p: [
            "Next, my love revived. But this time it got into another level. When I slept I thought of her; when I woke up — everywhere."
          ] },
          { t: "Window r xipe", p: [
            "I even tried to get her rare moments when she came. I started going down only to see her, sometimes through the window — maybe she sees me."
          ] },
          { t: "Xei eti bondhu", p: [
            "That time I did not expose that I love her. I just said it to one friend who has understood my true love till date, and always motivates me."
          ] },
          { t: "Dure Dure · Aaina Bhonga Di", size: "wide", p: [
            "“Dure Dure”, “Aaina Bhonga Di”, “Nohole Porichoy Hiyare”, “Runjun Nupure Mate” — the songs which I heard a lot then.",
            "“Bedona bedona mur bhalpua tumak heruwai bathor hiya” — I understood the meaning."
          ] },
          { t: "Biennial · Ita Machkhowa", size: "wide", p: [
            "In November we had the biennial function of school at Ita Machkhowa. Gayatri was the most beautiful there. Her mekhela sador, purse and gestures — only what I followed."
          ] },
          { t: "Duita award, xunyo dristi", p: [
            "Then I got two awards. My name was called — but she did not look at me. She was busy in her phone. That was very disappointing for me."
          ] },
          { t: "Haar e xikha", size: "wide", p: [
            "Still I am a boy who is not demotivated by failures, but inspired and enthusiastic. So the more she ignored, the more my love deepened. Love is not what lets you degrade yourself, but upgrade. I did so."
          ] },
          { t: "Mukh noi, xei sok", p: [
            "Maybe after that, in school there was any development of her reactions towards me. Accidentally she saw the place where I was — but not towards me. Her those eyes only reminded me of her."
          ] },
          { t: "Worksheet din", p: [
            "In January or February of 2025, the only time she entered our class and gave a worksheet on transformation of sentences. I was the first boy to show my copy. I just put my head down and saw her — but she again did the same and went away."
          ] },
          { t: "Momor tez", p: [
            "After that I did another thing. I took a candle and lit it up, then drop by drop I started pouring the wax on my hand. Then my hand got blisters, and they stayed for 3 months."
          ] },
          { t: "Annual exam aru vacation", p: [
            "The annual exams started and I performed well. Then I went for a vacation."
          ] }
        ]
      },

      /* ---------------- CHAPTER 5 ---------------- */
      {
        n: "V", title: "Antim Bosor", as: "অন্তিম বছৰ",
        sub: "2025-26 · the last year in school",
        bubbles: [
          { t: "Notun mood, notun kabita", size: "wide", p: [
            "This is my last year as a student in the school. After returning from vacation our school started. I got a new mood — I started writing poems for Gayatri. Till now I have written many, based on each situation of how I saw her. Some of the best are there in the “Mur Kobitar Prem” section.",
            "In my poetry I have only written what I feel after doing true love."
          ] },
          { t: "Notun building", p: [
            "Our class was shifted to the next building. There too I would stare at the window when she comes, or when she climbs the stairs. But again, for some discrepancy, it was brought back to the first floor."
          ] },
          { t: "Second floor", size: "wide", p: [
            "But in the 2025-26 session she remained on the second floor only, so very frequently I could see her. Also she takes two classes on the same floor. Every time she passes through, I see her and follow her too. But her behaviour persists."
          ] },
          { t: "Break time r xomoi", p: [
            "During break time, everyday I would go at the exact time when she climbs the stairs to the first floor — so that I could get an encounter with her."
          ] },
          { t: "Rough copy t naam", p: [
            "During class too, though I was concentrated towards studies, in my rough copy I would write relentlessly her name — “GAYATRI”."
          ] },
          { t: "Bus aru gosh r xipe", p: [
            "Many times she stopped at the ground to talk with students. I would hide behind the bus or the tree and just stare at her."
          ] },
          { t: "Monore Priya Mur · Hiyare Lakhimi", p: [
            "I again got addicted to her in a more deeper way, with songs like “Monore Priya Mur”, “Hiyare Lakhimi”, the “Mur Xuriya Geet” album and many more."
          ] },
          { t: "Debate — Artificial Intelligence", size: "wide", p: [
            "A debate competition was organised at our school and I participated in that, because it included Gayatri as one of the judges. The topic was Artificial Intelligence. I spoke on how much I knew on the subject.",
            "But I think my oratory was not well enough, and that is the reason I was not selected for the 2nd round. But I was happy — because I got to see Gayatri, and she also noticed me when I was speaking."
          ] },
          { t: "Duitar oral — xoubhagyo", size: "wide", p: [
            "Our second unit test had the only oral exam for English literature and grammar. Here is where I find the essence and power of my love.",
            "In the first oral she took the 1st group and another teacher took the 2nd group. Fortunately I was in the 1st group. But in the second oral she was supposed to take the 2nd group — she took only me, from the first group.",
            "Many said that since I was first in the first group it is not coincidental. But it was my pure love which let this happen."
          ] },
          { t: "Grishma aru punorai", p: [
            "After one month the summer vacation was over and again the same situations continued. In September it was half yearly exams with no orals, but I studied taking her thoughts in my heart."
          ] },
          { t: "Xokolu jone jani goi", size: "wide", p: [
            "Till September each one was aware that I loved Gayatri, and also that I am mad in her love. Everyone said me to leave her, because there were many proposals which were through some of my friends. So they suggested me such. But I was still at my mindset as earlier."
          ] },
          { t: "18–19 September 2025", p: [
            "Our half yearly started from 18 September, and on 19 September 2025 I got my heartbeat stop."
          ] }
        ]
      },

      /* ---------------- CHAPTER 6 ---------------- */
      {
        n: "VI", title: "Zubeen Da, Tumi Kiyo Gola???", as: "জুবিন দা, তুমি কিয় গ’লা???",
        sub: "19 September 2025 · the day Assam cried",
        bubbles: [
          { t: "Mur God", size: "wide", p: [
            "Everyone is aware who Zubeen Garg is. But for me he was my God. His songs were those which supported me in my every situation. Whatever his song may be, it has some values embedded in it."
          ] },
          { t: "Tai r prem r karon", p: [
            "Today I love Gayatri — or my love evoked for Gayatri — only because of his songs. He said he fell in love in nursery, but I was a little late."
          ] },
          { t: "Xoru belar xur", size: "wide", p: [
            "When I listened to his songs it was just a casual feeling. I did not understand the meanings, and even my Assamese vocabulary was not developed much at that age. But when I fell in love with Gayatri, I realised what love is."
          ] },
          { t: "40,000 aru 1,500", p: [
            "He sung over 40,000 songs, and how far I have heard are maybe 1,500 songs till 2026, in all languages."
          ] },
          { t: "Mon Jai — xei chobi", p: [
            "Mon Jai, the movie I saw — I understood what love meant. Its love angle is accurately similar to my story."
          ] },
          { t: "Koi xokhota kobo", p: [
            "I want to tell Gayatri that I love her, but every time I am forbidden by my situation. As a student in a school I am not able to do that. How much I listen to Dada's songs, every song fascinates me."
          ] },
          { t: "19 September 2025 — xei xaap din", size: "wide", p: [
            "19 September 2025 — a cursed day for me and Assamese people. That day was my half yearly exam of Hindi. I was well prepared and I went to give the exam.",
            "As I entered I sang his song “Kune Ringiyai”, and since there was time, I sat at the window pane and started singing. One of my friends joined me and we started singing “Protidine Tumi”. But who knew that the line — “Xagor tolit xubore mon” — was going to be true."
          ] },
          { t: "1 PM pora 4 PM", p: [
            "I sat for the exam at 1 PM. It ended at 4 PM. I was happy and moved out. Suddenly, a friend approached me and said that Sir said Zubeen Da is no more. I was shocked and my spine chilled."
          ] },
          { t: "Ghorot — kotha nai", size: "wide", p: [
            "I just went home without uttering a word. First I was going to check the mobile for any news, but before I could open it I was resisted to have lunch. After lunch I opened the phone and saw that ZG is no more.",
            "I fell on the bed at that moment and was totally unconscious. At the same time I got fever and cold."
          ] },
          { t: "Biswas hobo nai", p: [
            "Still I am not able to believe that he is no more. But that's truth, and I had to accept it."
          ] }
        ]
      },

      /* ---------------- CHAPTER 7 ---------------- */
      {
        n: "VII", title: "Mur Asha, Mathu Biyopai Nirasha", as: "মোৰ আশা, মাথোঁ বীয়োপাই নিৰাশা",
        sub: "October – December 2025 · the worst and the most beautiful",
        bubbles: [
          { t: "Durga Puja r pandal", p: [
            "Assam was recovering from the loss of Zubeen Garg and Durga Puja started — but this was the worst for me. I just sat in the local pandal and operated Zubeen Da's songs. I was not able to recover, and only sang his songs."
          ] },
          { t: "7 October — school reopen", p: [
            "Our school reopened on 7 October with oral exams. The days I and my friends sang non-stop Zubeen Garg's songs."
          ] },
          { t: "9 October — boga rong", size: "wide", p: [
            "On 9 October there were English exams. I was excited enough because Gayatri would take it, I thought. But unfortunately mine was taken by another teacher and Gayatri took section A. She was just sitting beside the one who took mine — but she didn't even notice me. She was wearing white.",
            "I just came and sat ideally. On the spot I wrote 3 poems for her, just looking at her from the window. This is the impact of her in my life."
          ] },
          { t: "11 October — nila rong", size: "wide", p: [
            "On 11 October our results were given. She wore blue that day. That day, to see her, I reached school first, then waited for her. After 45 minutes she came.",
            "In the whole school she was looking the most beautiful. She was happy and I too. Even I did not do good, but I was satisfied because I saw her."
          ] },
          { t: "Kabitar mausum", p: [
            "The days passed. That period I was very involved in writing poems. The ones I wrote I used to show them to my friends. They reacted and were also surprised to see how I wrote so many poems. In that whole month I wrote the most poems in my prem journey."
          ] },
          { t: "OMR exam aru invigilation", size: "wide", p: [
            "During this time we had our OMR exams after every single day. Everyday I hoped that Gayatri would come for invigilation, but she did not. 10 exams were over but she didn't come. One day she came, but in the next room.",
            "I don't know what would happen if she came to our class. My friends in that room were teasing me but I was getting impatient. Only if she came here, I could have got one glance of her."
          ] },
          { t: "Doorot ubhi", size: "wide", p: [
            "When she was going down I was standing on the door staring at her. And she was being very humorous with the juniors, and ignorant to me — as if she does not know me. I want to approach her, but I can't.",
            "After she was gone I became mad — beating on the walls, benches, shouting out slangs. My friends were there but they went away."
          ] },
          { t: "Prem ki?", p: [
            "One of my friends asked me that he does not understand what love is. I said him — love is something which is from the heart. Love asks no demands. It only needs a heart to do it. I had that and I did it, but couldn't get her."
          ] },
          { t: "14 November — Children's Day", p: [
            "Wherever I went, only wrote poems — in Assamese, Hindi, Bengali. It was 14 November, Children's Day. No classes were held that day, so I decided to write 7 poems. I wrote only 5 poems. That day we watched a movie, Srikanth, with my friends online. It was fun."
          ] },
          { t: "19 November — 10A aru 10C", size: "wide", p: [
            "On 19 November Gayatri had 2 periods off. I thought she would come to our class. But again my fate — she went to class 10A and 10C, but didn't come to 10B.",
            "I was again becoming mad and crazy. It was intolerable. I thought to just go and say her that I love her."
          ] },
          { t: "Quiz din", size: "wide", p: [
            "The next day we had a quiz in the auditorium. Gayatri was present there, felicitating the guests. I required nothing more than that. What will I look at the questions when she was there for me?",
            "I was happy but also sad, because she just did not want to see me. Why I love her I don't know. What I will get from her is unknown — but I will love her."
          ] },
          { t: "Olympiad — keval eta dex", size: "wide", p: [
            "The days passed again. Now it was the time for Olympiad exams and I thought that she would come to invigilate. In the IEO test she came, but not in our class — the next class. What was between us was just a wall.",
            "Again in IMO test she came, but in the room which was just in front of me. I could just see her, but not feel her presence. Then I wrote the poem “Kakhot Ahiyu Tumi Usorot Naha”."
          ] },
          { t: "Xiye dekhe, kintu...", size: "wide", p: [
            "She watches me, but I don't understand why she ignores. Maybe I am the first one to do such things.",
            "She shared a very good humour with the class 9 students, because they would talk in English and in an amiable way with her. But I was a reserved and serious guy — and it's my character — so I till today did not even approach her. I would keep staring at her, she also had a glance, but ignored again."
          ] }
        ]
      },

      /* ---------------- CHAPTER 8 ---------------- */
      {
        n: "VIII", title: "Antim Mah", as: "অন্তিম মাহ",
        sub: "December 2025 · the last regular days",
        bubbles: [
          { t: "11 December — xirtot naam", size: "wide", p: [
            "The month December would be remembered by me always. On 11 December we had our last regular classes. Everyone was writing in each other's shirts.",
            "Many from class 10 and 9 wrote too in my shirt. They wrote only about Gayatri — and nothing else."
          ] },
          { t: "13 December — punorai oral", size: "wide", p: [
            "On 13 December we had our English orals. I had high hopes that Gayatri would take the oral, but again the same happened. She didn't take mine, but took that of 2 students from my section only. I don't know why this happens only with me.",
            "Then I wrote 2 poems on the spot. She entered our class, but for just a while."
          ] },
          { t: "Mur bondhu xokolu", p: [
            "All my friends were more crazy than me. But I am crazy — and will remain such for her."
          ] }
        ]
      },

      /* ---------------- CHAPTER 9 ---------------- */
      {
        n: "IX", title: "Mur Prem Kahinir Onto", as: "মোৰ প্ৰেম কাহিনীৰ অন্ত",
        sub: "February 2026 – today · an ending, and a beginning",
        bubbles: [
          { t: "Pre-board aru Magh Bihu", p: [
            "After the pre boards I was totally engaged in my studies and preparing for my boards. But during Magh Bihu I wrote some Bihugeets. After that again I completed my test papers and other stuff."
          ] },
          { t: "10 February 2026 — HSLC", p: [
            "10 February 2026 — our HSLC exams started. I thought about her and gave my exams. Then on 26 February they were over. During that period I would think of her, but I didn't write any poems."
          ] },
          { t: "Maya r jogot", size: "wide", p: [
            "Gradually I was realising that I was captivated in a world of illusion and nothing else. I thought to make possible a thing which was already impossible — which had zero probability, as said by my friends earlier. But I just ignored their words. Now I was slowly trying to forget her."
          ] },
          { t: "Kabita likhiyei thaku", p: [
            "I write poems for her, well known that there is no future."
          ] },
          { t: "91.67%", p: [
            "My HSLC results came out and I scored 91.67%. After that I was satisfied but not happy. Then I went to Maa Kamakhya Mandir and many other places."
          ] },
          { t: "Cotton University", p: [
            "Also I am admitted to Cotton University for my HS. I am not a studious guy, but for my ultimate target I need to go through it."
          ] },
          { t: "2 May 2026 — felicitation", size: "wide", p: [
            "Then comes 2 May 2026, when we were felicitated by our school and we received our marksheets. During my felicitation there was no reaction expressed by Gayatri — like during my class 9 felicitation.",
            "But now I am not so disappointed. I am now known to the reality."
          ] },
          { t: "Xei xex din hote pare", size: "wide", p: [
            "Maybe this would be the last day when I am seeing her. But still a feeling would always be in my heart — that if I had told her about my love, maybe something would make out, maybe she could talk with me at least after hearing my efforts.",
            "Her glance on me is more than enough for me. But who knows what the consequences may be."
          ] },
          { t: "Kobol noi koa", size: "wide", p: [
            "I am sad only because I was not that courageous to speak to her about my love. Just like Mon Jai, my story also ends here with an unsuccessful end — like Manab was never able to confess his love to Meghali, I too."
          ] },
          { t: "Notun arambho", size: "wide", p: [
            "And a new beginning, where I could again reframe myself. Since more than 3 years I was in a thoughtful and unrealistic world. I have faced a lot of hardships and distractions.",
            "A boy who has got exposure to a wide range of things in college — maybe now I think that I am free. But I have to keep myself with dignity. I am doing the things which I sometimes just dreamt of. All of the dreams are not yet fulfilled, but some I have experienced."
          ] },
          { t: "23 August 2026 — aji o", size: "wide", p: [
            "Today the date is 23 August 2026, and still in my heart there is place only for Gayatri. Though I will not be able to get her, that doesn't mean I will stop loving her.",
            "I write poems for Gayatri Maam still, and also I have composed some songs for Maam."
          ] }
        ]
      }

    ]
  },

  /* ------------------------------------------------------------------
     5 · TAI R PORA XIKHA  ·  What I learned from her
     ------------------------------------------------------------------
     ✍️  EI SECTION TU TUMI INPUT DIBA.
     Protitu xikha r ekta title aru text.
     ------------------------------------------------------------------ */
  sec5: {
    no: "05",
    as: "তাইৰ পৰা শিকা",
    title: "What She Taught Me",
    sub: "Lessons that came without a single conversation",
    intro: "Ei section tu tomar. Xikha bur content.js t likhiba.",
    lessons: [
      // { title: "Dhairjo", text: "..." },
    ]
  },

  /* ------------------------------------------------------------------
     6 · MUR KOBITA  ·  Poems for her
     ------------------------------------------------------------------
     ✍️  EI SECTION TU TUMI INPUT DIBA.
     Format:
        { title: "Kobita r naam", as: "কবিতাৰ নাম", lines: [
            "prothom line",
            "ditio line",
            "..." ] },
     ------------------------------------------------------------------ */
  sec6: {
    no: "06",
    as: "মোৰ কবিতা",
    title: "Mur Kobitar Prem",
    sub: "Poems written for her, one situation at a time",
    intro: "Assamese, Hindi, Bengali — jiman kobita tai r babe likha hoi ase, xei burok ekhane thakibo.",
    poems: [
      // { title: "Kakhot Ahiyu Tumi Usorot Naha", as: "কাখত আহিয়ু তুমি ওচৰত নাহা", lines: ["..."] },
    ]
  },

  /* ------------------------------------------------------------------
     7 · MUR GEET  ·  Songs I made for her
     ------------------------------------------------------------------
     ✍️  EI SECTION TU TUMI INPUT DIBA.
     Format:
        { title: "Geet r naam", note: "kiya likhisilo", lyrics: ["line", "line"], audio: "geet-1.mp3" }
     (audio tu index.html r logot e rakhiba; jodi nai, "" rakhiba)
     ------------------------------------------------------------------ */
  sec7: {
    no: "07",
    as: "মোৰ গীত",
    title: "Geet, Tumar Naamot",
    sub: "Songs composed and sung for her",
    intro: "Ei burok tumi nije likha aru goa geet. Content.js t add koriba.",
    songs: [
      // { title: "Geet 1", note: "", lyrics: ["..."], audio: "" },
    ]
  }

};
