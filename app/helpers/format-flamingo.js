import Ember from 'ember';

export function formatFlamingo(params/*, hash*/) {
  let firstParams = params[0];
  let wordChange = firstParams.toString();
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
            data = "flamingo" + lastCharacter;
            martianArray.push(data);
          }
          else {
            data = "flamingo";
            martianArray.push(data);
          }
            
        }

        if (firstCharacter === firstCharacter.toUpperCase()) {
          if (!!lastCharacter.match(/^[.,:!?]/) ) {
            data = "Flamingo" + lastCharacter;
            martianArray.push(data);
          }
          else {
            data = "Flamingo";
            martianArray.push(data);
          }
        }

      }

      else {
        martianArray.push(data);
      }
    });
    
    let makeSureFirstCapitalized = martianArray[0];
    if (makeSureFirstCapitalized.length > 3 && params[1] === 'text') {
      martianArray[0] = "Flamingo";
      martianArray.shift();
    }

    return martianArray.join(" ");
  }

  else {
    
    if (params.length > 3) {
      params = '';
      return params;
    }

    else {
      params = '';
      return params;
    }
  }
  
}

export default Ember.Helper.helper(formatFlamingo);
