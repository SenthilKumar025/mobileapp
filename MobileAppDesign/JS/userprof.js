
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePic').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById('editIcon').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('fileInput').click();
});


document.getElementById('editNameIcon').addEventListener('click', function(event) {
    event.preventDefault(); 
    const profileName = document.getElementById('profileName');
    const nameInput = document.getElementById('nameInput');


    if (nameInput.style.display === 'none') {
        nameInput.style.display = 'inline';
        profileName.style.display = 'none';
        nameInput.focus();
    } else {
        profileName.innerText = nameInput.value; 
        nameInput.style.display = 'none';
        profileName.style.display = 'inline';
    }
});


document.getElementById('saveButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    alert("Profile saved successfully!");
    document.getElementById('profileForm').submit();
});