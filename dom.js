const allTag = (element) => {
  let balises = [],
    c = {};

  const _explore = (a) => {
    for (let c of a.children) balises.push(c.nodeName), _explore(c);
  };

  _explore(element);

  // console.table(balises);

  const _getWordCnt = (a) => {
    return a.reduce((acc, balise) => {
      if (!acc.has(balise)) acc.set(balise, 0);
      acc.set(balise, acc.get(balise) + 1);
      return acc;
    }, new Map());
  };
  const map = _getWordCnt(balises);

  console.table(map);

  const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  return mapSort;
};

let a = allTag(document.body);

document.body.insertAdjacentHTML("beforeend", `<hr>`);
for (let [balise, nb] of a) {
  //console.log(`la balise ${balise} apparaît ${nb} fois `);
  document.body.insertAdjacentHTML(
    "beforeend",
    `<p> la balise ${balise} apparaît ${nb} fois `
  );
}
