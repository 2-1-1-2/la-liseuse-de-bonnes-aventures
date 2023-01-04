$(document).ready(function () {

    /*
    $("#btn").css('background', '#f2bc56');
    $("#btn").css('border', '0.25em solid #8a7040');
    $("#btn").hover(function () {
        $(this).css("background", "#f1ead7");

        $(this).css("border", "0.25em solid #bbac83");
    }, function () {

        $(this).css('background', '#f2bc56');
        $(this).css('border', '0.25em solid #8a7040');
    });


*/
    const name_1 = ["le village", "la bougie", "le fauteuil", "le soleil", "le couloir", "le chemin", "le sourire", "le parc", "le monde", "les étoiles"];
    const name_2 = ["l'aura", "l'averse", "la piqûre", "la fatigue",
        "l'expression", "le futur", "la vision", "les enfants",
        "le changement", "la chaleur"];
    const name_3 = ["le début", "la brisure", "les pensées", "le soir",
        "l'abattu", "les espoirs", "l'amerturme", "l'homme",
        "le désespoir", "le vide"];
    const paroles_1 = ["dans ce coin du *village*", "auprès de la *bougie* flamboyante", "au fond du long *fauteuil*", "au coucher du *soleil* brûlant", "dans cet immense *couloir* sombre", "au bout de ce *chemin*", "malgré ton doux *sourire* chaleureux", "Dans le *parc* à côté", "Dans cette partie du *monde*", "Malgré ces  *étoiles filantes* estivales"];
    const paroles_2 = ["hélas, je reconnais ton *aura* si obscure", "hélas, j'aperçois une *averse* s'annoncer", "hélas, je me prends cette n-ième *piqure*", "hélas, la *fatigue* revient violemment m’assommer", "hélas, semble se révéler cette familière *expression*", "hélas, se dévoile à moi, ce *futur*", "hélas, je ne *vois* que ta froideur", "Hélas, les *enfants* se bousculent entre eux", "Hélas, rien ne pourra jamais *changer*", "Hélas, je ne ressens pas de *chaleur*"];
    const paroles_3 = ["voilà, le *début* du désespoirs", "en moi, tout se *brise*", "les revoilà, les *pensées* noires", "ce *soir*, tout s'obscurcit", "à nouveau, je suis *abattu*", "et mes *espoirs* s'effacent", "et n'éprouve qu'*amertume*", "Désespoir de la nature *humaine*", "en plus de mon *désespoir*", "Je me sens comme *vide* "];
    let i = 0;
    let parit = 1;

    const img_1 = ['https://cdn.lordicon.com/wlpxtupd.json',
        'https://cdn.lordicon.com/jfloqxvk.json',
        'https://cdn.lordicon.com/heyeivni.json',
        'https://cdn.lordicon.com/dlqgrmty.json',
        'https://cdn.lordicon.com/moscwhoj.json',
        'https://cdn.lordicon.com/ippkhukl.json',
        'https://cdn.lordicon.com/pithnlch.json',
        'https://cdn.lordicon.com/ryxufmfd.json',
        'https://cdn.lordicon.com/gqzfzudq.json',
        'https://cdn.lordicon.com/etwtznjn.json'
    ]


    const img_2 = [`https://cdn.lordicon.com/dxjqoygy.json`,
        `https://cdn.lordicon.com/oyclgnwc.json`,
        `https://cdn.lordicon.com/hsotfjpx.json`,
        `https://cdn.lordicon.com/bkzzedxx.json`,
        `https://cdn.lordicon.com/zbopvjaq.json`,
        `https://cdn.lordicon.com/kbtmbyzy.json`,
        `https://cdn.lordicon.com/tyounuzx.json`,
        `https://cdn.lordicon.com/cuvapfqt.json`,
        `https://cdn.lordicon.com/nxaaasqe.json`,
        `https://cdn.lordicon.com/mypzgycw.json`
    ]

    const img_3 = ["https://cdn.lordicon.com/mtdulhdc.json",
        "https://cdn.lordicon.com/wjwuvtno.json",
        "https://cdn.lordicon.com/zpxybbhl.json ",
        "https://cdn.lordicon.com/tgnqhsfe.json",
        "https://cdn.lordicon.com/iltqorsz.json",
        "https://cdn.lordicon.com/wcjauznf.json",
        "https://cdn.lordicon.com/owpijlcy.json",
        "https://cdn.lordicon.com/imamsnbq.json",
        "https://cdn.lordicon.com/uixzulhh.json",
        "https://cdn.lordicon.com/nlzvfogq.json"];

    function card_random() {
        $(".card").css('background', '#1b1a1a');
        $(".logocard").css('background', '#1b1a1a');
        $(".names").css('border-top', '5px solid #f2bc56');

        let rand1 = Math.floor(Math.random() * name_1.length)
        let icon1 = rand1 + 1;
        let name1 = name_1[rand1].toUpperCase();

        let rand2 = Math.floor(Math.random() * name_2.length)
        let icon2 = rand2 + 1;
        let name2 = name_2[rand2].toUpperCase();

        let rand3 = Math.floor(Math.random() * name_3.length)
        let icon3 = rand3 + 1;
        let name3 = name_3[rand3].toUpperCase();

        console.log(icon1 + " _ " + img_1[icon1] + "\n")
        //$("#icon1").html('<img src="./images/1/or/' + icon1 + '.png">');
        $("#icon1").html(`<lord-icon src="${img_1[rand1]}" delay="1000" trigger="loop" colors="primary:#ffffff,secondary:#e8b730" style="width:10rem;height:15vh; "></lord-icon>`);
        $("#name1").html(name1);
        $("#icon2").html(`<lord-icon src="${img_2[rand2]}" delay="1000" trigger="loop" colors="primary:#ffffff,secondary:#e8b730" style="width:10rem;height:15vh; "></lord-icon>`);

        let img1 = ["village.png"]
        $("#name2").html(name2);
        $("#icon3").html(`<lord-icon src="${img_3[rand3]}" delay="1000" trigger="loop" colors="primary:#ffffff,secondary:#e8b730" style="width:10rem;height:15vh; "></lord-icon>`);

        $("#name3").html(name3);
        console.log(rand1)
        let paroles = paroles_1[rand1].charAt(0).toUpperCase() + paroles_1[rand1].slice(1) + "          \n" + paroles_2[rand2].charAt(0).toUpperCase() + paroles_2[rand2].slice(1) + "          \n" + paroles_3[rand3].charAt(0).toUpperCase() + paroles_3[rand3].slice(1);
        console.log(paroles)
        elementEl.innerHTML = paroles;
        typeWriter(elementEl);
    }


    function typeWriter(el) {
        const textArray = el.innerHTML.split('');
        el.innerHTML = '';

        textArray.forEach((letter, i) =>
            setTimeout(() => {

                if (letter == '*') {
                    parit = -parit;
                    letter = ""
                    console.log(parit)
                }
                else if (parit < 0) {
                    letter = "<em>" + letter + "<\em>"
                }
                (el.innerHTML += letter);
            }, 95 * i)

        );



    }




    document.getElementById('btn').onclick = card_random;



    $(document).on('click', '#btn', function () {

        var element_id = $(this);

        // Установим атрибут на кнопку disabled
        $(element_id).attr('disabled', 'disabled');
        $(element_id).html('Loading');
        $(element_id).css('background', '#1b1a1a');
        $(element_id).css('border', '#1b1a1a');


        // Через 5 секунд уберем этот атрибут
        setTimeout(function () {
            $(element_id).removeAttr('disabled');
            $(element_id).html('Click me');
            $(element_id).css('border', '1px solid #f2bc56');

        }, 15000); // Время в милисекундах

    });

});