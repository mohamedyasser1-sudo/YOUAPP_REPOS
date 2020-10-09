//Dropdown data
var ddData = [
    {
        text: "Facebook",
        value: 1,
        selected: false,
        description: "+213",
        imageSrc: "./assets/icons8-algeria-96.png"
    },
    {
        text: "Twitter",
        value: 2,
        selected: false,
        description: "+214",
        imageSrc: "https://i.imgur.com/kFAk2DX.png"
    },
    {
        text: "LinkedIn",
        value: 3,
        selected: true,
        description: "+215",
        imageSrc: "./assets/icons8-algeria-96.png"
    },
    {
        text: "Foursquare",
        value: 4,
        selected: false,
        description: "+20",
        imageSrc: "https://i.imgur.com/kFAk2DX.png"
    }
];





// Fill Dropdown List Start

    (function fillList() {                  
    var dynamicSelect = document.getElementById("countryCode");
     var listLen = JSON.stringify(ddData.length);
 var i;
 for (i = 0; i < listLen; i++) {
   var newOption = document.createElement("option");
   newOption.setAttribute('value', ddData[i].text);
   newOption.setAttribute('data-description', ddData[i].description);
   newOption.setAttribute('data-imagesrc', ddData[i].imageSrc);
                dynamicSelect.add(newOption);
}
           
    })(this);
 // Fill Dropdown List End


$('#countryCode').ddslick({
    width: "100%",

    imagePosition: "left",
    selectText: "Select your favorite social network",
    onSelected: function (data) {
        console.log(data);
//$('#selected').html(data.selectedData.value);

    }
});

