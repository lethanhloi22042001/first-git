//  // viết hàm tìm ra số nguyên tố
//  // số nguyên tố là số chia hết cho chính nó
   //let array = [1,5, 7,8,9 ,15,8];
   
   let item1 = [
      { name: 'Edward1' },
      { class: '1', },
      { date: '22-04-2001' },
      { ager:  25 },
    ];
    let item2 = [
      { name: 'Edward2' },
      { class: '2', },
      { date: '22-04-2001' },
      { ager:  22 },
    ];
    let item3 = [
      { name: 'Edward3' },
      { class: '3', },
      { date: '22-04-2001' },
      { ager:  23 },
    ];

     aitems.sort(function (a, b, c) {
      return a.ager - b.ager - c.ager;
    });