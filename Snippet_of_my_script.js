//Method used to extract the attirbute object I want to manipulate
var temporaryHPObject = findObjs({_type:'attribute',_characterid:obj.get('represents'),name:tempHitPointsIn})[0];

//Methods used to attempt change the given attribute
    temporaryHPObject.set(tempHitPointsIn,HP.tmpremaining); //Does not change the value at all
    temporaryHPObject.set({current: HP.tmpremaining); //Always changes the value to 0 despite the variable HP.tmpremaining not being = 0
    
//Note that Hp.tmpremaining is an integer value and is a valid variable
