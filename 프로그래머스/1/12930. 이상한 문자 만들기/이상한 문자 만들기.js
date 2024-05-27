function solution(s) {
  let answer = '';
  let piece = s.split(' ');
  for (i = 0; i < piece.length; i++) {
    let x = piece[i].split('');
    for (j = 0; j < x.length; j++) {
      if (j % 2 == 0) {
        answer += x[j].toUpperCase();
      } else {
        answer += x[j].toLowerCase();
      }
    }
    if (i < piece.length - 1) {
      answer += ' ';
    }
  }
  return answer;
}

