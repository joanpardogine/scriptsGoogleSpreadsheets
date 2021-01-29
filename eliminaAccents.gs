function eliminaAccents(text) {
  // https://gist.github.com/akora/51b2933a2554776d7144

//  var on_accent = 'öüóőúéáàűíÖÜÓŐÚÉÁÀŰÍçÇ';
//  var off_accent = 'ouooueaauiOUOOUEAAUIcC';


  var on_accent =  'àèìòùáéíóúäëïöüÀÈÌÒÙÁÉÍÓÚÄËÏÖÜçÇ';
  var off_accent = 'aeiouaeiouaeiouAEIOUAEIOUAEIOUcC';
  
  var idoff = -1,new_text = '';
  var lentext = text.toString().length -1

    for (i = 0; i <= lentext; i++) {
      idoff = on_accent.search(text.charAt(i));
      if (idoff == -1) {
        new_text = new_text + text.charAt(i);
      } else {
        new_text = new_text + off_accent.charAt(idoff);
    }

  }
  return new_text;
}
