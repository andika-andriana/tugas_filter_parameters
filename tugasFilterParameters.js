function panggilFilterParameters(value) {
  var arr = [{
      negara: 'Indonesia',
      benua: 'Asia'
    },
    {
      negara: 'Jerman',
      benua: 'Eropa'
    },
    {
      negara: 'Spanyol',
      benua: 'Eropa'
    },
    {
      negara: 'Korea',
      benua: 'Asia'
    },
    {
      negara: 'Portugal',
      benua: 'Eropa'
    },
    {
      negara: 'Amerika Serikat',
      benua: 'Amerika'
    }
  ];
  var filtering = arr.filter((item) => {
    return item.benua === (value);
  });
  console.log(filtering);
}

panggilFilterParameters('Asia');
panggilFilterParameters('Eropa');