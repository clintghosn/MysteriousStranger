function setMeanings() {
    
    fcs = focus[(Math.floor(Math.random() * focus.length))];
    fcus = `<b>Focus: ${fcs}</b>`;

    a1 = meanings.Action1[(Math.floor(Math.random() * meanings.Action1.length))];
    a2 = meanings.Action2[(Math.floor(Math.random() * meanings.Action2.length))];
    action = `<b>Action</b>: <b class="spoiler">${a1}, ${a2}</b>`;

    d1 = meanings.Descriptor1[(Math.floor(Math.random() * meanings.Descriptor1.length))];
    d2 = meanings.Descriptor2[(Math.floor(Math.random() * meanings.Descriptor2.length))];
    descriptor = `<b>Descriptor</b>: <b class="spoiler">${d1}, ${d2}</b>`;

    l1 = meanings.Locations[(Math.floor(Math.random() * meanings.Locations.length))];
    l2 = meanings.Locations[(Math.floor(Math.random() * meanings.Locations.length))];
    loc = `<b>Location:</b> <b class="spoiler">${l1}, ${l2}</b>`;
    
    c1 = meanings.Characters[(Math.floor(Math.random() * meanings.Characters.length))];
    c2 = meanings.Characters[(Math.floor(Math.random() * meanings.Characters.length))];
    char = `<b>Character</b>: <b class="spoiler">${c1}, ${c2}</b>`;

    o1 = meanings.Objects[(Math.floor(Math.random() * meanings.Objects.length))];
    o2 = meanings.Objects[(Math.floor(Math.random() * meanings.Objects.length))];
    obj = `<b>Object</b>: <b class="spoiler">${o1}, ${o2}</b>`;
};

function callOut() {
    setMeanings();
    if (document.getElementById('selected-q').innerHTML.includes('Yes/No')) {
        scn='';
        document.getElementById('event').innerHTML = `Looks like an event has transpired..(${fcus}). 
        _${action} || _${descriptor} || _${loc} || _${char} || _${obj}`;
        }
    else if (document.getElementById('selected-q').innerHTML.includes('Descr.')) {
        scn='';
        document.getElementById('event').innerHTML = `One moment...`;
        document.getElementById('answer').innerHTML = ``;
        setTimeout(() => {
            document.getElementById('event').innerHTML = `**hover or click on details below** </br>
            _${action} || _${descriptor} </br> _${loc} || _${char} </br> _${obj}`;
            document.getElementById('answer').innerText ='';
        }, 2000);
        someDetailsVoice();
    }
};

function sceneAdj() {
    var sceneAdj;
    sceneAdj = sceneAdjustment[(Math.floor(Math.random() * sceneAdjustment.length))];

    setMeanings();

    if (scn == 'own' && d10%2 !=0){
        if (sceneAdj == 'Make 2 Adjustments') {
            var sceneAdj1;
            var sceneAdj2;
            sceneAdj1 = sceneAdjustment[(Math.floor(Math.random() * (sceneAdjustment.length-4)))];
            sceneAdj2 = sceneAdjustment[(Math.floor(Math.random() * (sceneAdjustment.length-4)))];
            sceneAdj = `${sceneAdj1} and ${sceneAdj2} </br>
            **ignore 1 if the same**`;
            document.getElementById('event').innerHTML = `${sceneAdj}`;
        }

        else {
            document.getElementById('event').innerHTML = `${sceneAdj}`;
        }
    }
    else if (scn == 'own' && d10%2 ==0){
        document.getElementById('event').innerHTML = `${fcus} <br/>
        _${action} || _${descriptor} || _${loc} || _${char} || _${obj}`;
    }
    else if (scn == 'premade'){
        document.getElementById('event').innerHTML = `${fcus} </br> _${action} || _${descriptor} </br> _${loc} || _${char} </br> _${obj}`;
    }
}

function describe(){
            setDesc();
            let eventHTML = '';
            if (adv_desc && Object.keys(adv_desc).length > 0) {

                for (let key in adv_desc) {
                    if (Array.isArray(adv_desc[key])) {
                        if (key == 'npcModifier') {

                            eventHTML += `The NPC is a/n: ${adv_desc[key].join(', ')}<br/>`;
                        }
                        else {

                            eventHTML += `${key}: ${adv_desc[key].join(', ')}<br/>`;
                        }
                    }
                }
                document.getElementById('answer').innerText ='One moment...';
                setTimeout(() => {
                    document.getElementById('event').innerHTML = eventHTML;
                    document.getElementById('answer').innerText ='**see details below**';
                }, 2000);
                someDetailsVoice();            
            }
            else {
                document.getElementById('answer').innerText ="**select at least 1 descriptor**";
                nothingVoice();
            }
}