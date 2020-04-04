const getSleepHours = day => {
  switch (day){
    case 'Lundi':
      return 28
      break;
    case 'Mardi':
      return 7
      break;
    case 'Mercredi':
        return 9
        break;
    case 'Jeudi':
        return 5
        break;
    case 'Vendredi':
        return 6
        break;
  }
};
const getActualSleepHours = () => 
getSleepHours('Lundi') +                getSleepHours('Mardi') + getSleepHours('Mercredi') + 
getSleepHours('Jeudi') + 
getSleepHours('Vendredi');
//no need of return keyword nor {}
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 5;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("Tu dors le temps qu'il faut!");
    }
  else if (actualSleepHours > idealSleepHours) {
    console.log("Tu dors trop!!");
  }
  else {
    console.log("Va dormir un peu");
  }  
  
  };

calculateSleepDebt();