// Un prompt s'affiche avec la question suivante
var num=prompt("De quel nombre veux-tu calculer la factorielle ?");

var fact=1;

for(var i=num; i>=1; i--);

{
  fact = fact * i
}

console.log("Le résultat est :" +fact);