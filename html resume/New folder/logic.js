function initiate(){
    var saveButton = document.getElementById('save');
    var retrieveButton = document.getElementById('retrieve');
    saveButton.addEventListener('click' , saveItem);
    retrieveButton.addEventListener('click', saveretrieve);}

    function saveItem(){
        var key = document.getElementById('key').value;
        var value = document.getElementById('value').value;
        sessionStorage[key]=value;
    }

    function retrieveIteam()
    {
          var data = document.getElementById('data');
          var key = document.getElementById('key').value;
          var value = sessionStorage[key];
          data.innerHTML = '<div>' + key + ':' + value + '<div>';
    }