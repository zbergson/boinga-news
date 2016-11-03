import Ember from 'ember';

export function formatMaritian(params/*, hash*/) {
  let wordChange = params.toString();
  let martianTransformation = wordChange.split(' ');
  let martianArray = [];
  if (martianTransformation.length > 1) {
    
    martianTransformation.forEach(function(data) {
      
      if (data.length > 3) {
        let firstCharacter = data[0];
        let currentWordLength = data.length - 1;
        let lastCharacter = data[currentWordLength];
        if (firstCharacter === firstCharacter.toLowerCase()) {
            
          if (!!lastCharacter.match(/^[.,:!?]/) ) {
            data = "boinga" + lastCharacter;
            martianArray.push(data);
          }
          else {
            data = "boinga";
            martianArray.push(data);
          }
            
        }

        if (firstCharacter === firstCharacter.toUpperCase()) {
          if (!!lastCharacter.match(/^[.,:!?]/) ) {
            data = "Boinga" + lastCharacter;
            martianArray.push(data);
          }
          else {
            data = "Boinga";
            martianArray.push(data);
          }
        }

      }

      else {
        martianArray.push(data);
      }
    })
    
    let makeSureFirstCapitalized = martianArray[0];
    if (makeSureFirstCapitalized.length > 3) {
      martianArray[0] = "Boinga";
    }

    return martianArray.join(" ");
  }

  else {
    
    if (params.length > 3) {
      params = ''
      return params
    }

    else {
      params = '';
      return params;
    }
  }
  
}

export default Ember.Helper.helper(formatMaritian);
