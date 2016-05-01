document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 49:
      window.location = window.location.origin + '/index.html';
      break;
    case 50:
      window.location = window.location.origin + '/formation.html';
      break;
    case 51:
      window.location = window.location.origin + '/experience.html';
      break;
    case 52:
      window.location = window.location.origin + '/competences.html';
      break;
  }

  return true;
};
