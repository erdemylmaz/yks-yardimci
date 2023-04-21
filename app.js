const container = document.querySelector('.container');
const header = document.querySelector('.header');
const endBTN = document.querySelector('.end-btn');
let negBtns;
let ntrBtns;
let pozBtns;

class App {
    isEnd = false;

    sections = [
        {
            name: 'TYT',
            chapters: [
                {
                    name: 'Türkçe',
                    subChapters: [
                        {
                            name: "Dil Bilgisi",
                            suggestedChannelName: 'Rustu Hoca',
                            suggestedChannelLink: 'https://www.youtube.com/@RustuHocaileTurkce',
                            topics: [
                                {
                                    name: 'Ses Bilgisi',
                                    avr: 1,
                                },
                                {
                                    name: "Dil Bilgisi",
                                    avr: 2.5,
                                },
                                {
                                    name: "Noktalama Isaretleri",
                                    avr: 2,
                                },
                                {
                                    name: "Yazim Kurallari",
                                    avr: 2,
                                },
                                {
                                    name: "Anlatim Bozuklugu",
                                    avr: 0.1,
                                },
                            ],
                        },
                        {
                            name: 'Paragraf',
                            suggestedChannelName: '-',
                            suggestedChannelLink: '#',
                            topics: [
                                {
                                    name: 'Paragraf',
                                    avr: 25.7,
                                },
                                {
                                    name: 'Cumlede Anlam',
                                    avr: 3.2,
                                },
                                {
                                    name: 'Sozcukte Anlam',
                                    avr: 4.5,
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Sosyal Bilimler",
                    subChapters: [
                        {
                            name: 'Tarih',
                            suggestedChannelName: '-',
                            suggestedChannelLink: '#',
                            topics: [
                                {
                                    name: 'Ilk ve Orta Caglarda Turk Dunyasi',
                                    avr: 1
                                },
                                {
                                    name: 'Turklerin Islamiyeti Kabulu ve Ilk Turk Islam Devletleri',
                                    avr: 1
                                },
                                {
                                    name: 'Beylikten Devlete Osmanli',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Uluslararasi Iliskilerde Denge Stratejisi',
                                    avr: 0.5 
                                },
                                {
                                    name: 'Milli Mucadele',
                                    avr: 1,
                                },
                                {
                                    name: 'Ataturkculuk ve Turk Inkilabi',
                                    avr: 1,
                                },
                            ]
                        },
                        {
                            name: "Coğrafya",
                            suggestedChannelLink: 'https://www.youtube.com/@Cografyaninkodlari',
                            suggestedChannelName: 'Cografyanin Kodlari',
                            topics: [
                                {
                                    name: 'Doga ve Insan',
                                    avr: 1,
                                },
                                {
                                    name: 'Harita Bilgisi',
                                    avr: 1,
                                },
                                {
                                    name: 'Iklim Bilgisi',
                                    avr: 1,
                                },
                                {
                                    name: 'Dogal Afetler',
                                    avr: 1,
                                },
                                {
                                    name: 'Ekonomik Faaliyetler',
                                    avr: 1,
                                },
                                {
                                    name: 'Ic ve Dis Kuvvetler',
                                    avr: 1,
                                },
                            ],
                        },
                        {
                            name: "Felsefe",
                            suggestedChannelName: '-',
                            suggestedChannelLink: '#',
                            topics: [
                                {
                                    name: 'Felsefenin Alani',
                                    avr: 1.5,
                                },
                                {
                                    name: "Felsefe'nin Alt Dallari (Bilgi, Varlik...)",
                                    avr: 4,
                                },
                            ]
                        },
                        {
                            name: "Din Kulturu",
                            suggestedChannelName: '-',
                            suggestedChannelLink: '#',
                            
                            topics: [
                                {
                                    name: 'Bilgi ve Inanc',
                                    avr: 1,
                                },
                                {
                                    name: 'Din ve Islam',
                                    avr: 1,
                                },
                                {
                                    name: "Islam ve Ibadet",
                                    avr: 1,
                                },
                                {
                                    name: 'Genclik ve Degerler',
                                    avr: 0.9,
                                }, 
                                {
                                    name: 'Allah Insan Iliskisi',
                                    avr: 0.5
                                },
                                {
                                    name: 'Din, Kultur ve Medeniyet',
                                    avr: 1,
                                },
                                {
                                    name: "Vahiy ve Akil",
                                    avr: 0.5
                                }
                            ]
                        }

                    ]
                },
                {
                    name: "Matematik",
                    subChapters: [
                        {
                            name: "Temel Matematik",
                            suggestedChannelName: 'Mert Hoca',
                            suggestedChannelLink: 'https://www.youtube.com/@merthoca',
                            topics: [
                                {
                                    name: 'Temel Kavramlar',
                                    avr: 3,
                                },
                                {
                                    name: 'Sayi Basamaklari',
                                    avr: 1.5,
                                },
                                {
                                    name: 'Bolme-Bolunebilme',
                                    avr: 1,
                                },
                                {
                                    name: 'EBOB-EKOK',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Rasyonel Sayilar',
                                    avr: 2,
                                },
                                {
                                    name: 'Basit Esitsizlikler',
                                    avr: 1,
                                },
                                {
                                    name: 'Mutlak Deger',
                                    avr: 1,
                                },
                                {
                                    name: 'Uslu Sayilar',
                                    avr: 1,
                                },
                                {
                                    name: 'Koklu Sayilar',
                                    avr: 1,
                                },
                                {
                                    name: 'Carpanlara Ayirma',
                                    avr: 0.1,
                                },
                                {
                                    name: 'Oran Oranti',
                                    avr: 1,
                                },
                                {
                                    name: 'Problemler',
                                    avr: 12,
                                },
                                {
                                    name: 'Kumeler',
                                    avr: 1,
                                },
                                {
                                    name: 'Mantik',
                                    avr: 1,
                                },
                                {
                                    name: 'Fonksiyonlar',
                                    avr: 1,
                                },
                                {
                                    name: 'Polinomlar',
                                    avr: 0.5,
                                },
                                {
                                    name: 'PKBO',
                                    avr: 1,
                                },
                                {
                                    name: 'Veri-Istatistik',
                                    avr: 1,
                                }
                            ]
                        },
                        {
                            name: "Geometri",
                            suggestedChannelLink: 'https://www.youtube.com/@KenanKaraileGeometri',
                            suggestedChannelName: 'Kenan Kara ile Geometri',
                            topics: [
                                {
                                    name: 'Acilar ve Ucgen',
                                    avr: 4,
                                },
                                {
                                    name: 'Cokgenler',
                                    avr: 1,
                                },
                                {
                                    name: 'Analitik Geometri',
                                    avr: 1,
                                },
                                {
                                    name: 'Yamuk',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Eskenar Dortgen',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Deltoid',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Kare',
                                    avr: 0.3,
                                },
                                {
                                    name: 'Dikdortgen',
                                    avr: 1.2,
                                },
                                {
                                    name: 'Cember ve Daire',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Kati Cisimler',
                                    avr: 2,
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Fen Bilimleri",
                    subChapters: [
                        {
                            name: "Fizik",
                            suggestedChannelName: 'Ozcan Aykin',
                            suggestedChannelLink: 'https://www.youtube.com/results?search_query=ozcan+aykin',
                            topics: [
                                {
                                    name: 'Fizik Bilimine Giris',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Madde ve Ozellikleri',
                                    avr: 1,
                                },
                                {
                                    name: 'Sivilarin Kaldirma Kuvveti',
                                    avr: 0.3,
                                },
                                {
                                    name: 'Basinc',
                                    avr: 1,
                                },
                                {
                                    name: 'Isi, Sicaklik ve Genlesme',
                                    avr: 1,
                                },
                                {
                                    name: 'Hareket ve Kuvvet',
                                    avr: 1,
                                },
                                {
                                    name: 'Elektrostatik',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Optik',
                                    avr: 1,
                                },
                                {
                                    name: 'Dalgalar',
                                    avr: 1,
                                },
                            ]
                        },
                        {
                            name: "Kimya",
                            suggestedChannelLink: 'https://www.youtube.com/@BenimHocam',
                            suggestedChannelName: 'Benim Hocam (Gorkem Sahin)',
                            topics: [
                                {
                                    name: 'Kimya Bilimi',
                                    avr: 1,
                                },
                                {
                                    name: 'Periyodik Tablo',
                                    avr: 1,
                                },
                                {
                                    name: 'Maddenin Halleri',
                                    avr: 1,
                                },
                                {
                                    name: 'Kimyasal Turler Arasi Etkilesimler',
                                    avr: 1,
                                },
                                {
                                    name: 'Kimyasal Hesaplamalar',
                                    avr: 0.6,
                                },
                                {
                                    name: 'Kimyanin Temel Kanunlari',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Asit, Baz ve Tuzlar',
                                    avr: 1,
                                },
                                {
                                    name: 'Karisimlar',
                                    avr: 1,
                                },
                                {
                                    name: 'Kimya Her Yerde',
                                    avr: '0 (?)',
                                },
                            ]
                        },
                        {
                            name: "Biyoloji",
                            suggestedChannelLink: 'https://www.youtube.com/@BARISHOCABIYOLOJI',
                            suggestedChannelName: 'Dr.Biyoloji',
                            topics: [
                                {
                                    name: 'Canlilarin Ortak Ozellikleri',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Canlilarin Temel Bilesenleri',
                                    avr: 0.5,
                                },
                                {
                                    name: 'Hucre ve Organelleri',
                                    avr: 1,
                                },
                                {
                                    name: 'Madde Gecisleri',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Canlilarin Siniflandirilmasi',
                                    avr: 1,
                                },
                                {
                                    name: 'Hucre Bolunmeleri ve Ureme',
                                    avr: 1,
                                },
                                {
                                    name: 'Kalitim',
                                    avr: 1,
                                },
                                {
                                    name: 'Ekosistem Ekolojisi',
                                    avr: 1,
                                },
                            ]
                        },
                    ]
                }
            ],
        },
        {
            name: 'AYT',
            chapters: [
                {
                    name: 'Matematik',
                    subChapters: [
                        {
                            name: 'Matematik',
                            suggestedChannelLink: 'https://www.youtube.com/@smlhoca',
                            suggestedChannelName: 'SML Hoca',
                            topics: [
                                {
                                    name: 'Temel Kavramlar',
                                    avr: 3,
                                },
                                {
                                    name: 'Sayi Basamaklari',
                                    avr: 3,
                                },
                                {
                                    name: 'Bolme Bolunebilme',
                                    avr: "0 (?)",
                                },
                                {
                                    name: 'EBOB-EKOK',
                                    avr: "0 (?)",
                                },
                                {
                                    name: 'Basit Esitsizlikler',
                                    avr: 1,
                                },
                                {
                                    name: 'Mutlak Deger',
                                    avr: 1,
                                },
                                {
                                    name: 'Uslu Sayilar',
                                    avr: 1,
                                },
                                {
                                    name: 'Koklu Sayilar',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Carpanlara Ayirma',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Kumeler',
                                    avr: 2,
                                },
                                {
                                    name: 'Mantik',
                                    avr: 1,
                                },
                                {
                                    name: 'Fonksiyonlar',
                                    avr: 2,
                                },
                                {
                                    name: 'Polinomlar',
                                    avr: 2,
                                },
                                {
                                    name: '2. Dereceden Denklemler',
                                    avr: 1.3,
                                },
                                {
                                    name: 'Parabol',
                                    avr: 1,
                                },
                                {
                                    name: 'PKBO',
                                    avr: 3,
                                },
                                {
                                    name: 'Trigonometri',
                                    avr: 4.5,
                                },
                                {
                                    name: 'Karmasik Sayilar',
                                    avr: 2,
                                },
                                {
                                    name: 'Logaritma',
                                    avr: 3,
                                },
                                {
                                    name: 'Diziler 2',
                                    avr: 0,
                                },
                            ],
                        },
                        {
                            name: "Geometri",
                            suggestedChannelLink: 'https://www.youtube.com/@KenanKaraileGeometri',
                            suggestedChannelName: 'Kenan Kara ile Geometri',
                            topics: [
                                {
                                    name: 'Dogruda ve Ucgende Aci',
                                    avr: 1,
                                },
                                {
                                    name: 'Ozel Ucgenler',
                                    avr: 2,
                                },
                                {
                                    name: 'Cokgenler',
                                    avr: 1,
                                },
                                {
                                    name: 'Analitik Geometri',
                                    avr: 2,
                                },
                                {
                                    name: 'Donusum Geometrisi',
                                    avr: 1,
                                },
                                {
                                    name: 'Cember ve Daire',
                                    avr: 2.3,
                                },
                                {
                                    name: 'Kati Cisimler',
                                    avr: 1,
                                },
                            ]
                        }
                    ],
                },
                {
                    name: 'Fen Bilimleri',
                    subChapters: [
                        {
                            name: "Fizik",
                            suggestedChannelLink: 'https://www.youtube.com/@ozcanaykin',
                            suggestedChannelName: 'Ozcan Aykin',
                            topics: [
                                {
                                    name: 'Vektorler',
                                    avr: 0.2,
                                },
                                {
                                    name: 'Kuvvetler, Tork ve Denge',
                                    avr: 1,
                                },
                                {
                                    name: 'Basit Makineler',
                                    avr: 0.3,
                                },
                                {
                                    name: 'Hareket',
                                    avr: 1,
                                },
                                {
                                    name: "Newton'un Hareket Yasalari",
                                    avr: 1,
                                },
                                {
                                    name: 'Is, Guc ve Enerji',
                                    avr: 1,
                                },
                                {
                                    name: 'Atislar',
                                    avr: 1,
                                },
                                {
                                    name: 'Itme ve Momentum',
                                    avr: 1,
                                },
                                {
                                    name: 'Elektrik Alan ve Potansiyel',
                                    avr: 1,
                                },
                                {
                                    name: 'Paralel Levhalar ve Siga',
                                    avr: 0.2,
                                },
                                {
                                    name: 'Manyetik Alan ve Kuvvet',
                                    avr: 0.2,
                                },
                                {
                                    name: 'Induksiyon, Alternatif Akim ve Transformatorler',
                                    avr: 2,
                                },
                                {
                                    name: 'Cembersel Hareket',
                                    avr: 2,
                                },
                                {
                                    name: 'Basit Harmonik Hareket',
                                    avr: 1,
                                },
                                {
                                    name: 'Dalga Mekanigi ve Elektromanyetik Dalgalar',
                                    avr: 1,
                                },
                            ]
                        },
                        {
                            name: "Kimya",
                            suggestedChannelLink: 'https://www.youtube.com/@leventozdede',
                            suggestedChannelName: 'Levent Ozdede ile Kimya',
                            topics: [
                                {
                                    name: 'Atom ve Yapisi',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Modern Atom Teorisi',
                                    avr: 2,
                                },
                                {
                                    name: 'Gazlar',
                                    avr: 1,
                                },
                                {
                                    name: 'Cozeltiler',
                                    avr: 2,
                                },
                                {
                                    name: 'KTEnerji',
                                    avr: 1,
                                },
                                {
                                    name: 'KTHiz',
                                    avr: 1,
                                },
                                {
                                    name: 'KTDenge',
                                    avr: 1,
                                },
                                {
                                    name: 'Asit-Baz Dengesi',
                                    avr: 1,
                                },
                                {
                                    name: 'Cozunurluk Dengesi',
                                    avr: 0.1,
                                },
                                {
                                    name: 'Kimya ve Elektrik',
                                    avr: 2.6,
                                },
                                {
                                    name: 'Organik Kimyaya Giris',
                                    avr: 1,
                                },
                            ],
                        },
                        {
                            name: "Biyoloji",
                            suggestedChannelLink: 'https://www.youtube.com/@BARISHOCABIYOLOJI',
                            suggestedChannelName: 'Dr.Biyoloji',
                            topics: [
                                {
                                    name: 'Sinir Sistemi',
                                    avr: '0 (?)',
                                },
                                {
                                    name: 'Endokrin Sistem',
                                    avr: 1,
                                },
                                {
                                    name: 'Duyu Organlari',
                                    avr: 1,
                                },
                                {
                                    name: 'Destek ve Hareket Sistemi',
                                    avr: 0.8,
                                },
                                {
                                    name: 'Sindirim Sistemi',
                                    avr: 0.8,
                                },
                                {
                                    name: 'Dolasim ve Bagisiklik Sistemi',
                                    avr: 1,
                                },
                                {
                                    name: 'Solunum Sistemi',
                                    avr: 1,
                                },
                                {
                                    name: 'Uriner Sistem',
                                    avr: 0.8,
                                },
                                {
                                    name: 'Ureme Sistemi',
                                    avr: 0.6,
                                },
                                {
                                    name: 'Komunite ve Populasyon Ekolojisi',
                                    avr: 2,
                                },
                                {
                                    name: 'Nukleik Asitler',
                                    avr: 0.8,
                                },
                                {
                                    name: 'Genetik Sifre ve Protein Sentezi',
                                    avr: 2,
                                },
                                {
                                    name: 'Fotosentez ve Kemosentez',
                                    avr: 1,
                                },
                                {
                                    name: 'Hucresel Solunum',
                                    avr: 1,
                                },
                            ],
                        },
                        
                    ],
                },
            ]
        }
    ];

    InitApp = () => {
        this.sections.map((section, sectionIndex) => {
            let sectionDiv = document.createElement('div');
            sectionDiv.className = "section";

            let sectionNameDiv = document.createElement('div');
            sectionNameDiv.className = "section-name";
            sectionNameDiv.textContent = section.name;

            sectionDiv.appendChild(sectionNameDiv);

            let sectionChaptersDiv = document.createElement('div');
            sectionChaptersDiv.className = "section-chapters";


            section.chapters.map((chapter, chapterIndex) => {
                let chapterDiv = document.createElement('div');
                chapterDiv.className = "section-chapter";

                let chapterNameDiv = document.createElement('div');
                chapterNameDiv.className = "section-chapter-name";
                chapterNameDiv.textContent = chapter.name;

                chapterDiv.appendChild(chapterNameDiv);

                chapter.subChapters.map((subChapter, subChapterIndex) => {
                    let chapterSubtopicDiv = document.createElement('div');
                    chapterSubtopicDiv.className = "chapter-subtopic";

                    let subtopicNameDiv = document.createElement('div');
                    subtopicNameDiv.className = "subtopic-name";
                    subtopicNameDiv.textContent = subChapter.name;

                    chapterSubtopicDiv.appendChild(subtopicNameDiv);

                    let subtopicTopicsDiv = document.createElement('div');
                    subtopicTopicsDiv.className = "subtopic-topics";

                    subChapter.topics.map((topic, topicIndex) => {
                        let subtopicTopicDiv = document.createElement('div');
                        subtopicTopicDiv.className = "subtopic-topic";

                        let datacode = `${sectionIndex}${chapterIndex}${subChapterIndex}${topicIndex}`

                        subtopicTopicDiv.setAttribute('data-sectionindex', sectionIndex)
                        subtopicTopicDiv.setAttribute('data-chapterindex', chapterIndex)
                        subtopicTopicDiv.setAttribute('data-subchapterindex', subChapterIndex)
                        subtopicTopicDiv.setAttribute('data-topicindex', topicIndex)

                        topic.status = 'none';

                        subtopicTopicDiv.innerHTML = `
                        <div class="topic-name">${topic.name}</div>
                                    
                        <div class="topic-rating-area">
                            <div class="topic-rating-btn neg-btn"><i class="fa-solid fa-xmark"></i></div>
                            <div class="topic-rating-btn ntr-btn">—</div>
                            <div class="topic-rating-btn poz-btn"><i class="fa-solid fa-check"></i></div>
                        </div>

                        <div class="topic-avr-area">${topic.avr}</div>
                    
                        `;

                        subtopicTopicsDiv.appendChild(subtopicTopicDiv);
                    });

                    chapterSubtopicDiv.appendChild(subtopicTopicsDiv);

                    chapterDiv.appendChild(chapterSubtopicDiv);
                });

                sectionChaptersDiv.appendChild(chapterDiv);
            });

            sectionDiv.appendChild(sectionChaptersDiv);

            container.appendChild(sectionDiv);

            negBtns = document.querySelectorAll('.neg-btn');
            ntrBtns = document.querySelectorAll('.ntr-btn');
            pozBtns = document.querySelectorAll('.poz-btn');
        });
    }

    setTopicColor = (x) => {
        if(x == 0) {
            return '#F7D060';
        } else if (x == -1) {
            return '#F45050';
        }
    }

    ShowResults = () => {
        container.innerHTML = ``;
        header.textContent = "Calismaniz Gereken Konular"

        this.sections.map((section, sectionIndex) => {
            let sectionDiv = document.createElement('div');
            sectionDiv.className = "section";

            let sectionNameDiv = document.createElement('div');
            sectionNameDiv.className = "section-name";
            sectionNameDiv.textContent = section.name;

            sectionDiv.appendChild(sectionNameDiv);

            let sectionChaptersDiv = document.createElement('div');
            sectionChaptersDiv.className = "section-chapters";

            section.chapters.map((chapter, chapterIndex) => {
                let chapterDiv = document.createElement('div');
                chapterDiv.className = "section-chapter";

                let chapterNameDiv = document.createElement('div');
                chapterNameDiv.className = "section-chapter-name";
                chapterNameDiv.textContent = chapter.name;

                chapterDiv.appendChild(chapterNameDiv);

                chapter.subChapters.map((subChapter, subChapterIndex) => {
                    let chapterSubtopicDiv = document.createElement('div');
                    chapterSubtopicDiv.className = "chapter-subtopic";

                    let subtopicNameDiv = document.createElement('div');
                    subtopicNameDiv.className = "subtopic-name";
                    subtopicNameDiv.innerHTML = `${subChapter.name} <a target="_blank" class = "suggestedChannelLink" href="${subChapter.suggestedChannelLink}">[${subChapter.suggestedChannelName}]</a>`;

                    chapterSubtopicDiv.appendChild(subtopicNameDiv);

                    let subtopicTopicsDiv = document.createElement('div');
                    subtopicTopicsDiv.className = "subtopic-topics";


                    subChapter.topics.map((topic, topicIndex) => {
                        let subtopicTopicDiv = document.createElement('div');
                        subtopicTopicDiv.className = "subtopic-topic";

                        subtopicTopicDiv.setAttribute('data-sectionindex', sectionIndex)
                        subtopicTopicDiv.setAttribute('data-chapterindex', chapterIndex)
                        subtopicTopicDiv.setAttribute('data-subchapterindex', subChapterIndex)
                        subtopicTopicDiv.setAttribute('data-topicindex', topicIndex)

                        subtopicTopicDiv.innerHTML = `
                        <div class="topic-name" style="color: ${this.setTopicColor(topic.status)}; font-size: 16px; font-weight: 400;">${topic.name}</div>

                        <div class="topic-rating-area">
                            <div class="topic-rating-btn neg-btn"><i class="fa-solid fa-xmark"></i></div>
                            <div class="topic-rating-btn ntr-btn">—</div>
                            <div class="topic-rating-btn poz-btn"><i class="fa-solid fa-check"></i></div>
                        </div>

                        <div class="topic-avr-area">${topic.avr}</div>
                        `;

                        if(topic.status < 0 || topic.status == 0) {
                            subtopicTopicsDiv.appendChild(subtopicTopicDiv);
                        }

                        if(topic.status == -1) {
                            subtopicTopicDiv.querySelector('.neg-btn').style.backgroundColor = "#F45050";
                        } else if (topic.status == 0) {
                            subtopicTopicDiv.querySelector('.ntr-btn').style.backgroundColor = "#F7D060";
                        }

                        negBtns = document.querySelectorAll('.neg-btn');
                        ntrBtns = document.querySelectorAll('.ntr-btn');
                        pozBtns = document.querySelectorAll('.poz-btn');

                        negBtns.forEach((btn) => {
                            btn.addEventListener('click', (e) => {
                                let div = e.currentTarget;
                                resetButtons(e.currentTarget.parentElement);
                        
                                let topicDIV = e.currentTarget.parentElement.parentElement;
                                topicDIV.querySelector('.topic-name').style.color = "#F45050";
                        
                                let sectionIndex = topicDIV.dataset.sectionindex;
                                let chapterIndex = topicDIV.dataset.chapterindex;
                                let subchapterIndex = topicDIV.dataset.subchapterindex;
                                let topicIndex = topicDIV.dataset.topicindex;
                        
                                app.sections[sectionIndex].chapters[chapterIndex].subChapters[subchapterIndex].topics[topicIndex].status = -1;
                        
                                div.style.backgroundColor = "#F45050";

                                localStorage.setItem('array', JSON.stringify(this.sections));
                            });
                        });

                        ntrBtns.forEach((btn) => {
                            btn.addEventListener('click', (e) => {
                                let div = e.currentTarget;
                        
                                resetButtons(e.currentTarget.parentElement);
                        
                                let topicDIV = e.currentTarget.parentElement.parentElement;
                                topicDIV.querySelector('.topic-name').style.color = "#F7D060";
                        
                                let sectionIndex = topicDIV.dataset.sectionindex;
                                let chapterIndex = topicDIV.dataset.chapterindex;
                                let subchapterIndex = topicDIV.dataset.subchapterindex;
                                let topicIndex = topicDIV.dataset.topicindex;
                        
                                app.sections[sectionIndex].chapters[chapterIndex].subChapters[subchapterIndex].topics[topicIndex].status = 0;
                        
                                div.style.backgroundColor = "#F7D060";

                                localStorage.setItem('array', JSON.stringify(this.sections));
                            });
                        });                        

                        pozBtns.forEach((btn) => {
                            btn.addEventListener('click', (e) => {
                                let div = e.currentTarget;
                                resetButtons(e.currentTarget.parentElement);

                                let topicDIV = e.currentTarget.parentElement.parentElement;
                                topicDIV.querySelector('.topic-name').style.color = "#38E54D";

                                let sectionIndex = topicDIV.dataset.sectionindex;
                                let chapterIndex = topicDIV.dataset.chapterindex;
                                let subchapterIndex = topicDIV.dataset.subchapterindex;
                                let topicIndex = topicDIV.dataset.topicindex;

                                app.sections[sectionIndex].chapters[chapterIndex].subChapters[subchapterIndex].topics[topicIndex].status = 1;

                                div.style.backgroundColor = "#38E54D";

                                localStorage.setItem('array', JSON.stringify(this.sections));
                            });
                        });

                    });

                    chapterSubtopicDiv.appendChild(subtopicTopicsDiv);

                    chapterDiv.appendChild(chapterSubtopicDiv);
                });

                sectionChaptersDiv.appendChild(chapterDiv);
            });

            sectionDiv.appendChild(sectionChaptersDiv);

            container.appendChild(sectionDiv);

            negBtns = document.querySelectorAll('.neg-btn');
            ntrBtns = document.querySelectorAll('.ntr-btn');
            pozBtns = document.querySelectorAll('.poz-btn');
        });

        this.isEnd = true;
        localStorage.setItem('isEnd', this.isEnd);
        localStorage.setItem('array', JSON.stringify(this.sections));
        // endBTN.style.display = "none";

        endBTN.textContent = `Tekrar`;
    }

    Reset = () => {
        localStorage.removeItem('array');
        localStorage.removeItem('isEnd');

        location.reload(); 
    }
}

const app = new App();

if(localStorage.getItem('isEnd')) {
    app.isEnd = localStorage.getItem('isEnd');
}

if(!app.isEnd) {
    app.InitApp();
} else {
    app.sections = JSON.parse(localStorage.getItem('array'));
    app.ShowResults();
}

function resetButtons(div) {
    let negBtn = div.querySelector('.neg-btn');
    let ntrBtn = div.querySelector('.ntr-btn');
    let pozBtn = div.querySelector('.poz-btn');

    negBtn.style.backgroundColor = "#000";
    ntrBtn.style.backgroundColor = "#000";
    pozBtn.style.backgroundColor = "#000";
}

negBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let div = e.currentTarget;
        resetButtons(e.currentTarget.parentElement);

        let topicDIV = e.currentTarget.parentElement.parentElement;

        let sectionIndex = topicDIV.dataset.sectionindex;
        let chapterIndex = topicDIV.dataset.chapterindex;
        let subchapterIndex = topicDIV.dataset.subchapterindex;
        let topicIndex = topicDIV.dataset.topicindex;

        app.sections[sectionIndex].chapters[chapterIndex].subChapters[subchapterIndex].topics[topicIndex].status = -1;

        localStorage.setItem('array', JSON.stringify(app.sections));

        if(app.isEnd) {
            topicDIV.querySelector('.topic-name').style.color = '#F45050';
        }

        div.style.backgroundColor = "#F45050";
    });
});

ntrBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let div = e.currentTarget;

        resetButtons(e.currentTarget.parentElement);

        let topicDIV = e.currentTarget.parentElement.parentElement;

        let sectionIndex = topicDIV.dataset.sectionindex;
        let chapterIndex = topicDIV.dataset.chapterindex;
        let subchapterIndex = topicDIV.dataset.subchapterindex;
        let topicIndex = topicDIV.dataset.topicindex;

        app.sections[sectionIndex].chapters[chapterIndex].subChapters[subchapterIndex].topics[topicIndex].status = 0;

        localStorage.setItem('array', JSON.stringify(app.sections));

        if(app.isEnd) {
            topicDIV.querySelector('.topic-name').style.color = '#F7D060';
        }

        div.style.backgroundColor = "#F7D060";
    });
});

pozBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let div = e.currentTarget;
        resetButtons(e.currentTarget.parentElement);

        let topicDIV = e.currentTarget.parentElement.parentElement;

        let sectionIndex = topicDIV.dataset.sectionindex;
        let chapterIndex = topicDIV.dataset.chapterindex;
        let subchapterIndex = topicDIV.dataset.subchapterindex;
        let topicIndex = topicDIV.dataset.topicindex;

        app.sections[sectionIndex].chapters[chapterIndex].subChapters[subchapterIndex].topics[topicIndex].status = 1;

        localStorage.setItem('array', JSON.stringify(app.sections));

        if(app.isEnd) {
            topicDIV.querySelector('.topic-name').style.color = '#38E54D';
        }

        div.style.backgroundColor = "#38E54D";
    });
});

endBTN.addEventListener('click', app.ShowResults);

if(app.isEnd) {
    endBTN.addEventListener('click', app.Reset);
}