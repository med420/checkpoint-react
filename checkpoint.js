function inverserChaine(texte) {
  return texte.split('').reverse().join('');
}



function compterCaracteres(texte) {
  return texte.length;
}



function majusculesPremiereLettre(phrase) {
  return phrase
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}




function trouverMax(tableau) {
  return Math.max(...tableau);
}





function trouverMin(tableau) {
  return Math.min(...tableau);
}




function sommeTableau(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}




function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}
// Exemple : filtrerTableau([1, 2, 3, 4], x => x % 2 === 0) ➜ [2, 4]




function factorielle(n) {
  if (n <= 1) return 1;
  return n * factorielle(n - 1);
}




function estPremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}



function suiteFibonacci(n) {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo.slice(0, n);
}
