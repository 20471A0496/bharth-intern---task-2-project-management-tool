document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
  
    // Get the values from the input fields
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
  
    // Create a new project item
    var projectItem = document.createElement('div');
    projectItem.innerHTML = '<h2>' + name + '</h2><p>' + description + '</p>';
  
    // Append the project item to the project list
    document.getElementById('projectList').appendChild(projectItem);
  
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
  });