    var arrays = {
        "1_Certain": [10, 50, 91],
        "1_Nearly Certain": [7, 35, 88],
        "1_Very Likely": [5, 25, 86],
        "1_Likely": [3, 15, 84],
        "1_50/50": [2, 10, 83],
        "1_Unlikely": [1, 5, 82],
        "1_Very Unlikely": [0, 1, 81],
        "1_Nearly Impossible": [0, 1, 81],
        "1_Impossible": [0, 1, 81],
    
        "2_Certain": [13, 65, 94],
        "2_Nearly Certain": [10, 50, 91],
        "2_Very Likely": [7, 35, 88],
        "2_Likely": [5, 25, 86],
        "2_50/50": [3, 15, 84],
        "2_Unlikely": [2, 10, 83],
        "2_Very Unlikely": [1, 5, 82],
        "2_Nearly Impossible": [0, 1, 81],
        "2_Impossible": [0, 1, 81],
    
        "3_Certain": [15, 75, 96],
        "3_Nearly Certain": [13, 65, 94],
        "3_Very Likely": [10, 50, 91],
        "3_Likely": [7, 35, 88],
        "3_50/50": [5, 25, 86],
        "3_Unlikely": [3, 15, 84],
        "3_Very Unlikely": [2, 10, 83],
        "3_Nearly Impossible": [1, 5, 82],
        "3_Impossible": [0, 1, 81],
    
        "4_Certain": [17, 85, 98],
        "4_Nearly Certain": [15, 75, 96],
        "4_Very Likely": [13, 65, 94],
        "4_Likely": [10, 50, 91],
        "4_50/50": [7, 35, 88],
        "4_Unlikely": [5, 25, 86],
        "4_Very Unlikely": [3, 15, 84],
        "4_Nearly Impossible": [2, 10, 83],
        "4_Impossible": [1, 5, 82],
    
        "5_Certain": [18, 90, 99],
        "5_Nearly Certain": [17, 85, 98],
        "5_Very Likely": [15, 75, 96],
        "5_Likely": [13, 65, 94],
        "5_50/50": [10, 50, 91],
        "5_Unlikely": [7, 35, 88],
        "5_Very Unlikely": [5, 25, 86],
        "5_Nearly Impossible": [3, 15, 84],
        "5_Impossible": [2, 10, 83],
    
        "6_Certain": [19, 95, 100],
        "6_Nearly Certain": [18, 90, 99],
        "6_Very Likely": [17, 85, 98],
        "6_Likely": [15, 75, 96],
        "6_50/50": [13, 65, 94],
        "6_Unlikely": [10, 50, 91],
        "6_Very Unlikely": [7, 35, 88],
        "6_Nearly Impossible": [5, 25, 86],
        "6_Impossible": [3, 15, 84],
    
        "7_Certain": [20, 99, 101],
        "7_Nearly Certain": [19, 95, 100],
        "7_Very Likely": [18, 90, 99],
        "7_Likely": [17, 85, 98],
        "7_50/50": [15, 75, 96],
        "7_Unlikely": [13, 65, 94],
        "7_Very Unlikely": [10, 50, 91],
        "7_Nearly Impossible": [7, 35, 88],
        "7_Impossible": [5, 25, 86],
    
        "8_Certain": [20, 99, 101],
        "8_Nearly Certain": [20, 99, 101],
        "8_Very Likely": [19, 95, 100],
        "8_Likely": [18, 90, 99],
        "8_50/50": [17, 85, 98],
        "8_Unlikely": [15, 75, 96],
        "8_Very Unlikely": [13, 65, 94],
        "8_Nearly Impossible": [10, 50, 91],
        "8_Impossible": [7, 35, 88],
    
        "9_Certain": [20, 99, 101],
        "9_Nearly Certain": [20, 99, 101],
        "9_Very Likely": [20, 99, 101],
        "9_Likely": [19, 95, 100],
        "9_50/50": [18, 90, 99],
        "9_Unlikely": [17, 85, 98],
        "9_Very Unlikely": [15, 75, 96],
        "9_Nearly Impossible": [13, 65, 94],
        "9_Impossible": [10, 50, 91]
    };    

    function TellMe() {
        try {

            //how to check if an element conatins word?
            if (document.getElementById('selected-q').innerHTML.includes('Yes/No')) {
                try{
                     // Concatenate the selected values
                    var CF_Odd = selectedCF + "_" + selectedOdd;

                    // Generate a random number between 1 and 100
                    var D10_tens = Math.floor(Math.random() * 10);
                    var D10_ones = Math.floor(Math.random() * 10);
                    var D100;
                    //Get the total
                    if(((D10_tens*10)+D10_ones) == 0) {
                        D100 = 100
                    }
                    else {
                        D100 = (D10_tens*10)+D10_ones
                    }
                    //Check for doubles
                    var isEvent = false;

                    if (D10_tens == D10_ones) {
                        if (D10_tens <= selectedCF) {
                            isEvent = true
                        }
                    }
                    else {
                        document.getElementById('event').innerText = ``
                    }

                    var specificArray = arrays[CF_Odd];

                    // Accessing elements inside "9_Impossible" array
                    var left = specificArray[0];
                    var mid = specificArray[1];
                    var right = specificArray[2];

                    var ans = 'I would say ';

                    if (D100 <= left) {
                        ans = ans+'Exceptionally Yes!'
                        exc_yesVoice();
                    }
                    else if (D100 > left && D100 <= mid) {
                        ans = ans+'Yes.'
                        yesVoice();
                    }
                    else if (D100 > mid && D100 < right) {
                        ans = ans+'No.'
                        noVoice();
                    }
                    else if (D100 >= right) {
                        ans = ans+'Exceptionally No..'
                        exc_noVoice();
                    }
                    else {
                        "..."
                    }

                    //call the event
                    if (isEvent == true) {
                        var script = document.createElement('script');
                        script.src = 'Meaning.js';
                        callOut();
                        encounterSound();
                    }

                    // Display the result
                    document.getElementById('answer').innerText = `${ans}`;
            
                    } 
                catch (error) {
                        document.getElementById('answer').innerText = "I can't tell you anything right now. ***you need to set Odd and Chaos Factor for Y/N questions.***";
                        nothingVoice()
                    }
            }

            else if (document.getElementById('selected-q').innerHTML.includes('Descr')) {
                try {
                    callOut();
                }
                catch (error) {
                    document.getElementById('answer').innerText = "I can't tell you anything right now.";
                    nothingVoice()
            }
            }

            else {
                document.getElementById('answer').innerText = "I can't tell you anything right now. **set Question first**";
            nothingVoice()
            };
         }
                
                
        catch (error) {
            document.getElementById('answer').innerText = "I can't tell you anything right now.";
            nothingVoice()
        }
           
    }